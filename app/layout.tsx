import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MonadHero Free Mint", 
  description: "Mint your free Hero NFT badge on Monad blockchain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
