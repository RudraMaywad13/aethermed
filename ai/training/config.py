import pandas as pd
import numpy as np
# from accelerate.test_utils.scripts.external_deps.test_ds_alst_ulysses_sp import optimizer
from torch.utils.model_dump import hierarchical_pickle
import torch

np.random.seed(42)

index_a = ["alpha", "beta", "gamma", "delta"]
index_b = ["beta", "gamma", "delta", "epsilon"]

series_a = pd.Series([10,20,30,40], index=index_a)
series_b = pd.Series([100, 200, 300, 400], index=index_b)

aligned_sum = series_b + series_a
print(aligned_sum)

explicit_sum = series_a.add(series_b, fill_value=0)

print(explicit_sum)

departments = ["Engineering", "Logistics"]
years = [2025, 2026]

hierarchical_index = pd.MultiIndex.from_product(
        [departments, years]
)

x = torch.tensor([[1.0,2.0], [3.0, 4.0]])

w = torch.tensor([2.0],requires_grad=True)
b= torch.tensor([1.0], requires_grad=True)

y = w * x + b

loss = y.sum()
loss.backward()

print(w.grad)

import torch.nn as nn

class SimpleClassifier(nn.Module):
    def __init__(self):
        super().__init__()
        # Define a single linear hidden layer (Input size: 2, Output size: 4)
        self.hidden = nn.Linear(2, 4)
        # Define the output layer (Input size: 4, Output size: 1)
        self.output = nn.Linear(4, 1)
        # Non-linear activation function
        self.relu = nn.ReLU()

    def forward(self, x):
        # Pass input data sequentially through the layers
        x = self.hidden(x)
        x = self.relu(x)
        x = self.output(x)
        return x

# Instantiate the network
model = SimpleClassifier()
print(model)

X_train = torch.randn(100, 2)
Y_train = torch.randint(0, 2, (100, 1)).float()

model =SimpleClassifier()
criterion = nn.BCEWithLogitsLoss()
optimizer = optimizer.SDG(model.parameters(), lr=0.1)

epochs = 5
for epoch in range(epochs):
        optimizer.zero_grad()

        prediction = model(X_train)

        loss = criterion(prediction, Y_train)

        loss.backward()

        optimizer.step()

        print(f"Epoch {epoch+1}/{epochs} | Loss: {loss.item():.4f}")

