# Pohang Eats

The backend of Pohang Eats 

- NestJS
- React
- TypeScript
- NodeJS
- GraphQL
- Apollo
- TypeORM


### Memo
- docker run -d -p 5432:5432 --name pohang-eats -e POSTGRES_USER=jaeuk -e POSTGRES_PASSWORD=12345 postgres
- docker ps
- pgAdmin 4 / create database 'pohang-eats', user/pw setting 
- Promies
    - 잘 정리된 블로그 참조
    - https://joshua1988.github.io/web-development/javascript/promise-for-beginners/

- async & await
    - https://joshua1988.github.io/web-development/javascript/js-async-await/

- secret genreate key
- jwt.io


## User Model:

- id
- createdAt
- updatedAt

- email
- password
- role(client|owner|delivery)


## User CRUD:

- Create Account
- Log In
- See Profile
- Edit Profile
- Verify Email