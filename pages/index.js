export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#111',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src="/me.jpeg" 
          alt="Prakanksha" 
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            marginBottom: '1.5rem',
            objectFit: 'cover',
          }} 
        />
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Prakanksha</h1>
        <p>Welcome to my portfolio</p>
      </div>

      <footer style={{
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        backgroundColor: '#1a1a1a'
      }}>
        <a href="https://www.linkedin.com/in/prakankshapn" className="contact-link">LinkedIn</a>
        <a href="https://www.instagram.com/rajyogini_prakanksha/" className="contact-link">Instagram</a>
        <a href="mailto:nagpalprakankshabvpy@gmail.com" className="contact-link">Email</a>
        <a href="https://github.com/Prakanksh" className="contact-link">GitHub</a>
      </footer>
    </div>
  );
}
