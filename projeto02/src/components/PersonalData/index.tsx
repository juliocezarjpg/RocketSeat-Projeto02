import { useContext } from 'react'
import { PersonalDataContainer } from './styles'
import { MapPinLine } from 'phosphor-react'
import { OrdersContext } from '../../context/OrdersContext'

export function PersonalData() {
  const { setOrderForm } = useContext(OrdersContext)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setOrderForm((prevOrderForm) => ({
      ...prevOrderForm,
      [name]: value,
    }))
  }

  return (
    <PersonalDataContainer>
      <div className="personalData">
        <div className="titulos">
          <MapPinLine size="22" className="icone" />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber o pedido</p>
          </div>
        </div>
        <div className="formulario">
          <form>
            <div>
              <input placeholder="CEP" name="cep" />
            </div>
            <div>
              <input
                placeholder="Rua"
                name="rua"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                placeholder="Número"
                name="numero"
                onChange={handleInputChange}
              />
              <input placeholder="Complemento" name="complemento"></input>
            </div>
            <div>
              <input placeholder="Bairro" name="bairro" />
              <input
                placeholder="Cidade"
                name="cidade"
                onChange={handleInputChange}
              />
              <input placeholder="UF" name="uf" onChange={handleInputChange} />
            </div>
          </form>
        </div>
      </div>
    </PersonalDataContainer>
  )
}
