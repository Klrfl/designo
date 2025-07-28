# Designo

This repo contains the source code of my solution of Designo, a Guru frontendmentor.io challenge.

## Tech
- TinaCMS: Git-based content management in portable MDX and live editing
- React Router: powerful SSR-ready React framework
- Tailwind: for rapid prototyping

Check out live editing in action!

https://github.com/user-attachments/assets/d59a28b8-9991-46fb-9145-8fdf610a124d

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

Built with ❤️ by Efraim Munthe.
