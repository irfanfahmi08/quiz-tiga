import ReqresApi from "../../support/pages/ReqresApi";

describe("Users API", () => {
    context("GET /users", function () {
        it("✅ Gets a list of users", () => {
            ReqresApi.getUsers().then(res => {
                expect(res.status).to.eq(200);
                expect(res.body.data).to.be.an("array");
            });
        });
    });
    context("GET /users/:usersId", function () {
        it("✅ gets a user", () => {
            ReqresApi.getUsers().then(res => {
                const userId = res.body.data[0].id;
                ReqresApi.getUserId(userId).then(res => {
                    expect(res.status).to.eq(200);
                    expect(res.body.data).to.have.property("id", userId);
                });
            });
        });
        it("❌ gets user not found", () => {
            ReqresApi.getUserIdNotFound().then(res => {
                expect(res.status).to.eq(404);
            });
        });
    });
});
