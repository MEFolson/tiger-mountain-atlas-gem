import { useEffect, useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useWaitlist } from "@/lib/waitlist-store";

const roles = [
  { id: "sender", label: "I send money home" },
  { id: "business", label: "I pay staff or suppliers" },
  { id: "institution", label: "I work at a bank or payment company" },
] as const;

export function WaitlistDialog() {
  const { open, setOpen, intent } = useWaitlist();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<string>(intent);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (open) setRole(intent);
  }, [open, intent]);

  function reset() {
    setDone(false);
    setError("");
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setError("");
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please add a name and a valid email.");
      return;
    }
    const website = (
      e.currentTarget.elements.namedItem("website") as HTMLInputElement | null
    )?.value;
    setSending(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          role,
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
            : "We could not add you just now. Please try again in a moment.",
        );
        return;
      }
      setDone(true);
    } catch {
      setError(
        "We could not add you just now. Please check your connection and try again.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) reset();
      }}
    >
      <DialogContent>
        {done ? (
          <div className="py-4">
            <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-champagne/15 text-champagne">
              <Check className="size-5" />
            </div>
            <DialogTitle>You’re on the list.</DialogTitle>
            <DialogDescription>
              We’ll email when we open. Nothing else.
            </DialogDescription>
            <Button className="mt-6" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="relative flex flex-col gap-4"
            noValidate
          >
            <div>
              <DialogTitle>Join the private beta</DialogTitle>
              <DialogDescription>
                Cush is opening for people sending money home, for companies,
                and for banks. Tell us which you are.
              </DialogDescription>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="wl-name">Name</Label>
              <Input
                id="wl-name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="wl-email">Email</Label>
              <Input
                id="wl-email"
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
            {error ? (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            ) : null}
            <Button
              type="submit"
              size="lg"
              className="mt-1 w-full"
              disabled={sending}
              aria-busy={sending}
            >
              {sending ? "Sending" : "Request access"}
            </Button>
            <p className="text-xs text-ash">
              Private beta. Not an offer of regulated services. We’ll only use
              this to reach you about Cush.
            </p>
            {/* Honeypot for bots. Hidden from people and assistive technology. */}
            <div
              aria-hidden="true"
              className="absolute -left-[9999px] h-px w-px overflow-hidden"
            >
              <label htmlFor="wl-website">Website</label>
              <input
                id="wl-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
