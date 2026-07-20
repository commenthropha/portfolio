const Quote = ({ children }: { children: React.ReactNode }) => (
  <div className="not-prose my-6 mx-8 pl-5 border-l-2 border-stone-300 dark:border-stone-600">
    <p className="italic text-md text-stone-700 dark:text-stone-400 leading-relaxed">
      {children}
    </p>
  </div>
);

export default Quote;
