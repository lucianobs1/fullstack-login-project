# ReactJS and NodeJS application for Login project

![Api apresentation](https://github.com/lucianobs1/login-project/blob/main/api-gif.gif)


## :rocket: Technologies

:atom_symbol: Techonologies that i used to develop this web client

- ReactJS
- TypeScript
- React Router DOM
- Styled Components
- Polished
- Axios

:gear: Techonologies that i used to develop this api

- NodeJS
- TypeScript
- Express
- JWT-token
- uuid v4
- Sqlite
- Eslint
- Prettier
- EditorConfig

## :crossed_swords: Getting started
- Have this application's API running

### Clone the project and access the folder

```
 git clone https://github.com/lucianobs1/login-project.git

 open frontend folder to access ReactJS project
 open backend folder to access NodeJs project

```
### Follow the steps below to run backend
```
  # Install the dependencies
  $ yarn

  # Run script bellow in your ide to run migrations
  $ yarn typeorm migration:run

  # Open your gui database and select sqlite.database

  #to finish, run the api service
  $ yarn dev

```

### Follow the steps below to run frontend
```
  # Install the dependencies
  $ yarn

  # Be sure the file 'src/services/api.ts' have the IP to your API

  # Start the client
  $ yarn start

```


