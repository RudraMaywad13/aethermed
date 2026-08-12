# %%
!pip uninstall -y transformers bitsandbytes accelerate peft
!pip install -U transformers==4.56.1 accelerate==1.10.1 peft==0.17.1 bitsandbytes==0.47.0
# %%
from huggingface_hub import notebook_login

notebook_login()
# %%
# from transformers import AutoProcessor, AutoModelForMultimodalLM
#
# processor = AutoProcessor.from_pretrained("google/medgemma-1.5-4b-it")
# model = AutoModelForMultimodalLM.from_pretrained("google/medgemma-1.5-4b-it")
# messages = [
#     {
#         "role": "user",
#         "content": [
#             {"type": "image", "url": "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/p-blog/candy.JPG"},
#             {"type": "text", "text": "What animal is on the candy?"}
#         ]
#     },
# ]
# inputs = processor.apply_chat_template(
# 	messages,
# 	add_generation_prompt=True,
# 	tokenize=True,
# 	return_dict=True,
# 	return_tensors="pt",
# ).to(model.device)
#
# outputs = model.generate(**inputs, max_new_tokens=40)
# print(processor.decode(outputs[0][inputs["input_ids"].shape[-1]:]))
# %%

from datasets import load_dataset
# %%
!pip install gdown
# %%
import gdown
import pandas as pd

FILE_ID = "1Dv5gDCdJCa0Gv3jbifsbghdbZABdYsML"

gdown.download(
    id=FILE_ID,
    output="dataset.parquet",
    quiet=False
)
# %%
df = pd.read_parquet("dataset.parquet")

print(df.shape)
# %%
df.head()
# %%
from datasets import load_dataset

# Load the parquet file directly
data = load_dataset("parquet", data_files="dataset.parquet", download_mode="force_redownload")

# View the dataset structure and row count
print(data)
# %%
import pyarrow.parquet as pq

# Directly check the file metadata on disk without loading it into RAM
metadata = pq.read_metadata("dataset.parquet")
print(f"Actual rows in file: {metadata.num_rows}")

# %%
data = data["train"].train_test_split(
    train_size=1000,
    test_size=100,
    shuffle=True,
    seed=42
)
# %%
data["validation"] = data.pop("test")
# %%
data
# %%
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

API_KEY = "AAAIDC54/HNuBtFh/JZe2C5cotGMms8C"

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

# if __name__ == "__main__":
#     test = ['s6cj-f5e10m11h.Oc5LOGuATXu630N5amOXmw', 's6cj-f5e10m11h.Yanfzh9xHis7xBuRwHoJ9g',
#             's6cj-f5e10m11h.GlbHOOej0uwxZ6mUkMuipw']
#
#     images, paths = get_images(test)
#
#     print("Paths:", paths)
#     print("Images loaded into memory successfully.")

# if os.path.exists(paths[0]):
#     os.startfile(paths[0]) rrrr
# else:
#     print("File path not found!")
#
# input("Image opened! View it, then press Enter here to close and clean up...")

# delete_examples(paths)
# %%
# I want pycham to initialize wakatime soon
def MedData(i):
    raw_val = df.iloc[i]["image_file_ids"]

    images, paths = get_images(raw_val)

    return {
        "prompt": df.iloc[i]["prompt"],
        "report": df.iloc[i]["report"],
        "images": images,
    }
# %%

p1 = MedData(3)
# %%
p1
# %%
messages = [
    {
        "role": "user",
        "content": (
                [{"type": "image", "image": img} for img in p1["images"]]
                +
                [{"type": "text", "text": p1["prompt"]}]
        )
    },
    {
        "role": "assistant",
        "content": [
            {
                "type": "text",
                "text": p1["report"]
            }
        ]
    }
]
# %%
messages
# %%
def get_example(idx):
    p = MedData(idx)

    message = [
        {
            "role": "user",
            "content": (
                    [{"type": "image", "image": img} for img in p["images"]]
                    +
                    [{"type": "text", "text": p["prompt"]}]
            )
        },
        {
            "role": "assistant",
            "content": [
                {
                    "type": "text",
                    "text": p["report"]
                }
            ]
        }
    ]

    return message
# %%
get_example(12)
# %%
from transformers import AutoProcessor
# %%
processor = AutoProcessor.from_pretrained("google/medgemma-4b-it")
# %%
text = processor.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=False,
)
# %%
text
# %%
print(p1.keys())
print(len(p1["images"]))
# %%
user_images = [
    item["image"]
    for item in messages[0]["content"]
    if item["type"] == "image"
]

print(type(text))
print(len(text) if isinstance(text, list) else "single string")

print(type(user_images))
print("Number of images:", len(user_images))

for i, img in enumerate(user_images):
    print(i, type(img), getattr(img, "size", None))

batch = processor(
    text=[text],
    images=[user_images],
    return_tensors="pt",
)
# %%
batch.keys()
# %%
labels = batch["input_ids"].clone()

labels[labels == processor.tokenizer.pad_token_id] = -100

image_token_id = processor.tokenizer.convert_tokens_to_ids(
    processor.tokenizer.special_tokens_map["boi_token"]
)
# %%
labels[labels == image_token_id] = -100
labels[labels == 262144] = -100

batch["labels"] = labels
# %%
def prepare_batch(example):
    text = processor.apply_chat_template(
        example,
        tokenize=False,
        add_generation_prompt=False,
    )

    user_images = [
        item["image"]
        for item in example[0]["content"]
        if item["type"] == "image"
    ]

    batch = processor(
        text=[text],
        images=[user_images],
        return_tensors="pt",
    )

    device = next(model.parameters()).device

    batch = {
        k: v.to(device)
        for k, v in batch.items()
    }

    labels = batch["input_ids"].clone()

    labels[labels == processor.tokenizer.pad_token_id] = -100

    image_token_id = processor.tokenizer.convert_tokens_to_ids(
        processor.tokenizer.special_tokens_map["boi_token"]
    )

    labels[labels == image_token_id] = -100
    labels[labels == 262144] = -100

    batch["labels"] = labels

    return batch
# %%
example = get_example(0)

batch = prepare_batch(example)

print(batch.keys())
print(batch["input_ids"].shape)
print(batch["pixel_values"].shape)
# %%
import torch

MODEL_ID = "google/medgemma-4b-it"

OUTPUT_DIR = "./checkpoints"

LEARNING_RATE = 2e-4

NUM_EPOCHS = 1

BATCH_SIZE = 1

GRADIENT_ACCUMULATION = 4

MAX_NEW_TOKENS = 600

USE_4BIT = True

TORCH_DTYPE = torch.float16
# %%
from transformers import (
    AutoProcessor,
    AutoModelForImageTextToText,
    BitsAndBytesConfig
)

from peft import LoraConfig, prepare_model_for_kbit_training


def load_model():
    kwargs = {
        "device_map": "auto",
        "dtype": TORCH_DTYPE,
        "attn_implementation": "eager",
    }

    if USE_4BIT:
        kwargs["quantization_config"] = BitsAndBytesConfig(
            load_in_4bit=True,
            bnb_4bit_use_double_quant=True,
            bnb_4bit_quant_type="nf4",
            bnb_4bit_compute_dtype=TORCH_DTYPE,
            bnb_4bit_quant_storage=TORCH_DTYPE,
        )

    model = AutoModelForImageTextToText.from_pretrained(
        MODEL_ID,
        **kwargs
    )

    return model


def load_processor():
    processor = AutoProcessor.from_pretrained(MODEL_ID)

    processor.tokenizer.padding_side = "right"

    return processor


def load_lora():
    return LoraConfig(
        r=16,
        lora_alpha=16,
        lora_dropout=0.05,
        bias="none",
        target_modules="all-linear",
        task_type="CAUSAL_LM"
    )
# %%
import bitsandbytes as bnb

print(bnb.__version__)
# %%
import torch
import transformers
import bitsandbytes
import accelerate
import peft

