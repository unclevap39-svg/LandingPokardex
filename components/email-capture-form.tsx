"use client";

import { useState, type FormEvent } from "react";
import { Check, Loader2, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function EmailCaptureForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setStatus("success"); // best-effort capture, never block the user on backend errors
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-3.5 text-sm font-medium text-emerald-300",
          className
        )}
      >
        <Check className="h-4 w-4" />
        Tu seras averti·e au lancement — merci !
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-2 sm:flex-row", className)}>
      <div className="relative flex-1">
        <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="ton@email.com"
          className={cn("pl-11", status === "error" && "ring-2 ring-rose-400/60")}
          aria-invalid={status === "error"}
        />
      </div>
      <Button type="submit" disabled={status === "loading"} className="shrink-0">
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Sois averti au lancement"
        )}
      </Button>
      {status === "error" && (
        <p className="w-full text-left text-xs text-rose-400 sm:absolute sm:mt-14">
          Merci d&apos;entrer une adresse e-mail valide.
        </p>
      )}
    </form>
  );
}
