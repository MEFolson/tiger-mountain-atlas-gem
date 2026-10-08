import { useEffect, useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const roles = [
  { id: "sender", label: "I send money home" },
  { id: "business", label: "I pay staff or suppliers" },
  { id: "institution", label: "I work at a bank or payment company" },
] as const;

export function ContactForm({
  defaultRole = "sender",
}: {
  defaultRole?: (typeof roles)[number]["id"];
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<string>(defaultRole);
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setRole(defaultRole);
  }, [defaultRole]);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setError("");
    if (
      !name.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      !message.trim()
    ) {
      setError("Please add a name, a valid email, and a message.");
      return;
    }
    const website = (
      e.currentTarget.elements.namedItem("website") as HTMLInputElement | null
    )?.value;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          role,
          message: message.trim(),
          website,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        setError(
          res.status === 422 && data.error
            ? data.error
            : "Your message could not be sent. Please try again in a moment.",
        );
        return;
      }
      setDone(true);
    } catch {
      setError(
        "Your message could not be sent. Please check your connection and try again.",
      );
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="py-2">
        <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-champagne/15 text-champagne">
          <Check className="size-5" />
        </div>
        <p className="text-lg font-semibold text-ink">Sent.</p>
        <p className="mt-2 text-sm text-stone">We’ll get back to you.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="relative flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>I’m here as</Label>
        <div className="flex flex-col gap-1.5">
          {roles.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRole(r.id)}
              className={cn(
                "h-11 rounded-md px-3.5 text-left text-sm transition-[background-color,box-shadow] duration-150",
                role === r.id
                  ? "bg-champagne/10 text-ink shadow-[0_0_0_1px_rgb(232_93_4_/_0.45)]"
                  : "text-stone shadow-[0_0_0_1px_rgb(23_20_17_/_0.1)] hover:text-ink",
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
      <Button
        type="submit"
        size="lg"
        className="mt-1 w-full sm:w-auto"
        disabled={sending}
        aria-busy={sending}
      >
        {sending ? "Sending" : "Send"}
      </Button>
      {/* Honeypot for bots. Hidden from people and assistive technology. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
    </form>
  );
}
