# NestJS GraphQL Authentication

## 📌 Description
Ce projet implémente une API d'authentification basée sur **NestJS**, **GraphQL**, **JWT** et **PostgreSQL**.
Il permet aux utilisateurs de s'inscrire, se connecter et d'accéder à des ressources sécurisées.

## 👨‍💻 Auteur
- **Nom** : SANDANIAINA TSINJO NANTOSOA
- **GitHub** : [TsinjoNantosoa](https://github.com/TsinjoNantosoa)

---

## 📦 Installation et Configuration

### 1️⃣ Prérequis
- **Node.js** (version 18+ recommandée)
- **PostgreSQL** (installé et en cours d'exécution)
- **NestJS CLI**

### 2️⃣ Cloner le projet
```bash
git clone https://github.com/TsinjoNantosoa/nestjs-graphql-auth.git
cd nestjs-graphql-auth
```

### 3️⃣ Installer les dépendances
```bash
npm install
```

### 4️⃣ Créer un fichier `.env`
Crée un fichier `.env` à la racine du projet et ajoute :
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=ton_mot_de_passe
DB_NAME=loginconnexion
JWT_SECRET=ton_secret_jwt
```

### 5️⃣ Lancer la base de données PostgreSQL
Assure-toi que PostgreSQL est démarré et que la base `loginconnexion` est créée.

### 6️⃣ Démarrer l'application
```bash
npm run start:dev
```

---

## 🚀 Fonctionnalités
- **🔐 Authentification avec JWT** (Connexion, Inscription, Protection des routes)
- **📊 GraphQL** avec schéma généré automatiquement
- **📄 TypeORM** pour l'intégration avec PostgreSQL

---

## 🔥 Endpoints GraphQL
L'API utilise **GraphQL**. Accède à l'interface GraphQL Playground :
- **URL** : `http://localhost:3000/graphql`

### 🎯 Exemple de requêtes

#### 🔹 Inscription (`signup`)
```graphql
mutation {
  signup(input: {email: "user@example.com", password: "password123"}) {
    id
    email
  }
}
```

#### 🔹 Connexion (`login`)
```graphql
mutation {
  login(input: {email: "user@example.com", password: "password123"}) {
    access_token
  }
}
```

#### 🔹 Récupérer les utilisateurs (protégé par JWT)
```graphql
query {
  users {
    id
    email
  }
}
```
Ajoute un `Authorization: Bearer <TOKEN>` dans les **Headers**.

---

## 📌 Commandes utiles

### Générer un module
```bash
nest generate module modules/nom-du-module
```

### Générer un service
```bash
nest generate service modules/nom-du-service
```

### Générer un resolver GraphQL
```bash
nest generate resolver modules/nom-du-resolver
```

---

## 📜 Licence
Ce projet est sous licence **MIT**.

---

## ⭐ Contact
Si tu as des questions, n'hésite pas à me contacter sur **GitHub** : [TsinjoNantosoa](https://github.com/TsinjoNantosoa). 😊

