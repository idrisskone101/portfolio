'use client';

import { useState } from 'react';
import { contact } from '@/data/site-content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const EMPTY_FORM = {
  email: '',
  subject: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function buildMailto({ email, subject, message }) {
  const finalSubject = subject || 'Hello from idrisskone.com';
  const body = `${message}\r\n\r\n${email}`;
  return `mailto:${contact.email}?subject=${encodeURIComponent(
    finalSubject
  )}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle');

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const values = {
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    if (!values.email || !values.message) {
      setStatus('missing');
      return;
    }

    if (!EMAIL_PATTERN.test(values.email)) {
      setStatus('bad-email');
      return;
    }

    const link = document.createElement('a');
    link.href = buildMailto(values);
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setStatus('opened');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <p className="text-sm text-copy-faint">
        Sending opens your email app with everything below filled in.
      </p>
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
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Hello from idrisskone.com"
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
      {status === 'missing' ? (
        <p className="text-sm text-magenta" role="alert">
          Email and message are required.
        </p>
      ) : null}
      {status === 'bad-email' ? (
        <p className="text-sm text-magenta" role="alert">
          That email address does not look right.
        </p>
      ) : null}
      {status === 'opened' ? (
        <p className="text-sm text-copy-muted" role="status">
          Your email app should be open with the message ready to send. If it
          did not open, write to{' '}
          <a href={`mailto:${contact.email}`} className="text-magenta hover:underline">
            {contact.email}
          </a>
          .
        </p>
      ) : null}
      <Button type="submit">Send message</Button>
    </form>
  );
}
