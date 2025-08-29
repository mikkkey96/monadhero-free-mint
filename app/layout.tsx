export const metadata = {
  title: 'MonadHero - Free NFT Mint',
  description: 'Mint your free Hero NFT badge on Monad blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
