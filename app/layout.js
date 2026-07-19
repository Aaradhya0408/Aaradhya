import Navbar from './components/navbar' 
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Boxicons CDN yahan rahega */}
        <link 
          href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' 
          rel='stylesheet' 
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar /> 
        {children}
      </body>
    </html>
  )
}