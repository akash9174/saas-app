'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Product Pages', path: '/product-pages' },
    { name: 'Payments', path: '/payments' },
    { name: 'Store', path: '/store' },
    { name: 'Setting', path: '/setting' },
  ];

  return (
    <aside style={{
      width: '220px',
      background: '#f2f2f2',
      padding: '20px',
      height: '100vh',
      position: 'sticky',
      top: 0
    }}>
      <h2 style={{ marginBottom: '1rem' }}>Menu</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {links.map(link => (
          <li key={link.path} style={{ marginBottom: '12px' }}>
            <Link
              href={link.path}
              style={{
                color: pathname === link.path ? 'blue' : 'black',
                textDecoration: 'none',
                fontWeight: pathname === link.path ? 'bold' : 'normal'
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
