# Full Stack Application

This project is a full-stack application built using Java for the backend and JavaScript with React for the frontend. Tailwind CSS is used for styling, providing a responsive design with a mobile-first approach.



## Technologies Used

- **Java**: For backend development.
- **Spring Boot**: Framework for building the backend API.
- **React**: For building the frontend user interface.
- **Tailwind CSS**: For styling and responsive design.
- **PostgreSQL**: Database management system.
- **Docker**: For containerizing the database.
- **imgbb API**: For handling image uploads.
- **React Router**: For managing frontend routes.
- **Axios**: For making HTTP requests.


## Backend

The backend is developed using Java and Spring Boot. It features a simple yet functional structure with a controller responsible for handling API requests related to food items. The API provides two endpoints:

- **GET**: `http://localhost:8080/menu/` - Retrieves a list of food items.
- **POST**: `http://localhost:8080/menu/` - Adds a new food item.

The backend includes:

- **Controllers**: Handles API requests.
- **DTOs**: Data Transfer Objects for GET and POST requests.
- **Entities**: Represents the `FoodEntity` used to manipulate the `foods` table in PostgreSQL.

The database is set up using a Docker image, as specified in the `docker-compose.yml` file located in the resources directory.

## Frontend

The frontend is built with React and utilizes `react-router-dom` for routing. It features two main routes:

- **/**: Displays the menu with food items fetched from the API. The design is responsive, adapting to different screen sizes with Tailwind CSS.
- **/create**: Allows users to add new food items using a form. The form submits data to the API via a POST request. Notably, images are uploaded to the imgbb API, and only the image URL is sent to the backend.

The frontend structure includes:

- **Pages**: For views.
- **Components**: Building blocks for pages.

The application is designed to be responsive and user-friendly, leveraging Tailwind CSS for styling and imgbb for image handling.

Thank you for exploring this full-stack project! ❤️