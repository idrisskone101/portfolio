import dynamic from 'next/dynamic';
import { contact } from '@/data/site-content';
import {
  PageHeader,
  PageSection,
  PageShell,
  PlaceholderFlag,
} from '@/components/page-chrome';
import ContactForm from './contact-form';

export const metadata = {
  title: 'Contact',
  description: `Write to ${contact.email}. ${contact.lede}`,
};

const ContactMap = dynamic(() => import('./contact-map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[320px] border bg-surface border-line rounded-lg lg:h-[420px]" />
  ),
});

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow={contact.eyebrow}
        title={contact.title}
        lede={contact.lede}
      />
      <div className="grid items-start grid-cols-1 gap-10 lg:grid-cols-2">
        <ContactForm />
        <div>
          <ul className="mb-8 space-y-3 text-sm sm:text-base">
            <li className="flex gap-4">
              <span className="w-24 font-bold shrink-0">Email</span>
              <a
                href={`mailto:${contact.email}`}
                className="text-copy-muted hover:text-magenta"
              >
                {contact.email}
              </a>
            </li>
            {contact.showPhone ? (
              <li className="flex gap-4">
                <span className="w-24 font-bold shrink-0">Phone</span>
                <span className="flex flex-wrap items-center gap-2 text-copy-muted">
                  {contact.phone}
                  {contact.phonePlaceholder ? <PlaceholderFlag /> : null}
                </span>
              </li>
            ) : null}
          </ul>
          <PageSection title="Based in Montreal" className="mt-0">
            <ContactMap pin={contact.map} />
          </PageSection>
        </div>
      </div>
    </PageShell>
  );
}
