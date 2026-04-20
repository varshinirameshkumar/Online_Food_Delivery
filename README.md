
# QuickBite: Online Food Delivery Application

**A Java Full Stack Hackathon Project** *Developed by Team QuickBite*

---

## 📌 Project Overview
QuickBite is a robust, scalable, and user-friendly food delivery platform designed to bridge the gap between customers, local restaurants, and delivery partners. This application provides a seamless ecosystem for ordering food, managing restaurant menus, and tracking deliveries in real-time.

### 🎯 Key Objectives
* **Scalability:** Built with Spring Boot and MongoDB to handle high transaction volumes.
* **Security:** Role-based access control using JWT (JSON Web Tokens).
* **User Experience:** Responsive and intuitive UI built with React.js.

---

## 🛠 Tech Stack
| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, Tailwind CSS, Axios, Context API |
| **Backend** | Java 17, Spring Boot, Spring Security |
| **Database** | MongoDB (NoSQL) |
| **Security** | JWT (JSON Web Token), BCrypt Encryption |
| **Tools** | Git, Postman, Maven, VS Code / IntelliJ |

---

## 👥 Team Roles & Responsibilities
| Name | Role | Primary Focus |
| :--- | :--- | :--- |
| **Srivarshini R** | **Team Leader** | Project Architecture, Documentation, Final Pitch, & Team Coordination. |
| **Harshini K** | **Backend Developer** | Spring Boot API development, MongoDB Schema, & Payment Logic. |
| **Maheswari N** | **Frontend Developer** | UI/UX Design, React Component Architecture, & Aesthetic Styling. |
| **Santhya S** | **Full Stack Support** | Order Tracking Integration, End-to-End Testing, & QA Engineer. |
| **Vaijayanthi R** | **FE Dev & DevOps** | User/Admin Dashboards, Version Control (Git), & Final Deployment. |

---

## 🚀 Key Features
### 1. User Management
* **Secure Authentication:** Login/Signup with encrypted passwords.
* **Role-Based Access:** Dynamic views for **Admin**, **Customer**, **Restaurant Owner**, and **Delivery Partner**.

### 2. Ordering & Management
* **Restaurant Portal:** Owners can manage digital menus (Add/Update/Delete items).
* **Smart Cart:** Seamlessly add items, adjust quantities, and calculate totals.
* **Order Tracking:** Real-time status updates: `Placed` ➔ `Preparing` ➔ `Out for Delivery` ➔ `Delivered`.

### 3. Analytics & Admin Tools
* **Admin Dashboard:** High-level view of total sales, active users, and platform performance.
* **Reviews & Ratings:** Customer feedback loop for quality control.

---

## 🏗 System Architecture
The application follows a **Layered Architecture** pattern:
1.  **Presentation Layer:** React.js components for a modern, single-page application experience.
2.  **Service Layer:** Spring Boot handles business logic, order processing, and validation.
3.  **Data Access Layer:** Spring Data MongoDB for high-performance NoSQL operations.
4.  **Security Layer:** Interceptors to validate JWT tokens for protected API endpoints.

---

## 📂 Project Structure
### Backend (Spring Boot)
```text
com.fooddelivery
├── config          # Security & JWT configurations
├── controller      # REST API Endpoints
├── model           # MongoDB Document Entities
├── repository      # Data Access Layer
└── service         # Business Logic implementation
```

### Frontend (React)
```text
src/
├── components      # Reusable UI elements (Navbar, Cards, Buttons)
├── pages           # Main views (Home, Cart, Dashboard)
├── services        # Axios API configurations
└── context         # State management for User/Cart
```

---

## 🔧 Installation & Setup

### Prerequisites
* JDK 17 or higher
* Node.js & npm
* MongoDB Atlas or local MongoDB Compass

### 1. Backend Setup
```bash
# Navigate to backend directory
cd backend-folder

# Configure MongoDB URI in src/main/resources/application.properties
spring.data.mongodb.uri=your_mongodb_connection_string

# Run the application
mvn spring-boot:run
```

### 2. Frontend Setup
```bash
# Navigate to frontend directory
cd frontend-folder

# Install dependencies
npm install

# Start the development server
npm start
```

