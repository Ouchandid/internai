# 🤖 InternAI — Plateforme Intelligente de Gestion des Stagiaires
![Python](https://img.shields.io/badge/Python-3.11-blue) 
![Django](https://img.shields.io/badge/Django-4.2-green) 
![React](https://img.shields.io/badge/React-18-cyan) 
![Docker](https://img.shields.io/badge/Docker-Compose-blue) 
![License](https://img.shields.io/badge/License-MIT-yellow)

## 📋 Description
InternAI est une plateforme web complète qui aide les entreprises à gérer leurs stagiaires et analyser leurs performances grâce au Machine Learning.

## 🎯 Fonctionnalités principales
- ✅ Gestion complète des stagiaires (CRUD)
- 📊 Score de performance calculé automatiquement par l'IA
- 🎯 Prédiction de recrutement (Random Forest)
- 💡 Recommandation de tâches personnalisées (KNN)
- 🖥️ Dashboard RH en temps réel
- 🔐 Authentification JWT (RH, Stagiaire, Admin)
- 📥 Export PDF des rapports d'évaluation

## 🛠️ Stack Technique

| Couche         | Technologies                       |
|----------------|-----------------------------------|
| Frontend       | React 18 + Chart.js + Recharts    |
| Backend        | Django 4.2 + Django REST Framework + JWT |
| Machine Learning | Scikit-learn + MLflow           |
| Base de données | PostgreSQL 15                     |
| DevOps         | Docker + Docker Compose           |

## 🚀 Installation

### Prérequis
- Docker & Docker Compose installés
- Git installé
- Python 3.11+ (pour dev local)
- Node.js 18+ (pour dev local)

### Lancement rapide (Docker)
```bash
# 1. Cloner le projet
git clone https://github.com/ouchandid/internai.git
cd internai

# 2. Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec tes paramètres

# 3. Lancer toute la stack
docker-compose up --build

# 4. Accéder à l'application
# Frontend : http://localhost:3000
# Backend (API Django) : http://localhost:8000/api/
# MLflow : http://localhost:5000
