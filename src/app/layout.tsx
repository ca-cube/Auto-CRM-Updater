import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Auto-CRM Updater | AI-Powered Sales Intelligence",
    description: "Automatically infer and update deal stages from emails and sales calls using advanced NLP and temporal modeling.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="bg-blur" />
                {children}
                <style jsx global>{`
          .bg-blur {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            background: 
              radial-gradient(circle at 10% 10%, rgba(16, 185, 129, 0.05) 0%, transparent 40%),
              radial-gradient(circle at 90% 90%, rgba(99, 102, 241, 0.05) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(5, 10, 15, 1) 0%, rgba(5, 10, 15, 1) 100%);
          }
        `}</style>
            </body>
        </html>
    );
}
