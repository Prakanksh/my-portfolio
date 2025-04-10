import React from 'react';

export default function About() {
  return (
    <div style={{ textAlign: 'center' }}>
      <img 
        src="/me.jpeg" 
        alt="Prakanksha" 
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1rem',
        }}
      />
      <h2>About Me</h2>
      <p style={{ maxWidth: '400px', margin: '0 auto', lineHeight: '1.6' }}>
        I&apos;m Prakanksha — a passionate full-stack developer and yoga instructor.
        I love blending technology and creativity, and I&apos;m always excited to learn and build meaningful digital experiences.
      </p>
    </div>
  );
}
