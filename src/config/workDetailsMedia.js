export function getWorkMediaFrameClass(narrow = false) {
  return narrow
    ? 'h-[270px] w-auto self-center md:h-[288px]'
    : 'h-[306px] w-auto md:h-[342px]'
}
