*{
    margin: 0px;
    padding: 0px;
    text-decoration: none;
}
body{
    margin: 0px;
    padding: 0px;
    font-family: 'Open sans', sans-serif;
}
body{
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #06283D;
}

.fContainer .wrapper{
    margin: auto;
    display: flex;
    width: auto;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1;
}
.wrapper{
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 15px;
    height: 50px;
    background-color: #256D85;
    box-shadow: 0 5px 12px 0 rgba(129, 127, 127, 0.5);
}
.Brand{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5em;
    padding: 15px;
    font-family: 'Staatliches', cursive;
    cursor: pointer;
}
.firstname{
    color: aliceblue;
    font-weight: 700;
}
.lastname{
    color: #06283D;
    font-weight: 600;
    padding-left: 7px;
}
.navigation{
    display: flex;
    justify-content: center;
    align-items: center;
}
.navigation>li{
    list-style-type: none;
    padding: 10px;
}
.navigation>li>a{
    color: #06283D;
    font-size: 20px;
    font-family: 'Righteous', cursive;
    text-decoration: none;
}
.navigation>li>a:hover{
    font-size: 22px;
    text-decoration: none;
    color: snow;
    transition: all .3s ease-in-out;
}
.navigation > li > img{
    width: 40px;
    height: 40px;
    border-radius: 40px;
}
.navigation > li > img:hover{
    width: 55px;
    height: 55px;
    border-radius: 55px;
    cursor: pointer;
    transition: .2s ease-in-out;
}
#HOME{
    margin-top: 50px;
    font-weight: 700;
}
section{
    margin: auto;
    display: flex;
    margin-bottom: 50px;
}
.kolom{
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 10px;
    color: snow;
    font-family: 'Josefin Sans', sans-serif;
}
.kolom .deskripsi{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    color: snow;
}
h2{
    font-family: inherit;
    font-weight: 800;
    font-size: 45px;
    margin-bottom: 20px;
    color: cyan;
}
.wrapper2{
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
}
.img-awal{
    margin-right: 10px;
}
#Blog{
    margin-top: 5px;
    width: auto;
    height: 100vh;
}
.isi-blog{
    font-family: 'Josefin Sans', sans-serif;
    font-style: inherit;
    font-size: small;
    text-align: left;
}
.img-blog{
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    justify-content: right;
    margin-top: 250px;
    margin-left: 20px;
}
#Skills{
    display: flex;
    flex-direction: column;
    margin-top: 120px;
    font-family: 'Josefin Sans', sans-serif;
}
.skill-session{
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
    justify-content: space-around;
}
.skill-card{
    width: 20%;
    margin: 0 auto;
    align-items: center;
}
.skill-card img{
    width: 60%;
    height: 60%;
}
.skill-card p{
    font-weight: 600;
    font-size: 15px;
    color: snow;
    margin-top: 20px;
}
.skill-card p:hover{
    text-decoration: none;
    color: orangered;
    cursor: pointer;
}
.skill-card > p > a{
    font-weight: 600;
    font-size: 15px;
    color: snow;
    margin-top: 20px;
}
.skill-card > p > a:hover{
    text-decoration: none;
    color: orangered;
    cursor: pointer;
}
#About{
    font-family: 'Josefin Sans', sans-serif;
}
