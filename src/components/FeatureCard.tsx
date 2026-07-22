type FeatureCardProps = { icon: string; title: string; description: string };
export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return <article className="rounded-3xl border border-green-900/8 bg-white p-6 shadow-sm"><span aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-100 text-2xl">{icon}</span><h3 className="mt-5 text-lg font-bold text-green-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></article>;
}
