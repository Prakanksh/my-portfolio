export default function Experience() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        textAlign: 'center',
        maxWidth: '600px',
      }}>
        <h2>Experience</h2>
        <p style={{ marginTop: '1rem' }}>
          I have worked as a full-stack developer with experience in Node.js, Vue, Angular, and more.
          From building fintech dashboards to crafting elegant UIs, I’ve worn many hats in fast-paced teams.
        </p>
        <a 
          href="https://drive.google.com/file/d/1upnMJ0fAQx3OCHrcIsON-lokWSwt7wSx/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            marginTop: '1.5rem',
            color: '#4fa3ff',
            textDecoration: 'underline',
            fontWeight: 'bold',
          }}
        >
          View My Resume
        </a>
      </div>
    );
  }
  