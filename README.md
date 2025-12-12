# ✨ Sanbercode QA Automation – Dokumentasi Tugas

Repository ini berisi kumpulan tugas dan quiz dari program Sanbercode QA Automation.
Setiap folder memiliki fokus materi yang berbeda, mulai dari Authorization API, Intercept Network, hingga implementasi Page Object Model (POM).

## 📌 Daftar Isi

### 📂 Quiz 3 – Authorization
### 📂 Tugas 16 – Intercept
### 📂 Tugas 17 – Page-Object-Model-pom
### 📂 Tugas 18 – API Automation using Cypress
### 📦 Instalasi & Menjalankan Test
### 📘 Catatan

### Struktur Folder

```bash
📦cypress
 ┣ 📂downloads
 ┣ 📂e2e
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜api-job.cy.js
 ┃ ┃ ┗ 📜api-users.cy.js
 ┃ ┣ 📜authorization.cy.js
 ┃ ┣ 📜intercept.cy.js
 ┃ ┗ 📜pom.cy.js
 ┣ 📂fixtures
 ┃ ┣ 📜dataCustomer.json
 ┃ ┣ 📜dataUsers.json
 ┃ ┗ 📜example.json
 ┗ 📂support
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜LoginPage.js
 ┃ ┃ ┗ 📜ReqresApi.js
 ┃ ┣ 📜commands.js
 ┃ ┗ 📜e2e.js
```

## 📂 Quiz 3 – Authorization
Folder ini berisi script untuk menguji fitur Authorization API, menggunakan metode Bearer Token atau Basic Auth sesuai instruksi quiz.

### Isi File

```authorization.cy.js```

Berisi pengujian:

- Request login / mendapatkan token
- Menyimpan token ke environment Cypress
- Akses endpoint yang membutuhkan Authorization
- Validasi positive & negative case

## 📂 Tugas 16 – Intercept
Tugas ini berfokus pada penggunaan cy.intercept() untuk memanipulasi, mengamati, dan memvalidasi request/response Network API di UI.

### Isi File

```intercept.cy.js```

Script ini mencakup:

- Menangkap request API tertentu
- Stub / mock response
- Verifikasi status code
- Menunggu API selesai sebelum lanjut ke UI
- Validasi data API yang ditampilkan pada UI


## 📂 Tugas 17 – Page-Object-Model (POM)

Tugas ini mengimplementasikan struktur POM agar automation lebih bersih, maintainable, dan scalable.

### Isi File

```LoginPage.js```

Menyimpan seluruh selector & function login

#### Menyediakan reusable methods:

- popUpModalLogin
- fillPhone
- fillPassword
- login
- Validation message checker

``login.cy.js``

- Menguji positive test
- Negative test (invalid credential, empty field, wrong format, dsb)

## 📂 Tugas 18 - API Automation Testing
Tugas ini berfokus pada api testing

### Isi File

- ```api-users.cy.js```
- ```api-job.cy.js```

## 📦 Instalasi & Menjalankan Test

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Running with NPM
```bash
npm run cy:open
```

# 📘 Catatan
```Setiap tugas ditempatkan sesuai instruksi kelas. Dokumentasi ini dibuat agar reviewer dapat menavigasi repo dengan mudah.``` 