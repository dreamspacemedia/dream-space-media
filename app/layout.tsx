import './globals.css'

export const metadata = {
  title: 'PT Dream Space Media',
  description: 'Cinematic Production House & Creative Agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
