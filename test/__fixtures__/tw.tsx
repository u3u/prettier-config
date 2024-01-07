const tw = String.raw
const clsx = (...args: any) => args
const twMerge = clsx
const twJoin = clsx

export const classes = clsx(
  'px-4 py-2 text-base text-white rounded bg-blue-500',
  {
    'text-gray-100 bg-blue-700': true,
  },
)

export const styles = {
  root: tw`dark:text-white text-md text-black`,
  base: twMerge(['z-[1] relative', twJoin('inset-0 absolute flex items-center')]),
}

export function Callout({ children }: React.PropsWithChildren) {
  return (
    <div className="bg-gray-100/50 border border-zinc-400/30 dark:bg-neutral-900/50 dark:border-neutral-500/30 px-4 py-4 rounded-xl">
      {children}
    </div>
  );
}
