import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <section className='w-full  bg-slate-500'>
    <nav className='flex flex-row bg-red-500 justify-between bg-transparent'>
    <article className='p-3 hover:bg-black text-white'>

    <span >LOGO</span>
    </article>
    <article className='flex flex-wrap gap-3'>
        <Link className='p-3 hover:bg-black text-white' to="/showuser">Show Data</Link>
        <Link className='p-3 hover:bg-black text-white' to="/showuser/add">Add User</Link>
        <a className='p-3 hover:bg-black text-white' href="">Home</a>
        <a className='p-3 hover:bg-black text-white' href="">Home</a>
        <a className='p-3 hover:bg-black text-white' href="">Home</a>
        <a className='p-3 hover:bg-black text-white' href="">Home</a>

    </article>
    </nav>

    </section>
    </>
  )
}

export default Navbar