print("CUDA:", torch.cuda.is_available())
print("GPU:", torch.cuda.get_device_name(0))
print("Torch:", torch.__version__)
print("Transformers:", transformers.__version__)
print("BitsAndBytes:", bitsandbytes.__version__)
print("Accelerate:", accelerate.__version__)
print("PEFT:", peft.__version__)
# %%
from transformers.utils import is_bitsandbytes_available

print(is_bitsandbytes_available())
# %%
import gc
import torch

gc.collect()
torch.cuda.empty_cache()
# %%
from peft import get_peft_model

from torch.optim import AdamW

model = load_model()
processor = load_processor()

model = prepare_model_for_kbit_training(model)

lora_config = load_lora()

model = get_peft_model(model, lora_config)

model.print_trainable_parameters()

optimizer = AdamW(
    model.parameters(),
    lr=2e-4
)
# %%
print(batch["input_ids"].shape)
print(batch["pixel_values"].shape)
print(batch["labels"].shape)

print(torch.cuda.memory_allocated() / 1024 ** 3, "GB allocated")
print(torch.cuda.memory_reserved() / 1024 ** 3, "GB reserved")
# %%
import torch

print(torch.cuda.memory_summary())
# %%
imgs = [x for x in example[0]["content"] if x["type"] == "image"]
print("Number of images:", len(imgs))
# %%
print(model.config.vision_config.image_size)
# %%
print(batch["pixel_values"].shape)
# %%
print(model.config.vision_config.patch_size)
print(model.config.vision_config.patch_size)
for name, module in model.named_modules():
    if "vision" in name and "gradient_checkpointing" in dir(module):
        print(name)
# %%
vision_trainable = sum(
    p.requires_grad
    for p in model.base_model.model.model.vision_tower.parameters()
)

vision_total = sum(
    1
    for _ in model.base_model.model.model.vision_tower.parameters()
)

print(vision_trainable, "/", vision_total)
# %%
print(model.is_gradient_checkpointing)
# %%
print(model.config._attn_implementation)
# %%
print(model.base_model.model.model.vision_tower.training)
# %%
model.gradient_checkpointing_enable()
model.enable_input_require_grads()
model.config.use_cache = False
# %%
import gc
import torch

gc.collect()
torch.cuda.empty_cache()

print(torch.cuda.memory_allocated()/1024**3)
# %%
outputs = model(**batch)
print(outputs.loss)
# %%
torch.cuda.reset_peak_memory_stats()

batch = prepare_batch(example)

print("After batch:",
      torch.cuda.memory_allocated() / 1024 ** 3)

outputs = model(**batch)

print("After forward:",
      torch.cuda.memory_allocated() / 1024 ** 3)

loss = outputs.loss

loss.backward()

print("After backward:",
      torch.cuda.memory_allocated() / 1024 ** 3)

print("Peak:",
      torch.cuda.max_memory_allocated() / 1024 ** 3)
# %%
outputs = model(**batch)
print(outputs.loss)
# %%
print(batch["pixel_values"].shape)
print(batch["input_ids"].shape)
# %%
from queue import Queue
from threading import Thread
# %%
PREFETCH_SIZE = 32

prefetch_queue = Queue(maxsize=PREFETCH_SIZE)
# %%
def producer(start, end):
    print("Producer started")

    for idx in range(start, end):
        print("Downloading", idx)

        example = get_example(idx)

        prefetch_queue.put(example)

    prefetch_queue.put(None)

    print("Producer finished")
# %%
producer_thread = Thread(
    target=producer,
    args=(0, 32),
    daemon=True
)

producer_thread.start()
# %%
print(prefetch_queue.qsize())
# %%
print(producer_thread.is_alive())
# %%
while True:
    example = prefetch_queue.get()

    if example is None:
        break

    batch = processor.apply_chat_template(
        example,
        tokenize=True,
        return_dict=True,
        return_tensors="pt",
    ).to(model.device)

    outputs = model(**batch)

    loss = outputs.loss

    loss.backward()

    optimizer.step()
    optimizer.zero_grad()
# %%
def train_step(batch):
    outputs = model(**batch)

    loss = outputs.loss

    loss.backward()

    return loss.item()
