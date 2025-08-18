"use client";

import React, { JSX } from 'react';
import { useRouter } from 'next/navigation';

// components
import DefaultLayout from '@/layouts/default-layout';
import FlowerSVG from '@/components/flower-svg';
import { Typography } from '@/components/ui/typography';

// icons
import { Home, ArrowLeft, Search, Heart } from 'lucide-react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}


export default function ErrorPage(): JSX.Element {
  const router = useRouter();

  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-25 to-yellow-50 relative overflow-hidden" style={{ backgroundColor: '#fcefe3' }}>
        {/* Top Right Flower */}
        <FlowerSVG
          className="absolute top-0 right-0 w-80 h-80 opacity-60 animate-pulse"
          position="top-right"
        />

        {/* Bottom Left Flower */}
        <FlowerSVG
          className="absolute bottom-0 left-0 w-96 h-96 opacity-40 animate-pulse"
          position="bottom-left"
        />

        {/* Additional decorative elements */}
        <div className="absolute top-20 right-40 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' } as React.CSSProperties} />
        <div className="absolute top-32 right-60 w-3 h-3 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '1s' } as React.CSSProperties} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' } as React.CSSProperties} />
        <div className="absolute bottom-60 left-40 w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '2s' } as React.CSSProperties} />

        {/* Main Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center max-w-2xl">
            {/* Error Number */}
            <div className="mb-8">
              <Typography
                variant="h1"
                className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent">
                404
              </Typography>
              <div className="mt-4 w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
            </div>

            {/* Error Message */}
            <div className="mb-12">
              <Typography
                variant="h2"
                className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900 mb-6">
                Oops! Page Not Found
              </Typography>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                It looks like this page decided to go on a little shopping adventure of its own!
                {`Don't`} worry though, {`we'll`} help you find your way back to the beautiful world of Melu fashion.
              </p>

              {/* Decorative element */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 blur-lg opacity-30 animate-pulse" />
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                    <Heart className="w-8 h-8 mx-auto text-orange-500" />
                    <p className="mt-2 text-sm font-medium text-gray-800">Still Crafted with Love</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => {
                  router.push('/');
                }}>
                <div className="flex items-center justify-center gap-2">
                  <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Go Home
                </div>
              </button>

              <button
                className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-orange-300 hover:text-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
                onClick={() => {
                  router.back();
                }}>
                <div className="flex items-center justify-center gap-2">
                  <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Go Back
                </div>
              </button>
            </div>

            {/* Search Suggestion */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Search className="w-6 h-6 text-gray-500" />
                <Typography
                  variant="h3"
                  className="text-lg font-semibold text-gray-900"
                >
                  What were you looking for?
                </Typography>
              </div>
              <p className="text-gray-600 mb-6">
                Try searching for what you need, or explore our collections
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => {
                    router.push("/products");
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full text-orange-800 font-medium text-sm cursor-pointer hover:from-orange-200 hover:to-amber-200 transition-all">
                  New Arrivals
                </button>
                <button
                  onClick={() => {
                    router.push("/products");
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full text-red-800 font-medium text-sm cursor-pointer hover:from-red-200 hover:to-orange-200 transition-all">
                  {`Women's`} Collection
                </button>
                <button
                  onClick={() => {
                    router.push("/products");
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full text-amber-800 font-medium text-sm cursor-pointer hover:from-amber-200 hover:to-yellow-200 transition-all">
                  Sale Items
                </button>
                <button
                  onClick={() => {
                    router.push("/products");
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full text-yellow-800 font-medium text-sm cursor-pointer hover:from-yellow-200 hover:to-orange-200 transition-all">
                  Accessories
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating animation elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '3s' } as React.CSSProperties} />
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-amber-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '4s' } as React.CSSProperties} />
      </div>
    </DefaultLayout>
  );
}