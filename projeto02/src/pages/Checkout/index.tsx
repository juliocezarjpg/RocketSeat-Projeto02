import { PaymentData } from '../../components/PaymentData'
import { PersonalData } from '../../components/PersonalData'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <div>
          <h2>Complete seu pedido</h2>
          <div>
            <PersonalData />
          </div>
          <div>
            <PaymentData />
          </div>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
        </div>
      </div>
    </CheckoutContainer>
  )
}
