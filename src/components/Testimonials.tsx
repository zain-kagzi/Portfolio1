// import Star from "../assets/Star";

// const Testimonials = () => {
//   const clients = ["Bchnvft", "Lightbox", "FeatheDev", "Spherule", "GlobalBank"];
//   return (
//     <section id="testimonials" style={{ padding: "100px 5%", background: "var(--bg)" }}>
//       <div style={{ textAlign: "center", marginBottom: 60 }}>
//         <div style={{ color: "var(--accent)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: 3, marginBottom: 12 }}>✦ MY TESTIMONIALS</div>
//         <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", color: "var(--white)" }}>
//           CLIENT LOVED{" "}
//           <span style={{ fontFamily: "var(--font-script)", color: "var(--accent)" }}>Testimonial</span>
//         </h2>
//       </div>

//       {/* logos */}
//       <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 48, flexWrap: "wrap" }}>
//         {clients.map(c => (
//           <div key={c} style={{
//             padding: "10px 20px", border: "1px solid var(--border)", borderRadius: 10,
//             fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "var(--muted)",
//             transition: "border-color 0.2s, color 0.2s",
//           }}
//             onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
//             onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
//           >{c}</div>
//         ))}
//       </div>

//       <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32, alignItems: "start" }}>
//         <div style={{
//           background: "var(--card)", border: "1px solid var(--border)", borderRadius: 24, padding: 40,
//         }}>
//           <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
//             {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#f1c135", fontSize: 18 }}>★</span>)}
//           </div>
//           <p style={{ color: "var(--text)", fontSize: 16, lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>
//             "Working with FeatheDev was an absolute pleasure! Their keen eye for detail and user-centric approach truly elevated our project. From start to finish, they guided us seamlessly through the design & development process, delivering results that exceeded our design expectations."
//           </p>
//           <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//             <div style={{
//               width: 50, height: 50, borderRadius: "50%",
//               background: "linear-gradient(135deg, var(--accent), #8aad10)",
//               display: "flex", alignItems: "center", justifyContent: "center",
//               fontFamily: "var(--font-display)", fontWeight: 800, color: "#000",
//             }}>OG</div>
//             <div>
//               <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--white)" }}>Oliver Giraud</div>
//               <div style={{ fontSize: 12, color: "var(--muted)" }}>CEO, Lava Ltd</div>
//             </div>
//           </div>
//         </div>
//         <div style={{
//           height: 280, background: "linear-gradient(135deg, #1a2a08, #253b0c)",
//           borderRadius: 24, border: "1px solid var(--border)",
//           display: "flex", alignItems: "center", justifyContent: "center",
//           position: "relative", overflow: "hidden",
//         }}>
//           <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 80, color: "rgba(198,241,53,0.08)" }}>AR</span>
//           <Star size={32} style={{ position: "absolute", top: 16, right: 16, animation: "star-spin 8s linear infinite" }} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials

import Star from "../assets/Star";

const Testimonials = () => {
  const clients = ["Bchnvft", "Lightbox", "FeatheDev", "Spherule", "GlobalBank"];

  return (
    <section
      id="testimonials"
      className="
        py-20!
        px-5! sm:px-8! md:px-12! lg:px-20!
        bg-bg
      "
    >
      {/* Heading */}
      <div className="text-center mb-14!">
        <div className="text-accent text-xs tracking-[3px] font-semibold mb-3! font-display">
          ✦ MY TESTIMONIALS
        </div>

        <h2 className="text-white font-extrabold text-[clamp(28px,4vw,48px)] font-display">
          CLIENT LOVED{" "}
          <span className="text-accent italic font-script">Testimonial</span>
        </h2>
      </div>

      {/* Client Logos */}
      <div className="
        flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8
        mb-12!
      ">
        {clients.map((c) => (
          <div
            key={c}
            className="
              px-4! py-2! rounded-lg
              border border-border
              text-xs sm:text-sm font-bold
              text-muted
              transition-all duration-200
              hover:border-accent hover:text-accent
            "
          >
            {c}
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="
        grid gap-8
        grid-cols-1 lg:grid-cols-3
        items-start
      ">
        
        {/* LEFT - testimonial */}
        <div className="
          lg:col-span-2
          bg-card border border-border
          rounded-2xl p-6! sm:p-8! lg:p-10!
        ">
          {/* stars */}
          <div className="flex gap-1 mb-5!">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>

          {/* text */}
          <p className="
            text-text text-sm sm:text-base
            leading-relaxed mb-6! italic
          ">
            "Working with FeatheDev was an absolute pleasure! Their keen eye for
            detail and user-centric approach truly elevated our project. From
            start to finish, they guided us seamlessly through the design &
            development process, delivering results that exceeded expectations."
          </p>

          {/* user */}
          <div className="flex items-center gap-4">
            <div className="
              w-12 h-12 rounded-full
              flex items-center justify-center
              font-extrabold text-black
              bg-linear-to-br from-accent to-[#8aad10]
            ">
              OG
            </div>

            <div>
              <div className="font-bold text-white">
                Oliver Giraud
              </div>
              <div className="text-xs text-muted">
                CEO, Lava Ltd
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - decorative card */}
        <div className="
          hidden lg:flex
          relative items-center justify-center
          h-60 sm:h-72
          rounded-2xl
          border border-border
          bg-linear-to-br from-[#1a2a08] to-[#253b0c]
          overflow-hidden
        ">
          <span className="
            text-[60px] sm:text-[80px]
            font-extrabold
            text-accent/10
          ">
            AR
          </span>

          <div className="
            absolute top-4 right-4
            animate-spin-slow
          ">
            <Star size={28} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;