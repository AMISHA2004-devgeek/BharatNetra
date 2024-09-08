import localFont from "next/font/local";
import "./globals.css";
import Header from "./(components)/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./(components)/Footer";


export const metadata = {
  title: "Ayush",
 
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={``}
        >
          <Header />
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
