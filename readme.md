
# Nobel Prize App - Backend

This project serves as the backend API for the Nobel Prize Frontend application. It provides data management and access control functionalities, enabling the frontend to display Nobel Prize information and manage user interactions.


## Authors

- [Heshan Jayasinghe](https://github.com/heshancs)

## Technologies Used

- **Backend Framework:** Express.js

- **Database:** PostgreSQL

- **Testing:** Jest

- **Security:** Helmet, Express Rate Limit, Keycloak Connect (Authentication/ Authorization), CORS

- **Development:** Docker



## Installation ((Development Environment))

Clone the repository:

```bash
git clone https://github.com/your-username/nobel-prize-backend.git
```


### Installation and Setup

#### 1.Clone the Repository:

```bash
git clone https://github.com/heshancs/Nobel-Prize-Backend.git
```

#### 2.Create the .env file using .env.sample
```bash
mv .env.example .env
```

#### 3.Start the Application:
```bash
cd nobel-prize-backend
docker-compose up
```
This will start the backend services using Docker Compose, streamlining the development process.


### Keycloak Setup 

#### 1.Access Keycloak Administration Console:
- Open your web browser and navigate to http://localhost:8080
- Use `KEYCLOAK_ADMIN` and `KEYCLOAK_ADMIN_PASSWORD` to login the admin console.

#### 2.Create a New Realm
- Once logged in, you'll be presented with the Keycloak administration console
- In the left sidebar, click on "Master". This will display a list of existing realms.
- Click on "Create Realm" to create a new realm for the Nobel Prize application.
- Import the pre-created configuration file (`realm-export.json`) on the `/config `directory and create the realm.

### Access the Nobel prize application

- Run the frontend application https://github.com/heshancs/Nobel-Prize-Frontend
- Navigate to http://localhost:5173
- Register as a new user and log in to the system
- Enjoy!

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`POSTGRES_HOST`
`POSTGRES_PORT`
`POSTGRES_DB`
`POSTGRES_USER`
`POSTGRES_PASSWORD`

`KEYCLOAK_ADMIN`
`KEYCLOAK_ADMIN_PASSWORD`

`PORT`


