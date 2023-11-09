import { PersonalDataContainer } from './styles'
import { MapPin } from 'phosphor-react'

export function PersonalData() {
  return (
    <PersonalDataContainer>
      <div className="personalData">
        <div className="titulo">
          <MapPin />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber o pedido</p>
          </div>
        </div>
        <div className="formulario">
          <form>
            <div>
              <input></input>
            </div>
            <div>
              <input></input>
            </div>
            <div>
              <input></input>
              <input></input>
            </div>
            <div>
              <input></input>
              <input></input>
              <input></input>
            </div>
          </form>
        </div>
      </div>
    </PersonalDataContainer>
  )
}
