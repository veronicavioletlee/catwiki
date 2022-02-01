# CatWiki

This repo contains the source code for Veronica Lee's Blowfish Studios full-stack coding challenge. 
It's a simple web application, using NodeJS for the backend and ReactJS for the frontend.

## Using the app
You can access my CatWiki at
`http://catwiki-veronicalee.herokuapp.com`

## Requirements

The user stories delivered include:
1. I can search for cat breeds from the homepage and select a breed of my choice from a list
2. I can see the breed details including description, temperament, origin, life span, adaptability, affection level, child-friendly, grooming, intelligence, health issues, social needs, stranger friendly
3. I can see more photos of the breed on the breed details page

## Process

I worked through the requirements in the order above. When building each requirement I started with the backend endpoint, 
followed by a working frontend implementation, tests, refactoring and then basic styling.

One setback I had was misunderstanding The Cat API documentation, resulting in me not realising there was an endpoint
to retrieve details of a breed by breed ID until I had built most of it. When switching to use this endpoint it meant that a child component
would now fetch the information itself rather than receiving as props, so it had a bit of a knock-on effect on the tests also.

I would have liked to improve on the test coverage and the styling, but given time constraints I've kept it light.

## Modules / Libraries

This app uses the following modules, in addition to those that were already implemented in the template:

|      Name      | Usage  |
| :------------- | :---------- |
|  Axios  | Http client for requests to The Cat APIs  |
|  React-Bootstrap  | Provides native Bootstrap components as React components  |
