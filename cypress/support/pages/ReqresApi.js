class ReqresApi {
    constructor() {
        this.apiReqres = `${Cypress.env("apiReqres")}/users`;
        this.apiKey = Cypress.env("apiKey");
    }

    request(method, url, body = {}, failOnStatusCode = true) {
        return cy.request({
            method,
            url,
            failOnStatusCode,
            headers: {
                "x-api-key": this.apiKey,
                "Content-Type": "application/json",
            },
            body,
        });
    }

    getUsers() {
        return this.request("GET", this.apiReqres)
    }

    getUserId(userId) {
        return this.request("GET", `${this.apiReqres}/${userId}`)
    }

    getUserIdNotFound(userId = 9999) {
        return this.request("GET",`${this.apiReqres}/${userId}`,{}, false)
    }
    
    createJob(name, job) {
        return this.request("POST", this.apiReqres, { name, job })
    }

    putJob(userId, name, job) {
        return this.request("PUT", `${this.apiReqres}/${userId}`, { name, job })
    }

    patchJob(userId, name, job) {
        return this.request("PATCH", `${this.apiReqres}/${userId}`, { name, job })
    }

    deleteJob(userId) {
        return this.request("DELETE", `${this.apiReqres}/${userId}`)
    }

    
}

export default new ReqresApi()
