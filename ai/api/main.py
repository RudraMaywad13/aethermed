import requests

url = "http://127.0.0.1:8000/predict"

image_path = "img.jpg"

with open(image_path, "rb") as image:
    files = {
        "image": ("test.jpg", image, "image/jpeg")
    }

    data = {
        "prompt": "Describe this chest X-ray."
    }

    response = requests.post(url, files=files, data=data)

print("Status:", response.status_code)
print("Response:")
print(response.text)