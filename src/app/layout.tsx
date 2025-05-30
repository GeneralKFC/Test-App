import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
export const metadata: Metadata = {
  title: "TestApp",
  description: "TestApp",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense
          fallback={
            <div className="flex w-full h-full items-center justify-center">
              Loading navbar...
            </div>
          }
        >
          {children}{" "}
        </Suspense>
      </body>
    </html>
  );
}
