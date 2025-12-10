const baseUrl = Cypress.env("baseUrl");

class LoginPage {
    popUpModalLogin() {
        cy.viewport("macbook-13");
        cy.visit(baseUrl);
        cy.wait(500);
        cy.get(
            "button[class='justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 flex items-center gap-2']"
        ).click();
        cy.contains("Masuk ke Akun Anda").should("be.visible");
    }

    fillPhone(phoneNumber) {
        if (phoneNumber !== "") {
            cy.get("#_r_0_-form-item")
                .type(phoneNumber)
                .should("have.value", phoneNumber);
        }
    }

    fillPassword(password) {
        if (password !== "") {
            cy.get("#_r_1_-form-item > .flex").type(password);
        }
    }

    submitLogin() {
        cy.get(".space-y-4 > .flex-col > .bg-primary").click();
        cy.wait(500);
    }

    login(phoneNumber, passowrd) {
        this.popUpModalLogin();
        this.fillPhone(phoneNumber);
        this.fillPassword(passowrd);
        this.submitLogin();
    }

    expectValidationMessage(msg) {
        cy.contains(msg)
            .should("be.visible")
            .and("have.css", "color", "rgb(255, 0, 0)");
    }

    expectLabelError(label) {
        cy.contains("label", label).should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
        );
    }

    expectUserLogin(name) {
        cy.get("#radix-_r_2_ > .hidden").contains(name).should("be.visible");
    }
}

export default new LoginPage();
