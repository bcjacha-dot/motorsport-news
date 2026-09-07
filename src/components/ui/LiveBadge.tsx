interface LiveBadgeProps {
  text: string;
}

export default function LiveBadge({ text }: LiveBadgeProps) {
  return (
    <div className="flex items-center space-x-2 bg-red-600/20 px-3 py-1 rounded-full border border-red-600">
      <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse-live" />
      <span className="text-xs font-bold uppercase tracking-wider text-red-400">
        {text}
      </span>
    </div>
  );
}
