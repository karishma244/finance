import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ClerkProviderClient from "@/components/ClerkProviderClient";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Wealth Wise",
  description: "One Stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProviderClient>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header */}
          <Header />

          <main className="min-h-screen">
            <Toaster richColors />

            {children}
          </main>
          {/* footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made by me</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProviderClient>
  );
}
