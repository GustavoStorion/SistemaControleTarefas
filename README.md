# Task Management API

A RESTful API built with Node.js for managing tasks. This project was developed as part of my backend learning journey, focusing on building structured and scalable applications.

## Technologies

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* Dotenv

## Features

* Create tasks
* Retrieve all tasks
* Retrieve a task by ID
* Update tasks
* Delete tasks

## API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /api/tasks     | Create a new task |
| GET    | /api/tasks     | Get all tasks     |
| GET    | /api/tasks/:id | Get task by ID    |
| PUT    | /api/tasks/:id | Update task       |
| DELETE | /api/tasks/:id | Delete task       |

## Environment Variables

Create a `.env` file in the root directory and add:

MONGO_URI=your_mongodb_connection_string

## Running the Project

```bash
npm install
node server.js
```

Server will run at:
http://localhost:3000

## Project Structure

backend/    
├── models/     
├── routes/     
├── server.js

## Future Improvements

* Authentication with JWT
* Frontend integration (React)
* Deployment to production

## Author

Gustavo Storion
