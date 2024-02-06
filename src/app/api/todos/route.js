import { NextResponse } from 'next/server';
import React from 'react';

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos';
console.log(DATA_SOURCE_URL);

const route = () => {
  return (
    <div>
      <h1>This is api point</h1>
    </div>
  );
};

export default route;

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);
  const data = await res.json();
  return NextResponse.json(data);
}
