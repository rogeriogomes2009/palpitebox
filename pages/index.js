import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)

  return (
    <div>
      <PageTitle title='Seja Bem-vindo!' />
      <p className='mt-6 text-center font-bold'>
        Nossa política é sempre buscar o melhor atendimento para nossos clientes.<br />
        Por isso, estamos sempre abertos a ouvir sua opinião.
      </p>
      <div className='text-center my-12 font-bold'>
        <Link href='/pesquisa'>
          <a className='bg-purple-600 px-6 py-2 text-white text-center rounded-lg shadow-md hover:shadow'>
            Dar sua opinião ou sugestão</a>
        </Link>
        {!data && <p>Carregando...</p>}
        {!error && data && data.showCoupon &&
          < p className='mt-6 text-center font-bold'>
            {data.message}
          </p>
        }
      </div>

    </div >
  )
}

export default Index