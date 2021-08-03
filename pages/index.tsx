import Head from 'next/head'
import Image from 'next/image'

import { useState, useEffect } from 'react'

import { apiGetBreweries } from '../services/api/brewery'

export default 
function Home() {
  const [ breweries, setBreweries] = useState([])

  async function getBreweries() {
    const data = await apiGetBreweries()

    console.log(data)
    setBreweries(data)
  }

  useEffect(() => {
    getBreweries()
  }, [])

  return (
    <div>
      <Head>
        <title>Brewery</title>
        <meta name="description" content="Meet breweries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <header>
       <h1>Breweries</h1>
       <p>A breweries list by Open Brewery DB</p>
     </header>

     {/* filter */}

      {breweries.map(brewery => (
       <p key={brewery.id}>{brewery.name}</p> 
      ))}
    </div>
  )
}
