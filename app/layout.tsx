import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // <--- 1. IMPORT CÁI NÀY

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decharmix - Mix your way",
  description: "Phụ kiện handmade Gen Z",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        {/* --- 2. GẮN MÃ GTM (PHẦN HEAD) --- */}
        {/* Thay GTM-XXXXXX bằng mã GTM thật của bạn */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXX');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        {/* --- 3. GẮN MÃ GTM --- */}
        {}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZZZQ9LL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
