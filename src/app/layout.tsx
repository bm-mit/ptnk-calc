import type { Metadata } from "next";
import "./globals.css";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "PTNK Calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full flex justify-center p-4">
          <div className="max-w-screen-md w-full max-h-screen">
            <div className="grid grid-cols-2 text-center gap-2">
              <Button variant="link">
                <a href="/">Calculator</a>
              </Button>
              <Button variant="link">
                <a href="/units">Converter</a>
              </Button>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
