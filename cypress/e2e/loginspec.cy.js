import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboradPage.js'
import DashboardPage from '../pages/dashboradPage.js'
import MenuPage from '../pages/menuPage.js'

const login = new LoginPage()

const dashboard = new DashboardPage()

const menuPage = new MenuPage()

describe('Orange HRM tests', () => {

  const selectorsList = {
    
    
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dataField: "[placeholder='yyyy-dd-mm']",
    selectCombobox: ".oxd-select-text--arrow",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    thirdItemCombobox: ".oxd-select-dropdown  > :nth-child(4)",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  }

  it.only('User info Update - Login com sucesso', () => {
    login.acessLoginPage()
    login.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboard.checkDashboardGrid()

    menuPage.acessmyInfo()
    
    cy.get(selectorsList.firstNameField).clear().type('FirstName')
    cy.get(selectorsList.lastNameField).clear().type('LastName')
    cy.get(selectorsList.genericField).eq(3).clear().type('nickname')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-12-12')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(7).clear().type('2025-12-12')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain.text', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    cy.get(selectorsList.selectCombobox).eq(0).click({ force: true })
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.selectCombobox).eq(1).click({ force: true })
    cy.get(selectorsList.thirdItemCombobox).click()
  })


  it('Login com falha', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username )
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialsAlert)
  })
  
})