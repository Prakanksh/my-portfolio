// components/ScrollContainer.js
import React from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

export default function ScrollContainer() {
  return (
    <div className="scroll-wrapper">
      <div className="scroll-page"><About /></div>
      <div className="scroll-page"><Experience /></div>
      <div className="scroll-page"><Projects /></div>
    </div>
  );
}
