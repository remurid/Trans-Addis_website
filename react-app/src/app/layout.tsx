import type { Metadata } from "next";
import "./globals.css";
import "../styles/style.css";
import 'animate.css/animate.min.css';


export const metadata: Metadata = {
  title: "Trans Nation Airways",
  description: "Trans Nation Airways - Private Jet Charters",
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
      </head>
      <body
        className="page-template page-template-elementor_header_footer page page-id-1359 theme-jetly jetly-addon woocommerce-no-js woocommerce-active elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-1359"
      >
        {children}
      </body>
    </html>
  );
}
