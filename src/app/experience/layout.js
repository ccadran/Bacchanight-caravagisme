export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <p>Son</p>
        </nav>
        {children}
      </body>
    </html>
  );
}
