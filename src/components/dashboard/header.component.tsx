import useAppContext, { AppContextType } from "@/contexts/app.context";


const DashboardHeader = () => {
  const {counter, setCounter} = useAppContext();

  const handleCounter = (e: any) => {
    setCounter(e.target.value as number);
  }

  return (
    <header className="z-40 flex items-center justify-between w-full h-16">
      {/* <div className="block ml-6 lg:hidden">
          <button className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md">
              <svg width="20" height="20" className="text-gray-400" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                  </path>
              </svg>
          </button>
      </div> */}
      <div className="relative z-20 flex flex-col justify-end h-full px-4 md:w-full">
          <div className="relative flex items-center justify-end w-full p-1 space-x-4">
              <div className="flex items-center p-2 text-gray-600 text-md">
                <input placeholder="4" value={counter} type="number" onChange={handleCounter}/>
              </div>
              <span className="flex items-center p-2 text-gray-600 text-md">
                Current Project
              </span>
              <span className="w-1 h-8 bg-gray-200 rounded-lg">
              </span>
              <a href="#" className="relative block">
                  <img alt="profil" src="/apple-touch-icon.png" className="mx-auto object-cover rounded-full h-10 w-10 "/>
              </a>
              <button className="flex items-center text-gray-500 dark:text-white text-md">
                  Charlie R
                  <svg width="20" height="20" className="ml-2 text-gray-400" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                      </path>
                  </svg>
              </button>
          </div>
      </div>
    </header>
  );
}

export default DashboardHeader;