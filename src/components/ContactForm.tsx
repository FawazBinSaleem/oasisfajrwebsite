import { useState, type FormEvent } from "react";
import { company } from "@/data/company";
import { PrimaryButton } from "./Buttons";

const projectTypes = [
  "Civil Construction",
  "Mechanical",
  "Electrical",
  "Fit-Out",
  "Maintenance",
  "Landscaping",
  "General Inquiry",
];

const field =
  "mt-2 w-full border border-border bg-card px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary-dark";
const labelClass =
  "block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `Project inquiry — ${get("projectType") || "General Inquiry"}`;
    const body = [
      `Name: ${get("fullName")}`,
      `Company: ${get("companyName")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Project type: ${get("projectType")}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border bg-card p-6 lg:p-8"
    >
      <h2 className="text-2xl">Send us your requirements</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Complete the details below and your email application will open with the
        message ready to send. Nothing is stored on this website.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            autoComplete="name"
            className={field}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="companyName">
            Company
          </label>
          <input
            id="companyName"
            name="companyName"
            autoComplete="organization"
            className={field}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={field}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="projectType">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue="General Inquiry"
            className={field}
          >
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={field}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <PrimaryButton type="submit">Open Email Draft</PrimaryButton>
        {sent && (
          <p role="status" className="text-sm text-muted-foreground">
            Your email application should now be open with your message.
          </p>
        )}
      </div>
    </form>
  );
}
