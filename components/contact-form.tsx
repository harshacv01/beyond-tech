"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ContactFormState, submitContactForm } from "@/app/actions";
import { useState, useTransition } from "react";

export function ContactForm() {
  const [state, setState] = useState<ContactFormState>({});
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await submitContactForm(formData);
      setState(result);
    });
  };
  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required
              className={state.errors?.name ? "border-destructive" : ""}
            />
            {state.errors?.name && (
              <p className="text-sm text-destructive">{state.errors.name[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              className={state.errors?.email ? "border-destructive" : ""}
            />
            {state.errors?.email && (
              <p className="text-sm text-destructive">
                {state.errors.email[0]}
              </p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="What's this about?"
            required
            className={state.errors?.subject ? "border-destructive" : ""}
          />
          {state.errors?.subject && (
            <p className="text-sm text-destructive">
              {state.errors.subject[0]}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message..."
            rows={5}
            required
            className={state.errors?.message ? "border-destructive" : ""}
          />
          {state.errors?.message && (
            <p className="text-sm text-destructive">
              {state.errors.message[0]}
            </p>
          )}
        </div>
      </div>

      {state.success && (
        <Alert className="bg-green-50 dark:bg-green-950 border-green-500 text-green-700 dark:text-green-300">
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      {state.errors?._form && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{state.errors._form[0]}</AlertDescription>
        </Alert>
      )}

      <Button
        type="submit"
        className="w-full rounded-full"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
