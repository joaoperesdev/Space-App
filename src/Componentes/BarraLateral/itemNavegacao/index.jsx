import {styled} from "styled-components";


const ItemListaEstilizado = styled.li`
    font-size: 22px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? "#7B78E5" : "#D9D9D9"};
    display: flex;
    align-self: center;
    gap: 22px;
    font-family: ${props => props.$ativo ? "Arial Black" : "Arial"};
    
`

const ItemNavegacao = ({Children, iconeAtivo, iconeInativo, ativo = false}) => {
    return (
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt=""/>
            {Children}
        </ItemListaEstilizado>

    )
}

export default ItemNavegacao