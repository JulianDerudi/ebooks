import React from 'react';
import '../styles/variables.css';
import '../styles/components.css';
import '../styles/layout.css';
import '../styles/reader.css';

export default function App({ children }) {
  return (
    <div className="main-wrapper">
      {children}
    </div>
  );
}
