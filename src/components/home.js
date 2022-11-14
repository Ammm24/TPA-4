import React from 'react'
import ProfilePhoto from './../src/img/My Pictures.jpeg'
import './../assets/css/main.css'

const Home = () => {
  return (
    <div id="ww">
        <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 centered">
            <img src={ProfilePhoto} alt="Ilham"/>
            <h1>Halo, nama saya Ilham!</h1>
            <p>
              Perkenalkan, saya Muhammad Ilham, kalian boleh memanggil saya Ilham.
              Saya adalah seorang Front-end Develop yang games.
            </p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home
