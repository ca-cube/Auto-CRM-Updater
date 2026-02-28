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
            </body>
        </html>
    );
}
