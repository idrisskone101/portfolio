'use client';

import { useState } from 'react';
import { contact } from '@/data/site-content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlaceholderFlag } from '@/components/page-chrome';

const EMPTY_FORM = {
  name: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle');

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus('invalid');
      return;
    }

    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n— ${name} <${email}>`;
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus('opened');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-sm text-copy-faint">
          Frontend-only form. Submit opens your email client.
        </p>
        <PlaceholderFlag />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>
      {status === 'invalid' ? (
        <p className="text-sm text-magenta" role="alert">
          Name, email, and message are required.
        </p>
      ) : null}
      {status === 'opened' ? (
        <p className="text-sm text-copy-muted" role="status">
          If a mail client did not open, write directly to {contact.email}.
        </p>
      ) : null}
      <Button type="submit">Send message</Button>
    </form>
  );
}
