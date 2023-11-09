import { HeaderContainer } from './styles'

import logoCoffeDelivery from '../../assets/logo-coffeDelivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeDelivery} alt=""></img>
      </NavLink>
      <nav>
        <div className="location">
          <MapPin weight="fill" size="22" />
          <p>Caxias do Sul, RS</p>
        </div>
        <NavLink to="/checkout" title="Checkout" className="checkout">
          <ShoppingCart weight="fill" size="22" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
