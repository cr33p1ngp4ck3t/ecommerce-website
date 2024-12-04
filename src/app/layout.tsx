import { Navbar, Footer } from "./components/nav"

export default function Homepage({
    children,
  }: {
    children: React.ReactNode
  }) {
    return(
    <html lang="en">
        <body>
              <Navbar/>
              {children}
              <Footer/>   
        </body>
    </html>
    )
}