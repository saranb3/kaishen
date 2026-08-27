import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, Young_Serif } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
});

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaishen",
  description: "A personal finance tracker that replaces the Excel habit.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

function CoinMark() {
  return (
    <svg
      viewBox="0 0 28 28"
      className="size-7 text-jade"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="14" cy="14" r="12" />
      <rect x="9.5" y="9.5" width="9" height="9" />
    </svg>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${schibsted.variable} ${youngSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col px-5">
          <header className="sticky top-0 z-10 -mx-5 flex items-center gap-2.5 border-b border-hairline bg-paper/90 px-5 py-4 backdrop-blur">
            <CoinMark />
            <h1 className="font-display text-xl tracking-tight">Kaishen</h1>
          </header>
          <main className="flex flex-1 flex-col pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
