import { ItemCartDetailsContainer } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'

import cafesData from '../../assets/cafes/listaDeCafes.json'
import { OrdersContext } from '../../context/OrdersContext'

interface OrdemItem {
  id: number
  quantidade: number
}
export function ItemCartDetails({ item }: { item: OrdemItem }) {
  const { updateQuantity, removeItem } = useContext(OrdersContext)

  const cafeSelecionado = cafesData.cafes.find((cafe) => cafe.id === item.id)

  const handleIncrement = () => {
    const newQuantity = item.quantidade + 1
    updateQuantity(item.id, newQuantity)
  }

  const handleDecrement = () => {
    const newQuantity = Math.max(item.quantidade - 1, 1)
    updateQuantity(item.id, newQuantity)
  }

  const handleRemove = () => {
    removeItem(item.id)
  }

  const parsePrice = (priceString: string): number => {
    const numericString = priceString.replace(',', '.')
    return parseFloat(numericString)
  }

  const totalPrice = parsePrice(cafeSelecionado?.preço || '0') * item.quantidade
  const totalPriceString = totalPrice.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <ItemCartDetailsContainer>
      <div className="boxItem">
        <div className="detailsItem">
          <div>
            <img
              src={cafeSelecionado?.imagem}
              alt={cafeSelecionado?.nome}
            ></img>
          </div>
          <div>
            <div>
              <p className="TituloItemCartDetails">{cafeSelecionado?.nome}</p>
            </div>
            <div className="quantityControl">
              <div className="productQuantity">
                <button className="signals">
                  <Minus size="14" onClick={handleDecrement} />
                </button>
                <p className="quantity">{item.quantidade}</p>
                <button className="signals">
                  <Plus size="14" onClick={handleIncrement} />
                </button>
              </div>
              <div className="itemRemove">
                <button className="remove" onClick={handleRemove}>
                  <Trash size="14" />
                  <p>Remover</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="priceItemCartDetails">R$ {totalPriceString}</div>
      </div>

      <div className="stroke"></div>
    </ItemCartDetailsContainer>
  )
}