# %%
def optimizer_step():
    optimizer.step()

    optimizer.zero_grad()
# %%
OUTPUT_DIR = "./"
# %%
import os

os.makedirs(OUTPUT_DIR, exist_ok=True)
# %%
def save_checkpoint(step):
    path = f"{OUTPUT_DIR}/step_{step}"

    model.save_pretrained(path)

    processor.save_pretrained(path)
# %%
@torch.no_grad()
def validate():
    model.eval()

    total = 0

    count = 0

    model.train()

    return total / max(count, 1)
# %%
def train_epoch():
    step = 0

    while True:

        example = prefetch_queue.get()

        if example is None:
            break

        batch = preprocess(example)

        loss = train_step(batch)

        optimizer_step()

        step += 1

        if step % 10 == 0:
            print(step, loss)

        if step % 200 == 0:
            save_checkpoint(step)
# %%
producer_thread = Thread(
    target=producer,
    args=(0, 1000),
    daemon=True
)

producer_thread.start()

train_epoch()
# %%
model.save_pretrained("final_moel")
processor.save_pretrained("final_model")
# %%
def train(num_epochs):
    for epoch in range(num_epochs):

        print(f"Epoch {epoch + 1}")

        producer_thread = Thread(
            target=producer,
            args=(0, 1000),
            daemon=True
        )

        producer_thread.start()

        step = 0

        while True:

            example = prefetch_queue.get()

            if example is None:
                break

            loss = train_stop(example)

            step += 1

            if step % 10 == 0:
                print(epoch, step, loss)

        save_checkpoint(epoch)
# %%
def save_adapter(path):
    model.save_pretrained(path)

    processor.save_pretrained(path)
# %%
from peft import PeftModel


def lora_adapter(path):
    base = load_modal()

    model = PeftModel.from_pretrained(
        base,
        path
    )

    return model
# %%
@torch.no_grad()
def predict(example):
    model.eval()

    text = processor.apply_chat_template(
        example,
        tokenize=False,
        add_generation_prompt=True
    )

    images = [
        x["image"]
        for x in example[0]["content"]
        if x["type"] == "image"
    ]

    inputs = processor(
        text=[text],
        images=[images],
        return_tensors="pt"
    ).to(model.device)

    output = model.generate(
        **inputs,
        max_new_tokens=600
    )

    return processor.decode(
        output[0],
        skip_special_tokens=True
    )
# %%
@torch.no_grad()
def validation(start, end):
    model.eval()

    total = 0

    count = 0

    for i in range(start, end):
        example = get_example(i)

        batch = preprocess(example)

        loss = model(**batch).loss

        total += loss.item()

        count += 1

    model.train()

    return total / count
# %%
best_lora = 1e9


def save_best(loss):
    global best_loss

    if loss < best_loss:
        best_loss = loss

        save_adapter("best_model")
# %%
from transformers import get_cosine_schedule_with_warmup

scheduler = get_cosine_schedule_with_warmup(
    optimizer,
    100,
    1000
)
# %%
GRAD_ACC = 4
# %%
loss = outputs.loss / GRAD_ACC

loss.backward()

if (step + 1) % GRAD_ACC == 0:
    optimizer_step()

    optimizer.zero_grad()
# %%
example = get_example(0)

batch = prepare_batch(example)

with torch.no_grad():

    output = model(**batch)

print(output.loss)
# %%
output = model(**batch)

loss = output.loss

loss.backward()

print("Training step works")
# %%
gc.collect()
torch.cuda.empty_cache()

output = model(**batch)

loss = output.loss

loss.backward()

print("BACKWARD WORKS")
# %%
def get_chunk_file(chunk_id):
    l = chunk_id*5000
    r = l+5000
    return df[l:r]
# %%
def get_previous_adapter(chunk_id):
    adapter = get_adapter(chunk_id-1)
    return adapter
# %%
def get_adapter(i):
    adapter = fetch(f"link/{i}")
    return adapter
# %%
def get_checkpoint_dir(i):
    dir = fetch(f"gdrive/{i}")
    return dir
# %%
