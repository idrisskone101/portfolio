import { portfolio } from '@/data/site-content';

export const metadata = {
  title: 'Portfolio',
  description: portfolio.lede,
};

export default function PortfolioLayout({ children }) {
  return children;
}
