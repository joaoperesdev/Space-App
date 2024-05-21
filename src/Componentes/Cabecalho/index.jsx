import {styled} from "styled-components";
import CampoTexto from "../CampoTexto/index.jsx";


const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;

    img {
        width: 212px;
    }
`

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="space-app"/>
            <CampoTexto/>
        </HeaderEstilizado>
    )
}

export default Cabecalho
