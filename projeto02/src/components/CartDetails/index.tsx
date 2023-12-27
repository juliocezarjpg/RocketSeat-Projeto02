import { NavLink } from 'react-router-dom'
import { ItemCartDetails } from '../ItemCartDetails'
import { CartDetailsContainer } from './styles'
import { useContext, useEffect, useState } from 'react'
import { OrdersContext } from '../../context/OrdersContext'

import cafesData from '../../assets/cafes/listaDeCafes.json'

interface OrdemItem {
  id: number
  quantidade: number
}

export function CartDetails() {
  const { orderForm } = useContext(OrdersContext)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0

      orderForm?.items?.forEach((item: OrdemItem) => {
        const cafeInfo = cafesData.cafes.find((cafe) => cafe.id === item.id)

        const itemPrice = cafeInfo
          ? parseFloat(cafeInfo.preço.replace(',', '.')) * item.quantidade
          : 0

        total += itemPrice
      })

      setTotalPrice(total)
    }

    calculateTotalPrice()
  }, [orderForm])

  const totalPriceString = totalPrice.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  const totalOrderPriceString = (totalPrice + 3.5).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <CartDetailsContainer>
      <div>
        <div>
          {orderForm?.items?.map((item: OrdemItem, index) => (
            <ItemCartDetails key={index} item={item} />
          ))}
        </div>
        <div className="linhasCartDetails">
          <div className="linhaCartDetails">
            <p>Total de itens</p>
            <p>R$ {totalPriceString}</p>
          </div>
          <div className="linhaCartDetails">
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>
          <div className="linhaCartDetails">
            <p>Total</p>
            <p>R$ {totalOrderPriceString}</p>
          </div>
        </div>
        <NavLink className="nav" to="/orderplaced">
          <button className="confirmarPedido">Confirmar Pedido</button>
        </NavLink>
      </div>
    </CartDetailsContainer>
  )
}
