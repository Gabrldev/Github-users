import { ToggleTheme } from '../utils/toogleTheme'
import { MoonIcon, SunIcon } from './icons'
function Header () {
  const { handleTheme, theme } = ToggleTheme()
  console.log(theme)
  return (

    <div className='flex justify-between w-full text-black/75 text-lg dark:text-white'>
      <h1 className='font-bold'>devfinder</h1>
      <div className='flex items-center gap-2'>
        {theme
          ? (
            <SunIcon />
            )
          : (
            <MoonIcon />
            )}
        <span onClick={handleTheme}>{theme ? 'LIGHT' : 'DARK'}</span>
      </div>

    </div>

  )
}
export default Header
