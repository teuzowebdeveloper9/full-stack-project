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

# screenshots 

![image](https://github.com/user-attachments/assets/4fa565b2-b6fc-4b72-9bf3-f771bf8a5133)

![image](https://github.com/user-attachments/assets/bf2b1879-20f3-4f8e-9f65-8b6511368197)

![image](https://github.com/user-attachments/assets/271f8c8a-089a-47fc-afda-4d3d7a4a6a6e)

![image](https://github.com/user-attachments/assets/11aef310-1507-4b9c-b74d-8d3e59c64016)

![image](https://github.com/user-attachments/assets/8fbc32ad-e1f8-469a-be0d-5774829c70cd)

![image](https://github.com/user-attachments/assets/dc922230-7dee-41d5-9876-2d4ed2b571b0)

![image](https://github.com/user-attachments/assets/e6cfb527-bfd2-4638-9921-3ca07c9e0f02)


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
