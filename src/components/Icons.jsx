const SearchIcon = () => {
  return (
    <svg height='30' width='35' xmlns='http://www.w3.org/2000/svg'><path d='M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z' fill='#0079ff' /></svg>
  )
}
const SunIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-sun-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z' />
      <path d='M6.343 17.657l-1.414 1.414' />
      <path d='M6.343 6.343l-1.414 -1.414' />
      <path d='M17.657 6.343l1.414 -1.414' />
      <path d='M17.657 17.657l1.414 1.414' />
      <path d='M4 12h-2' />
      <path d='M12 4v-2' />
      <path d='M20 12h2' />
      <path d='M12 20v2' />
    </svg>
  )
}

const MoonIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-moon' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' />
    </svg>
  )
}
export { SearchIcon, SunIcon, MoonIcon }
