import { faker } from "@faker-js/faker";

import ReqresApi from "../../support/pages/ReqresApi";
const apiReqres = `${Cypress.env("apiReqres")}/users`;
const apiKey = Cypress.env("apiKey");

function apiRequest(method, url, body = {}) {
    return cy.request({
        method,
        url,
        headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
        },
        body,
    });
}

describe("JOB API", () => {
    let userId;
    let jobName;
    let jobTitle;

    beforeEach(() => {
        jobName = faker.person.jobType();
        jobTitle = faker.person.jobTitle();

        ReqresApi.createJob(jobName, jobTitle).then(res => {
            userId = res.body.id;
        });
    });

    it("✅ Create job", () => {
        const name = faker.person.jobType();
        const job = faker.person.jobTitle();

        ReqresApi.createJob(name, job).then(res => {
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property("name", name);
            expect(res.body).to.have.property("job", job);
        });
    });

    it("✅ Put Job", () => {
        ReqresApi.putJob(userId, jobName, jobTitle).then(res => {
            expect(res.status).to.eq(200);
            expect(res.body).to.have.property("name", jobName);
            expect(res.body).to.have.property("job", jobTitle);
            expect(new Date(res.body.updatedAt).toISOString()).to.be.a("string");
        });
    });
    it("✅ Patch job", () => {
        ReqresApi.patchJob(userId, jobName, jobTitle).then(res => {
            expect(res.status).to.eq(200);
            expect(res.body).to.have.property("name", jobName);
            expect(res.body).to.have.property("job", jobTitle);
            expect(new Date(res.body.updatedAt).toISOString()).to.be.a(
                "string"
            );
        });
    });
    it("✅ Delete job", () => {
        ReqresApi.deleteJob(userId).then(res => {
            expect(res.status).to.eq(204);
        });
    });
});
