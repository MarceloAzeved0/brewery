import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { apiGetBreweryById } from '../../services/api/brewery'
import { IBrewery  } from '../index'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import styles from '../../styles/pages/breweryDetail.module.scss'

import classnames from 'classnames/bind'
const cn = classnames.bind(styles)

const Brewery: React.FC = () => {
  const [brewery, setBrewery] = useState<IBrewery| null>(null)

  const router = useRouter()
  const { id } = router.query

  async function getBreweries(id: any){
    if(id){
      const data = await apiGetBreweryById(id)
      setBrewery(data)
    }
  }

  useEffect(() => {
    getBreweries(id)
  }, [id])

  return (
    <div>
      <Head>
        <title>Brewery Details</title>
        <meta name="description" content="Meet brewery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{ padding: '20px 0'}} className={cn('container')} >
        <Link href="/">
          <p>
            <strong>{'<  '}</strong> Back
          </p>
        </Link>
      </div>
      <main className={cn('container', 'brewery-detail')}>
        <h3>
          {brewery?.name}
        </h3>

        <p>
          Type: {brewery?.brewery_type}
        </p>
        <p>
          Street: {brewery?.street}
        </p>
        <p>
          City: {brewery?.city}
        </p>
        <p>
          State: {brewery?.state}
        </p>
        <p>
          Postal code: {brewery?.postal_code}
        </p>
        <p>
          Country: {brewery?.country}
        </p>
        <p>
          Website: <a style={{textDecoration: 'underline', color: 'blue'}} href={brewery?.website_url}>{brewery?.website_url}</a>
        </p>
        <p>
          Phone: {brewery?.phone}
        </p>
        <p>
          Open in maps: 
            <a style={{textDecoration: 'underline', color: 'blue'}} href={`https://www.google.com.br/maps/?q=${brewery?.latitude},${brewery?.longitude}`}> 
              {brewery?.latitude},{brewery?.longitude}
            </a>
        </p>
      </main>
      <Footer />
    </div>
  )
}

export default Brewery;