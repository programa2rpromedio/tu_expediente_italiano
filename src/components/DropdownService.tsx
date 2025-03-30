import { DropdownServiceProps } from '@/lib/types';

export default function DropdownService({ titulo, children, open = false }: DropdownServiceProps) {
  return (
    <details
      className="group bg-neutral-extra-light [&_summary::-webkit-details-marker]:hidden"
      open={open}
    >
      <summary className="group-open:bg-primary-extra-light text-primary-regular border-neutral-light flex cursor-pointer items-center justify-between gap-1.5 rounded-lg border-y-1 bg-gray-50 p-4 lg:px-[80px]">
        <h2 className="font-amaranth text-[18px] lg:text-2xl">{titulo}</h2>

        <svg
          className="size-5 shrink-0 shadow-sm transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      {children}
    </details>
  );
}
