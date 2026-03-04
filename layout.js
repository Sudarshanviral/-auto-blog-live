import './globals.css'

export const metadata = {
  title: 'AutoBlog - AI-Powered Multi-Niche Blog',
  description: 'AI द्वारा automatically generate होने वाला blog - AI, Finance, Health, Travel और भी बहुत कुछ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
