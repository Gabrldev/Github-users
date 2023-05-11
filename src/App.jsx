import Search from './components/Search'
import Header from './components/Header'

function App () {
  return (
    <div className='bg-slate-100 dark:bg-dark'>
      <main className='relative w-[570px] max-sm:w-[370px] h-screen flex justify-center items-center font-mono flex-col gap-5 m-auto'>
        <Header />
        <Search />
      </main>
    </div>

  )
}

export default App
