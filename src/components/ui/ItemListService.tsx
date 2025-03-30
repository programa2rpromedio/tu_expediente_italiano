export default function ItemListService({ text, className }: { text: string; className?: string }) {
  return (
    <div
      className={`bg-primary-extra-light w-max max-w-[285px] rounded-[10px] px-[20px] py-[10px] min-[400px]:max-w-full lg:max-w-[743px] lg:rounded-[50px] ${className}`}
    >
      <p>{text}</p>
    </div>
  );
}
