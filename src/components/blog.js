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
        <div id="Blog">
            <div className="kolom">
                <p className="deskripsi">I'll tell you my journey here!</p>
                <h2 style="margin-top: 50px; margin-bottom: 50px; text-align: center;">BLOG</h2>
                <div className="isi-blog">
                    <p>
                        Hello my friends! May I introduce myself?
                        If you allow then I will introduce myself.
                    </p>
                    <p>
                        My name is Muhammad Ilham. i called by name iam by my friends. Maybe I will tell my experiences and stories about me here.
                    </p>
                    <p>
                        I will share my journey and experience in daily learning since elementary school i want to be an app builder
                        enter me into this field of informatics. When I first started college I had a hard time understanding programming language lessons, but I
                    </p> 
                    <p>have a strong motivation to continue to increase my curiosity about technology.</p>
                    <p>
                        After 3 years I studied in the field of informatics on Institut Teknologi Indonesia, I learned a lot about programming code.
                        One of them is html, css, and javascript.
                    </p>
                    <p>And for me all programming languages ​​are not too difficult if you want to try hard to learn, and gain for experience. Because if u just</p>
                    <p>want to be able to but don't do it, then it's just bullshit and pointless.</p>
                </div>
            </div>
            <img src="IMG\4342052_19375.png" width="320" height="320" class="img-blog"/>
        </div>
    </div>

export export default Blog
