import { styled } from "styled-components"
import { CiSearch } from "react-icons/ci";


const ContainerEstilizado = styled.div`
    position: relative;
    border-radius: 10px;
    display: inline-block;
`;


const CampoTextoEstilizado = styled.input`
    position: relative;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    border: double 2px transparent;
    border-radius: 20px;
    background-image: linear-gradient(#041833, #04244F), radial-gradient(circle at top left, #C98CF1, #7B78E5);
    background-origin: border-box;
    background-clip: content-box, border-box;
    
`;
const LupaEstilizada = styled.div`
    color: #7B78E5;
    position: absolute;
    font-size: 32px;
    right:10px;
    top: 7px;
`

const CampoTexto = (props) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura?" {...props} />
            <LupaEstilizada>
                <div>
                    <CiSearch/>
                </div>
            </LupaEstilizada>
        </ContainerEstilizado>
    )
}

export default CampoTexto
