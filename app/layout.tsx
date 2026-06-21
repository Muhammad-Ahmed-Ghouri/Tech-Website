import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Samurai Systems | IT Solutions & Services for Every Business",
  description:
    "Samurai Systems provides turn-key IT solutions, cybersecurity, cloud migration, and AI integration services for modern enterprises.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen overflow-hidden antialiased font-sans">
      <body className="h-screen overflow-hidden flex flex-col bg-white text-main_green">
        <Header />
        <main id="content" className="flex-1 flex flex-col overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
