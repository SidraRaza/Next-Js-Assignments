import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Seaction3 = () => {
  return (
    <div className="bg-purple-200 py-36 ">
      <div className="max-w-6xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="bg-white rounded-lg shadow-lg hover:shadow-purple-900 p-6 text-center border-4 border-purple-900 border-dashed ">
          <Image 
            src="/countdown.jpeg" 
            alt="Countdown" 
            width={300} 
            height={300} 
            className="rounded-md object-cover mx-auto w-[300px] h-[300px]  hover:scale-105 "
          />
          <div className="mt-4 space-x-4">
            <Link href="https://countdowntimer-mu.vercel.app/" className="text-black hover:underline">Live Demo</Link>
            <Link href="https://github.com/SidraRaza/30-Days-of-30-Projects/tree/main/01_countdown_timer" className="text-black hover:underline">View On Github</Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-purple-900 border-4 border-purple-900 border-dotted">
          <Image 
            src="/happy birthday.jpg" 
            alt="Happy Birthday" 
            width={300} 
            height={300} 
            className="rounded-md object-cover mx-auto  w-[300px] h-[300px]  hover:scale-105 "
          />
          <div className="mt-4 space-x-4">
            <Link href="https://birthday-wishes-beta-hazel.vercel.app/" className="text-black hover:underline">Live Demo</Link>
            <Link href="https://github.com/SidraRaza/30-Days-of-30-Projects/tree/main/03_birthday_wish" className="text-black hover:underline">View On Github</Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-purple-900 border-4 border-purple-900 border-double">
          <Image 
            src="/hqdefault.jpg" 
            alt="Sample Image" 
            width={300} 
            height={300} 
            className="rounded-md object-cover mx-auto  w-[300px] h-[300px]  hover:scale-105 "
          />
          <div className="mt-4 space-x-4">
            <Link href="https://number-gussing-game-ten.vercel.app/" className="text-black hover:underline">Live Demo</Link>
            <Link href="https://github.com/SidraRaza/30-Days-of-30-Projects/tree/main/04_number_guessing_game" className="text-black hover:underline">View On Github</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seaction3
