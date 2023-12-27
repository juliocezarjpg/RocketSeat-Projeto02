import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import ilustration from '../../assets/Illustration.png'
import {
  DetailsOrderPlaced,
  LogoDdetailsOrderPlaced,
  OrderDetails,
  OrderPlacedContainer,
  OrderPlacedDetails,
} from './styles'
import { useContext } from 'react'
import { OrdersContext } from '../../context/OrdersContext'

export function OrderPlaced() {
  const { orderForm } = useContext(OrdersContext)

  return (
    <OrderPlacedContainer>
      <h1>Uhu! Pedido Confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>
      <OrderPlacedDetails>
        <OrderDetails>
          <DetailsOrderPlaced>
            <LogoDdetailsOrderPlaced infoscolor="purpleDark">
              <MapPin weight="fill" size="16" />
            </LogoDdetailsOrderPlaced>
            <div>
              <p>
                Entrega em{' '}
                <span>
                  {orderForm?.rua}, {orderForm?.numero}
                </span>
              </p>
              <p>
                {orderForm?.cidade} - {orderForm?.uf}
              </p>
            </div>
          </DetailsOrderPlaced>
          <DetailsOrderPlaced>
            <LogoDdetailsOrderPlaced infoscolor="yellow">
              <Timer weight="fill" size="16" />
            </LogoDdetailsOrderPlaced>
            <div>
              <p>Previsão de Entrega</p>
              <p>
                <span>20 min - 30 min</span>
              </p>
            </div>
          </DetailsOrderPlaced>
          <DetailsOrderPlaced>
            <LogoDdetailsOrderPlaced infoscolor="yellowDark">
              <CurrencyDollar weight="fill" size="16" />
            </LogoDdetailsOrderPlaced>
            <div>
              <p>Pagamento na Entrega</p>
              <p>
                <span>{orderForm?.paymentData}</span>
              </p>
            </div>
          </DetailsOrderPlaced>
        </OrderDetails>
        <img src={ilustration} alt="entregador"></img>
      </OrderPlacedDetails>
    </OrderPlacedContainer>
  )
}
