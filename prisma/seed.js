const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding CloudPilot DB...');

  await prisma.cluster.deleteMany();
  await prisma.deployment.deleteMany();
  await prisma.integration.deleteMany();
  await prisma.supportTicket.deleteMany();

  const clusters = [
    { name: 'us-east-1-k8s-prod', region: 'us-east-1', provider: 'AWS EKS', nodes: 64, cpuUsage: 42.8, memUsage: 68.4, status: 'HEALTHY' },
    { name: 'eu-west-1-gke-cluster', region: 'eu-west-1', provider: 'GCP GKE', nodes: 32, cpuUsage: 38.2, memUsage: 54.1, status: 'HEALTHY' },
    { name: 'ap-southeast-1-aks', region: 'ap-southeast-1', provider: 'Azure AKS', nodes: 16, cpuUsage: 51.4, memUsage: 72.0, status: 'HEALTHY' }
  ];

  for (const c of clusters) {
    await prisma.cluster.create({ data: c });
  }

  await prisma.deployment.createMany({
    data: [
      { name: 'payment-gateway-api', image: 'v4.12.0', replicas: 12, status: 'RUNNING' },
      { name: 'auth-vault-service', image: 'v2.8.4', replicas: 8, status: 'RUNNING' }
    ]
  });

  await prisma.integration.createMany({
    data: [
      { name: 'Datadog Telemetry Stream', provider: 'Datadog', status: 'CONNECTED' },
      { name: 'PagerDuty Incident Desk', provider: 'PagerDuty', status: 'CONNECTED' },
      { name: 'HashiCorp Vault Secrets', provider: 'HashiCorp', status: 'CONNECTED' }
    ]
  });

  console.log('CloudPilot DB seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
