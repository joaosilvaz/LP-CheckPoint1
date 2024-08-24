import React, { useState } from 'react';
import "./index.css"
import estrela from '../../assets/svg/estrela.svg'
import estrela1 from '../../assets/svg/estrela1.svg'


function Main(props:{
    titulo: string,
    nota: number,
    backgroundimage: string,
    imagem1: string,
    imagem2: string,
}){
    const [estrelaImg, setEstrelaImg] = useState(estrela);
    const [textoAvaliacao, setTextoAvaliacao] = useState('AVALIAR');
 
    const clique = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        if (estrelaImg === estrela) {
            setEstrelaImg(estrela1);
            setTextoAvaliacao('AVALIADO');
        } else {
            setEstrelaImg(estrela);
            setTextoAvaliacao('AVALIAR');
        }
    };
 
    return(
        <main className="background-main" style={{
            backgroundImage: `url(${props.backgroundimage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'}}>
            <div className="container">
                <div className="header-main"> 
                    <h1>{props.titulo}</h1>
                </div>
                 <div className="ratings">
                    <div className="avaliacao">
                        <h2>AVALIAÇÃO DA RATINGS</h2>
                        <div className="nota">
                            <img src={estrela1} alt="Estrela de Avaliações" />
                            <p>{props.nota}<span>/10</span></p>
                        </div>
                    </div>
                    <div className="avaliacao">
                        <h2>SUA AVALIAÇÃO</h2>
                        <div className="nota">
                            <a className="clickestrela" onClick={clique} href="#!">
                                <img src={estrelaImg} alt="Estrela Avaliar" />
                            </a>
                            <p className='avaliar'>{textoAvaliacao}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container-image">
                    <div className="image1">
                        <img src={props.imagem1} alt="God of War - Ragnarok" />
                    </div>
                    <div className="image2">
                        <img src={props.imagem2} alt="God of War - Ragnarok" />
                    </div>
                </div>
            </div>
             
        </main>
        
       
    )
}


export default Main;