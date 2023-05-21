import Header from './Header';
import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';

export default function Shared() {
  return (
    <div>
      <Header />
      <main>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </div>
  );
}
