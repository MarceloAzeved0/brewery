import Head from 'next/head'
import Card from '../components/Card'
import Button from '../components/Button'

import { useState, useEffect } from 'react'

import { apiGetBreweries } from '../services/api/brewery'
import classnames from 'classnames/bind'
import styles from '../styles/pages/index.module.scss'

const cn = classnames.bind(styles)
interface IBrewery{
  id: number;
  name: string;
  brewery_type: string;
  street: string;
  address_2?: string;
  address_3?: string;
  city: string;
  state: string;
  county_province?: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  updated_at: Date;
  created_at: Date;
}

export default 
function Home() {
  const [ breweries, setBreweries] = useState<IBrewery[]>([])
  const [ currentPage, setCurrentPage] = useState<Number>(1)
  const [ filter, setFilter] = useState<string>('')
  
  const byTypes = [
    'micro',
    'nano',
    'regional',
    'brewpub',
    'large',
    'planning',
    'bar',
    'contract',
    'proprietor',
    'closed'
  ]

  async function getBreweries() {
    const data = await apiGetBreweries(filter, currentPage)
    setBreweries(data)
  }

  useEffect(() => {
    getBreweries()
  }, [filter, currentPage])

  return (
    <div>
      <Head>
        <title>Breweries</title>
        <meta name="description" content="Meet breweries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main className={cn('breweries')}>
      <header className={cn('breweries__header')}>
        <div className={cn('container', 'breweries__header--texts')}>
          <h1>Breweries</h1>
          <p>A breweries list by Open Brewery DB</p>
        </div>
      </header>
      <div className={cn('container')}>
        <label style={{ marginRight: '20px' }} htmlFor="TypeID">Filter</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value) } id="TypeID">
        <option value="">Selecione</option>
          { 
            byTypes.map(opt => (
              <option key={opt}value={opt}>{opt}</option>
            ))
          }
        </select>
      </div>

      <section className={cn('container', 'breweries-list-cards')}>
      { breweries.length > 0 ?
        breweries.map(brewery => (
          <Card key={brewery.id} 
              title={brewery.name} 
              address={brewery.address_2} 
              description={`${brewery.county_province} - ${brewery.phone}`} 
              badge={{ type: brewery.brewery_type, name:  brewery.brewery_type}} />
        ))
          : <strong>no results</strong>
      }

      </section>
      <div className={cn('breweries-buttons')}>
        <Button theme={currentPage === 1 ? 'active' : 'inactive'} onClick={() => setCurrentPage(1)} type="button">1</Button>
        <Button theme={currentPage === 2 ? 'active' : 'inactive'} onClick={() => setCurrentPage(2)} type="button">2</Button>
        <Button theme={currentPage === 3 ? 'active' : 'inactive'} onClick={() => setCurrentPage(3)} type="button">3</Button>
      </div>
      <footer className={cn('breweries__footer')}>
          <p>
            Breweries List
          </p>
      </footer>
      </main>
    </div>
  )
}
