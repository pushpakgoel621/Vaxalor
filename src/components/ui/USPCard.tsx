interface USPCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function USPCard({ icon, title, description }: USPCardProps) {
  return (
    <div className="bg-ink-100 border border-ink-200 rounded-card p-8 hover:border-ink-300/50 transition-colors duration-300">
      <div className="w-12 h-12 rounded-xl bg-signal/10 border border-signal/20 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-white text-[20px] font-semibold mb-3 font-heading">{title}</h3>
      <p className="text-ink-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
