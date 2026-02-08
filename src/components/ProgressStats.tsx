interface Stats {
  total: number;
  completed: number;
  percentage: number;
  phrase: string;
}

interface ProgressProps {
  labels: any;
  stats: Stats;
}

export default function ProgressStats({ labels, stats }: ProgressProps) {
  if (stats.total === 0) return null;

  return (
    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
      <div className="flex justify-between items-end mb-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          {labels.progressLabel} {stats.completed} / {stats.total}
        </span>
        <span className="text-sm font-black text-[#f26440]">{stats.percentage}%</span>
      </div>

      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#f26440] transition-all duration-500 ease-out"
          style={{ width: `${stats.percentage}%` }}
        />
      </div>

      <p className="mt-2 text-sm italic text-slate-500">{stats.phrase}</p>
    </div>
  );
}
