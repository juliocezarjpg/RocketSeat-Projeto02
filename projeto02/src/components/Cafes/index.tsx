import { Cafe } from '../Cafe'
import { CafesContainer } from './styles'

export function Cafes() {
  return (
    <CafesContainer>
      <h1>Nossos Cafés</h1>
      <div className="cafes">
        <Cafe />
        <Cafe />
        <Cafe />
        <Cafe />
        <Cafe />
      </div>
    </CafesContainer>
  )
}
