import { notFound } from 'next/navigation';
import Link from 'next/link';

const caseStudies = [
  {
    slug: 'fintech-corp',
    companyName: 'FintechCorp Global',
    metrics: '78% Infrastructure Cost Reduction',
    story: 'FintechCorp migrated 450+ microservices to CloudPilot automated Kubernetes control planes, decreasing failover latency to under 2 seconds while reducing cloud spending by $1.4M annually.',
  },
  {
    slug: 'health-tech',
    companyName: 'HealthTech Systems',
    metrics: '99.999% Uptime Guarantee',
    story: 'HealthTech leveraged CloudPilot zero-trust deployment pipelines and HIPAA-compliant cluster orchestration to serve 12M active patients uninterrupted during peak telemedicine loads.',
  },
  {
    slug: 'media-stream',
    companyName: 'MediaStream International',
    metrics: '10x Faster Deployment Speed',
    story: 'By implementing CloudPilot GitOps workflows, MediaStream eliminated manual release engineering, accelerating production release frequency from bi-weekly to 40+ deployments per day.',
  },
];

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function CustomerCaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  return (
    <main style={{ background: '#090d16', minHeight: '100vh', color: '#f0f4fc', fontFamily: "'Inter', sans-serif", padding: '100px 5% 60px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link href="/customers" style={{ color: '#38bdf8', textDecoration: 'none', fontSize: '13px', letterSpacing: '1px' }}>← BACK TO CASE STUDIES</Link>
        <div style={{ margin: '30px 0 40px' }}>
          <span style={{ background: 'rgba(56,189,248,0.15)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.3)', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>CUSTOMER STORY</span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', margin: '16px 0 8px', color: '#f0f4fc' }}>{cs.companyName}</h1>
          <p style={{ color: '#38bdf8', fontSize: '1.4rem', fontWeight: '700' }}>Metrics: {cs.metrics}</p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '36px', lineHeight: '1.9', color: '#94a3b8', fontSize: '1.1rem' }}>
          <h2 style={{ color: '#f0f4fc', fontSize: '1.4rem', fontWeight: '700', marginBottom: '16px' }}>The Challenge & Solution</h2>
          <p>{cs.story}</p>
        </div>
      </div>
    </main>
  );
}
