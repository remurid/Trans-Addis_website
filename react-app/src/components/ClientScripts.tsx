// 'use client';

// import { useEffect } from 'react';

// export default function ClientScripts() {
//   useEffect(() => {
//     // Only run on client side
//     if (typeof window === 'undefined') {
//       console.log('ClientScripts: Running on server, skipping client-side code');
//       return;
//     }

//     console.log('ClientScripts: Running on client side');

//     // Remove custom cursor class to show default cursor
//     document.body.classList.remove('custom-cursor');

//     // Create a simple test element to show ClientScripts is working
//     const testElement = document.createElement('div');
//     testElement.textContent = '✅ ClientScripts Active - Cursor should be visible now!';
//     testElement.style.position = 'fixed';
//     testElement.style.top = '10px';
//     testElement.style.right = '10px';
//     testElement.style.background = 'green';
//     testElement.style.color = 'white';
//     testElement.style.padding = '5px 10px';
//     testElement.style.zIndex = '999999';
//     testElement.style.fontSize = '12px';
//     testElement.style.borderRadius = '3px';
//     testElement.style.fontFamily = 'Arial, sans-serif';
//     testElement.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
//     document.body.appendChild(testElement);
//     console.log('Test element created - ClientScripts is working!');

//     // Remove test element after 5 seconds
//     setTimeout(() => {
//       if (testElement.parentNode) {
//         testElement.parentNode.removeChild(testElement);
//         console.log('Test element removed');
//       }
//     }, 5000);

//     // Initialize WOW.js
//     const initWOW = async () => {
//       try {
//         console.log('Initializing WOW.js...');
//         const WOW = (await import('wowjs')).default;
//         const wow = new WOW({
//           boxClass: 'wow',
//           animateClass: 'animated',
//           offset: 0,
//           mobile: true,
//           live: true,
//           callback: function(box: Element) {
//             console.log('WOW: animating element:', box);
//           },
//           scrollContainer: null,
//           resetAnimation: true,
//         });
//         wow.init();
//         console.log('WOW.js initialized successfully');
//       } catch (error) {
//         console.error('Failed to initialize WOW.js:', error);
//       }
//     };

//     // Initialize WOW.js only
//     initWOW();

//   }, []);

//   return null;
// }
"use client";

import { useEffect } from "react";
import "animate.css/animate.min.css";

export default function ClientScripts() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent multiple initializations
    if ((window as any).wowInitialized) return;
    (window as any).wowInitialized = true;

    async function initWOW() {
      try {
        console.log("Initializing WOW.js...");

        // @ts-ignore
        const WOW = (await import("wowjs/dist/wow.js")).WOW;

        new WOW({
          // live: true,
          // offset: 0,
          // mobile: true,
          boxClass: "wow",
          animateClass: "animate__animated",
          offset: 0,
          mobile: true,
          live: false,
          resetAnimation: false,
        }).init();

        console.log("WOW initialized successfully");
      } catch (error) {
        console.error("Failed to initialize WOW.js:", error);
      }
    }
    // Delay WOW init to make sure React painted the DOM
    setTimeout(() => {
      initWOW();
      console.log("WOW initialized");
    }, 100);
  }, []);

  return null;
}
