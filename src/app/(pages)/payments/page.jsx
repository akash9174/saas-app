const mockPayments = [
  { id: 1001, amount: 250, status: 'Completed', date: '2025-07-01' },
  { id: 1002, amount: 199, status: 'Completed', date: '2025-06-28' },
  { id: 1003, amount: 120, status: 'Pending', date: '2025-06-27' },
  { id: 1004, amount: 95, status: 'Failed', date: '2025-06-25' },
];

export default function PaymentsPage() {
  return (
    <div>
      <h1 style={headingStyle}>Payments</h1>
      <p style={descriptionStyle}>
        Monitor recent transactions and payment activity.
      </p>

      <div style={summaryStyle}>
        <div style={cardStyle}>
          <h3>Total Payments</h3>
          <p>$664</p>
        </div>
        <div style={cardStyle}>
          <h3>Completed</h3>
          <p>$449</p>
        </div>
        <div style={cardStyle}>
          <h3>Pending</h3>
          <p>$120</p>
        </div>
      </div>

      <h2 style={{ marginTop: '30px' }}>Recent Transactions</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>ID</th>
            <th style={thTdStyle}>Amount</th>
            <th style={thTdStyle}>Status</th>
            <th style={thTdStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {mockPayments.map((payment) => (
            <tr key={payment.id}>
              <td style={thTdStyle}>#{payment.id}</td>
              <td style={thTdStyle}>${payment.amount}</td>
              <td style={thTdStyle}>
                <span style={getStatusBadgeStyle(payment.status)}>
                  {payment.status}
                </span>
              </td>
              <td style={thTdStyle}>{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Styles
const headingStyle = {
  fontSize: '1.8rem',
  marginBottom: '0.5rem',
};

const descriptionStyle = {
  color: '#555',
  marginBottom: '2rem',
};

const summaryStyle = {
  display: 'flex',
  gap: '20px',
  marginBottom: '20px',
  flexWrap: 'wrap',
};

const cardStyle = {
  flex: '1 1 200px',
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '10px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
};

const thTdStyle = {
  padding: '12px 16px',
  borderBottom: '1px solid #eee',
  textAlign: 'left',
};

function getStatusBadgeStyle(status) {
  let bgColor = '#e5e7eb';
  let textColor = '#111827';

  if (status === 'Completed') {
    bgColor = '#d1fae5';
    textColor = '#065f46';
  } else if (status === 'Pending') {
    bgColor = '#fef3c7';
    textColor = '#92400e';
  } else if (status === 'Failed') {
    bgColor = '#fee2e2';
    textColor = '#991b1b';
  }

  return {
    padding: '4px 10px',
    borderRadius: '999px',
    fontSize: '0.85rem',
    fontWeight: 500,
    backgroundColor: bgColor,
    color: textColor,
  };
}
