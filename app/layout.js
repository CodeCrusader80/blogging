import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/app/src/components/navbar/Navbar";
import Footer from "@/app/src/components/footer/Footer";
import {ThemeContextProvider} from "@/app/src/context/ThemeContext";
import ThemeProvider from "@/app/src/components/providers/ThemeProvider";
import AuthProvider from "@/app/src/components/providers/AuthProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog all you want',
  description: 'Create by Mathieu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
          <ThemeContextProvider>
              <ThemeProvider>
                  <div className={"container"}>
                      <div className={"wrapper"}>
                          <Navbar/>
                          {children}
                          <Footer/>
                      </div>
                  </div>
              </ThemeProvider>
          </ThemeContextProvider>
      </AuthProvider>
      </body>
    </html>
  )
}
