import React, { useState } from 'react';
import { NeonButton } from './NeonButton';
import { cvData } from '../data/cvData';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function TerminalForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const to = cvData.personal.social.email;
    const subject = `New message from ${formData.name}`;
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      'Message:',
      formData.message
    ];
    const body = bodyLines.join('\n');

    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block font-mono text-neon-green mb-2">
          <span className="text-neon-cyan">$</span> name:
        </label>
        <div className="relative">
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            required
            className="w-full bg-dark-secondary border border-neon-cyan/30 px-4 py-3 font-mono text-text-primary focus:border-neon-cyan focus:outline-none transition-colors"
            placeholder="Enter your name" />

          {focusedField === 'name' &&
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-5 bg-neon-cyan cursor-blink"
            aria-hidden="true" />

          }
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block font-mono text-neon-green mb-2">
          <span className="text-neon-cyan">$</span> email:
        </label>
        <div className="relative">
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            required
            className="w-full bg-dark-secondary border border-neon-cyan/30 px-4 py-3 font-mono text-text-primary focus:border-neon-cyan focus:outline-none transition-colors"
            placeholder="your@email.com" />

          {focusedField === 'email' &&
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-5 bg-neon-cyan cursor-blink"
            aria-hidden="true" />

          }
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-neon-green mb-2">

          <span className="text-neon-cyan">$</span> message:
        </label>
        <div className="relative">
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            required
            rows={6}
            className="w-full bg-dark-secondary border border-neon-cyan/30 px-4 py-3 font-mono text-text-primary focus:border-neon-cyan focus:outline-none transition-colors resize-none"
            placeholder="Type your message here..." />

          {focusedField === 'message' &&
          <span
            className="absolute right-4 top-4 w-2 h-5 bg-neon-cyan cursor-blink"
            aria-hidden="true" />

          }
        </div>
      </div>

      <NeonButton variant="cyan" type="submit">
        send_message
      </NeonButton>
    </form>);

}
