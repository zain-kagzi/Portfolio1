import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import emailjs from "emailjs-com";

type FormType = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [form, setForm] = useState<FormType>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const fields: { key: keyof FormType; placeholder: string; type: string }[] = [
    { key: "name", placeholder: "First Name*", type: "text" },
    { key: "phone", placeholder: "Phone Number*", type: "tel" },
    { key: "email", placeholder: "Email Address*", type: "email" },
    { key: "subject", placeholder: "Subject*", type: "text" },
  ];

  const { ref, visible } = useReveal();

  // ✅ EMAIL SEND FUNCTION
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_40391ok",   // 👈 yaha paste
      "template_p7xlq2i",  // 👈 yaha paste
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "pNKyi9LoU7LMS8pFw"    // 👈 yaha paste
    )
    .then(() => {
      alert("Message sent ✅");

      // reset form
      setForm({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    })
    .catch((err) => {
      console.error(err);
      alert("Error sending ❌");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`
        py-20!
        px-5! sm:px-8! md:px-12! lg:px-20!
        bg-bg2
        opacity-0 translate-y-10
        ${visible ? "animate-fadeUp opacity-100 translate-y-0" : ""}
      `}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* LEFT */}
        <div>
          <div className="text-accent text-xs tracking-[3px] font-semibold mb-3! font-display">
            ✦ CONTACT NOW
          </div>

          <h2 className="text-white font-extrabold text-[clamp(28px,4vw,48px)] mb-2! font-display">
            GET IN TOUCH
          </h2>

          <h2 className="text-accent font-bold italic text-[clamp(30px,4vw,52px)] mb-6! font-script">
            Today!
          </h2>

          <p className="text-muted text-sm leading-relaxed mb-8! max-w-md">
            Ready to build something amazing? Let’s connect and create a modern,
            high-performance web experience tailored to your needs.
          </p>
        </div>

        {/* RIGHT - FORM */}
        <div className="bg-card border border-border rounded-2xl p-6! sm:p-8! lg:p-10!">
          <h3 className="text-white font-extrabold text-xl mb-6!">
            LEAVE A MESSAGE
          </h3>

          {/* ✅ FORM START */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {fields.map((f) => (
              <input
                key={f.key}
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.key]}
                onChange={(e) =>
                  setForm({ ...form, [f.key]: e.target.value })
                }
                required
                className="
                  w-full bg-bg2 border border-border
                  rounded-lg px-4! py-3!
                  text-sm text-text outline-none
                  transition focus:border-accent
                "
              />
            ))}

            <textarea
              placeholder="Message*"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              required
              rows={4}
              className="
                w-full bg-bg2 border border-border
                rounded-lg px-4! py-3!
                text-sm text-text outline-none
                resize-none transition focus:border-accent
              "
            />

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="
                mt-2! w-full
                bg-accent text-black
                py-4! rounded-lg
                font-bold text-sm
                transition hover:opacity-90
              "
            >
              {loading ? "Sending..." : "SUBMIT NOW →"}
            </button>
          </form>
          {/* ✅ FORM END */}
        </div>
      </div>
    </section>
  );
};

export default Contact;