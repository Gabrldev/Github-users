import { ToggleTheme } from '../utils/toogleTheme'
function Header () {
  const { handleTheme, theme } = ToggleTheme()
  console.log(theme)
  return (

    <div className='flex justify-between w-full text-black/75 text-lg dark:text-white'>
      <h1 className='font-bold'>devfinder</h1>
      <span onClick={handleTheme}>{theme ? 'LIGHT' : 'DARK'}</span>
    </div>

  )
}
export default Header
