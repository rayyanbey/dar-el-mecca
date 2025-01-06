import React from 'react';
import Hero from './Hero';
import Description from './Description';
import PackageDetail from './PackageDetail';
import BookSeat from './BookSeat';
import AllPackages from './AllPackages';

async function page({ params }) {
  // Ensure params.snug is treated as a string
  const snug = String(params.snug);

  return (
    <div>
      <Hero />
      {snug.includes("all") ? (
        <AllPackages />
      ) : (
        <>
          <Description />
          <div className="w-full h-[1px] bg-[#00000014]"></div>
          <PackageDetail />
        </>
      )}
      <BookSeat />
    </div>
  );
}

export default page;
