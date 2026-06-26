"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SHEETS_URL = "https://script.google.com/macros/s/AKfycbwaVJx6tSrap0iEJSZhLiZdiaP40mcQboyUlnkQ3Y_Bsn6veml7aY5sOorcjJ00uW6q/exec";

interface WaitListProps {
  background?: 'light' | 'dark';
  buttonText?: string;
}

const buttonClass = {
  light: "bg-primary text-primary-foreground",
  dark: "bg-primary-foreground text-primary",
};

const inputClass = {
  light: "text-foreground placeholder:text-muted-foreground",
  dark: "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:border-white/50 focus-visible:ring-white/20",
};

export function WaitListForm({ background = 'light', buttonText = "Join the waitlist" }: WaitListProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch(SHEETS_URL, {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className={`text-sm font-medium ${background === "dark" ? "text-white" : "text-foreground"}`}>
        You&apos;re on the list! We&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3">
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`px-4 py-6 w-full sm:min-w-sm sm:w-auto placeholder:text-sm md:placeholder:text-base ${inputClass[background]}`}
        placeholder="Enter your email"
        disabled={status === "loading"}
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-6 ${buttonClass[background]}`}
      >
        <img src={background === "dark" ? "/icon-dark-32x32.png" : "/icon-light-32x32.png"} alt="NurseJobPilot Logo" className="h-4 w-4" />
        {status === "loading" ? "Joining..." : buttonText}
      </Button>
      {status === "error" && (
        <p className="text-sm text-red-500 w-full text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}