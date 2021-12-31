
import React from 'react'
import Link from 'next/link'

import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div>
      <PageTitle title='Contato' />
      
      <h1 className='font-bold text-3xl p-6'>Nossos Contatos</h1>
      <p className='mt-6 text-center font-bold'>
        Para entrar em contato conosco solicitamos, por favor, clicar<br />
        nos links abaixo!</p>
        <div>
        <Link href= 'mailto:meuemail@email.com.br'>
          <a target="_blank"><img className='mx-auto p-4' src='/email.png' /></a>
          </Link>
          <Link href= 'https://wa.me/+5521972300670'>
          <a target="_blank"><img className='mx-auto p-0 w-12 h-12' src='/zap.png' /></a>
          </Link>
          </div>
      <div>
        <Link href='/'>
          <a className= 'font-bold m-4'>Home</a>
        </Link>
      </div>
    </div>
  )
}
export default Contato