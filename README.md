# simple-api-crud

## description

Mid-phase-test, which implements CRUD operation using mongoDB and mongoose, express, and no view.

## routes

### food routes

| Routes | HTTP method | Description |
| ------ | ----------- | ----------- |
| /api/foods | GET | Show all foods info |
| /api/foods | POST | Add new food to database |
| /api/foods/:id | GET | Show one food info |
| /api/foods/:id | PUT | Update info of a food |
| /api/foods/:id | DELETE | Delete a food from database |


### restaurant routes

| Routes | HTTP method | Description |
| ------ | ----------- | ----------- |
| /api/restaurants | GET | Show all restaurants info |
| /api/restaurants | POST | Add new restaurants to database |
| /api/restaurants/:id | GET | Show one restaurants info |
| /api/restaurants/:id | PUT | Update info of a restaurants |
| /api/restaurants/:id | DELETE | Delete a restaurants from database |

## Usage

First install the dependencies and then start the server as follows:

```sh
$ npm install
$ npm start
```
The routes can be accessed via http://localhost:3000, recommended to be accessed using Postman etc.
