# Deployment Guide — CloudPilot

CloudPilot is a Next.js 14 App Router application.

## Vercel Deployment

1. Push your repository to GitHub.
2. Connect to Vercel.
3. Set build command: `npx prisma generate && npx prisma db push && next build`.

## Docker Containerization

```bash
docker build -t cloudpilot .
docker run -p 3000:3000 cloudpilot
```
