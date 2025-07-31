"use client";

import React, { useEffect } from 'react';

// React Query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Toast
import { Toaster } from 'react-hot-toast';

export const queryClient = new QueryClient();


export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Create a client

  // useEffect(() => {
  //   if (analytics) {
  //     logEvent(analytics, "screen_view", {
  //       firebase_screen: "HomePage",
  //       firebase_screen_class: "Home",
  //     })
  //   }
  // }, []);

  return (
    <QueryClientProvider
      client={queryClient}>
      {/* <div
        className="w-full min-h-[calc(100vh-10rem)] pb-5 scroll-smooth"> */}
      {children}
      <Toaster />
      {/* </div> */}
    </QueryClientProvider>
  )
}