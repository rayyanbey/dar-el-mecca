import React from 'react';
import Hero from './Hero';

async function page({ params }) {
  return (
    <div>
      <h1>{params.snug}</h1>
      <Hero/>
    </div>
  );
}

export default page;
