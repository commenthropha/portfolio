interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
}

const ImageWithCaption = ({ src, alt, caption }: ImageWithCaptionProps) => {
  return (
    <figure className="mx-auto w-full max-w-[600px]">
      <img src={src} alt={alt} className="w-full rounded-sm object-cover" />
      <figcaption className="text-center italic text-stone-700 dark:text-stone-400">
        {caption}
      </figcaption>
    </figure>
  );
};
export default ImageWithCaption;
