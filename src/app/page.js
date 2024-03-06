'use client'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState([])
  const [seach, setSearch] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((Response) => Response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.log(error))
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-4">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="w-1/2 p-2 rounded-xl text-center border-0 text-[#155e75] font-bold text-xl"
      />
      <div className="flex flex-row flex-wrap justify-around gap-10 py-8">
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(seach.toLowerCase()),
          )
          .map((item) => (
            <div key={item.id} className="flex flex-col gap-y-5">
              <h2 className="py-5 bg-[#155e75] text-white font-bold text-xl rounded-xl text-center">
                {item.name}
              </h2>
              <img src={item.image} className="rounded-lg" />
              <p className="text-[#E5E7EB] text-center font-bold text-base">
                Gender - {item.gender}
              </p>
            </div>
          ))}
      </div>
    </main>
  )
}
