# contact-backend
# Contact Backend API

This is a simple RESTful API built with Node.js, Express, and MongoDB as the database. The API allows users to create, read, update, and delete contacts.

## Getting Started

### Installation

1. Clone this repository to your local machine:

   ````bash
   git clone https://github.com/Kunj1612/contact-backend.git
   ```

2. Install dependencies:

   ````bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ````
   MONGODB_URI=<your-mongodb-uri>
   PORT=<your-preferred-port-number>
   ```

   Replace `<your-mongodb-uri>` with your MongoDB URI and `<your-preferred-port-number>` with the desired port number for the server to run on.

### Usage

To start the server, run:

```bash
npm start
```

This will start the server at `http://localhost:<your-port-number>`. You can then use an API client such as Postman or curl to make requests to the API.

### API Endpoints

The following API endpoints are available:

| Method | Endpoint           | Description           |
| ------ | ------------------ | --------------------- |
| GET    | `/api/contacts`    | Get all contacts      |
| GET    | `/api/contacts/:id`| Get a contact by ID    |
| POST   | `/api/contacts`    | Create a new contact   |
| PUT    | `/api/contacts/:id`| Update a contact by ID |
| DELETE | `/api/contacts/:id`| Delete a contact by ID |

### Example Requests

#### Get all contacts

`GET /api/contacts`

Response body:

```json
[
  {
    "_id": "60e69f4a1d8e8f3b2c9d4e93",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "123-456-7890",
    "createdAt": "2021-07-07T02:25:46.834Z",
    "updatedAt": "2021-07-07T02:25:46.834Z",
    "__v": 0
  },
  {
    "_id": "60e6a14c1d8e8f3b2c9d4e94",
    "name": "Jane Smith",
    "email": "janesmith@example.com",
    "phone": "555-555-5555",
    "createdAt": "2021-07-07T02:44:28.883Z",
    "updatedAt": "2021-07-07T02:44:28.883Z",
    "__v": 0
  }
]
```

#### Create a new contact

`POST /api/contacts`

Request body:

```json
{
  "name": "Bob Johnson",
  "email": "bobjohnson@example.com",
  "phone": "555-123-4567"
}
```

Response body:

```json
{
  "_id": "60e6a2f61d8e8f3b2c9d4e95",
  "name": "Bob Johnson",
  "email": "bobjohnson@example.com",
  "phone": "555-123-4567",
  "createdAt": "2021-07-07T02:50:30.899Z",
  "updatedAt": "2021-07-07T02:50:30.899Z",
  "__v": 0
}
```

#### Update a contact

`PUT /api/contacts/:id`

Request body:

```json
{
  "name": "Bob Johnson",
  "email": "bob.johnson@example.com",
  "phone": "555-123-4567"
}
```

Response body:

```json
{
  "_id": "60e6a2f61d8e8f3b2c9d4e95",
  "name": "Bob Johnson",
  "email": "bob.johnson@example.com",
  "phone": "555-123-4567",
  "createdAt": "2021-07-07T02:50:30.899Z",
  "updatedAt": "2021-07-07T03:01:09.432Z",
  "__v": 0
}
```

#### Delete a contact

`DELETE /api/contacts/:id`

Response body:

```json
{
  "_id": "60e6a2f61d8e8f3b2c9d4e95",
  "name": "Bob Johnson",
  "email": "bob.johnson@example.com",
  "phone": "555-123-4567",
  "createdAt": "2021-07-07T02:50:30.899Z",
  "updatedAt": "2021-07-07T03:01:09.432Z",
  "__v": 0
}
```
