export default function SectionTitle({ kicker, title }:{ kicker?: string; title: string }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        {kicker && <div className="inline-flex text-xs px-3 py-1 rounded-full border glass">{kicker}</div>}
        <h2 className="text-3xl font-bold tracking-tight mt-2">{title}</h2>
      </div>
    </div>
  );
}
