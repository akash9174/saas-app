export default function SettingsPage() {
  return (
    <div>
      <h1 style={headingStyle}>Settings</h1>
      <p style={descriptionStyle}>
        Manage your account preferences, notification settings, and security options.
      </p>

      <div style={sectionStyle}>
        <h2>Profile</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
      </div>

      <div style={sectionStyle}>
        <h2>Notifications</h2>
        <p>Email Notifications: Enabled</p>
        <p>Push Notifications: Disabled</p>
      </div>

      <div style={sectionStyle}>
        <h2>Security</h2>
        <p>2FA: Enabled</p>
        <p>Last Login: 2025-07-01 10:32 AM</p>
      </div>
    </div>
  );
}

// Styles
const headingStyle = {
  fontSize: '1.8rem',
  marginBottom: '1rem',
};

const descriptionStyle = {
  color: '#555',
  marginBottom: '2rem',
};

const sectionStyle = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '10px',
  marginBottom: '20px',
  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
};
