## Setup Instructions (Follow till step 2 for both local environment and Docker)

### Prerequisites
- Node and npm installed
- MongoDB installed (If you want to run it on your local machine) or you can use [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- Docker installed (If you want to run it with Docker) 

### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://<bitbucket_user_name>@bitbucket.org/teammoresailing/tourbooker.git
   cd upstack
   ```

2. **Copy `.env.example` to `.env` and fill in the values:**

    ```sh
    cp .env.example .env
    ```

3. **Installation**

- Assuming your machine meets all requirements - let's process to installation of this project.

    ```bash
    npm install
    ```

### Build & Run

```bash
npm run build && npm run start  
```

## Setup Instructions (For Docker)

3. **Build & Run**

```bash
docker-compose -f docker-compose.yml up
```

### Run with Docker

Build & Run Docker Container (Using Docker)

   ```bash
   docker build -t job-posting-api . && docker run -p 3000:3000 --env-file .env job-posting-api
   ```

Build & Run Docker Container (Using Docker Compose)

   ```bash
   docker-compose up -d --build
   ```

## API Documentation

## Upstack 🚀
This API allows users to manage jobs, applications, and authentication. It supports CRUD operations (GET, POST, PUT, DELETE), and includes examples for each request.

---

## Endpoints

### Jobs

#### Get All Jobs
- **Endpoint:** `GET /jobs/`
- **Description:** Retrieve all job listings.
- **Example Request:**
  ```bash
  curl --location 'https://localhost:3000/api/jobs/' \
  ```
- **Example Response:**
  ```json
  [
    {
      "_id": "6791dbeb274130d9dc71d132",
      "title": "Software Engineer - I",
      "description": "skills required: Nodejs, expressjs, mysql",
      "location": "Dhaka, Bangladesh",
      "salaryRange": "60,000 - 1,00,000",
      "__v": 0
    }
  ]
  ```

#### Get Job Details
- **Endpoint:** `GET /jobs/:id`
- **Description:** Retrieve job details by ID.
- **Example Request:**
  ```bash
  curl --location 'https://localhost:3000/api/jobs/6791dbeb274130d9dc71d132/'
  ```
- **Example Response:**
  ```json
  {
    "_id": "6791dbeb274130d9dc71d132",
    "title": "Software Engineer - I",
    "description": "skills required: Nodejs, expressjs, mysql",
    "location": "Dhaka, Bangladesh",
    "salaryRange": "60,000 - 1,00,000",
    "__v": 0
  }
  ```

#### Create Job
- **Endpoint:** `POST /jobs/`
- **Description:** Create a new job.
- **Example Request:**
  ```bash
  curl --location 'https://localhost:3000/api/jobs/' \
  --header 'Authorization: Bearer {{token}}' \
  --data '{
      "title": "Software Engineer",
      "description": "skills required: Nodejs, expressjs, mysql",
      "location": "Dhaka, Bangladesh",
      "salaryRange": "60,000 - 1,00,000"
  }'
  ```
- **Example Response:**
  ```json
  {
    "message": "Job created successfully",
    "job": {
      "title": "Software Engineer",
      "description": "skills required: Nodejs, expressjs, mysql",
      "location": "Dhaka, Bangladesh",
      "salaryRange": "60,000 - 1,00,000",
      "_id": "6791dbeb274130d9dc71d132",
      "__v": 0
    }
  }
  ```

#### Update Job
- **Endpoint:** `PUT /jobs/:id`
- **Description:** Update an existing job.
- **Example Request:**
  ```bash
  curl --location --request PUT 'https://localhost:3000/api/jobs/6791dbeb274130d9dc71d132/' \
  --header 'Authorization: Bearer {{token}}' \
  --data '{
      "title": "Software Engineer - I",
      "description": "skills required: Nodejs, expressjs, mysql",
      "location": "Dhaka, Bangladesh",
      "salaryRange": "60,000 - 1,00,000"
  }'
  ```
- **Example Response:**
  ```json
  {
    "message": "Job updated successfully",
    "job": {
      "_id": "6791dbeb274130d9dc71d132",
      "title": "Software Engineer - I",
      "description": "skills required: Nodejs, expressjs, mysql",
      "location": "Dhaka, Bangladesh",
      "salaryRange": "60,000 - 1,00,000",
      "__v": 0
    }
  }
  ```

#### Delete Job
- **Endpoint:** `DELETE /jobs/:id`
- **Description:** Delete an existing job.
- **Example Request:**
  ```bash
  curl --location --request DELETE 'https://localhost:3000/api/jobs/6791dbeb274130d9dc71d132/' \
  --header 'Authorization: Bearer {{token}}'
  ```
- **Example Response:**
  ```json
  {
    "message": "Job deleted successfully",
    "job": {
      "_id": "6791dbeb274130d9dc71d132",
      "title": "Software Engineer - I",
      "description": "skills required: Nodejs, expressjs, mysql",
      "location": "Dhaka, Bangladesh",
      "salaryRange": "60,000 - 1,00,000",
      "__v": 0
    }
  }
  ```

### Applications

#### Get All Applications
- **Endpoint:** `GET /applications/`
- **Description:** Retrieve all job applications.
- **Example Request:**
  ```bash
  curl --location 'https://localhost:3000/api/applications/'
  ```
- **Example Response:**
  ```json
  [
    {
      "_id": "6791de4399e832327a02aa2a",
      "candidateName": "Sabbir",
      "email": "sabbir@gmail.com",
      "jobId": "6791dbeb274130d9dc71d132",
      "applicationDate": "2025-01-23T06:14:27.987Z",
      "__v": 0
    },
    {
      "_id": "6791e12f9c78638fcb430b83",
      "candidateName": "Sabbir",
      "email": "sabbir@gmail.com",
      "jobId": "6791dbeb274130d9dc71d132",
      "applicationDate": "2025-01-23T06:26:55.081Z",
      "__v": 0
    }
  ]
  ```

#### Apply for a Job
- **Endpoint:** `POST /applications/`
- **Description:** Apply for a job.
- **Example Request:**
  ```bash
  curl --location 'https://localhost:3000/api/applications/' \
  --data-raw '{
      "candidateName": "Sabbir",
      "email": "sabbir@gmail.com",
      "jobId": "6791dbeb274130d9dc71d132"
  }'
  ```
- **Example Response:**
  ```json
  {
    "candidateName": "Sabbir",
    "email": "sabbir@gmail.com",
    "jobId": "6791dbeb274130d9dc71d132",
    "_id": "6791e12f9c78638fcb430b83",
    "applicationDate": "2025-01-23T06:26:55.081Z",
    "__v": 0
  }
  ```

### Auth

#### Register User
- **Endpoint:** `POST /users/`
- **Description:** Register a new user.
- **Example Request:**
  ```bash
  curl --location 'https://localhost:3000/api/users/' \
  --data-raw '{
      "username": "",
      "first_name": "",
      "last_name": "",
      "email": "",
      "password": "",
      "groups": ""
  }'
  ```
- **Example Response:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```

#### Login
- **Endpoint:** `POST /auth/login/`
- **Description:** Login.
- **Example Request:**
  ```bash
  curl --location 'https://localhost:3000/api/auth/login/' \
  --data-raw '{
      "email": "nk@gmail.com",
      "password": "Nk@627475426"
  }'
  ```
- **Example Response:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmFzaXIiLCJlbWFpbCI6Im5rQGdtYWlsLmNvbSIsImlhdCI6MTczNzU1MDg2NCwiZXhwIjoxNzM3NTk0MDY0fQ.Cq4KDNUQlJ4-vFR08QveTohAs5AWcjqGiZyWW1GjpNY"
  }
  ```
