# 🏠 Property Data Analyzer API

A backend REST API designed to help analyze property data based on clientele data and what a customer is looking for. By typing in an address, users can retrieve detailed information about a specific property — from high-level details like property type all the way down to when the property was set to offset.

## Overview

The Property Data Analyzer API enables users to query detailed property information by simply providing an address. The API aggregates and analyzes data from external sources, leveraging AI to surface meaningful insights tailored to each client's needs.

**Key capabilities:**

- Look up a property by address
- Retrieve structured property details (type, size, lot info, offset dates, and more)
- AI-assisted data analysis via OpenAI
- Real estate data sourced from the RentCast API

---

## Tech Stack

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| **TypeScript**    | Type-safe backend development     |
| **Node.js**       | JavaScript runtime environment    |
| **Express.js**    | REST API framework                |
| **OpenAI API**    | AI-powered property data analysis |
| **RentCast API**  | Property and rental market data   |
| **Docker**        | Containerization                  |
| **GCP Cloud Run** | Serverless container deployment   |

---

## Architecture

```
Client Request (Address)
        │
        ▼
  Express.js REST API
        │
   ┌────┴────┐
   │         │
RentCast   OpenAI
   API       API
   │         │
   └────┬────┘
        │
   Aggregated &
   Analyzed Response
        │
        ▼
     Client
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Docker](https://www.docker.com/)
- [GCP Account](https://cloud.google.com/) (for deployment)
- A valid **OpenAI API key**
- A valid **RentCast API key**

### Environment Variables

Create a `.env` file in the root of the project:

```env
PORT=3000
OPENAI_API_KEY=your_openai_api_key_here
RENTCAST_API_KEY=your_rentcast_api_key_here
NODE_ENV=development
```

> ⚠️ Never commit your `.env` file. It is included in `.gitignore`.

### Running Locally

```bash
# Install dependencies
npm install

# Run in development mode (with hot reload)
npm run dev

# Build and run in production mode
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a new feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

--- 

For analysis route make sure you put query parameter as analysis?UserAddress= user address to get the analysis. 

> Built with TypeScript, Node.js, Express, OpenAI, RentCast, Docker, and GCP Cloud Run.
