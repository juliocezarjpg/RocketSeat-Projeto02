import { BannerContainer } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import bannerCoffeDelivery from '../../assets/banner-coffeDelivery.png'

export function Banner() {
  return (
    <BannerContainer>
      <div className="backgroundImage"></div>
      <div>
        <h1>Encontre o café perfeito para qualquer horário do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
        <div className="items">
          <div>
            <div className="item">
              <div className="cart">
                <ShoppingCart weight="fill" size="16" />
              </div>
              <p>Compra simples e segura</p>
            </div>
            <div className="item">
              <div className="timer">
                <Timer weight="fill" size="16" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </div>
          </div>
          <div>
            <div className="item">
              <div className="package">
                <Package weight="fill" size="16" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="item">
              <div className="coffee">
                <Coffee weight="fill" size="16" />
              </div>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
      </div>
      <img src={bannerCoffeDelivery} alt="Copo de café"></img>
    </BannerContainer>
  )
}
