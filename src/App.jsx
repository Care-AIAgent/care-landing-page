import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>CARE AI Agent</h1>
      <p>The Human Touch in a Digital World.</p>
      <section>
        <h2>Token Sale</h2>
        <p>Join the $CARE token sale to support our AI Agent development.</p>
        <button onClick={() => alert('Token sale coming soon!')}>Learn More</button>
      </section>
    </div>
  );
}
