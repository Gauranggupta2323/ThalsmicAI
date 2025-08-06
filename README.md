
# ThalAI Bridge Lite

A modern healthcare application focused on blood donation and transfusion management, built with Next.js and powered by generative AI for personalized user experiences.

## 🩸 Overview

ThalAI Bridge Lite is a simplified healthcare platform that connects patients, blood donors, and healthcare providers. The application leverages AI to provide personalized onboarding experiences and health tips based on user roles.

## ✨ Core Features

- **Basic Profile Management**: Simplified user profiles for patients and donors to manage essential information (name, contact, blood type)
- **Transfusion History Viewer**: Clean interface for patients to view their blood type and transfusion history
- **Donation Date Updates**: Easy way for donors to update their last donation date
- **Patient List Management**: Streamlined method for healthcare providers to input and oversee their patient lists
- **Personalized AI Onboarding**: Generative AI determines introductory health tips and information based on user roles
- **Multi-language Support**: Language selection for accessibility across different user groups
- **Role-based Dashboard**: Customized interfaces for patients, donors, and healthcare providers

## 🎨 Design System

- **Primary Color**: Soft blue (#A0D2EB) - evokes trust and tranquility
- **Background**: Light gray (#F0F4F8) - clean and modern feel
- **Accent**: Warm orange (#E59866) - draws attention to calls to action
- **Typography**: 'PT Sans' for clear, accessible text
- **Icons**: Flat, line-style healthcare and blood donation icons
- **Layout**: Card-based design for easy information access and readability
- **Interactions**: Subtle transitions and animations for smooth user experience

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd ThalsmicAI
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open in browser**
```bash
"$BROWSER" http://localhost:3000
```

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint

# AI development environment
npm run dev:ai
```

## 🏗️ Project Structure

```
ThalsmicAI/
├── src/
│   ├── app/
│   │   ├── dashboard/          # Role-based dashboard layouts
│   │   │   └── layout.tsx      # Main dashboard layout
│   │   └── login/              # Authentication pages
│   ├── ai/                     # AI and Genkit integrations
│   │   ├── genkit.ts          # AI configuration
│   │   └── dev.ts             # AI development flows
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   └── logo.tsx           # Application logo
│   └── types/                 # TypeScript type definitions
├── docs/
│   └── blueprint.md           # Project specifications
├── .idx/                      # Development container config
└── public/                    # Static assets
```

## 👥 User Roles

### Patients
- View blood type and transfusion history
- Access personalized health tips
- Manage basic profile information

### Donors
- Update last donation date
- Track donation history
- Receive donation reminders and tips

### Healthcare Providers
- Manage patient lists
- Access patient information
- View transfusion requirements

## 🤖 AI Features

The application uses Google's Genkit framework for AI-powered features:

- **Personalized Onboarding**: AI determines relevant health information based on user role
- **Health Tips**: Contextual advice and information
- **Language Localization**: AI-assisted content translation

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui components
- **Icons**: Lucide React
- **AI**: Google Genkit
- **Development**: Dev containers with Ubuntu 24.04.2 LTS

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Collapsible navigation for mobile devices
- Adaptive layouts for tablet and desktop
- Touch-friendly interface elements

## 🔧 Development Environment

This project is configured to run in a development container with:
- Ubuntu 24.04.2 LTS
- Node.js 20
- Pre-configured development tools
- Browser integration for testing

### Useful Commands

```bash
# View project structure
tree -I 'node_modules|.next'

# Check running processes
ps aux | grep node

# Monitor logs
tail -f .next/server.js

# Open browser from container
"$BROWSER" http://localhost:3000/dashboard?role=patient
```

## 📖 Documentation

- [Project Blueprint](docs/blueprint.md) - Detailed project specifications
- [API Documentation](docs/api.md) - API endpoints and usage
- [Deployment Guide](docs/deployment.md) - Production deployment instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

Need help? Contact our support team or check the help section in the dashboard.

---

**ThalAI Bridge Lite** - Connecting lives through technology and compassion.


