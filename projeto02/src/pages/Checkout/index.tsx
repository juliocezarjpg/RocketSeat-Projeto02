import { CartDetails } from '../../components/CartDetails'
import { PaymentData } from '../../components/PaymentData'
import { PersonalData } from '../../components/PersonalData'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div className="wrapper">
        <div>
          <h2>Complete seu pedido</h2>
          <div className="orderData">
            <div className="personalDataComponent">
              <PersonalData />
            </div>
            <div className="paymentDataComponent">
              <PaymentData />
            </div>
          </div>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <div>
            <CartDetails />
          </div>
        </div>
      </div>
    </CheckoutContainer>
  )
}
