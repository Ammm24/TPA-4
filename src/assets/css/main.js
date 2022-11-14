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
.fContainer{
    display: flex;
    width: 100%;
    height: auto;
    background-color: #251B37;
    flex-direction: column;
}
.wrapper{
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 15px;
    height: 50px;
    background-color: #372948   ;
    box-shadow: 0 5px 12px 0 rgba(129, 127, 127, 0.5);
    position: sticky;
    top: 0;
}
.brand{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5em;
    padding: 15px;
    font-family: 'Staatliches', cursive;
    cursor: pointer;
}
.firstname{
    color: #FFCACA;
    font-weight: 700;
}
.lastname{
    color:#FFECEF;
    font-weight: 600;
    padding-left: 7px;
}
.navigation{
    display: flex;
    justify-content: center;
    align-items: center;
}
.navigation > li{
    list-style-type: none;
    padding: 10px;
}
.navigation > li > a{
    color: #FFCACA;
    font-size: 20px;
    font-family: 'Righteous', cursive;
    text-decoration: none;
}
.navigation > li >a:hover{
    color: snow;
    font-size: 22px;
    font-family: 'Righteous', cursive;
    text-decoration: none;
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
    transition: all .2s ease-in-out;
}
section{
    margin: auto;
    display: flex;
    margin-top: 100px;
}
.wrapper2{
    display: flex;
    flex-direction: column;
    margin-top: 55px;
    height: 100vh;
}
.kolom{
    margin: auto;
    margin-left: 13px;
    color: snow;
    font-family: 'Josefin Sans', sans-serif;
}
.kolom .deskripsi{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}
#Blog{
    display: flex;
    margin: auto;
    height: 100vh;
}
.img-blog{
    display: flex;
    position: relative;
    justify-items: right;
    margin-top: 200px;
    margin-left: 20px;
}
h2{
    font-weight: 800;
    font-size: 45px;
    margin-bottom: 25px;
    color: #FFCACA;
}
#About{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: #251B37;
    margin: auto;
}
#About > img{
    display: flex;
    -ms-flex-item-align: center;
    align-items: center;
    width: 0 90%;
    height: 340px;
    margin-bottom: 20px;
    margin-top: 0;
}
.isi-about{
    margin-top: 20px;
    text-align: center;
    color: snow;
    font-family: 'Josefin Sans', sans-serif;
}
.isi-about > p{
    font-size: medium;
}
.isi-about > h1{
    margin-top: 40px;
    margin-bottom: 10px;
    color: #FFCACA;
}
.isi-about>p>a{
    text-decoration: underline;
    color: azure;
}
.isi-about>p>a:hover{
    font-size: 20px;
    color: #FFECEF;
    transition: all .3s ease-in-out;
}
#Skills{
    display: flex;
    flex-direction: column;
    margin-top: 120px;
    font-family: 'Josefin Sans', sans-serif;
    width: 100%;
    height: 90vh;
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
    color: #FFCACA;
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
    color: #FFCACA;
    margin-top: 20px;
}
.skill-card > p > a:hover{
    text-decoration: none;
    color: orangered;
    cursor: pointer;
}
