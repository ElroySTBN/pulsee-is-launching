import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "Pulsee is Launching",
    description: "Pulsee is Launching - Interactive Pong Animation",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
