const baseUrl = Cypress.env("baseUrl");
const apiUrl = Cypress.env("apiUrl");

function popModalLogin() {
    cy.viewport("macbook-13");
    cy.visit(baseUrl);
    cy.wait(500);
    cy.get(
        "button[class='justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 flex items-center gap-2']"
    ).click();
    cy.contains("Masuk ke Akun Anda").should("be.visible");
}

function inputDataLogin(phoneNumber, password) {
    if (phoneNumber !== "") {
        cy.get("#_r_0_-form-item")
            .type(phoneNumber)
            .should("have.value", phoneNumber);
    }
    if (password !== "") {
        cy.get("#_r_1_-form-item > .flex").type(password);
    }
}
function loginWithToken() {
    localStorage.setItem("token", "FAKE_TOKEN123");
}

describe("Customer melakukan login", () => {
    it("Login menggunakan data yang valid", () => {
        popModalLogin();
        cy.get("#_r_0_-form-item")
            .type("081234567890")
            .should("have.value", "081234567890");
        cy.get("#_r_1_-form-item > .flex").type("Xs7NGgxcFa");

        cy.intercept("POST", apiUrl + "/auth/login").as("login");
        cy.intercept("GET", apiUrl + "/me/profile").as("profile");

        cy.get(".space-y-4 > .flex-col > .bg-primary").click();

        cy.wait("@login").its("request.body").should("deep.include", {
            phone: "081234567890",
            password: "Xs7NGgxcFa",
        });

        cy.wait("@profile").then(intercept => {
            const data = intercept.response.body.data;
            expect(data).to.include.keys(
                "id",
                "first_name",
                "last_name",
                "type",
                "email",
                "phone",
                "title_id",
                "gender_id",
                "status"
            );
        });
        cy.get("#radix-_r_2_ > .hidden").contains("John").should("be.visible");
    });
    it("Customer tidak bisa login dengan kondisi server error", () => {
        popModalLogin();
        inputDataLogin("081234567890", "Xs7NGgxcFa");
        cy.intercept("POST", apiUrl + "/auth/login", {
            responseCode: 500,
            responseMessage: "Server error",
            data: null,
        }).as("server-error");
        cy.get(".space-y-4 > .flex-col > .bg-primary").click();
        cy.wait("@server-error");
    });
    it("Login menggunakan cara stub", () => {
        popModalLogin();

        cy.get("#_r_0_-form-item")
            .type("081234567812")
            .should("have.value", "081234567812");
        cy.get("#_r_1_-form-item > .flex").type("Xs7NGgxcAa");

        cy.intercept("POST", apiUrl + "/auth/login", {
            responseCode: 200,
            responseMessage: "Success !",
            data: {
                headers: {},
                original: {
                    token: "FAKE_TOKEN",
                    token_type: "bearer",
                },
                exception: null,
            },
        }).as("loginStub");

        cy.intercept("GET", apiUrl + "/me/profile", {
            responseCode: 200,
            responseMessage: "Success !",
            data: {
                id: 1,
                first_name: "FAKE",
                last_name: "USER",
                type: 1,
                email: "FAKEUSER@gmail.com",
                phone: "81234567890",
                title_id: null,
                gender_id: 1,
                status: 1,
            },
        }).as("profileStub");

        cy.get(".space-y-4 > .flex-col > .bg-primary").click();

        cy.wait("@loginStub");
        cy.wait("@profileStub");

        cy.get("#radix-_r_2_ > .hidden").contains("FAKE").should("be.visible");
    });
    it("Login dengan cara delay", () => {
        popModalLogin();
        inputDataLogin("081234567890", "Xs7NGgxcFa");
        cy.intercept("POST", apiUrl + "/auth/login", req => {
            req.on("response", res => {
                res.setDelay(10000);
            });
        }).as("slowApi");

        cy.get(".space-y-4 > .flex-col > .bg-primary").click();

        cy.wait("@slowApi");

        cy.contains("Sedang masuk...").should("be.visible");
    });
    it("Login tapi gagal fetch profile", () => {
        popModalLogin();
        inputDataLogin("081234567890", "Xs7NGgxcFa")
        cy.intercept("GET", apiUrl + "/me/profile", {
            responseCode: 500,
            responseMessage: "Service Unavailable !",
            data: null
        }).as("profileError");

        cy.get(".space-y-4 > .flex-col > .bg-primary").click();

        cy.wait("@profileError")
        cy.wait(500)
        cy.contains("Gagal login. Silakan coba lagi.")
    })
});
