import React from 'react';
import Link from 'next/link';

function About() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>About page here</h1>
      <br />
      <Link href="/">
        <h3>go to home page</h3>
      </Link>
    </div>
  );
}

export default About;