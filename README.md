# Library Management System

## Description
The Library Management System enables users to sign in as either a librarian or a regular user. Users must wait for a librarian to verify their accounts before they can log in. Once verified, users can view available books, submit borrow requests, and manage their borrowed books. Librarians can approve or reject borrow requests, as well as add, remove, or update books in the system.

## Installation Instructions

### Backend Setup
1. **Java JDK Installation**:
   - Download and install the Java JDK from the [official Oracle website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) or through your package manager.
   
2. **Spring Boot Framework**:
   - Ensure you have Spring Boot installed. Follow the [Spring Boot installation guide](https://spring.io/guides/gs/spring-boot/) if needed.
   
3. **Backend Code**:
   - Clone the repository: 
     ```bash
     git clone https://github.com/Ahmed-ibrahim21/LibraryManagementSystem.git
     ```
   - Navigate to the backend directory:
     ```bash
     cd LibraryManagementSystem/backend
     ```
   - Run the application:
     ```bash
     ./mvnw spring-boot:run
     ```

### Frontend Setup
1. **Node.js and npm Installation**:
   - Download and install Node.js from the [official Node.js website](https://nodejs.org/).
   
2. **Install Packages**:
   - Navigate to the frontend directory:
     ```bash
     cd LibraryManagementSystem/frontend
     ```
   - Install the necessary packages:
     ```bash
     npm install
     ```

### Database Setup
1. **Microsoft SQL Server or XAMPP**:
   - Download and install [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) or [XAMPP](https://www.apachefriends.org/index.html) to manage your database.

2. **Database Configuration**:
   - Create a new database for the project.
   - Update the database configuration in the backend application properties file (usually `application.properties` or `application.yml`).

## Usage

### Running the Application
1. **Backend**:
   - Ensure your database server is running.
   - Start the Spring Boot backend application as described in the installation instructions.

2. **Frontend**:
   - Start the frontend development server:
     ```bash
     npm start
     ```

### User Guide
1. **Sign Up**:
   - Users can sign up and wait for a librarian to verify their account.

2. **Log In**:
   - Once verified, users can log in and view available books.

3. **Borrowing Books**:
   - Users can submit borrow requests for available books.
   - Librarians can approve or reject borrow requests.
   - Approved borrow requests are added to the user's inventory.

4. **Returning Books**:
   - Users can return borrowed books to a librarian.

5. **Librarian Functions**:
   - Librarians can add, remove, or update books in the system.

## Features
- User and Librarian roles with different permissions
- Account verification by librarians
- Book borrowing and return management
- Book inventory management (add, remove, update books)

## Contributing
We welcome contributions to the project! To contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request detailing your changes.


## Dependencies
- Java JDK
- Spring Boot
- Node.js
- npm
- Microsoft SQL Server or XAMPP

## Contact Information
For any inquiries or issues, please contact us at:
- **Email**: ai.ahmed.ibrahim21@gmail.com
- **GitHub**: [Ahmed-ibrahim21](https://github.com/Ahmed-ibrahim21)
