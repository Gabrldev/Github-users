const InfoContent = (props) => {
  return (
    <div className='bg-white  p-2 w-full flex justify-between rounded-lg shadow-xl dark:bg-dark'>
      <div className='flex flex-col items-start '>
        <span className='text-xs text-black/60 dark:text-white'>Repos</span>
        <span className='text-black dark:text-white'>{props.public_repos}</span>
      </div>
      <div className='flex flex-col items-start '>
        <span className='text-xs text-black/60 dark:text-white'>Followers</span>
        <span className='text-black dark:text-white'>{props.followers}</span>
      </div>
      <div className='flex flex-col items-start '>
        <span className='text-xs text-black/60 dark:text-white'>Following</span>
        <span className='text-black dark:text-white'>{props.following}</span>
      </div>
    </div>
  )
}
export default InfoContent
