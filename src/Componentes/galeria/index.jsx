import {styled} from "styled-components";
import Tags from "./Tags/index.jsx";
import CardImage from "./CardImage/index.jsx";
import Titulo from "../Titulo/index.jsx";


const GaleriaContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    flex-wrap: wrap;
`

const Titulos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 30px;
`

const ContainerPopulares= styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: column; 
    img{
        margin-bottom: 20px;
        width: 150px;
        height: 150px;
        border-radius: 20px;
    }
`
const BotaoMais = styled.button`
    width: 150px;
    height: 50px;
    border: double 1px transparent;
    border-radius: 12px;
    background-image: linear-gradient( #04244F,  #154580), radial-gradient(circle at left , #C98CF1, #7B78E5);
    background-clip: content-box, border-box;
    cursor: pointer;
    color: white;
    &:hover{
        background: linear-gradient(45deg, #7B78E5, #C98CF1);
        border: none;
    }
`

const Galeria = ({ fotos}) => {

    return (
        <>
            <Tags/>
            <Titulos>
                <Titulo>Navegue pela galeria:</Titulo>
                <Titulo>Populares:</Titulo>
            </Titulos>
            <GaleriaContainer>
                <CardsContainer>
                    {fotos.map((foto) => {
                        return (
                            <CardImage
                                       foto={foto}
                                       fonte={foto.fonte}
                                       key={foto.id}
                                       src={foto.path}
                                       alt={foto.titulo}
                            />
                        )
                    })}
                </CardsContainer>
                <ContainerPopulares>
                    <img src="/populares/foto-1.png" alt="nuvens"/>
                    <img src="/populares/foto-2.png" alt="nuvens"/>
                    <img src="/populares/foto-3.png" alt="nuvens"/>
                    <img src="/populares/foto-4.png" alt="nuvens"/>
                    <img src="/populares/foto-5.png" alt="nuvens"/>
                    <BotaoMais> Ver Mais</BotaoMais>
                </ContainerPopulares>
            </GaleriaContainer>
        </>
    )
}
export default Galeria