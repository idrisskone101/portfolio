import { Montserrat } from 'next/font/google';
import clsx from 'clsx';
import './_assets/globals.css';
import NavBar from '@/components/nav/NavBar';
import PageTransition from '@/components/page-transition/PageTransition';

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
        className={clsx(
          montserrat.className,
          montserrat.variable,
          'flex flex-col w-full h-[100dvh] overflow-hidden xl:flex-row xl:justify-center bg-canvas'
        )}
      >
        <NavBar />
        <main className="flex-1 min-h-0 overflow-auto bg-canvas">
          <div className="relative w-full h-full min-h-full text-white">
            <PageTransition>{children}</PageTransition>
          </div>
        </main>
      </body>
    </html>
  );
}
