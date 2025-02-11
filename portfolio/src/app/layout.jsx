import {Montserrat} from "next/font/google";
import "./_assets/globals.css";
import NavBar from "@/components/NavBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: "Idriss Kone",
  description: "Portfolio of Idriss Kone",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${montserrat.variable} flex flex-col w-screen h-screen overflow-hidden lg:flex-row`}
      >
        <NavBar />
        <main className="flex-1 overflow-auto">{children}</main>
      </body>
    </html>
  );
}
