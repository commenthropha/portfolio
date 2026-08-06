const Quote = ({ children }: { children: React.ReactNode }) => (
  <div className="not-prose m-4 p-4 text-center rounded-md border-2 border-stone-300 dark:border-stone-600">
    <p className="italic text-md text-stone-700 dark:text-stone-400 leading-relaxed">
      {children}
    </p>
  </div>
);

export default Quote;
