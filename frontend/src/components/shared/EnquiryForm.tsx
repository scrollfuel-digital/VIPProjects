import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, MessageSquare, Send, CheckCircle2 } from "lucide-react";

interface Props {
  projectName: string;
  whatsappNumber: string; // e.g. "919876543210"
}

export function EnquiryForm({ projectName, whatsappNumber }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", comment: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Valid 10-digit phone required";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});

    const msg = [
      `🏠 *Enquiry for ${projectName}*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📧 *Email:* ${form.email}`,
      `📞 *Phone:* ${form.phone}`,
      form.comment ? `💬 *Message:* ${form.comment}` : "",
      ``,
      `_Sent via VIP VisionSquare website_`,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    setSubmitted(true);
    setTimeout(() => window.open(url, "_blank"), 800);
  }

  const fields = [
    { key: "name" as const, label: "Full Name", icon: User, type: "text", placeholder: "Your full name" },
    { key: "email" as const, label: "Email Address", icon: Mail, type: "email", placeholder: "you@example.com" },
    { key: "phone" as const, label: "Phone Number", icon: Phone, type: "tel", placeholder: "10-digit mobile number" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto max-w-6xl px-6 pb-24 md:px-14"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)]/5 blur-[120px]" />

      <div className="relative overflow-hidden rounded-[32px] border border-white/8 bg-white/3">
        {/* top gold line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />

        <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">

          {/* ── LEFT: heading ── */}
          <div className="flex flex-col justify-center border-b border-white/6 p-8 lg:border-b-0 lg:border-r lg:p-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">Get In Touch</span>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
              Enquire about<br />
              <span className="text-gradient-gold italic">{projectName}</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Fill in your details and we'll connect you instantly on WhatsApp with all the information you need.
            </p>

            {/* trust badges */}
            <div className="mt-8 space-y-3">
              {[
                "Free site visit — no obligation",
                "Response within 30 minutes",
                "RERA verified project details",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--gold)]" />
                  <span className="text-sm text-white/50">{t}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp icon decoration */}
            <div className="mt-10 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/15 border border-[#25D366]/30">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span className="text-sm text-white/40">Connects directly to WhatsApp</span>
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div className="p-8 lg:p-12">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/15 border border-[#25D366]/40"
                  >
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[#25D366]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-display text-2xl text-white">Opening WhatsApp…</h3>
                  <p className="text-sm text-white/40">Your enquiry is ready to send. WhatsApp is opening now.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {fields.map(({ key, label, icon: Icon, type, placeholder }) => (
                    <div key={key}>
                      <label className="mb-1.5 block text-[10px] uppercase tracking-[0.3em] text-white/40">
                        {label}
                      </label>
                      <div className="relative">
                        <Icon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25" />
                        <input
                          type={type}
                          value={form[key]}
                          onChange={(e) => {
                            setForm((p) => ({ ...p, [key]: e.target.value }));
                            if (errors[key]) setErrors((p) => ({ ...p, [key]: "" }));
                          }}
                          placeholder={placeholder}
                          className={`w-full rounded-2xl border bg-white/4 py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:bg-white/6 focus:shadow-[0_0_0_1px_rgba(212,175,55,0.5)] ${
                            errors[key]
                              ? "border-red-500/50 focus:shadow-[0_0_0_1px_rgba(239,68,68,0.5)]"
                              : "border-white/8 focus:border-[var(--gold)]/40"
                          }`}
                        />
                      </div>
                      {errors[key] && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1.5 text-[11px] text-red-400"
                        >
                          {errors[key]}
                        </motion.p>
                      )}
                    </div>
                  ))}

                  {/* comment */}
                  <div>
                    <label className="mb-1.5 block text-[10px] uppercase tracking-[0.3em] text-white/40">
                      Message <span className="normal-case text-white/20">(optional)</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-white/25" />
                      <textarea
                        value={form.comment}
                        onChange={(e) => setForm((p) => ({ ...p, comment: e.target.value }))}
                        placeholder="Any specific requirements or questions…"
                        rows={3}
                        className="w-full resize-none rounded-2xl border border-white/8 bg-white/4 py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-[var(--gold)]/40 focus:bg-white/6 focus:shadow-[0_0_0_1px_rgba(212,175,55,0.5)]"
                      />
                    </div>
                  </div>

                  {/* submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-base font-display text-[#0B0B0B] shadow-[0_0_40px_-8px_rgba(212,175,55,0.5)] transition-shadow hover:shadow-[0_0_60px_-5px_rgba(212,175,55,0.7)]"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#0B0B0B]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send Enquiry on WhatsApp
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>

                  <p className="text-center text-[10px] text-white/20">
                    By submitting, you agree to be contacted by VIP VisionSquare.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
