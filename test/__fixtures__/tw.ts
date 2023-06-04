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
