export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-crimson-900/20 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-crimson-800/10 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-crimson-950/15 blur-[150px]" />
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}
