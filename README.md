# slnnzmtl.xyz

A personal portfolio and blog website built with Vue 3, TypeScript, and Vite. This project showcases projects, blog articles, and more in a modern, responsive interface.

## 🚀 Features

- Modern Vue 3 application with TypeScript
- Responsive design with Tailwind CSS
- Blog with markdown support
- Projects showcase
- Docker-based deployment for development and production
- Nginx configuration for serving the application
- SSL support with Let's Encrypt

## 🛠️ Tech Stack

- **Frontend**: Vue 3, Vue Router, Pinia (state management)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Language**: TypeScript
- **Containerization**: Docker & Docker Compose
- **Server**: Nginx
- **SSL**: Let's Encrypt with Certbot

## 🏗️ Project Structure

```
slnnzmtl-xyz/
├── src/                  # Application source code
│   ├── assets/           # Static assets
│   ├── components/       # Reusable Vue components
│   ├── composables/      # Vue composables (reusable logic)
│   ├── helpers/          # Helper functions
│   ├── modals/           # Modal components
│   ├── router/           # Vue Router configuration
│   ├── stores/           # Pinia stores
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── views/            # Page components
│   ├── App.vue           # Root component
│   └── main.ts           # Application entry point
├── public/               # Public static assets
├── dist/                 # Build output
├── nginx/                # Nginx configuration files
├── certs/                # SSL certificates
├── certbot/              # Let's Encrypt Certbot files
├── maintenance/          # Maintenance mode page
└── docker-compose.yml    # Docker Compose configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Docker and Docker Compose (for containerized development/deployment)

### Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/slnnzmtl-xyz.git
   cd slnnzmtl-xyz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   Or using Docker:
   ```bash
   npm run docker:dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Production Build

1. Build for production:
   ```bash
   npm run build
   ```

   Or using Docker:
   ```bash
   npm run docker:build
   npm run docker:prod
   ```

## 🔒 SSL Setup

For SSL configuration, refer to the `SSL-SETUP.md` file in the project root. The project includes scripts for generating SSL certificates:

- `generate-ssl.sh`: Generate self-signed SSL certificates
- `troubleshoot-ssl.sh`: Troubleshoot SSL issues

## 🐳 Docker Deployment

The project includes Docker configurations for both development and production environments:

- Development: Uses the build-stage target in the Dockerfile with hot-reloading
- Production: Uses the production-stage target with Nginx serving optimized static files
- Maintenance: A separate container for displaying a maintenance page when needed

## 📝 License

[MIT License](LICENSE)

## 👤 Contact

- Website: [slnnzmtl.xyz](https://slnnzmtl.xyz)
