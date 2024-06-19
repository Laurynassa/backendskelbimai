
# SKELBIMAI WEB APP

# USAGE AND INSTALLATION

1. Clone the repository:

- git clone https://github.com/Laurynassa/backendskelbimai.git
- cd backendskelbimai

1. Install dependencies:

- npm i

1. Run the application:

- npm run server

# OVERVIEW

The Skelbimai Web App is a comprehensive platform designed to facilitate the posting and browsing of classified advertisements. The application aims to provide users with an intuitive and user-friendly interface to create, manage, and search for various types of listings, including but not limited to, job postings, real estate, services, and items for sale.


# KEY FEATURES

**User Authentication and Profiles**:
   - Secure user registration and login.
   - Ability to view and manage user's own listings.

**Listing Management**:
  - Add images and detailed descriptions to listings.
  - Create and delete listings.
  - User can comment on listings.
  - Users can like listings.

**Categorize**:
  -  User can choose from a list of categories that definds his listings.
  
**Admin funcions**
  - Admin can add a category, block ad and block user.


# TECH STACK

- React
- MongoDB
- Node.js
- Express
- CORS
- jsonwebtoken


# USAGE AND INSTALLATION

1. Clone the repository:
- git clone https://github.com/Skelbimai-2grupe/backend.git
- cd backend

2. Install dependencies:
- npm install

3. Run the application:
- npm run server

# POSTMAN CRUD TESTING GUIDE 

# User Routes

1. Register User:
- Method: POST
- URL: http://localhost:5000/api/users/register
- Body (JSON):
  
**result**
{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "password123"
}

2. Login User:
- Method: POST
- URL: http://localhost:5000/api/users/login
- Body (JSON):

**result**
{
  "email": "testuser@example.com",
  "password": "password123"
}

3. Logout User:
- Method: POST
- URL: http://localhost:5000/api/users/logout
- Headers: Authorization: Bearer <your_jwt_token>


4. Get User by ID:
- Method: GET
- URL: http://localhost:5000/api/users/:id
- Headers: Authorization: Bearer <your_jwt_token>


5. Get All Users:
- Method: GET
- URL: http://localhost:5000/api/users/
- Headers: Authorization: Bearer <your_jwt_token>


6. Block User:
- Method: PATCH
- URL: http://localhost:5000/api/users/block/:id
- Headers: Authorization: Bearer <your_jwt_token>

# Ad Routes

1. Create Ad:
- Method: POST
- URL: http://localhost:5000/api/ads
- Headers: Authorization: Bearer <your_jwt_token>
- Body (JSON):

**result**
{
  "title": "Ad Title",
  "description": "Ad Description",
  "category": "Category ID",
  "price": "0"
  "images": ["image.jpg"]
}

2. Get Ad by ID:
- Method: GET
- URL: http://localhost:5000/api/ads/:id

3. Get All Ads:
- Method: GET
- URL: http://localhost:5000/api/ads

4. Update Ad:

Method: PATCH
- URL: http://localhost:5000/api/ads/:id
- Headers: Authorization: Bearer <your_jwt_token>
- Body (JSON):

**result**
{
  "title": "Updated Ad Title",
  "description": "Updated Ad Description"
}


5. Delete Ad:
- Method: DELETE
- URL: http://localhost:5000/api/ads/:id
- Headers: Authorization: Bearer <your_jwt_token>

# Category Routes

1. Create Category:
- Method: POST
- URL: http://localhost:5000/api/categories
- Headers:
- Authorization: Bearer <your_jwt_token>
- Body (JSON):

**result**
{
  "name": "Category Name"
}

2. Get Category by ID:
- Method: GET
- URL: http://localhost:5000/api/categories/:id

3. Get All Categories:
- Method: GET
- URL: http://localhost:5000/api/categories

4. Update Category:
- Method: PATCH
- URL: http://localhost:5000/api/categories/:id
- Headers:Authorization: Bearer <your_jwt_token>
- Body (JSON):

**result**
{
  "name": "Updated Category Name"
}

5. Delete Category:
- Method: DELETE
- URL: http://localhost:5000/api/categories/:id
- Headers: Authorization: Bearer <your_jwt_token>

# Comment Routes

1. Create Comment:
- Method: POST
- URL: http://localhost:5000/api/comments
- Headers: Authorization: Bearer <your_jwt_token>
- Body (JSON):

**result**
{
  "adId": "Ad ID",
  "text": "Comment Text"
}

2. Get Comment by ID:
- Method: GET
- URL: http://localhost:5000/api/comments/:id

3. Get All Comments for an Ad:
- Method: GET
- URL: http://localhost:5000/api/comments/ad/:adId

4. Update Comment:
- Method: PATCH
- URL: http://localhost:5000/api/comments/:id
- Headers: Authorization: Bearer <your_jwt_token>
- Body (JSON):
  
**result**
{
  "text": "Updated Comment Text"
}

5. Delete Comment:
- Method: DELETE
- URL: http://localhost:5000/api/comments/:id
- Headers: Authorization: Bearer <your_jwt_token>

# Like Routes

1. Like an Ad:
- Method: POST
- URL: http://localhost:5000/api/likes
- Headers: Authorization: Bearer <your_jwt_token>
- Body (JSON):
  
**result**
{
  "adId": "Ad ID"
}


2. Unlike an Ad:
Method: DELETE
URL: http://localhost:5000/api/likes/:id
Headers: Authorization: Bearer <your_jwt_token>


# LOGINS FOR TESTING

- Paprastas: basicuser@gmail.com / basicuser123
- Adminas: admin@gmail.com / admin123
