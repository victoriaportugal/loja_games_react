import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className ="bg-[url('src/assets/pacman2_se.png')]">
        <div className="bg-cover bg-center bg-no-repeat">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Bem vindo a GameStudio!</h2>
              <p className='text-xl'>Aqui a imaginação é o limite</p>
  
              <div className="flex justify-around gap-4">
              
              <Link to="/categoria">
                <button className='rounded bg-white text-black py-2 px-4'>Ver games</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Home;
