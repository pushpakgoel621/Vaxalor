interface USPCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function USPCard({ icon, title, description }: USPCardProps) {
  return (
    <div className="bg-ink-100 border border-ink-200 rounded-card p-8">
      <div className="w-12 h-12 rounded-full bg-ink-100 border border-ink-200 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-white text-[20px] font-semibold mb-3">{title}</h3>
      <p className="text-ink-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
