import {styled} from "styled-components";
import TagsEstilizadas from "./TagsEstilizadas/index.jsx";

const ParagrafosEstilizados=styled.ul`
    color: #D9D9D9;
    font-size: 24px;
    line-height: 29px;
`
const Tags = () => {
    return(
            <>
                <ParagrafosEstilizados>
                    Busque por tags:

                    <TagsEstilizadas
                        valor={true}
                        children="Todas"
                    >
                    </TagsEstilizadas>

                    <TagsEstilizadas
                        valor={false}
                        children="Estrelas"
                    >
                    </TagsEstilizadas>

                    <TagsEstilizadas
                        valor={false}
                        children="Galáxias"
                    >
                    </TagsEstilizadas>

                    <TagsEstilizadas
                        valor={false}
                        children="Luas"
                    >
                    </TagsEstilizadas>

                    <TagsEstilizadas
                        valor={false}
                        children="Nebulosas"
                    >
                    </TagsEstilizadas>


                </ParagrafosEstilizados>

            </>
        )


}

export default Tags