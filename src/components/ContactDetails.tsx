import { MessageCircle, Mail, MapPin, User } from "lucide-react";
import { company } from "@/data/company";

export function ContactDetails() {
  const items = [
    {
      icon: User,
      label: "Operation Manager",
      value: company.operationManager,
      href: undefined,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: company.phoneDisplay,
      href: company.whatsapp,
    },
    {
      icon: Mail,
      label: "Email",
      value: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: company.country,
      href: undefined,
    },
  ];

  return (
    <ul className="mt-10 space-y-6">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.label} className="flex gap-4">
            <Icon
              className="mt-1 h-5 w-5 shrink-0 text-primary-dark"
              aria-hidden="true"
            />
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="break-all text-base hover:text-primary-dark"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-base">{item.value}</p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
