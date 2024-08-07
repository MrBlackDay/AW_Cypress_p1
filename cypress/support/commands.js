// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (login, password) => {
    cy.contains("Log in").click();
    cy.get("#mail").type(login);
    cy.get("#pass").type(password);
    cy.contains("Submit").click();
  });

Cypress.Commands.add("logining", () => {
  cy.visit("http://localhost:3000/");
  cy.contains("Log in").click();
  cy.get("#mail").type("bropet@mail.ru");
  cy.get("#pass").type("123");
  cy.get(
    "body > div.fade.modal.show > div > div > div.modal-body > form > button.ml-2.btn.btn-success"
  ).click();
});

/*Cypress.Commands.add("logining", () => {
  cy.visit("http://localhost:3000/");
  cy.get("#responsive-navbar-nav > div > button").type("bropet@mail.ru");
  cy.get("#mail").type("bropet@mail.ru");
  cy.get("#pass").type("123");
  cy.get(
    "body > div.fade.modal.show > div > div > div.modal-body > form > button.ml-2.btn.btn-success"
  ).click();
});*/
