import React from 'react';
import Logo from '../../Components/img/branco.png';
import Navbar from '../../Components/Navbar/index.js';
import './style.css';
import Background from '../../Components/Background-animation/index.js';

function LandingPage() {
    return (
        <>
            <Background />
            <div className='container'>
                <header className='header'>
                    <Navbar />
                </header>

                <main>
                    <section className='section-1'>

                        <div className='div_Img_Txt'>
                            <p className='slgtxt'>InTec! Te conecta ao mundo.</p>
                            <img src={Logo} className="imgLanding" />

                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default LandingPage