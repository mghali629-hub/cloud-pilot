import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://cloudpilot.io'),
  title: {
    default: 'CloudPilot | Kubernetes Orchestration & FinOps Platform',
    template: '%s | CloudPilot',
  },
  description: 'Enterprise Kubernetes cluster automation, automated cost optimization, and GitOps deployments.',
  keywords: ['Kubernetes', 'K8s', 'Cloud Orchestration', 'DevOps', 'FinOps', 'GitOps', 'Multi-cloud'],
  openGraph: {
    title: 'CloudPilot | Automated Kubernetes Management',
    description: 'Reduce Kubernetes infrastructure costs by 60% with zero-downtime cluster orchestration.',
    url: 'https://cloudpilot.io',
    siteName: 'CloudPilot Inc.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloudPilot Platform',
    description: 'Enterprise Kubernetes & FinOps Management.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0A0F1D] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
