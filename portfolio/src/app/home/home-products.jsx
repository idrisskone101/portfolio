import Link from 'next/link';

export default function HomeProducts({ products }) {
  return (
    <ul className="mt-5 w-full max-w-md space-y-2 text-left">
      {products.map((product) => (
        <li key={product.id}>
          {product.external ? (
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block border bg-surface border-line rounded-lg px-3 py-2.5 transition-colors duration-page ease-page hover:border-magenta/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
            >
              <ProductCopy product={product} />
            </a>
          ) : (
            <Link
              href={product.href}
              className="block border bg-surface border-line rounded-lg px-3 py-2.5 transition-colors duration-page ease-page hover:border-magenta/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
            >
              <ProductCopy product={product} />
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

function ProductCopy({ product }) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copy-faint">
        {product.statusLabel}
      </p>
      <p className="mt-1 text-sm font-semibold text-white">{product.title}</p>
    </>
  );
}
