import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-black text-blue-700 flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Loja Games</div>

            <div className='flex gap-4'>
              <Link to='/produto' className='hover:underline'>Produtos</Link>
              <Link to='/categoria' className='hover:underline'>Categorias</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categorias</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar