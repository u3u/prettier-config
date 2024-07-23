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
    <label className="[view-transition-name:upload] mx-auto max-w-md cursor-pointer flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-8 shadow-panel transition active:scale-95 border-2 border-dashed border-transparent can-hover:hover:border-primary hover:-translate-y-1">
      {children}
    </label>
  );
}

const arr = [1,2,3,]


const arr2 = [
  1,2,3]

const arr3 = ['a', 'b', 'c', 'd']