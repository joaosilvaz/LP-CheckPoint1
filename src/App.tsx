import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import About from './Components/About'
import imagem1 from '../src/assets/Images/imagem1.png'
import imagem2 from '../src/assets/Images/imagem2.png'
import backgroundimage from '../src/assets/Images/background-image.png'
import Footer from './Components/Footer'


function App() {
  return (
    <>
      <Header/>
      <Main titulo='GOD OF WAR: RAGNARÖK' nota={9.6} imagem1={imagem1} imagem2={imagem2} backgroundimage={backgroundimage}/>
      <About frase='Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.' nota={10} nome='Caio Halbert' data='9 de novembro de 2022' titulo='What an incredible sequel!' nome2='Claudia Rayara' data2='14 de novembro de 2022' titulo2='This game took part of my soul...' mensagem='Warning: Spoilers!' like1={33} dislike1={11} like2={24} dislike2={6} paragrafo={`A fantastic and strong continuation of its predecessor, God of War Ragnarök is not afraid to take unexpected turns, or slow its pace for you to fully explore an environment. It has the same upgrading system as before, but with better armor, in my opinion. Atreus is a little bit older now and it's so great to see everybody reprise their magnificent roles. <br /> <br /> I don't want to give away too much in this review, but it's definitely worth buying. One of the best looking games on PS5. It'll definitely be a game of the year contender with Elden Ring. If you're new to the series, I recommend you start with God of War (2018) If you have the dedication, you could always start from the very first one. They're all on the PS+ collection. I still have yet to beat this newest entry, but I wanted to spread the good word as soon as possible: Ragnarök is here and it is beautiful.`}/>
      <Footer/>
    </>
  )
}

export default App;
