type CharacterProps = {
  name: string;
  line: string;
};

const Character = ({ name, line }: CharacterProps) => (
  <div className="flex gap-2">
    <span className="font-bold uppercase text-stone-900 dark:text-stone-100 shrink-0">
      {name}
    </span>
    <span className="text-stone-400 dark:text-stone-600 shrink-0">›</span>
    <span className="text-stone-700 dark:text-stone-200">{line}</span>
  </div>
);

export default Character;
