import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div>
      <PageTitle title='Sobre Nós' />
      <h1 className='font-bold text-3xl p-6'>Sobre Nós</h1>
      <p className='mt-6 text-center font-bold'>
        Inserir aqui texto contendo a história do estabelecimento!</p>
      <div>
        <Link href='/'>
          <a className= 'font-bold m-4'>Home</a>
        </Link>
      </div>
    </div>
  )
}
export default Sobre