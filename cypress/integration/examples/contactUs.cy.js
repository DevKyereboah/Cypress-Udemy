///<reference types="Cypress" />
describe('Test Contact us form via WebdriverUni', () => {
    it.only('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.url().should('eq', 'https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.title().should('eq', 'WebDriver | Contact Us');
        cy.get('[name="first_name"]').eq(0).type('sarah')
        cy.get('[class="feedback-input"]').eq(1).type('owusu')
        cy.get('[class="feedback-input"]').eq(2).type('sarah.owusu@amalitech.com')
        cy.get('textarea.feedback-input').eq(0).type('This is my profile')
        cy.get('input[type="submit"]').click({force:true});
        cy.get('h1').should('have.text', "Thank You for your Message!")
        
      
    });

    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('https://www.automationteststore.com/');
        cy.get('.info_links_footer > :nth-child(5) ').click();
        cy.get('[name="first_name"]').type('Sarah')
        cy.get('[name="email"]').eq(0).type('sarah.owusu@amalitech.com')
        cy.get('[name="email"]').eq(0).should('have.attr', 'name', 'email')
        cy.get('[name="enquiry"]').eq(0).type('I want to buy a product');
        cy.get('button[type="submit"]').eq(0).click();  
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
              // Add your test steps for this specific test case here
    });
})
