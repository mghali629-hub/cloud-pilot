# Contributing to CloudPilot

Thank you for contributing to CloudPilot!

## Getting Started

1. **Fork the Repository**: Clone your fork locally.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Setup Database**:
   ```bash
   cp .env.example .env
   npx prisma db push
   npx prisma db seed
   ```
4. **Run Dev Server**:
   ```bash
   npm run dev
   ```

## Development Guidelines

- Keep styling dark-theme consistent with CloudPilot tokens (`#090d16`).
- Ensure all pages compile cleanly with `npm run build`.
