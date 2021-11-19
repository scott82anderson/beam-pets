Cypress.Commands.add("resetDatabase", () => {
  return cy.request({
    url: `${Cypress.env("API_HOST")}/reset`,
    method: "POST",
  });
});

Cypress.Commands.add("seed", (query, input) => {
  const mutation = {
    query,
    variables: { input },
  };

  return cy
    .request({
      url: `${Cypress.env("API_HOST")}/graphql`,
      method: "POST",
      body: mutation,
    })
    .then((response) => {
      const errors = response.body.errors ?? [];
      const people = response.body.data?.seed ?? [];
      return { people, errors };
    });
});

Cypress.Commands.add("pageLoaded", () => {
  return cy.get('[data-testid="page-loaded"]');
});
