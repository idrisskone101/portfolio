import { Montserrat } from 'next/font/google';
import './_assets/globals.css';
import NavBar from '@/components/NavBar';
import ContentSlideIn from '@/components/ContentSlideIn';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Idriss Kone',
  description: 'Portfolio of Idriss Kone',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${montserrat.variable} flex flex-col w-screen h-screen overflow-hidden xl:flex-row xl:justify-center`}
      >
        <NavBar />
        <main className="flex-1 overflow-auto bg-[#111]">
          <div className="relative flex-1 h-full text-white">
            <div className="px-5 py-10 xl:py-0 xl:pt-10">
              <ContentSlideIn>{children}</ContentSlideIn>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
