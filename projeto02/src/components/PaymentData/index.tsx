import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentDataContainer } from './styles'
import { useContext } from 'react'
import { OrdersContext } from '../../context/OrdersContext'

export function PaymentData() {
  const { setPaymentData } = useContext(OrdersContext)

  function handlePaymentClick(paymentType: string) {
    setPaymentData(paymentType)
  }

  return (
    <PaymentDataContainer>
      <div className="paymentData">
        <div className="titulos">
          <CurrencyDollar size="22" className="icone" />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>
        <div className="paymentOptions">
          <button onClick={() => handlePaymentClick('Cartão de Crédito')}>
            <span>
              <CreditCard size="16" />
            </span>
            <p>Cartão de Crédito</p>
          </button>
          <button onClick={() => handlePaymentClick('Cartão de Débito')}>
            <span>
              <Bank size="16" />
            </span>
            <p>Cartão de Débito</p>
          </button>
          <button onClick={() => handlePaymentClick('Dinheiro')}>
            <span>
              <Money size="16" />
            </span>
            <p>Dinheiro</p>
          </button>
        </div>
      </div>
    </PaymentDataContainer>
  )
}
