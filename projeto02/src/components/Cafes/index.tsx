import { Cafe } from '../Cafe'
import { CafesContainer } from './styles'

import cafesData from '../../assets/cafes/listaDeCafes.json'

export function Cafes() {
  console.log(cafesData.cafes[0])
  return (
    <CafesContainer>
      <h1>Nossos Cafés</h1>
      <div className="cafes">
        <Cafe {...cafesData.cafes[0]} />
        <Cafe {...cafesData.cafes[1]} />
        <Cafe {...cafesData.cafes[2]} />
        <Cafe {...cafesData.cafes[3]} />
        <Cafe {...cafesData.cafes[4]} />
      </div>
    </CafesContainer>
  )
}
