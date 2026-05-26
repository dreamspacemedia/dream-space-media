
import './globals.css'

export const metadata = {
  title: 'PT Dream Space Media',
  description: 'Production House & Creative Agency',
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
