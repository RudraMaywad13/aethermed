import os
from io import BytesIO
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path  # <-- Added for path handling

import requests
from PIL import Image
from dotenv import load_dotenv  # <-- Added to load your file

# ============================
# CONFIG
# ============================

# Automatically finds the 'utils' folder where this script lives
script_dir = Path(__file__).resolve().parent

# Explicitly points to the .env file in the 'utils' folder
load_dotenv(dotenv_path=script_dir / ".env")

API_KEY = os.environ["REDIVIS_API_KEY"]

HEADERS = {
    "Authorization": f"Bearer {API_KEY}"
}

BASE_URL = "https://redivis.com/api/v1/rawFiles"

CACHE_DIR = "./cache"

MAX_WORKERS = 4

TIMEOUT = 30

os.makedirs(CACHE_DIR, exist_ok=True)


# ============================
# DOWNLOAD ONE IMAGE
# ============================

def download_image(file_id: str) -> str:
    """
    Downloads one image if not cached.
    Returns the local cache path.
    """

    cache_path = os.path.join(CACHE_DIR, f"{file_id}.png")

    # Already downloaded
    if os.path.exists(cache_path):
        return cache_path

    url = f"{BASE_URL}/{file_id}"

    response = requests.get(
        url,
        headers=HEADERS,
        timeout=TIMEOUT,
    )

    response.raise_for_status()

    image = Image.open(BytesIO(response.content)).convert("RGB")

    image.save(cache_path)

    return cache_path


# ============================
# DOWNLOAD MULTIPLE
# ============================

def download_examples(file_ids):
    """
    Downloads multiple images in parallel.
    Returns list of cache paths.
    """

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        paths = list(executor.map(download_image, file_ids))

    return paths


# ============================
# LOAD IMAGES
# ============================

def load_images(paths):
    """
    Loads cached images as PIL Images.
    """

    images = []

    for path in paths:
        images.append(Image.open(path).convert("RGB"))

    return images


# ============================
# DELETE CACHE
# ============================

def delete_examples(paths):
    """
    Deletes downloaded images.
    """

    for path in paths:

        try:
            os.remove(path)
        except FileNotFoundError:
            pass


# ============================
# COMPLETE PIPELINE
# ============================

def get_images(file_ids):
    """
    Downloads and loads images.

    Returns
    -------
    images : List[PIL.Image]
    paths  : List[str]
    """

    paths = download_examples(file_ids)

    images = load_images(paths)

    return images, paths


# ============================
# TEST
# ============================

if __name__ == "__main__":
    test = ['s6cj-f5e10m11h.Oc5LOGuATXu630N5amOXmw', 's6cj-f5e10m11h.Yanfzh9xHis7xBuRwHoJ9g', 's6cj-f5e10m11h.GlbHOOej0uwxZ6mUkMuipw']

    images, paths = get_images(test)

    print("Paths:", paths)
    print("Images loaded into memory successfully.")

    if os.path.exists(paths[0]):
        os.startfile(paths[0])
    else:
        print("File path not found!")

    input("Image opened! View it, then press Enter here to close and clean up...")

    delete_examples(paths)
