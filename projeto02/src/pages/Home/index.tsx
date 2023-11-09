import { HomeContainer } from './styles'

import { Banner } from '../../components/Banner'
import { Cafes } from '../../components/Cafes'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Cafes />
    </HomeContainer>
  )
}
