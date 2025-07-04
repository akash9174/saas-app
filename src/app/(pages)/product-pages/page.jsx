export default function PaymentsPage() {
  return (
    <div>
      <h1 style={headingStyle}>Payments</h1>
      <p style={textStyle}>
        Here you can track, manage, and export all your transactions.
      </p>

      <ul style={listStyle}>
        <li>✅ Payment #1001 – $250.00 – Completed</li>
        <li>✅ Payment #1002 – $199.00 – Completed</li>
        <li>⏳ Payment #1003 – $120.00 – Pending</li>
        <li>❌ Payment #1004 – $95.00 – Failed</li>
      </ul>
    </div>
  );
}

const headingStyle = {
  fontSize: '1.8rem',
  marginBottom: '1rem',
};

const textStyle = {
  fontSize: '1rem',
  marginBottom: '1rem',
  color: '#444',
};

const listStyle = {
  background: '#f9fafb',
  padding: '20px',
  borderRadius: '8px',
  lineHeight: '1.6',
};
