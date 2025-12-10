# ✨ Sanbercode QA Automation – Dokumentasi Tugas

Repository ini berisi kumpulan tugas dan quiz dari program Sanbercode QA Automation.
Setiap folder memiliki fokus materi yang berbeda, mulai dari Authorization API, Intercept Network, hingga implementasi Page Object Model (POM).

## 📌 Daftar Isi

### 📂 Quiz 3 – Authorization
### 📂 Tugas 16 – Intercept
### 📂 Tugas 17 – Page-Object-Model-pom
### 📦 Instalasi & Menjalankan Test
### 📘 Catatan

## 📂 Quiz 3 – Authorization
Folder ini berisi script untuk menguji fitur Authorization API, menggunakan metode Bearer Token atau Basic Auth sesuai instruksi quiz.

### Isi File

```authorization.cy.js```

Berisi pengujian:

- Request login / mendapatkan token
- Menyimpan token ke environment Cypress
- Akses endpoint yang membutuhkan Authorization
- Validasi positive & negative case

### Tujuan Pembelajaran

✔ Memahami mekanisme otentikasi API
✔ Mengelola token menggunakan Cypress
✔ Melakukan request ke secured API
✔ Membangun validasi untuk berbagai skenario auth

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

### Tujuan Pembelajaran

✔ Memahami role intercept pada UI automation
✔ Mocking & stubbing untuk test stabil
✔ Validasi kesesuaian data UI dengan network API

## 📂 Tugas 17 – Page-Object-Model (POM)

Tugas ini mengimplementasikan struktur POM agar automation lebih bersih, maintainable, dan scalable.

### Struktur Folder

📦cypress
 ┣ 📂downloads
 ┣ 📂e2e
 ┃ ┣ 📜authorization.cy.js
 ┃ ┣ 📜intercept.cy.js
 ┃ ┗ 📜pom.cy.js
 ┣ 📂fixtures
 ┃ ┣ 📜dataCustomer.json
 ┃ ┗ 📜example.json
 ┗ 📂support
 ┃ ┣ 📂pages
 ┃ ┃ ┗ 📜LoginPage.js
 ┃ ┣ 📜commands.js
 ┃ ┗ 📜e2e.js


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
- Tujuan Pembelajaran

✔ Memisahkan test-case & business logic
✔ Meningkatkan reusability
✔ Mempermudah scaling test UI di masa depan

## 📦 Instalasi & Menjalankan Test

### 1️⃣ Install dependencies
```npm install@14.0.2```

### 2️⃣ Menjalankan via CLI
```npm run cy:open```


# 📘 Catatan
```Setiap tugas ditempatkan sesuai instruksi kelas. Dokumentasi ini dibuat agar reviewer dapat menavigasi repo dengan mudah.``` 