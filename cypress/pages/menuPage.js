class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }

        return selectors
    }

    acessmyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }
}
export default MenuPage