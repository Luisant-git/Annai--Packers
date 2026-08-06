# Annai Packers & Movers

A full-stack website for Annai Packers & Movers — a professional packing, moving and logistics company. Built as a public marketing site with enquiry and quote-request forms backed by a REST API. No admin panel yet (planned for a future phase).

## Tech Stack

**Frontend:** React 19 + Vite, Tailwind CSS v4, React Router DOM, Axios, Lucide React, Framer Motion, AOS (scroll animations)

**Backend:** Node.js + Express, Prisma ORM + PostgreSQL, Nodemailer

## Project Structure

```
Annai Packers & Movers/
├── frontend/           React + Vite app
│   └── src/
│       ├── components/ common, layout, home, services, gallery, testimonials, forms, seo
│       ├── pages/       Home, About, Services, ServiceDetails, Gallery, Testimonials, Faq, Contact, legal, 404
│       ├── layouts/     MainLayout (header + footer shell)
│       ├── hooks/       useFetch, useForm
│       ├── services/    axios instance + one module per API resource
│       └── utils/       constants, validators, icon map
│
└── backend/             Express API
    └── src/
        ├── controllers/ one per resource
        ├── routes/       one per resource + index
        ├── services/     mailer.js (Nodemailer)
        ├── middleware/   errorHandler, validateRequest, rateLimiter
        └── config/       env.js, prisma.js
    prisma/
        schema.prisma     Service, GalleryImage, Testimonial, Enquiry, QuoteRequest, FaqItem
        migrations/        initial migration (SQL, ready to apply)
        seed.js            seeds realistic content for every resource
```

## Getting Started

### Prerequisites

- Node.js 20+
- A running PostgreSQL server (v14+)

### 1. Backend setup

```
cd backend
npm install
```

Edit `backend/.env` and set `DATABASE_URL` to your PostgreSQL connection string, plus your SMTP credentials for email notifications:

```
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/annai_packers_movers?schema=public"
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
MAIL_TO=info@annaipackersmovers.com
```

Apply the database schema and seed sample content:

```
npm run prisma:deploy
npm run seed
```

Start the API (http://localhost:5000):

```
npm run dev
```

### 2. Frontend setup

```
cd frontend
npm install
```

Copy `.env.example` to `.env` if you need to point at a different API URL (defaults to `http://localhost:5000/api`).

Start the dev server (http://localhost:5173):

```
npm run dev
```

## API Overview

All routes are prefixed with `/api`.

| Method | Route                  | Description                          |
| ------ | ----------------------- | ------------------------------------ |
| GET    | `/services`             | List active services                 |
| GET    | `/services/:slug`       | Get one service with images          |
| GET    | `/gallery`               | List gallery images (`?category=`)   |
| GET    | `/testimonials`          | List approved testimonials           |
| GET    | `/faq`                   | List FAQ items                       |
| POST   | `/enquiries`             | Submit a contact enquiry (emails admin + auto-reply) |
| POST   | `/quotes`                | Submit a quote request (emails admin + auto-reply)   |

## Notes

- **No admin panel yet.** Content (services, gallery, testimonials, FAQ) is managed directly via `prisma/seed.js` or the database for now. The schema and API were designed so an admin panel can be layered on top later without breaking changes.
- **Windows note:** because this project lives under a folder path containing `&`, the standard `.bin` shims that `npm` generates on Windows fail to resolve (`'...' is not recognized as an internal or external command`). Both `package.json` files route their scripts through `node ./node_modules/<pkg>/...` directly to work around this — keep that pattern if you add new CLI-based scripts.
