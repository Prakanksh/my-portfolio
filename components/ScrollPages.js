import React, { useRef, useEffect } from 'react';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';

export default function ScrollPages() {
  const containerRef = useRef();

  // Optional loop effect
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: '100%',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
      }}
    >
      <section style={sectionStyle}><Home /></section>

      <section style={sectionStyle}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <img 
            src="/me.jpeg" 
            alt="Prakanksha" 
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              marginBottom: '1rem',
              objectFit: 'cover',
            }} 
          />
          <h2>About Me</h2>
          <p style={{ maxWidth: '600px', marginTop: '1rem' }}>
            Hi! I&apos;m Prakanksha — a passionate developer, yoga enthusiast, and spiritual learner.
            I enjoy building thoughtful software and bringing creativity into tech.
          </p>
        </div>
      </section>

      <section style={sectionStyle}><Experience /></section>
      <section style={sectionStyle}><Projects /></section>
    </div>
  );
}

const sectionStyle = {
  scrollSnapAlign: 'start',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
};
