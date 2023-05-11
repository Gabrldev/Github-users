import { useEffect, useState } from 'react'

export const ToggleTheme = () => {
  const [theme, setTheme] = useState(true)
  useEffect(() => {
    if (theme === true) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(!theme)
  }
  return { theme, handleTheme }
}
