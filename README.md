# Beam Pets

We love our pets at Beam.

## What to do

This codebase contains an API and frontend that closely resembles our primary stack. It currently has and presents information about people, but we want to learn more about their pets and to manage them.

Currently the backend is a Laravel-based GraphQL API which has a simple `Person` model with a basic factory. The frontend is a simple React/Next SPA with a list of users and some basic patterns established.

The requirements are as follows:

1. Introduce a Pet model with some basic information like name, age, species, owner
2. Expand on the users profile page to include a list of their pets and the ability to add new ones
3. Enable creation and deletion of people and their pets

## What we look for

- Clean, DRY, SOLID code
- We are big on testing - unit tests, integration tests, component tests. Backend and frontend.
- Production quality - imagine this is a core part of a larger codebase that you maintain with your product team
- Good commit history

A successful submission meets the above requirements and passes all written test cases.

Please document a high-level summary of the code you have written, any important choices you made, as well as any other notes you wish to share. Keep it brief.

We are not looking for perfect, idiomatic code. There are no tricks or nasty surprises in the test. Just write good, solid code to solve the few requirements.

## Getting started

- You can run `docker-compose up` file in the root to get the server-side started
- Make a copy of the `api/.env.example` at `api/.env` to configure your environment
- Run `composer install` to install and `php artisan migrate:refresh --seed` to seed the API
- For the frontend, run `yarn && yarn dev` in the `web/` folder to install and start in dev mode
- Production mode can be run with `yarn build && yarn start`
- Requests are made to the API at `http://localhost/graphql` using a tool like Insomnia or Postman
- E2E tests exist in the `tests/` directory using Cypress, boot this up with `yarn && yarn headed`
- API tests can be run inside the container via `php artisan test`
- Frontend tests are powered by Jest and React Testing Library, you can run these from the web folder with `yarn test`

## Submission

As all code reviews usually go, we'd like to see a PR so that we can review the commit history and diff. Our preference is GitHub here.

Upload the original code as your `main` in a new public or private repository, branch off there to make your changes as you go and submit a PR. Then if it's private just invite us (`arrisar` and `thomasdavis`) for review!

## Notes

- You may find it easier to open a shell (`docker exec`) into the API container to run the commands for it
- The `tests/` and `web/` folder are intentionally exlucded from the Docker Compose setup
- The same database is shared by the tests and the local application, expect it to be cleared often
- Rely on factories to seed data you expect