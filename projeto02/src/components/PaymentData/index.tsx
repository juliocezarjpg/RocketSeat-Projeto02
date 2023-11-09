import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentDataContainer } from './styles'

export function PaymentData() {
  return (
    <PaymentDataContainer>
      <div>
        <div className="Titulo">
          <CurrencyDollar />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>
        <div>
          <button>
            <CreditCard />
            <p>Cartão de Crédito</p>
          </button>
          <button>
            <Bank />
            <p>Cartão de Débito</p>
          </button>
          <button>
            <Money />
            <p>Dinheiro</p>
          </button>
        </div>
      </div>
    </PaymentDataContainer>
  )
}
