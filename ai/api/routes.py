from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import os
import tempfile
from gradio_client import Client, handle_file
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()
client = Client(os.getenv("CLIENT"))
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://aethermed-one.vercel.app",],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def predict_medical_image(
    image: UploadFile = File(...),
    prompt: str = Form(...)
):
    if image.content_type not in ["image/png", "image/jpeg", "image/jpg"]:
        raise HTTPException(
            status_code=400,
            detail="Invalid file format. Only .png, .jpg, and .jpeg files are allowed."
        )

    try:
        image_bytes = await image.read()
        pil_image = Image.open(io.BytesIO(image_bytes))
        pil_image.verify()
        suffix = os.path.splitext(image.filename)[1] or ".jpg"
        with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as temp_img:
            temp_img.write(image_bytes)
            temp_path = temp_img.name

        try:
            result = client.predict(
                message={
                    "text": prompt,
                    "files": [handle_file(temp_path)]
                },
                param_2="You an expert radiolgist you have to handle this paitent.",
                param_3=2048,
                api_name="/chat"
            )
        finally:
            if os.path.exists(temp_path):
                os.remove(temp_path)

        return {
            "status": "success",
            "filename": image.filename,
            "analysis": result
        }

    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=f"Failed to process image: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
