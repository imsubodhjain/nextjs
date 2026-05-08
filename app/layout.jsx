import './globals.css';

export const metadata = {
  title: 'Subodh Jain — Full Stack Developer',
  description: 'Full Stack Developer & Software Engineer specializing in React, Next.js, Node.js and modern web technologies.',
  keywords: ['developer', 'portfolio', 'full stack', 'react', 'nextjs', 'imsubodhjain','TMU','Labkind ERP'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Outfit', 'DM Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
