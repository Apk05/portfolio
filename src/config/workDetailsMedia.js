export function getWorkMediaFrameClass(narrow = false) {
  return narrow
    ? 'h-[243px] w-auto self-center md:h-[259px]'
    : 'h-[275px] w-auto md:h-[308px]'
}
