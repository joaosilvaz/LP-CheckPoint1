import { useState } from 'react';
import './index.css'
import seta from '../../assets/svg/seta.svg'
import mais from '../../assets/svg/mais.svg'
import estrela2 from '../../assets/svg/estrela2.svg'
import pontos from '../../assets/svg/pontos.svg'
import like from '../../assets/svg/like.svg'
import dislike from '../../assets/svg/dislike.svg'
import angle from '../../assets/svg/angle.svg'

function About(props:{
    frase: string,
    nota: number,
    nome: string,
    data: string,
    titulo: string,
    nome2: string,
    data2: string,
    titulo2: string,
    mensagem: string,
    like1: number,  
    dislike1: number,
    like2: number,
    dislike2: number,
    paragrafo: string,
}){
    const [likeCount1, setLikeCount1] = useState(props.like1);
    const [dislikeCount1, setDislikeCount1] = useState(props.dislike1);
    const [likeCount2, setLikeCount2] = useState(props.like2);
    const [dislikeCount2, setDislikeCount2] = useState(props.dislike2);

    const [likeActive1, setLikeActive1] = useState(false);
    const [dislikeActive1, setDislikeActive1] = useState(false);
    const [likeActive2, setLikeActive2] = useState(false);
    const [dislikeActive2, setDislikeActive2] = useState(false);

    const toggleLike1 = () => {
        if (likeActive1) {
            setLikeCount1(likeCount1 - 1);
        } else {
            setLikeCount1(likeCount1 + 1);
            if (dislikeActive1) {
                setDislikeCount1(dislikeCount1 - 1);
                setDislikeActive1(false);
            }
        }
        setLikeActive1(!likeActive1);
    };

    const toggleDislike1 = () => {
        if (dislikeActive1) {
            setDislikeCount1(dislikeCount1 - 1);
        } else {
            setDislikeCount1(dislikeCount1 + 1);
            if (likeActive1) {
                setLikeCount1(likeCount1 - 1);
                setLikeActive1(false);
            }
        }
        setDislikeActive1(!dislikeActive1);
    };

    const toggleLike2 = () => {
        if (likeActive2) {
            setLikeCount2(likeCount2 - 1);
        } else {
            setLikeCount2(likeCount2 + 1);
            if (dislikeActive2) {
                setDislikeCount2(dislikeCount2 - 1);
                setDislikeActive2(false);
            }
        }
        setLikeActive2(!likeActive2);
    };

    const toggleDislike2 = () => {
        if (dislikeActive2) {
            setDislikeCount2(dislikeCount2 - 1);
        } else {
            setDislikeCount2(dislikeCount2 + 1);
            if (likeActive2) {
                setLikeCount2(likeCount2 - 1);
                setLikeActive2(false);
            }
        }
        setDislikeActive2(!dislikeActive2);
    };

    return(
        <section className='container-main'>
            <div className='container-one'>
                <div className='container-enredo'>
                    <img src={seta} alt="Seta" />
                    <p>ENREDO</p> 
                </div>
                <div className='text-enredo'>
                    <p>{props.frase}</p>
                </div>
                <div className='avaliacao-usuario'>
                    <img src={seta} alt="Seta" />
                    <p className='title'>AVALIAÇÕES DE USUÁRIO</p> 
                    <div className='right-aligned'>
                        <img className='mais' src={mais} alt="+"/>
                        <p className='avaliar'>Avaliar</p>
                    </div>
                </div>
                <div className='container-avaliacao'>
                    <div className='top-row'> 
                        <div className='avaliacao-destaque'>
                            <p>AVALIAÇÃO EM DESTAQUE</p>
                        </div>
                        <div className='container-nota'>
                            <img src={estrela2} alt="Estrela de Avaliação"/>
                            <p>{props.nota}<span>/10</span></p>
                        </div>
                    </div>
                    <div className='name-date'> 
                        <p className='name'>{props.nome}</p>
                        <p className='date'>{props.data}</p>
                    </div>
                    <div className='title-paragraph'>
                        <p className='title'>{props.titulo}</p> <br />
                        <p dangerouslySetInnerHTML={{ __html: props.paragrafo}} className='paragraph'></p>
                    </div>
                    <div className='container-feedback'>
                        <div className='feedbacks'>
                            <div className='feedback-item'>
                                <a href="#!" onClick={toggleLike1}> 
                                    <img className={`like ${likeActive1 ? 'active' : ''}`}
                                    src={like}
                                    alt="Like" />
                                    </a>
                                <span>{likeCount1}</span>
                            </div>
                            <div className='feedback-item'>
                                <a href="#!" onClick={toggleDislike1}>
                                <img className={`dislike ${dislikeActive1 ? 'active' : ''}`}
                                    src={dislike}
                                    alt="Dislike"/>
                                </a>
                                <span>{dislikeCount1}</span>
                            </div>
                        </div>
                        <img src={pontos} alt="Três pontos" />
                    </div>

                </div>
                <div className='container-avaliacao2'>
                    <div className='top-row'> 
                        <div className='avaliacao-destaque'>
                            <p>AVALIAÇÃO EM DESTAQUE</p>
                        </div>
                        <div className='container-nota'>
                            <img src={estrela2} alt="Estrela de Avaliação"/>
                            <p>{props.nota}<span>/10</span></p>
                        </div>
                    </div>
                    <div className='name-date'> 
                        <p className='name'>{props.nome2}</p>
                        <p className='date'>{props.data2}</p>
                    </div>
                    <div className='title-paragraph2'>
                        <p className='title'>{props.titulo2}</p> <br />
                    </div>
                    <div className='container-black'>
                        <p className='text-warning'>{props.mensagem}</p>
                        <img src={angle} alt="Seta" />
                    </div>
                    <div className='container-feedback'>
                        <div className='feedbacks'>
                            <div className='feedback-item'>
                                <a href="#!" onClick={toggleLike2}>
                                    <img  className={`like ${likeActive2 ? 'active' : ''}`}
                                    src={like}
                                    alt="Like"/>
                                </a>
                                <span>{likeCount2}</span>
                            </div>
                            <div className='feedback-item'>
                                <a href="#!" onClick={toggleDislike2}>
                                    <img className={`dislike ${dislikeActive2 ? 'active' : ''}`}
                                    src={dislike}
                                    alt="Dislike"/>
                                </a>
                                <span>{dislikeCount2}</span>
                            </div>
                        </div>
                        <img src={pontos} alt="Três pontos" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;