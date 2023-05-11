import { useState } from 'react'
import { SearchIcon } from './icons'
import InfoContent from './InfoContent'
import Name from './Name'

const Search = () => {
  const [username, setUsername] = useState('')
  const [info, setInfo] = useState(null)

  const inputChange = (event) => {
    setUsername(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    setInfo(data)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='w-full bg-white dark:bg-content p-3 flex gap-4 rounded-lg shadow-md justify-center items-center'
      >
        <SearchIcon />
        <input
          type='search'
          placeholder='Search Github username...'
          value={username}
          onChange={inputChange}
          className='relative w-full flex bg-transparent border-none outline-none text-lg text-black dark:text-white'
        />
        <button
          type='submit'
          className='bg-secondary hover:bg-secondary/60 text-white px-3 py-2 rounded-lg'
        >
          Search
        </button>
      </form>
      {info && (
        <div className='w-full bg-white h-96 p-6 flex gap-6 text-black rounded-lg dark:bg-content'>
          <div className=' w-32 h-full '>
            <img
              src={info.avatar_url}
              alt={info.name}
              className='rounded-full'
            />
          </div>

          <div className='h-8 w-full flex flex-col'>
            <Name
              name={info.name}
              username={info.login}
              bio={info.bio}
              create={info.created_at}
            />
            <InfoContent
              public_repos={info.public_repos}
              followers={info.followers}
              following={info.following}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Search
