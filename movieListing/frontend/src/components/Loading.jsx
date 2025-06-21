import React from "react";
import { FilmIcon } from "@heroicons/react/24/solid";

const Loading = () => (
  <div className="flex flex-col items-center justify-center min-h-[40vh] animate-fade-in">
    <div className="relative mb-4">
      <FilmIcon className="w-16 h-16 text-amber-400 animate-spin-slow drop-shadow-lg" />
      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-400 opacity-70 blur-md animate-pulse"></div>
    </div>
    <h2 className="text-2xl font-bold text-indigo-300 mb-2 tracking-wide animate-pulse">
      Loading movies...
    </h2>
    <p className="text-gray-400">Please wait while we fetch the latest blockbusters!</p>
    <style>
      {`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-spin-slow {
          animation: spin 2.5s linear infinite;
        }
      `}
    </style>
  </div>
);

export default Loading;