import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por:   Rogério Gomes /{' '}
        <a target="_blank" className='hover:underline' href='https://www.linkedin.com/in/rogeriogomes2009'>Linkedin</a> /{' '}
        <a target="_blank" className='hover:underline' href='https://github.com/rogeriogomes2009'>GitHub</a>
        <div>
          <div className='mt-2' />
          <a><img className='inline p-4' src='/logo_semana_fsm.png'/></a>
          <Link href= 'http://www.devpleno.com'>
          <a target="_blank"><img className='inline p-4' src='/logo_devpleno.png' /></a>
          </Link>
                </div>
      </div>
    </div>
  )
}
export default Footer