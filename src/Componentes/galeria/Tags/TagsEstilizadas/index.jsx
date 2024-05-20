import {styled} from "styled-components";

const Itemtag =styled.li`
    background: #3e3e62;
    display: inline-flex;
    justify-content: space-between;
    font-size: 24px;
    line-height: 45px;
    margin: 15px;
    border-radius: 10px;
    padding: 0 7px;
    border: 2px solid ${props => props.$valor ? "#7B78E5" : "none"};
    cursor: pointer;
   &:hover{
       background: linear-gradient(45deg, #7B78E5, #C98CF1);
       
   }
`


const TagsEstilizadas = ({children, valor=false}) => {
    return(
        <Itemtag $valor={valor}>
            {children}
        </Itemtag>
    )
}

export default TagsEstilizadas