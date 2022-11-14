// Dependencies
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './../assets/css/main.css'
import './../assets/css/bootstrap.css'

// Assets
import ProfilePhoto from './../src/img/My Pictures.jpeg'

const Blog = () => 

consst [news, setNews] = useState([])
    useEffect(() => {
        axios
            .get(`https://634e4141f34e1ed826869202.mockapi.io/news`, {})
            .then((res) => {
                setNews(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);
    
    console.log(news)

    return
        news.map(newsData, index) 
            return
            <div className="fContainer"> 
        <nav className="wrapper">
            <div className="brand">
                <div className="firstname">Missachi</div>
                <div className="lastname">WEBSITE</div>
            </div>
            <ul className="navigation">
                <li><a href="index.html">Home</a></li>
                <li><a href="Blog.html">Blog</a></li>
                <li><a href="Skills.html">Skills</a></li>
                <li><a href="About.html">About</a></li>
                <li><img src="ICON\2Ce1.gif" alt="..."/></li>
            </ul>
        </nav>
        <div id="Skills">
            <h2 style="text-align: center;">
                SKILLS
            </h2>
            <div className="skill-session">
                <div className="skill-card">
                    <img src="ICON\undraw_experience_design_re_ca7l.svg"/>
                    <p><a href="index.html"> My Personal Website</a></p>
                </div>
                <div className="skill-card">
                    <img src="Guide-to-Effective-Communication-in-the-Workplace-Featured-Image.png"/>
                    <p style="margin-left: 50px;">Communication</p>
                </div>                    
                <div className="skill-card">
                    <img src="ICON\undraw_team_up_re_84ok.svg"/>
                    <p style="margin-left: 50px;">Team Project</p>
                </div>                    
                <div className="skill-card">
                    <img src="bisnis.jpg"/>
                    <p style="margin-left: 50px;">Buisines</p>
                </div>
            </div>
        </div>
    </div>

export default Skills
