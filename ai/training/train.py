from models.medgemma import load_model
from models.lora import get_lora_config
from models_trainer import get_training_args
from data.dataset import AetherMedDataset
from data.collator import AetherMedCollator

from trl import SFTTrainer

TRAIN_SIZE = 1000

OUTPUT_DIR = "."

