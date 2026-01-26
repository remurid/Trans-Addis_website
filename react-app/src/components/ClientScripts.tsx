// "use client";

// import { useEffect } from "react";
// import "animate.css/animate.min.css";

// export default function ClientScripts() {
//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     // Prevent multiple initializations
//     if ((window as any).wowInitialized) return;
//     (window as any).wowInitialized = true;

//     async function initWOW() {
//       try {
//         console.log("Initializing WOW.js...");

//         // @ts-ignore
//         const WOW = (await import("wowjs/dist/wow.js")).WOW;

//         new WOW({
//           // live: true,
//           // offset: 0,
//           // mobile: true,
//           boxClass: "wow",
//           animateClass: "animate__animated",
//           offset: 0,
//           mobile: true,
//           live: false,
//           resetAnimation: false,
//         }).init();

//         console.log("WOW initialized successfully");
//       } catch (error) {
//         console.error("Failed to initialize WOW.js:", error);
//       }
//     }
//     // Delay WOW init to make sure React painted the DOM
//     setTimeout(() => {
//       initWOW();
//       console.log("WOW initialized");
//     }, 100);
//   }, []);

//   return null;
// }
