import {styled} from "styled-components";
import {FiHeart} from "react-icons/fi";
import {FaHeart} from "react-icons/fa";
import {BsArrowsAngleExpand} from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import {Fragment, useEffect, useState} from "react";

const ImagemGalaxias = styled.img`
    height: 340px;
    border-radius: 12px;

`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    box-shadow: 0px 4px 4px 0px #00000026;
    border-radius: 25px;
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 99.60%;
    height: 60px;
    background: #001634;
    color: white;
    margin-top: -60px;
    border: 1px solid transparent;
    border-radius: 0 0 10px 10px;
`
const Fonte = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: space-between;
`
const TituloContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 48px;
    padding: 10px;
`
const Titulo = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
`
const ContainerButtons = styled.div`
    display: flex;
    margin-right: 10px;
    margin-bottom: 5px;
    align-items: center;
    align-self: flex-end;
    justify-content: space-between;
    width: 60px;
    cursor: pointer;
`
const IconeFav = styled.div`
    color: white;
    font-size: 24px;
`
const IconeExpand = styled.div`
    color: white;
    font-size: 24px;
`

//----------------------------------------------//

const Overlay=styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const HoverCard = styled.div`
    display: flex;
    position: fixed;
    width: 900px;
    color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); /* Centraliza o card */
    overflow: hidden; /* Evita que o conteúdo saia do card */
    margin-left: 100px;
    div{
        width: 100%;
    }
    img {
        width: 100%;
        height: 100%;
    }
    
`
    const ContainerButtonsOpen=styled.div`
        display: flex;
        margin-bottom: 5px;
        cursor: pointer;
        position: relative;
        
        .iconCloseCard{
            position: absolute;
            color: white;
            width: 100px;
            font-size: 32px;
            display: flex;
            top: -600px;
            right: -50px;
            align-self: flex-end;
        }
            .iconFavCard{
                position: absolute;
                right: -60px;
                top: -8px;
                display: flex;
                font-size: 24px;
                width: 100px;
            }
    `

const CardImage = (children, onChange) => {
    const [foto, setFoto] = useState(false)
    const [hoverFoto, setHoverFoto] = useState(false)

    const [favorito, setFavorito] = useState(false)

    let favoritando = () => {
        setFavorito(!favorito)
    }

    useEffect(() => {
    }, [hoverFoto]);
    return (
        <Fragment>
                {hoverFoto && (
                    <div>
                    <Overlay/>
                        <HoverCard>
                            <Card>
                                <ImagemGalaxias src={children.src} alt={children.alt}/>
                                <Footer>
                                    <TituloContainer>
                                        <Titulo>{children.alt}</Titulo>
                                        <Fonte>{children.fonte}</Fonte>
                                    </TituloContainer>
                                    <div className="botoes">
                                        <ContainerButtonsOpen>
                                            <IconeExpand  className="iconCloseCard" onClick={() => {
                                                setHoverFoto(prevState => !prevState)
                                            }}>
                                                <IoClose/>
                                            </IconeExpand>
                                            <IconeFav  className="iconFavCard" onClick={favoritando}>{
                                                favorito ? <FaHeart color={"red"}/> : <FiHeart/>
                                            }
                                            </IconeFav>
                                        </ContainerButtonsOpen>
                                    </div>
                                </Footer>
                            </Card>
                        </HoverCard>
                    </div>)
                }


            <Card>
                <ImagemGalaxias src={children.src} alt={children.alt}/>
                <Footer>
                    <TituloContainer>
                        <Titulo>{children.alt}</Titulo>
                        <Fonte>{children.fonte}</Fonte>
                    </TituloContainer>
                    <ContainerButtons>
                        <IconeFav onClick={favoritando}>{
                            favorito ? <FaHeart color={"red"}/> : <FiHeart />
                        }
                        </IconeFav>
                        <IconeExpand onClick={() => {
                            setHoverFoto(prevState => !prevState)
                        }}>{<BsArrowsAngleExpand/>}</IconeExpand>
                    </ContainerButtons>
                </Footer>
            </Card>
        </Fragment>
    )
}
export default CardImage
