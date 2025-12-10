import LoginPage from "../support/pages/LoginPage"
import dataCustomer from "../fixtures/dataCustomer.json"

describe('Login with POM', () => {
    it('✅ User login with valid data', () => {
        LoginPage.login(dataCustomer.phone, dataCustomer.password)
        LoginPage.expectUserLogin("John")
    })

    it('❌ User login with condition the phone number never registered', () => {
        LoginPage.login(dataCustomer.invalidPhone, "password")
        LoginPage.expectValidationMessage("Invalid Phone or Password")
    })

    it('❌ User login with condition never input the data', () => {
        LoginPage.login("", "")
        LoginPage.expectValidationMessage("Nomor telepon minimal 10 digit")
        LoginPage.expectValidationMessage("Password minimal 6 karakter")
    })
    
    it('❌ User login with condition only input the valid phone number', () => {
        LoginPage.login(dataCustomer.phone, "")
        LoginPage.expectLabelError("Password")
        LoginPage.expectValidationMessage("Password minimal 6 karakter")
    })
    
    it('❌ User login with condition only input passowrd', () => {
        LoginPage.login("", dataCustomer.password)
        LoginPage.expectLabelError("Nomor Telepon")
        LoginPage.expectValidationMessage("Nomor telepon minimal 10 digit")
    })

    it('❌ User login with valid data but not input 0', () => {
        LoginPage.login(dataCustomer.phoneWrongFormat, dataCustomer.password)
        LoginPage.expectLabelError("Nomor Telepon")
        LoginPage.expectValidationMessage("Format nomor telepon tidak valid")
    })

    it('❌ User login with valid phone number but wrong password', () => {
        LoginPage.login(dataCustomer.phone, dataCustomer.wrongPassword)
        LoginPage.expectValidationMessage("Invalid Phone or Password")
    })

    it('❌ User login with input phone number more than 15 numbers', () => {
        LoginPage.login(dataCustomer.phoneFifteen, dataCustomer.password)
        LoginPage.expectLabelError("Nomor Telepon")
        LoginPage.expectValidationMessage("Nomor telepon maksimal 15 digit")
    })
})