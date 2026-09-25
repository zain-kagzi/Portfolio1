import React, { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import emailjs from "emailjs-com";
import {
  IconSend,
  IconCheck,
  IconMail,
  IconSparkle,
} from "./icons/Icons";

interface FormType {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

type SubmissionStatus = "idle" | "loading" | "success" | "error";

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormType>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { ref, visible } = useReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await emailjs.send(
        "service_40391ok",
        "template_p7xlq2i",
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "pNKyi9LoU7LMS8pFw"
      );

      setStatus("success");
      setForm({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err: unknown) {
      console.error("EmailJS submission failure:", err);
      setStatus("error");
      setErrorMessage(
        "Failed to transmit message through EmailJS. Please try again or reach out directly."
      );
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 px-4 sm:px-6 lg:px-12 bg-[var(--color-bg)] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Value Proposition (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)] font-mono text-xs uppercase tracking-widest">
              <IconSparkle size={12} />
              <span>Direct Connection</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Let's Build Something <br />
              <span className="text-[var(--color-accent)]">Exceptional Together</span>
            </h2>

            <p className="font-sans text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed">
              Have an opening, an upcoming web application, or need contract front-end architecture?
              Fill out the form and I'll respond within 24 hours.
            </p>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-[var(--radius-card)] bg-[var(--color-surface)] border border-[var(--color-border)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[var(--radius-control)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)]">
                  <IconMail size={18} />
                </div>
                <div>
                  <div className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                    Inquiries & Collaboration
                  </div>
                  <div className="font-sans text-sm font-medium text-white">
                    Direct EmailJS Gateway
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--color-border)]/50 font-mono text-xs text-[var(--color-text-muted)] flex items-center justify-between">
                <span>Response SLA</span>
                <span className="text-[var(--color-accent)]">&lt; 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-[var(--radius-card)] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl relative">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Send a Message
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[var(--color-text-secondary)] mb-6">
                All fields marked with an asterisk are required.
              </p>

              {/* Status Notifications */}
              {status === "success" && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-[var(--radius-control)] bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/40 flex items-start gap-3 text-white"
                >
                  <span className="text-[var(--color-accent)] mt-0.5 shrink-0">
                    <IconCheck size={18} />
                  </span>
                  <div>
                    <div className="font-sans font-semibold text-sm text-[var(--color-accent)]">
                      Message Dispatched Successfully
                    </div>
                    <div className="font-sans text-xs text-[var(--color-text-secondary)] mt-0.5">
                      Thank you for reaching out. Your transmission has been delivered to Zainuddin's inbox.
                    </div>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-[var(--radius-control)] bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-200"
                >
                  <div>
                    <div className="font-sans font-semibold text-sm text-red-400">
                      Transmission Interrupted
                    </div>
                    <div className="font-sans text-xs mt-0.5">
                      {errorMessage || "Unable to send message. Please verify network connectivity."}
                    </div>
                  </div>
                </div>
              )}

              {/* The Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-[var(--color-text-muted)] mb-1.5 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-[var(--radius-control)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-white text-sm placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[var(--color-text-muted)] mb-1.5 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-[var(--radius-control)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-white text-sm placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-[var(--color-text-muted)] mb-1.5 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-[var(--radius-control)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-white text-sm placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[var(--color-text-muted)] mb-1.5 uppercase tracking-wider">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Project Inquiry / Job Opportunity"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-[var(--radius-control)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-white text-sm placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[var(--color-text-muted)] mb-1.5 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project goals, timelines, or specifications..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-[var(--radius-control)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-white text-sm placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[var(--radius-control)] bg-[var(--color-accent)] text-black font-semibold text-sm transition-all duration-200 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                >
                  {status === "loading" ? (
                    <>
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <IconSend size={15} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;