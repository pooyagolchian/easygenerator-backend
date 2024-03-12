### Project Structure Overview

```
project-root
│   nest-cli.json
│   package.json
│   README.md
│   tsconfig.build.json
│   tsconfig.json
│   yarn-error.log
│   yarn.lock
│
├───src
│   ├───auth
│   │   │   auth.controller.ts
│   │   │   auth.module.ts
│   │   │   auth.service.ts
│   │   │
│   │   ├───dto
│   │   │       login.dto.ts
│   │   │       signUp.dto.ts
│   │   │
│   │   ├───exceptions
│   │   │       validation.exception.ts
│   │   │
│   │   ├───schema
│   │   │       user.schema.ts
│   │   │
│   ├───utils
│   │       logger.middleware.ts
│   │
│       app.controller.spec.ts
│       app.controller.ts
│       app.module.ts
│       app.service.ts
│       main.ts
│
└───test
        app.e2e-spec.ts
        jest-e2e.json
```
---
### Easygenerator Backend (Auth) 


# Nest.js Authentication Service

This project is a fully functional authentication service built with Nest.js, utilizing Passport for authentication middleware and JSON Web Tokens (JWT) for secure transmission of user credentials.

## Features

- User Sign-up and Sign-in
- JWT-based authentication
- Password hashing and security
- Validation and custom exceptions

## Getting Started

### Prerequisites

- Node.js
- Yarn or npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   cd <project-directory>
   yarn install
   ```
3. Setup environment variables:
    - Rename `.env.example` to `.env`
    - Configure the environment variables as per your requirements.

### Running the Application

- Development mode:
  ```bash
  yarn start:dev
  ```
- Production mode:
  ```bash
  yarn start:prod
  ```

## API Endpoints

- `POST /auth/signup`: Register a new user.
- `POST /auth/login`: Authenticate and receive a JWT.

## Testing

To run the tests, execute the following command:

```bash
yarn test
```
