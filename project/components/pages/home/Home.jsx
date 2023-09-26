import React from 'react'
import mk1 from '../../../src/assets/the7.webp'

const Home = () => {
return (
    <main>
    <section className="home" id="home">
        <img src={mk1} className="home__img" />
            <div className="home__container container grid">
                <div className="home__data">
                    <span className="home__data-subtitle"></span>
                    <h1 className="home__data-title">YOU <br /> CAN JOIN <br />TO THE 7 <br /> SOON</h1>
                    <a href="#" className="button">Soon</a>
                </div>
                    </div>
                
        </section>
        </main>
  )
}

export default Home
