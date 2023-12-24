import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import ilustration from '../../assets/Illustration.png'
import {
  DetailsOrderPlaced,
  LogoDdetailsOrderPlaced,
  OrderDetails,
  OrderPlacedContainer,
  OrderPlacedDetails,
} from './styles'

export function OrderPlaced() {
  return (
    <OrderPlacedContainer>
      <h1>Uhu! Pedido Confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>
      <OrderPlacedDetails>
        <OrderDetails>
          <DetailsOrderPlaced>
            <LogoDdetailsOrderPlaced infosColor="purpleDark">
              <MapPin weight="fill" size="16" />
            </LogoDdetailsOrderPlaced>
            <div>
              <p>
                Entrega em <span>Rua Quartoze de Julho, 1319</span>
              </p>
              <p>João Pessoa - PB</p>
            </div>
          </DetailsOrderPlaced>
          <DetailsOrderPlaced>
            <LogoDdetailsOrderPlaced infosColor="yellow">
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
            <LogoDdetailsOrderPlaced infosColor="yellowDark">
              <CurrencyDollar weight="fill" size="16" />
            </LogoDdetailsOrderPlaced>
            <div>
              <p>Pagamento na Entrega</p>
              <p>
                <span>Cartão de Crédito</span>
              </p>
            </div>
          </DetailsOrderPlaced>
        </OrderDetails>
        <img src={ilustration} alt="entregador"></img>
      </OrderPlacedDetails>
    </OrderPlacedContainer>
  )
}
