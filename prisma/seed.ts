import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding CloudPilot database...');

  await prisma.cluster.deleteMany();
  await prisma.deployment.deleteMany();

  await prisma.cluster.create({
    data: {
      name: 'prod-us-east-1a',
      provider: 'AWS EKS',
      region: 'us-east-1',
      status: 'HEALTHY',
      nodes: 24,
      cpuUsage: 42.5,
      memUsage: 68.2,
    },
  });

  await prisma.deployment.createMany({
    data: [
      {
        name: 'payment-gateway-service',
        replicas: 8,
        status: 'RUNNING',
        image: 'quay.io/acme/payment-api:v2.4.1',
      },
      {
        name: 'auth-jwt-verifier',
        replicas: 4,
        status: 'RUNNING',
        image: 'quay.io/acme/auth-service:v1.9.0',
      },
    ],
  });

  console.log('CloudPilot database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
