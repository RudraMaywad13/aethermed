# AetherMed

![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Express.js](https://img.shields.io/badge/Express.js-Backend-lightgrey)
![FastAPI](https://img.shields.io/badge/FastAPI-AI-green)
![PyTorch](https://img.shields.io/badge/PyTorch-Deep%20Learning-red)

## AetherMed is an mordern ai for assisting radiolgists everyday to analyze chest x-rays faster

### **every year radiolgist face increasing workload AetherMed solves this problem by reducing the time for docters to analyze chest x-rays**

### currently AetherMed is in it's first version it is capable of reviewing and giving insights about the x-ray

### The future version are gonna include Grad-CAM, full-detailed report generation, integration with current docter's workflow, etc.

## How to deploy - I have used vercel to deploy next.js frontend and render to deploy backend and model serverlessly.

## Tech Stack :-
- Next.js - for fronend
- fastapi - for api and model hosting
- **pytorch, pandas, seaborn, huggging_face transformers, torchrun** - for ai part
- tailwind css - for styling
- Express.js - for backend, auth, db etc. (future versions)

## Current mechanism :-
1) The user uploads an x-ray and want to analyze it.
2) The request then pings the api hosted on render
3) render then loads our quantisized model
4) Model predicts and data is sended back to frontend

### note: currently the we only have the frontend dealing with all this but in future I want to make an express based backend which handels - auth, db, api call, integration with other platforms etc.
