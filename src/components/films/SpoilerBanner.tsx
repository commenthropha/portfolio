const SpoilerBanner = ({ spoilers }: { spoilers?: string[] }) => {
  if (!spoilers?.length) {
    return (
      <div className="w-full bg-green-50 dark:bg-green-950 border border-green-300 dark:border-green-700 rounded-sm px-4 py-3 mb-8 flex items-start gap-3">
        <span className="text-green-500 dark:text-green-400 font-bold text-lg leading-tight select-none">
          ✓
        </span>

        <div className="text-green-800 dark:text-green-200 text-sm leading-snug">
          <span className="font-semibold">Spoiler-free:</span> This review
          contains no spoilers.
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full bg-amber-50 dark:bg-amber-950 border border-amber-300 dark:border-amber-700 rounded-sm px-4 py-3 mb-8 flex items-start gap-3">
        <span className="text-amber-500 dark:text-amber-400 font-bold text-lg leading-tight select-none">
          !
        </span>

        <div className="text-amber-800 dark:text-amber-200 text-sm leading-snug">
          <span className="font-semibold">Spoilers:</span>{" "}
          {spoilers.length === 1 ? (
            <>
              This piece contains spoilers for{" "}
              <span className="italic">{spoilers[0]}</span>
            </>
          ) : (
            <>
              This piece contains spoilers for:
              <ul className="mt-2 list-disc list-inside">
                {spoilers.map((movie) => (
                  <li key={movie} className="italic">
                    {movie}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    );
  }
};

export default SpoilerBanner;
