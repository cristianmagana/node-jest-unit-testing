# node-jest-unit-testing

### Requisites

`npm install -save-dev typescript ts-node @types/node`
<br>
<br>
`npm install -save-dev jest ts-jest @types/jest`
<br>
<br>
debugging with nodeJs: https://github.com/microsoft/vscode-recipes/tree/main/debugging-jest-tests

## Software Automated Tests:

1. Unit tests - verify specific sections of code
   - Rely on replacements (mocks, stubs, spies)
   - Run very often
2. Integration tests - verify different interfaces of the code
   - Accessing real resources (servers, databases)
3. End-to-end - simulate user interaction

## Working with test doubles

- Understanding the concepts behind stubbing and mocking
- Understanding mocking: https://martinfowler.com/articles/mocksArentStubs.html

  - Dummy objects are passed around but never actually used. Usually they are just used to fill parameter lists.
  - Fake objects actually have working implementations, but usually take some shortcut which makes them not suitable for production (an in memory database is a good example).
  - Stubs provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
  - Spies are stubs that also record some information based on how they were called. One form of this might be an email service that records how many messages it was sent.
  - Mocks are what we are talking about here: objects pre-programmed with expectations which form a specification of the calls they are expected to receive.
