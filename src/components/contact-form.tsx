import { useState, type FormEvent } from "react";
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

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.includes("@") || !message.trim()) {
      setError("Please add a name, a valid email, and a message.");
      return;
    }
    const entry = {
      name: name.trim(),
      email: email.trim(),
      role,
      message: message.trim(),
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("cush-contact") || "[]");
      const next = Array.isArray(prev) ? [...prev, entry] : [entry];
      localStorage.setItem("cush-contact", JSON.stringify(next));
    } catch {
      localStorage.setItem("cush-contact", JSON.stringify([entry]));
    }
    setDone(true);
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
    <form onSubmit={submit} className="flex flex-col gap-4">
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
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <Button type="submit" size="lg" className="mt-1 w-full sm:w-auto">
        Send
      </Button>
    </form>
  );
}
