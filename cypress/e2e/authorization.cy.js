const baseUrl = Cypress.env("baseUrl");

// saya membuat function karena agar telihat lebih rapih. walaupun sebenarnya bisa menggunakan metode POM
function landingPage() {
    cy.viewport("macbook-13");
    cy.visit(baseUrl);
    cy.wait(5000);
}
function popModalLogin() {
    cy.get("div.flex > .justify-center > .hidden").should("be.visible").click();
    cy.contains("Masuk ke Akun Anda").should("be.visible");
}
function negativeCases(phoneNumber, password) {
    cy.get("div.flex > .justify-center > .hidden").should("be.visible").click();
    cy.contains("Masuk ke Akun Anda").should("be.visible");
    if (phoneNumber !== "") {
        cy.get("#_r_0_-form-item")
            .type(phoneNumber)
            .should("have.value", phoneNumber);
    }
    if (password !== "") {
        cy.get("#_r_1_-form-item > .flex").type(password);
    }
    cy.get(".space-y-4 > .flex-col > .bg-primary").click();
}
function validationMessage(msg) {
    cy.contains(msg)
        .should("be.visible")
        .and("have.css", "color", "rgb(255, 0, 0)");
}
function labelValidationMsg(label) {
    cy.contains("label", label).should("have.css", "color", "rgb(255, 0, 0)");
}

describe("Customer melakukan login", () => {
    it("Login menggunakan data yang valid", () => {
        landingPage();
        popModalLogin();
        cy.get("#_r_0_-form-item")
            .type("081234567890")
            .should("have.value", "081234567890");
        cy.get("#_r_1_-form-item > .flex").type("Xs7NGgxcFa");
        cy.get(".space-y-4 > .flex-col > .bg-primary").click();
        cy.get("#radix-_r_2_ > .hidden").contains("John").should("be.visible"); // => nama user bisa disesuaikan kalau sudah besar project.
        //url sama seperti landing page, jadi ga nge cek cy.url()
    });
    it("Customer login dengan kondisi nomor telepon belum terdaftar", () => {
        landingPage();
        negativeCases("081322092108", "password");
        cy.wait(500);
        validationMessage("Invalid Phone or Password");
    });
    it("Customer login dengan kondisi tanpa input data", () => {
        landingPage();
        negativeCases("","")
        labelValidationMsg("Nomor Telepon")
        labelValidationMsg("Password")
        validationMessage("Nomor telepon minimal 10 digit");
        validationMessage("Password minimal 6 karakter");
    });
    it("Customer login dengan kondisi hanya input phone number yang valid", () => {
        landingPage();
        negativeCases("081234567890", "");
        labelValidationMsg("Password")
        validationMessage("Password minimal 6 karakter");
    });
    it("Customer login dengan kondisi hanya input password", () => {
        landingPage();
        negativeCases("", "passowrd");
        labelValidationMsg("Nomor Telepon")
        validationMessage("Nomor telepon minimal 10 digit");
    });
    it("Customer login dengan kondisi nomor telepon valid tetapi tanpa 0", () => {
        landingPage();
        negativeCases("81234567890", "Xs7NGgxcFa");
        labelValidationMsg("Nomor Telepon")
        validationMessage("Format nomor telepon tidak valid");
    });
    it("Customer login dengan kondisi nomor telepon valid tetapi salah password", () => {
        landingPage();
        negativeCases("081234567890", "password");
        validationMessage("Invalid Phone or Password");
    });
    it("Customer login dengan kondisi nomor telepon lebih dari 15 digit", () => {
        landingPage();
        negativeCases("0812345678901212", "Xs7NGgxcFa");
        labelValidationMsg("Nomor Telepon")
        validationMessage("Nomor telepon maksimal 15 digit");
    });
});
