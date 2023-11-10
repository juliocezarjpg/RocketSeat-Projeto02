import { PersonalDataContainer } from './styles'
import { MapPinLine } from 'phosphor-react'

export function PersonalData() {
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
              <input placeholder="CEP" required name="cep" />
            </div>
            <div>
              <input placeholder="Rua" required name="rua" />
            </div>
            <div>
              <input placeholder="Número" required name="numero" />
              <input placeholder="Complemento" name="complemento"></input>
            </div>
            <div>
              <input placeholder="Bairro" required name="bairro" />
              <input placeholder="Cidade" required name="cidade" />
              <input placeholder="UF" required name="uf" />
            </div>
          </form>
        </div>
      </div>
    </PersonalDataContainer>
  )
}
