# 🩺 AetherMed

> **An Open-Source Multimodal AI Radiology Assistant**
>
> **Building the next generation of explainable multimodal AI for chest X-ray interpretation.**

![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Express.js](https://img.shields.io/badge/Express.js-Backend-lightgrey)
![FastAPI](https://img.shields.io/badge/FastAPI-AI-green)
![PyTorch](https://img.shields.io/badge/PyTorch-Deep%20Learning-red)

---

# 🌍 Vision

Every year, millions of chest X-rays are interpreted worldwide. Radiologists face increasing workloads while healthcare systems strive to deliver faster, more accurate diagnoses.

**AetherMed** is an open-source multimodal AI platform designed to assist—not replace—healthcare professionals. By combining computer vision, biomedical language models, and modern software engineering, AetherMed aims to provide explainable, trustworthy AI assistance for chest X-ray interpretation.

Our long-term vision is to build a transparent, research-driven platform that bridges cutting-edge artificial intelligence with real-world clinical workflows while remaining accessible to researchers, developers, and students.

---

# 💡 Why AetherMed?

Medical imaging is one of the most impactful applications of artificial intelligence.

AetherMed was created to explore how modern deep learning, biomedical language models, and scalable software engineering can work together to support clinical decision-making.

Rather than replacing radiologists, AetherMed focuses on augmenting their workflow through explainable predictions, multimodal reasoning, and intuitive software.

---

# ✨ Features

## Current

* Modern web application
* Secure authentication
* Chest X-ray upload
* AI inference pipeline
* Responsive dashboard
* REST API architecture
* Modular microservice design

## Planned

* Chest X-ray disease classification
* Explainable AI (Grad-CAM)
* BioBERT clinical understanding
* Multimodal reasoning
* AI-generated radiology reports
* DICOM support
* Clinical timeline
* Multi-study comparison
* Model confidence visualization

---

# 🏗 Architecture

```text
                    User
                      │
                      ▼
              Next.js Frontend
                      │
                      ▼
             Express Backend API
                      │
                      ▼
            FastAPI AI Microservice
                      │
                      ▼
      Vision + Biomedical Language Models
                      │
                      ▼
               Clinical Prediction
```

The project is intentionally designed as a microservice architecture. The frontend is responsible for user interaction, the Express backend manages authentication and application logic, while the FastAPI service handles all AI inference independently.

This separation allows the AI models to evolve without affecting the web platform.

---

# 🧠 Development Roadmap

## 🚀 Version 1 — Web Platform

* Modern frontend
* Authentication
* Dashboard
* Image upload workflow
* Express backend
* FastAPI AI service
* Mock AI predictions
* End-to-end API communication

---

## 🧠 Version 2 — Vision AI

* CheXpert Plus integration
* PyTorch training pipeline
* Chest X-ray disease classification
* Model evaluation
* Real AI inference
* Performance optimization

---

## 🧬 Version 3 — Multimodal AI

* BioBERT integration
* Clinical notes understanding
* Vision-language fusion
* Explainable AI (Grad-CAM)
* AI-generated radiology reports
* Clinical reasoning

---

# 🛠 Tech Stack

## Frontend

* Next.js
* React
* JavaScript
* Tailwind CSS

---

## Backend

* Express.js
* Node.js
* NextAuth Authentication
* Multer
* Axios

---

## AI Service

* FastAPI
* PyTorch
* Hugging Face Transformers
* BioBERT
* OpenCV
* NumPy
* Pandas
* Uvicorn

---

## Dataset

* CheXpert Plus (Stanford AIMI)

---

# 📂 Project Structure

```text
aethermed/

├── ai/
│   ├── api/
│   ├── datasets/
│   ├── models/
│   ├── training/
│   ├── inference/
│   ├── evaluation/
│   ├── notebooks/
│   └── utils/
│
├── web/
│   ├── frontend/
│   └── backend/
│
├── docs/
├── data/
├── docker/
└── .github/
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/yourusername/aethermed.git
```

---

## Frontend

```bash
cd web/frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:3000
```

---

## Backend

```bash
cd web/backend
npm install
npm run dev
```

Runs on:

```
http://localhost:5000
```

---

## AI Service

```bash
conda env create -f environment.yml
conda activate aethermed-ai

cd ai

uvicorn api.main:app --reload --port 8000
```

Runs on:

```
http://localhost:8000
```

---

# 🎯 Mission

AetherMed is built around three principles.

### 🔍 Explainability

Artificial intelligence should explain its decisions rather than behave as a black box.

### 🌍 Accessibility

Advanced medical AI research should be open, reproducible, and available to everyone.

### 👨‍⚕️ Human-Centered Design

Artificial intelligence should assist clinicians—not replace them.

---

# 🔬 Research Areas

AetherMed explores multiple fields of artificial intelligence.

* Medical Computer Vision
* Deep Learning
* Biomedical NLP
* Explainable AI
* Vision-Language Models
* Clinical Decision Support Systems
* Multimodal Artificial Intelligence

---

# 📈 Development Progress

* 🚧 Version 1 — Web Platform
* ⬜ Version 2 — Vision AI
* ⬜ Version 3 — Multimodal AI

---

# ⚠ Disclaimer

AetherMed is an educational and research project.

It is **not** intended to diagnose, treat, cure, or prevent any disease and must never be used as a substitute for professional medical judgment.

Any predictions generated by the software should always be reviewed and interpreted by qualified healthcare professionals.

---

# 🤝 Contributing

Contributions, discussions, feature requests, and pull requests are welcome.

If you're interested in medical AI, computer vision, or biomedical NLP, feel free to contribute and help improve AetherMed.

---

# 📜 License

Released under the MIT License.

---

# 👨‍💻 Author

**Rudra Maywad**

> *Building open-source AI that empowers people through transparent, explainable, and accessible technology.*

If you find this project interesting, consider starring the repository and following its development.
