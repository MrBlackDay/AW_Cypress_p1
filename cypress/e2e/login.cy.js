describe("ShouldSuccessfullyLogining", () => {
  beforeEach(() => {});
  it("Should successfully login", () => {
    cy.visit("/booksNode");
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });

  it("Should not login with empty login", () => {
    cy.visit("/booksNode");
    cy.contains("Log in").click();
    cy.get("#mail").type(" ");
    cy.get("#pass").type("test");
    cy.contains("Submit").click();
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get("#mail")
      .then(($el) => $el[0].validationMessage)
      .should("contain", "Заполните это поле.");
  });

  it("Should not login with empty password", () => {
    cy.visit("/booksNode");
    cy.contains("Log in").click();
    cy.get("#mail").type("test@test.com");
    cy.contains("Submit").click();
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
});

describe("ShouldSuccessfullyAddAndDeleteBooksToFavourites", () => {
  beforeEach(() => {
    cy.logining();
  });
  it("ShouldAddNewBookToFavoritesUseButtonAddToFavorite", () => {
    cy.get("#root > div > div > div > div > button").click();
    cy.get("#title").type("Алиса в стране чудес");
    cy.get(
      "body > div.fade.modal.show > div > div > div.modal-body > form > button.ml-2.btn.btn-success"
    ).click();
    cy.get(
      "#root > div > div > div > a:nth-child(1) > div > div.card-footer > button"
    ).click();
    cy.get("#responsive-navbar-nav > a > h4").click();
    cy.contains("Алиса в стране чудес").should("be.visible");
  });
  it("ShouldAddNewBookToFavoritesUseCheckMark", () => {
    cy.get("#root > div > div > div > div > button").click();
    cy.get("#title").type("Алиса в стране чудес");
    cy.get("#favorite").click();
    cy.get(
      "body > div.fade.modal.show > div > div > div.modal-body > form > button.ml-2.btn.btn-success"
    ).click();
    cy.get(
      "#root > div > div > div > a:nth-child(1) > div > div.card-footer > button"
    ).click();
    cy.get("#responsive-navbar-nav > a > h4").click();
    cy.contains("Алиса в стране чудес").should("be.visible");
  });
  it("DeleteNewBookFromFavoritesAfterAddingThisBookWithUseCheckMark", () => {
    cy.get("#root > div > div > div > div > button").click();
    cy.get("#title").type("Алиса в стране чудес");
    cy.get("#favorite").click();
    cy.get(
      "body > div.fade.modal.show > div > div > div.modal-body > form > button.ml-2.btn.btn-success"
    ).click();
    cy.get(
      "#root > div > div > div > a:nth-child(1) > div > div.card-footer > button"
    ).click();
    cy.get("#responsive-navbar-nav > a > h4").click();
    cy.contains("Алиса в стране чудес").should("be.visible");
    cy.get(
      "#root > div > div > a:nth-child(2) > div > div.card-footer > button"
    ).click();
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible"
    );
  });
});
