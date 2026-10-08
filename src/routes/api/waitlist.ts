import { createFileRoute } from "@tanstack/react-router";
import {
  EMAIL_RE,
  clean,
  deliverEnquiry,
  json,
  oneLine,
  requestOrigin,
} from "@/lib/enquiry-delivery.server";

const ROLES = new Set(["sender", "business", "institution"]);

/**
 * POST /api/waitlist
 * Delivers a "Join the private beta" / waitlist request to the house inbox.
 */
export const Route = createFileRoute("/api/waitlist")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: Record<string, unknown>;
        try {
          body = (await request.json()) as Record<string, unknown>;
        } catch {
          return json(400, { ok: false, error: "Invalid request." });
        }

        if (clean(body.website, 200)) return json(200, { ok: true });

        const name = oneLine(clean(body.name, 120));
        const email = oneLine(clean(body.email, 200));
        const roleRaw = oneLine(clean(body.role, 40));
        const role = ROLES.has(roleRaw) ? roleRaw : "sender";

        if (!name || !email) {
          return json(422, {
            ok: false,
            error: "Please add a name and a valid email.",
          });
        }
        if (!EMAIL_RE.test(email)) {
          return json(422, { ok: false, error: "Please add a valid email." });
        }

        const roleLabel =
          role === "business"
            ? "I pay staff or suppliers"
            : role === "institution"
              ? "I work at a bank or payment company"
              : "I send money home";

        const result = await deliverEnquiry({
          form: "Cush Payments waitlist",
          subject: `Cush Payments waitlist · ${name}`,
          name,
          email,
          origin: "https://cushpayments.com",
          fields: [
            ["Name", name],
            ["Email", email],
            ["I am here as", roleLabel],
            ["Submitted from", `${requestOrigin(request)}/payments`],
          ],
        });

        if (!result.ok) {
          console.error("[waitlist] delivery failed:", result.reason);
          return json(502, { ok: false, error: "delivery_failed" });
        }
        return json(200, { ok: true });
      },
    },
  },
});
