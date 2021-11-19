describe("People", () => {
  let people = [];

  before(() => {
    cy.resetDatabase();

    const SEED = /* GraphQL */ `
      mutation Seed($input: SeedInput!) {
        seed(input: $input) {
          id
          name
        }
      }
    `;

    const input = {
      hasPeople: 4,
    };

    cy.seed(SEED, input).then((response) => {
      people = response.people;
    });
  });

  it("shows me a list of all people", () => {
    cy.visit("/");
    cy.get("li").should("have.length", 4);
  });

  it("allows me to see a persons profile", () => {
    cy.get(`a[href="/person/${people[0].id}"]`).eq(0).click();
    cy.pageLoaded();
    cy.get("h1").contains(people[0].name);
  });

  it("allows me to update a persons details", () => {
    cy.get('input[name="name"]').clear().type("Testy McTester").blur();

    cy.get('input[name="description"]')
      .clear()
      .type("A real cool swell bean")
      .blur();

    cy.get('input[type="submit"]').click();

    cy.get("h1").contains("Testy McTester");
    cy.visit("/");
    cy.contains("Testy McTester");
  });
});
