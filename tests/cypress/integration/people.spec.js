describe("People", () => {
  let people = [];

  before(() => {
    cy.resetDatabase();

    const SEED = /* GraphQL */ `
      mutation Seed($input: SeedInput!) {
        seed(input: $input) {
          id
          name
          pets {
            name
          }
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
    cy.pageLoaded();
    cy.get("li").should("have.length", 4);
  });

  it("allows me to see a persons profile", () => {
    cy.get(`a[href="/person/${people[0].id}"]`).eq(0).click();
    cy.pageLoaded();
    cy.wait(500);
    cy.get("h1").contains(people[0].name);
  });

  it("allows me to see a person's pets", () => {
    cy.visit("/person/1");
    cy.pageLoaded();
    cy.get("tr").should("have.length", 4);
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

  it("allows me to add a pet", () => {
    cy.visit("/person/1");
    cy.pageLoaded();

    cy.get("button").click();

    cy.get('[data-testid="pet-form"] input[name="name"]').clear().type("Fido").blur();

    cy.get('input[name="age"]')
      .clear()
      .type("4")
      .blur();

    cy.get('input[name="species"]')
      .clear()
      .type("Cat")
      .blur();

    cy.get('input[value="Save"]').click();

    cy.get("tr").should("have.length", 5);
  });
});
