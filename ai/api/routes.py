from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import os
import tempfile
from gradio_client import Client, handle_file

app = FastAPI()

HF_TOKEN = "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"
client = Client("warshanks/medgemma-4b-it", hf_token=HF_TOKEN)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://aethermed-one.vercel.app",
    ],
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
