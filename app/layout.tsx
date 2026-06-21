import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Corporate and Business Compliance Services | Mosey",
  description:
    "Mosey provides simplified corporate and business compliance services—everything you need to be legally compliant in all 50 states with one easy-to-use platform.",
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
      <body className="h-screen overflow-hidden flex flex-col bg-[#FCFBFA] text-[#203435]">
        <Header />
        <main id="content" className="flex-1 flex flex-col overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
