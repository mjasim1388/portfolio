"use client";

import { useState } from "react";
import { Loader2, Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
formData.append("access_key", "9d893420-c509-4edd-8889-ed5b1349f54b");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("success");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("error");
      }
    } catch (error) {
      setResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-8 backdrop-blur-sm">
      {result === "success" ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <CheckCircle2 className="h-12 w-12 text-emerald-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-neutral-400 text-sm">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setResult(null)}
            className="mt-6 text-sm text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-neutral-400 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-neutral-400 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-neutral-400 mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              placeholder="How can I help you?"
            />
          </div>

          {result === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Please try again or email me directly.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}