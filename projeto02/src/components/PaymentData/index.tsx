import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentDataContainer } from './styles'

export function PaymentData() {
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
          <button>
            <span>
              <CreditCard size="16" />
            </span>
            <p>Cartão de Crédito</p>
          </button>
          <button>
            <span>
              <Bank size="16" />
            </span>
            <p>Cartão de Débito</p>
          </button>
          <button>
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
