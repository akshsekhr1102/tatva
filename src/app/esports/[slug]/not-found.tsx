import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Responsive Background Image */}
      <picture>
        <source
          srcSet="/esports/not-found-lg.avif"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/esports/not-found-md.avif"
          media="(min-width: 640px)"
        />
        <img
          src="/esports/not-found-mobile.avif"
          alt="Not Found"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
      </picture>

      {/* Content */}
      <h1 className="text-white text-4xl font-bold mb-4 relative">
        Seems like you&apos;re lost
      </h1>
      <p className="text-gray-300 text-lg mb-6 relative">
        It could be you. It could be us. But let&apos;s take you back home.
      </p>
      <Link
        href="/"
        className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition relative"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
