const projectTypes = [
  "Civil Construction",
  "Mechanical",
  "Electrical",
  "Fit-Out",
  "Maintenance",
  "Landscaping",
  "General Inquiry",
  "Other",
];

const field =
  "mt-2 w-full border border-border bg-card px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary-dark";

const labelClass =
  "block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground";

export function ContactForm() {
  return (
    <form
      action="https://send.pageclip.co/1aQOfsnCrkIt0Q5kzyYs7ZeU1W8YCunN"
      method="post"
      className="pageclip-form border border-border bg-card p-6 lg:p-8"
    >
      <h2 className="text-2xl">Send us your requirements</h2>

      <p className="mt-2 text-sm text-muted-foreground">
        Complete the form below and our team will receive your project inquiry
        directly.
      </p>

      <input
        type="hidden"
        name="formSource"
        value="Oasis Fajr website contact form"
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="fullName">
            Full Name
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
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
            type="text"
            autoComplete="organization"
            className={field}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Email
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
            {projectTypes.map((projectType) => (
              <option key={projectType} value={projectType}>
                {projectType}
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

      <button
        type="submit"
        className="pageclip-form__submit mt-8 flex min-h-14 w-full items-center justify-center bg-primary px-6 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <span>Send Inquiry</span>
      </button>
    </form>
  );
}
