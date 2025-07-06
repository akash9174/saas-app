'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '../../components/Sidebar';

export default function PagesLayout({ children }) {
  const pathname = usePathname();
  const layoutRoutes = ['/dashboard', '/product', '/payments', '/store', '/setting']; // Define where layout applies

  const shouldApplyLayout = layoutRoutes.some(route => pathname.startsWith(route));

  return shouldApplyLayout ? (
    <div style={wrapperStyle}>
      <Sidebar />
      <div style={contentWrapperStyle}>{children}</div>
    </div>
  ) : (
    <>{children}</> // No layout, just raw page content
  );
}

const wrapperStyle = {
  display: 'flex',
  minHeight: '100vh',
  fontFamily: 'Segoe UI, sans-serif',
  backgroundColor: '#f5f7fa',
};

const contentWrapperStyle = {
  flexGrow: 1,
  padding: '40px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  margin: '40px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
};
