import { company } from "@/data/company";
import { PrimaryButton, SecondaryButton } from "./Buttons";

export function ContactCTA({
  title = "Planning your next project?",
  body = "Speak with Oasis Fajr about your contracting, fit-out, maintenance, or project delivery requirements.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 text-ink-foreground/75">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <PrimaryButton to="/contact">Request a Consultation</PrimaryButton>
          <SecondaryButton
            href={company.whatsapp}
            target="_blank"
            rel="noreferrer"
            onDark
          >
            Contact on WhatsAPP
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
