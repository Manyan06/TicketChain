# 🎟️ TicketVerse — Real-Time Event Ticketing Platform

![EventChain Logo](./assets/eventchain-logo-1.png)

A modern event ticketing platform that combines AI assistance, blockchain technology, and real-time updates to provide a seamless event discovery and ticket purchasing experience.

## 🛠 Tech Stack

### Frontend
- 🧩 Framework: React with JavaScript
- 🧱 UI Components: shadcn/ui + Tailwind CSS
- ⚙️ State Management: React Query
- 🧭 Routing: Wouter
- 🔁 Real-time Updates: WebSocket-based Fluvio integration
- 🎨 Styling:
  - Tailwind CSS for utility-first styling
  - Custom animations and transitions
  - Responsive design
- 🤖 AI Integration: GROQ-powered multimodal assistant
  - Text chat
  - Voice recognition
  - Image analysis

### Backend
- 🖥 Runtime: Node.js
- 🚀 Framework: Express.js
- 🗃 Database: MongoDB
- 📡 Real-time Events: Fluvio streaming service
- 🧠 AI/ML: GROQ API integration
- ⛓ Blockchain: Base for NFT tickets
- 🔐 Authentication: Session-based auth with Passport.js
- 💳 Payment Processing: Stripe integration

## ✨ Key Features

1. 🧠 Multimodal Event Discovery
   - Text-based search
   - Voice commands
   - Image-based event recognition
   - AI-powered recommendations

2. 🔴 Real-time Updates
   - Live ticket availability
   - Dynamic pricing updates
   - Event status changes
   - Instant notifications

3. 🪙 Blockchain Integration
   - NFT-based ticket minting
   - Secure ticket ownership
   - Transfer capabilities
   - Blockchain verification

4. 💬 Smart Assistant
   - GROQ-powered event recommendations
   - Natural language processing
   - Multi-language support
   - Context-aware responses

## 🏗 Architecture

![Architecture Diagram](./assets/architecture-diagram.png)

- 🧩 Client-Server Architecture
- 🔗 RESTful API Design
- 🔄 WebSocket for Real-time Communication
- 🧱 Microservices Components:
  - Event Service
  - Ticket Service
  - Payment Service
  - NFT Service
  - AI Assistant Service

## 🧑‍💻 Development:
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start


### 🔐 Environment Variables:
Create a .env file in the /server folder with the following:


- DATABASE_URL=your_postgres_url
- GROQ_API_KEY=your_groq_api_key
- BASE_RPC_URL=https://mainnet.base.org
- STRIPE_SECRET_KEY=your_stripe_key
- SESSION_SECRET=your_session_secret


### 🌍 Deployment:
This project is cloud-ready and can be deployed to:

- Netlify (Frontend)
- Railway / Render / Fly.io (Backend)
- Any PostgreSQL-compatible DB provider (e.g., Supabase, Neon)
- IPFS or Base-compatible blockchain for NFT metadata

## 📜 License:
License — free to use, modify, and share.

###👤 Author:
Shubham Kumar & Manya

Repo: https://github.com/Manyan06/eventTicket
Repo: https://github.com/kumar-shubham1/Event-Ticket-system


## 🙋🏻‍♂️ Questions or Contributions?

Open an issue or pull request on GitHub
Connect: [Manyan06](https://github.com/Manyan06) 
Connect: [github.com/kumar-shubham1](https://github.com/kumar-shubham1)

---
