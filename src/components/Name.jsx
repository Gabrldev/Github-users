import { Fecha } from '../utils/fecha'

const Name = (props) => {
  const { name, username, bio, create } = props

  const splitData = create.split('T').shift()
  const newdata = {
    year: splitData.split('-').shift(),
    month: splitData.split('-')[1],
    day: splitData.split('-').pop()
  }
  const { year, month, day } = newdata
  const newF = Fecha(month)
  return (
    <>
      <div className='flex items-center justify-between text-black dark:text-white'>
        <h2 className='text-2xl font-bold '>{name}</h2>
        <span>{`Joined ${day} ${newF} ${year}`}</span>
      </div>
      <h3 className='text-blue-600'>@{username}</h3>
      <span className='text-xs text-black dark:text-white'>{bio || 'No description'}</span>
    </>
  )
}
export default Name
