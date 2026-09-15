import { useState, type FormEvent } from "react";
import { Briefcase, CheckCircle2, Download, Github, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import { portfolioLinks } from "../data/portfolio";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues: FormValues = { name: "", email: "", subject: "", message: "" };

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): boolean {
    const nextErrors: Partial<FormValues> = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!isValidEmail(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.subject.trim()) nextErrors.subject = "Please enter a subject.";
    if (!values.message.trim()) nextErrors.message = "Please enter a message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
  }

  return (
    <section id="contact" aria-label="Contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Have an idea worth building?"
          description="Whether you need a website, a visual story, a research prototype, or a creative technical solution, let's talk."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-4">
              <Button
                as="a"
                href={portfolioLinks.email}
                variant="secondary"
                className="justify-start"
                icon={<Mail className="h-4 w-4" aria-hidden="true" />}
                iconPosition="left"
              >
                {portfolioLinks.emailRaw}
              </Button>
              <Button
                as="a"
                href={portfolioLinks.phone}
                variant="secondary"
                className="justify-start"
                icon={<Phone className="h-4 w-4" aria-hidden="true" />}
                iconPosition="left"
              >
                {portfolioLinks.phoneDisplay}
              </Button>
              {portfolioLinks.github && (
                <Button
                  as="a"
                  href={portfolioLinks.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="secondary"
                  className="justify-start"
                  icon={<Github className="h-4 w-4" aria-hidden="true" />}
                  iconPosition="left"
                >
                  GitHub
                </Button>
              )}
              {portfolioLinks.linkedin && (
                <Button
                  as="a"
                  href={portfolioLinks.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="secondary"
                  className="justify-start"
                  icon={<Linkedin className="h-4 w-4" aria-hidden="true" />}
                  iconPosition="left"
                >
                  LinkedIn
                </Button>
              )}
              {portfolioLinks.youtube && (
                <Button
                  as="a"
                  href={portfolioLinks.youtube}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="secondary"
                  className="justify-start"
                  icon={<Youtube className="h-4 w-4" aria-hidden="true" />}
                  iconPosition="left"
                >
                  YouTube
                </Button>
              )}
              {portfolioLinks.fiverr && (
                <Button
                  as="a"
                  href={portfolioLinks.fiverr}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="secondary"
                  className="justify-start"
                  icon={<Briefcase className="h-4 w-4" aria-hidden="true" />}
                  iconPosition="left"
                >
                  Fiverr
                </Button>
              )}
              {portfolioLinks.cv && (
                <Button
                  as="a"
                  href={portfolioLinks.cv}
                  download
                  variant="secondary"
                  className="justify-start"
                  icon={<Download className="h-4 w-4" aria-hidden="true" />}
                  iconPosition="left"
                >
                  Download CV
                </Button>
              )}
              <p className="mt-2 text-sm text-paper-500">{portfolioLinks.location}</p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            {submitted ? (
              <div
                role="status"
                className="flex flex-col items-start gap-3 rounded-2xl border border-violet-400/40 bg-violet-500/10 p-6"
              >
                <CheckCircle2 className="h-6 w-6 text-violet-300" aria-hidden="true" />
                <p className="font-display text-lg font-semibold text-paper-100">
                  Thanks for reaching out, {values.name.split(" ")[0]}.
                </p>
                <p className="text-sm leading-relaxed text-paper-400">
                  This is currently a demo form with no backend connected, so
                  your message wasn&rsquo;t actually sent. Please reach out
                  directly via{" "}
                  <a href={portfolioLinks.email} className="text-violet-300 underline underline-offset-2">
                    email
                  </a>{" "}
                  or{" "}
                  <a href={portfolioLinks.phone} className="text-violet-300 underline underline-offset-2">
                    phone
                  </a>{" "}
                  and I&rsquo;ll get back to you.
                </p>
                <Button variant="ghost" size="sm" onClick={() => { setSubmitted(false); setValues(initialValues); }}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
                <p className="text-xs text-paper-500">
                  This form is a frontend demo — no backend is connected yet.
                  For a guaranteed response, use the email or phone links.
                </p>
                <div>
                  <label htmlFor="contact-name" className="text-sm font-medium text-paper-300">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className="mt-2 w-full rounded-xl border border-ink-500 bg-ink-900 px-4 py-3 text-paper-100 placeholder:text-paper-500 focus-visible:border-violet-400"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1.5 text-xs text-ember-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-sm font-medium text-paper-300">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className="mt-2 w-full rounded-xl border border-ink-500 bg-ink-900 px-4 py-3 text-paper-100 placeholder:text-paper-500 focus-visible:border-violet-400"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1.5 text-xs text-ember-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-subject" className="text-sm font-medium text-paper-300">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={values.subject}
                    onChange={(event) => handleChange("subject", event.target.value)}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                    className="mt-2 w-full rounded-xl border border-ink-500 bg-ink-900 px-4 py-3 text-paper-100 placeholder:text-paper-500 focus-visible:border-violet-400"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p id="contact-subject-error" className="mt-1.5 text-xs text-ember-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-sm font-medium text-paper-300">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={(event) => handleChange("message", event.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    className="mt-2 w-full resize-none rounded-xl border border-ink-500 bg-ink-900 px-4 py-3 text-paper-100 placeholder:text-paper-500 focus-visible:border-violet-400"
                    placeholder="Tell me a bit about what you're building..."
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="mt-1.5 text-xs text-ember-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" className="self-start">
                  Send Message
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
