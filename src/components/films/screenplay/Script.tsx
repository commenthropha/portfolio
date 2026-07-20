const Script = ({ children }: { children: React.ReactNode }) => (
  <div className="not-prose font-mono text-sm my-8 rounded-sm border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 p-6 space-y-3">
    {children}
  </div>
);

export default Script;
