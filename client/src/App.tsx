import { GlobalStyle } from './style-guide/GlobalStyle'
import PokemonList from './components/PokemonList'

import * as S from './styles'

const App = () => (
  <>
    <GlobalStyle />
    <S.Container>
      <S.Header>
        <PokemonList />
      </S.Header>
    </S.Container>
  </>
)

export default App
