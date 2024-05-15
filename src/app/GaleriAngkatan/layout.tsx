import NavTop from '@/app/GaleriAngkatan/Navbar'
import "./globals.css";

export default function Layout({ children }) {
  return (
    <>
      <NavTop />
      <main>{children}</main>
    </>
  )
}