import React from 'react'
import { Link } from 'react-router-dom';
import homeAnime from './../../assets/home_anime.gif';

import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
                <div className='header-text'>
                    <h1>Welcome to my portfolio!</h1>
                    <p>This is Akhilesh, a full stack web developer</p>
                </div>
                <div className='head-btns'>
                    <Link to='/about' className='btn btn-white'>
                        <p className='btn-text'>Know more about me</p>
                    </Link>
                    <Link to='/contact' className='btn btn-transparent'>
                        <p className='btn-text'>Connect with me</p>
                    </Link>
                    <a href="assets/Akhilesh-parmar-Resume.pdf" className='btn btn-white'>
                        <p className='btn-text'>View Resume</p>
                    </a>
                </div>
                <div className='splash-image'>
                    <img
                        src={homeAnime}
                        alt='animation'
                        className='home-anime'
                    />
                </div>
            </div>
    )
}

export default Home;