// Dependencies
import React from 'react'
import './../assets/css/main.css'
import './../assets/css/bootstrap.css'
import About from './About'

// Assets
import ProfilePhoto from './../assets/img/my self.jpeg'


const About = () => {

    return (
        <>
            <div id="ww">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 centered">
                            <img src={ProfilePhoto} alt="ilham"/>
                            <h1>Tentang Ilham</h1>
                            <p> I'm Muhammad Ilham, I studied in Institut Teknologi Indonesia. take major a informatics</p>
                            <p>  In my free time, I study front-end development on Skilvul Course.</p>
                            <p> my goal is to help my friends to work on the web with cooperation and so that those who can make the web help those who can't</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
