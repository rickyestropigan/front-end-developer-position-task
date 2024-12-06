import React, { Suspense, lazy, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react'

const LearningPage = lazy(() => import('../pages/FrontPage/LearningPage'))
const ThankYouPage = lazy(() => import('../pages/FrontPage/ThankYouPage'))

// Loading component
const LoadingFallback = () => (
    <div className="flex items-center justify-center h-screen">
      <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
    </div>
  )

  

  // Renders the main content for guest users, handling loading states
function GuestUser() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
            <Route path="/" element={<LearningPage/>}  />
            <Route path="/thank-you" element={<ThankYouPage/>}  />
            </Routes>
        </Suspense>
    );
}


 // Renders the main application content, including the GuestUser component
export default function Navigation() {

    return (
        <>
           <GuestUser />
        </>
    );
}
     

    