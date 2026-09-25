type ServiceCardProps = {
  icon: string;
  title: string;
  desc: string;
  accent: string;
};

const ServiceCard = ({ icon, title, desc, accent }: ServiceCardProps) => {
  return (
    <div
      className="
        relative
        group cursor-pointer
        rounded-2xl p-6!
        border border-gray-800
        bg-[#111]
        transition-all duration-300
        hover:-translate-y-1 hover:border-transparent
      "
      style={{
        "--accent": accent,
      } as React.CSSProperties}
    >
      {/* hover bg glow */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-50
        transition duration-300
        rounded-2xl
        bg-[radial-gradient(circle_at_top_left,var(--accent),transparent_70%)]
      " />

      {/* content */}
      <div className="relative z-10">
        {/* icon */}
        <div className="text-3xl mb-4!">{icon}</div>

        {/* title */}
        <h3 className="
          text-white font-bold text-base mb-3!
          group-hover:text-(--accent)
          transition
        ">
          {title}
        </h3>

        {/* desc */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4!">
          {desc}
        </p>

        {/* read more */}
        
      </div>
    </div>
  );
};

export default ServiceCard;