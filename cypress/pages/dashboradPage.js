class DashboardPage {

    selectorsList() {
        const selectors = {
            dashboardgrid: ".orangehrm-dashboard-grid",
        }

        return selectors;
    }   
    
    checkDashboardGrid() {
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index') 
        cy.get(this.selectorsList().dashboardgrid).should('be.visible')
        
    }
}

export default DashboardPage