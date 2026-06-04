import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BackButton } from "@/components/site/BackButton";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Megan Mielke" },
      {
        name: "description",
        content: "Get in touch with Megan Mielke for UX, design, or collaborations.",
      },
      { property: "og:title", content: "Contact — Megan Mielke" },
      {
        property: "og:description",
        content: "Reach Megan for UX, design and collaboration opportunities.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Portfolio contact — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:megan@mymielke.de?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email client…");
      setSending(false);
    }, 400);
  }

  return (
    <>
    <BackButton />
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">

      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title="Let's make something thoughtful."
          />
          <p className="mt-6 text-lg text-muted-foreground">
            Whether it's a collaboration, a freelance project or just a friendly
            hello — my inbox is open.
          </p>

          <a
            href="mailto:megan@mymielke.de"
            className="mt-10 flex items-center gap-3 rounded-2xl border border-hairline p-5 transition-colors hover:bg-card"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-pink text-pink-foreground">
              <Mail size={16} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</p>
              <p className="font-display text-xl">megan@mymielke.de</p>
            </div>
          </a>

          <div className="mt-6 grid gap-3 text-sm">
            <p className="text-muted-foreground">Find me online</p>
            <div className="flex flex-wrap gap-2">
              {["LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-hairline bg-card/40 backdrop-blur-md px-4 py-2 transition-all hover:border-pink-strong hover:bg-pink-strong hover:text-pink-foreground"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-hairline bg-card p-8 md:col-span-7 md:p-10"
        >
          <div className="grid gap-5">
            <Field
              label="Your name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="Jane Doe"
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              placeholder="jane@example.com"
            />
            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                placeholder="Tell me a bit about your project or idea…"
                className="w-full resize-none rounded-2xl border border-hairline bg-background px-4 py-3 text-base outline-none transition-colors focus:border-foreground"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-foreground/90 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
              <Send
                size={14}
                className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
    </>
  );

}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-hairline bg-background px-4 py-3 text-base outline-none transition-colors focus:border-foreground"
      />
    </div>
  );
}
