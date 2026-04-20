# QuickBite - Online Food Delivery Application

## Tech Stack
- **Backend**: Java 17, Spring Boot 3.2, Spring Security, JWT
- **Frontend**: React 18, React Router, Axios
- **Database**: MongoDB

---

## Setup Instructions

### Prerequisites
- JDK 17+
- Node.js 18+
- MongoDB running on localhost:27017

### 1. Start Backend
```bash
cd backend
mvn spring-boot:run
# Runs on http://localhost:8080
```

### 2. Start Frontend
```bash
cd frontend
npm install
npm start
# Runs on http://localhost:3000
```

### 3. Create First Admin User
Register normally at /register, then manually update the role field in MongoDB:
```
db.users.updateOne({email:"admin@quickbite.com"}, {$set:{role:"ADMIN"}})
```

---

## API Endpoints

| Method | Endpoint | Role | Description |
|--------|----------|------|-------------|
| POST | /api/auth/register | Public | Register user |
| POST | /api/auth/login | Public | Login, returns JWT |
| GET | /api/restaurants/public/all | Public | List active restaurants |
| GET | /api/restaurants/public/{id} | Public | Get restaurant |
| GET | /api/restaurants/my | Owner | Owner's restaurants |
| POST | /api/restaurants | Owner | Add restaurant |
| PUT | /api/restaurants/{id} | Owner | Update restaurant |
| DELETE | /api/restaurants/{id} | Owner | Delete restaurant |
| GET | /api/menu/public/{restaurantId} | Public | Get menu |
| POST | /api/menu | Owner | Add menu item |
| PUT | /api/menu/{id} | Owner | Update menu item |
| DELETE | /api/menu/{id} | Owner | Delete menu item |
| POST | /api/orders | Customer | Place order |
| GET | /api/orders/my | Customer | My orders |
| GET | /api/orders/restaurant/{id} | Owner | Restaurant orders |
| PUT | /api/orders/{id}/status | Any | Update order status |
| GET | /api/orders/delivery/available | Delivery | Available orders |
| GET | /api/orders/delivery/my | Delivery | My deliveries |
| GET | /api/orders/admin/all | Admin | All orders |
| POST | /api/reviews | Customer | Add review |
| GET | /api/reviews/restaurant/{id} | Public | Get reviews |
| GET | /api/admin/stats | Admin | Dashboard stats |
| GET | /api/admin/users | Admin | All users |

---

## User Roles
| Role | Default Route | Capabilities |
|------|--------------|--------------|
| CUSTOMER | /restaurants | Browse, order, track, review |
| RESTAURANT_OWNER | /owner/restaurants | Manage restaurants & menus, update order status |
| DELIVERY_PARTNER | /delivery/available | Accept & deliver orders |
| ADMIN | /admin | Full platform view, stats |

---

## Team Responsibilities

| Member | Role | Files to Work On |
|--------|------|-----------------|
| **Srivarshini R** | Team Leader | README.md, Documentation, Postman collection, Final presentation |
| **Harshini K** | Backend Developer | `backend/src/main/java/com/quickbite/` — all Java files (models, controllers, repositories, security) |
| **Maheswari N** | Frontend Developer | `frontend/src/index.css`, `frontend/src/pages/` — all page UI styling and layout |
| **Santhya S** | Full Stack Support | `frontend/src/pages/MyOrders.js`, `OwnerOrders.js`, `DeliveryAvailable.js`, `DeliveryMy.js` — order tracking flow end-to-end |
| **Vaijayanthi R** | FE Dev & DevOps | `frontend/src/pages/AdminDashboard.js`, `AdminUsers.js`, `AdminOrders.js`, GitHub repo setup, deployment |

