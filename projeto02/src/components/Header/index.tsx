import { HeaderContainer } from './styles'

import logoCoffeDelivery from '../../assets/logo-coffeDelivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { OrdersContext } from '../../context/OrdersContext'

export function Header() {
  const { orderForm } = useContext(OrdersContext)

  const totalItems = orderForm?.items?.length || 0

  return (
    <HeaderContainer quantidade={totalItems}>
      <NavLink to="/" title="Home">
        <img src={logoCoffeDelivery} alt=""></img>
      </NavLink>
      <nav>
        <div className="location">
          <MapPin weight="fill" size="22" />
          <p>João Pessoa, PB</p>
        </div>
        <NavLink to="/checkout" title="Checkout" className="checkout">
          <ShoppingCart weight="fill" size="22" />
          <span>{totalItems}</span>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
