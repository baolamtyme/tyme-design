import "./globals.css";

export const metadata = {
  title: "Tyme Design",
  description: "Type tester for GoTyme Sans font",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
