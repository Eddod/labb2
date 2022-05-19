import './App.css';
import './cv.css';
// import data from './cv.js'
import teddyimg from './images/bild1.jpg';
import ciggfishimg from './images/bild3.jpg';
import mooseimg from './images/bild4.jpg';
import happymomimg from './images/mamma.jpg';
import mammaspeakimg from './images/mammatalar.jpeg';
// import {useState, useEffect} from 'react';
import {Route, Routes, Link} from 'react-router-dom';

//JSON FILER JS
// vart den ska
//const cvname = document.getElementById("cvName");

// vad den är
// const cv = fetch("./CV.json")
// .then(response => {
//    return response.json();
// })
// .then(cvData => {
//   // cvData === CV.json
//   // vad som ska
//   cvname.innerText = cvData.name

//   // <div class="services">
//   const servicesContainers = document.getElementsByClassName("services")
//   const servicesContainer = servicesContainers[0]

//   // Loopa igenom experiences
//   cvData.experiences.forEach(experience => {

//     const serviceDivElement = document.createElement('div')
//     serviceDivElement.classList.add("service")

//     const titleElement = document.createElement('h3')
//     const descriptionElement = document.createElement('p')

//     titleElement.innerText = experience.title
//     descriptionElement.innerText = experience.description

//     serviceDivElement.appendChild(titleElement)
//     serviceDivElement.appendChild(descriptionElement)

//     servicesContainer.appendChild(serviceDivElement)
//   })
// });




// //FEST EASTEREGG
// const sequence = "fest"
// let input=""

// document.addEventListener('keydown', (event) => {

//     input+= event.key;
//     console.log(input);

// if(input.length > 4 && input!= sequence){
//   input=""
// }
// else if(input === sequence){
//   alert('DAGS FÖR KALAS')
//   document.body.style.backgroundColor='salmon';
// }
// });


function Home () {
    return (
    <section className ="intro" id="Hem">   
    <h1 className="section__title section__title--intro">
        Hi, I am <br /><strong id="cvName">Susanne Westerberg</strong>
    </h1>
    <p className="section__subtitle section__subtitle--intro">Artist</p>
    <img src={mammaspeakimg} alt="en bild på min mor" className="intro__img" />
</section>
)}

function Experience() {
    return(
        <section style={{ backgroundImage: `url(${mooseimg})`}} className="my-services" id="Erfarenheter">
            <h2 className="section__title section__title--services">Erfarenheter</h2>
            <div className="services">
                {/* <!--ÄNDRAT TILL JSONFILER--> */}
               <div className="service">
                    <h3>Paint</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Cumque consequatur optio architecto voluptatibus
                        nesciunt. Reiciendis?</p>
                </div>  
                {/* <!--service--> */}

                <div className="service">
                    <h3>Paint</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Cumque consequatur optio architecto voluptatibus
                        nesciunt. Reiciendis?</p>
                </div>  
                {/* <!--service--> */}

                 <div className="service">
                    <h3>Paint</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Cumque consequatur optio architecto voluptatibus
                        nesciunt. Reiciendis?</p>
                </div>  
                {/* <!--service--> */}
            </div>
            <MoreInfobtn/>
            {/* <!--service-->  */}
        </section>

    )
    

}

function HamburgerMenu() {
    

    const handleOnClickMenu = () => {
        document.body.classList.toggle('nav-open');
    }

    const closeMenu = () => {
        document.body.classList.remove('nav-open');
    }

    return (
           <header>
            <button onClick={handleOnClickMenu} className ="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li onClick={closeMenu} className="nav__item"><a href="#Hem" className="nav__link">Hem</a></li>
                    <li onClick={closeMenu} className="nav__item"><a href="#Erfarenheter" className="nav__link">Erfarenheter</a></li>
                    <li onClick={closeMenu} className="nav__item"><a href="#Om-mig" className="nav__link">Om mig</a></li>
                    <li onClick={closeMenu} className="nav__item"><a href="#Kontakt" className="nav__link">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    )
}

function MoreInfobtn() {


  const handleOnClickMoreInfo = () => {
    var coll = document.getElementsByClassName("btn");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var textcontent = document.getElementById("#textcontent");
    textcontent.hidden = !textcontent.hidden;
    console.log(textcontent)
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } 
    else 
    {
      content.style.maxHeight = content.scrollHeight + "px";
    }
    });
    }
  }

  return (

            <button onClick = {handleOnClickMoreInfo} type="button" className="btn">Mer info
                <div className="content">
                    <p id="#textcontent" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, voluptates.</p>
                </div>
            </button>
  )
 
}

function AboutMe() {
    return(
        <section className="about-me" id="Om-mig">
            <h2 className ='section__title' section__title--about>Om mig</h2>
            <p className ="section__subtitle section__subtitle--about">Konstnär från Varberg</p>

            <div className="about-me__body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, illum.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, dolorem!</p>
            </div>
            <img src={happymomimg} alt = "glad bild på min mor" className="about-me__img" />

            <section className="my-work" id="work">
                <h2 className="section__title">Mitt arbete</h2>
                    <p className="section__subtitle">Lite av min konst</p>

                <div className ="portfolio">
                    {/* <!--Porfolio item 01--> */}
                    <a href="https://github.com/Eddod/ProjektArbeteEF" className="portfolio__item">
                        <img src={teddyimg} alt="målning av mor" className="portfolio__img"/>
                    </a>

                    {/* <!--Porfolio item 02--> */}
                    <a href="https://github.com/Eddod/Threading" className="portfolio__item">
                         <img src={mooseimg} alt="målning av mor"className="portfolio__img"/> 
                    </a>

                    {/* <!--Porfolio item 03--> */}
                    <a href="https://github.com/Eddod/Labb1GenericsAvancerad" className="portfolio__item">
                        <img src={ciggfishimg} alt="målning av mor"className="portfolio__img"/>
                    </a>

                </div>
            </section>
        </section>
    )

}

function Footer (){
    return (
        <footer>   
        <section className="kontakt" id="Kontakt" ></section>
        <a href="mailto:hello@mamma.se" className="footer__link">hello@mamma.se</a>
        <NeonButton/>
            <ul className ="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://spotify.com">
                            <i className="fa-brands fa-spotify">
                            </i>
                        </a>
                    </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://facebook.com">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://instagram.com">
                        <i className="fa-brands fa-instagram">                            
                        </i>
                    </a>
                </li>
                
            </ul>
    </footer>
    )
}

function NeonButton(){

    const handleOnclickNeonBtn = () => {
        document.body.style.backgroundColor = 'Salmon';
    }
    return(
        <button onClick= {handleOnclickNeonBtn} id="neon-button">FESTKNAPP</button>
    )
}

// function InputEasterEgg{

// }

function App() {
  return (
    <div className="App">

        <HamburgerMenu />
         
        <Home/>
        
        <Experience/>

        <AboutMe/>

        <Footer/>
    
    </div>
  );
}


export default App;
