
# QuickBite: Online Food Delivery Application

**A Java Full Stack Hackathon Project** *Developed by Team QuickBite*

---

## 📌 Project Overview
QuickBite is a robust, scalable, and user-friendly food delivery platform designed to bridge the gap between customers, local restaurants, and delivery partners. Beyond standard ordering, QuickBite introduces social collaboration and eco-conscious features to modernize the food delivery experience.

### 🎯 Key Objectives
* **Scalability:** Built with Spring Boot and MongoDB to handle high transaction volumes.
* **Security:** Role-based access control using JWT (JSON Web Tokens).
* **Innovation:** Real-time group collaboration and gamified sustainability.

---

## 🛠 Tech Stack
| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, Tailwind CSS, Axios, Context API |
| **Backend** | Java 17, Spring Boot, Spring Security, **Spring WebSockets** |
| **Database** | MongoDB (NoSQL) |
| **Security** | JWT (JSON Web Token), BCrypt Encryption |
| **Tools** | Git, Postman, Maven, VS Code / IntelliJ |

---

## 👥 Team Roles & Responsibilities
| Name | Role | Primary Focus |
| :--- | :--- | :--- |
| **Srivarshini R** | **Team Leader** | Project Architecture, Documentation, & Team Coordination. |
| **Harshini K** | **Backend Developer** | Spring Boot API, **WebSocket Configuration**, & MongoDB Schema. |
| **Maheswari N** | **Frontend Developer** | UI/UX Design, React Component Architecture, & **Group Session UI**. |
| **Santhya S** | **Full Stack Support** | **Bill Splitting Logic**, End-to-End Testing, & QA Engineer. |
| **Vaijayanthi R** | **FE Dev & DevOps** | Dashboards, **Sustainability Gamification**, & Deployment. |

---

## 🚀 Key Features

### 1. User Management
* **Secure Authentication:** Login/Signup with encrypted passwords.
* **Role-Based Access:** Dynamic views for Admin, Customer, Restaurant Owner, and Delivery Partner.

### 2. Ordering & Management
* **Restaurant Portal:** Owners can manage digital menus (Add/Update/Delete items).
* **Smart Cart:** Seamlessly add items, adjust quantities, and calculate totals.
* **Order Tracking:** Real-time status updates via WebSockets.

### 3. 🌟 Innovation: Group Ordering & Bill Splitting
* **Shared Sessions:** A user creates a "Group Session" and shares a unique link.
* **Real-time Collaboration:** Multiple friends can add items to the same cart simultaneously using **WebSockets**.
* **Automated Bill Splitting:** At checkout, the system calculates individual totals, showing exactly what each person owes based on their selections.



### 4. 🌿 Innovation: Eco-Friendly "Zero-Waste" Toggle
* **Opt-out System:** A checkout toggle to opt-out of plastic cutlery and napkins in exchange for "Green Coins."
* **Sustainability Gamification:** Users earn a "Green Score." Reaching milestones unlocks "Green Hero" badges and exclusive discounts.
* **Metadata Tracking:** Leverages MongoDB's flexible schema to track user sustainability metrics.

### 5. Analytics & Admin Tools
* **Admin Dashboard:** High-level view of total sales, active users, and platform performance.
* **Reviews & Ratings:** Customer feedback loop for quality control.

---

## 🏗 System Architecture
The application follows a **Layered Architecture** pattern:
1.  **Presentation Layer:** React.js components for a modern, single-page application experience.
2.  **Service Layer:** Spring Boot handles business logic, WebSocket messaging, and bill calculation.
3.  **Data Access Layer:** Spring Data MongoDB for high-performance NoSQL operations.
4.  **Security Layer:** Interceptors to validate JWT tokens for protected API endpoints.



---

## 📂 Project Structure
### Backend (Spring Boot)
```text
com.fooddelivery
├── config          # Security, JWT & WebSocket configurations
├── controller      # REST & Message endpoints
├── model           # MongoDB Documents (User, Order, Session)
├── repository      # Data Access Layer
└── service         # Business Logic (Bill Splitting, Gamification)
```

### Frontend (React)
```text
src/
├── components      # Reusable UI (Navbar, GreenToggle, SharedCart)
├── pages           # Views (GroupSession, Home, Admin)
├── services        # Axios & WebSocket (Stomp) configurations
└── context         # State management for User/Cart/Group
```

---

## 🔧 Installation & Setup

### 1. Backend Setup
```bash
# Configure MongoDB URI in src/main/resources/application.properties
spring.data.mongodb.uri=your_mongodb_connection_string

# Run the application
mvn spring-boot:run
```

### 2. Frontend Setup
```bash
# Install dependencies
npm install

# Start the development server
npm start
```
