import { styled } from "styled-components";
import EstilosGlobais from "./Componentes/EstilosGlobais/index.jsx";
import Cabecalho from "./Componentes/Cabecalho/index.jsx";
import BarraLateral from "./Componentes/BarraLateral/index.jsx";
import Banner from "./Componentes/Banner/index.jsx";
import bannerBackground from "./assets/banner.png"
import Galeria from "./Componentes/galeria/index.jsx";
import fotos from "./fotos.json"
import {useState} from "react";

const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`
const AppContainer = styled.div`
    width: 1440px;
    max-width: 100%;
    margin: 0 auto;
`
const MainContainer=styled.main`
    display: flex;
    gap: 24px;
`
const ConteudoGaleria = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

const App = () => {

    const [fotosGaleria, setFotosGaleria] = useState(fotos)

  return (
      <FundoGradiente>
          <EstilosGlobais/>
          <AppContainer>
              <Cabecalho/>
              <MainContainer>
                  <BarraLateral/>
                  <ConteudoGaleria>
                      <Banner
                          texto="A galeria mais completa de fotos do espaço!"
                          backgroundImage={bannerBackground}
                      />
                      <Galeria
                          fotos={fotosGaleria}
                      />
                  </ConteudoGaleria>
              </MainContainer>
          </AppContainer>
          {/*<ModalZoom/>*/}
      </FundoGradiente>
  )
}


export default App
