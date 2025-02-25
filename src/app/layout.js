import './globals.css';

export const metadata = {
  title: 'Puppy Image Generator',
  description: 'Generate random puppy images',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}