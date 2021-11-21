# Overview

Firstly, this was a great coding challenge and I really enjoyed working with this stack! The Laravel and React development was straightforward, however the GraphQL parts
presented a considerable learning curve for a weekend exercise. It's been a couple of years since I worked on a GraphQL project and it was in a different tech stack. I spent some time reading GraphQL documentation and examples and managed to achieve the desired results. Cypress was also new to me, so required a bit of research. The requirements mentioned Production quality. I wouldn't say it was quite up to that, due to the time spent on GraphQL components. Ideally, I would have given more consideration to the React component architecture.

## Solution

* Laravel model and related services for Pets
* GraphQL definitions for Pets
* Laravel Unit tests for Pets model and GraphQL endpoints
* React components for Pets
* React GraphQL mutations for Pets
* Jest tests for Pets functionality
* Cypress tests for Pets functionality
* Added basic styling using Tailwind classes and JSS styles
  
## Known issues

* Add/Delete Person not implemented. I ran out of time to implement these features so decided to ensure the Pet functionality was completed, working and covered by BE & FE Unit tests and E2E tests.
  
## Potential improvements

* Consider separating the Pet GraphQL queries from Person (or adding additonal ones) so that Pet React components could be more encapsulated
* Consider creating 2 reducer functions, for Person and Pet, with actions for add/update/delete to consolidate handler functions
* Additional validation on client and server side
* Additional tests to cover edge cases and test validation
* Style it properly
