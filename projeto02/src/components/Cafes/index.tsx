import { Cafe } from '../Cafe'
import { CafesContainer } from './styles'

import cafesData from '../../assets/cafes/listaDeCafes.json'

export function Cafes() {
  return (
    <CafesContainer>
      <h1>Nossos Cafés</h1>
      <div className="cafes">
        {cafesData.cafes.map((cafe) => (
          <Cafe key={cafe.id} {...cafe} />
        ))}
      </div>
    </CafesContainer>
  )
}
