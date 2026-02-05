import type { Metadata } from "next";
import "./globals.css";
import "../styles/style.css";
// import 'animate.css/animate.min.css';
import CustomCursor from "@/components/CustomCursor";


// export const metadata: Metadata = {
//   title: "Trans Addis Airways",
//   description: "Trans Addis Airways - Private Jet Charters",
// };
export const metadata: Metadata = {
  metadataBase: new URL("https://transaddis-8rbqfkiz6-matias-ashenafis-projects.vercel.app"), // IMPORTANT
  title: "Trans Addis Airways",
  description: "Trans Addis Airways - Private Jet Charters",
  openGraph: {
    title: "Trans Addis Airways",
    description: "Luxury Private Jet Charters with Trans Addis Airways",
    url: "https://transaddis-8rbqfkiz6-matias-ashenafis-projects.vercel.app",
    siteName: "Trans Addis Airways",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Trans Addis Airways",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trans Addis Airways",
    description: "Luxury Private Jet Charters with Trans Addis Airways",
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo-simple.svg" />
        <meta name="theme-color" content="#6fccdd" />
      </head>
      <body
        className="page-template custom-cursor page-template-elementor_header_footer page page-id-1359 theme-jetly jetly-addon woocommerce-no-js woocommerce-active elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-1359"
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
