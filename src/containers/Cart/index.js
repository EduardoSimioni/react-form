import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import BoxIcon from '../../assets/caixas.png'
import { Container, ContainerItems, HeaderBox, ContainerInfo } from './styles'

function Cart() {
  const navigate = useNavigate()
  const [infoCart, setInfoCart] = useState({})

  useEffect(() => {
    async function pickCartInfo() {
      const getInfo = await localStorage.getItem('reactForm:buyData')
      setInfoCart(JSON.parse(getInfo))
    }
    pickCartInfo()
  }, [])

  async function resetAll() {
    await localStorage.removeItem('reactForm:buyData')
    navigate('/')
  }

  return (
    <Container>
      <ContainerItems>
        <HeaderBox>
          <p>
            Compra realizada <br />
            <strong>com sucesso</strong>
          </p>
          <img src={BoxIcon} />
        </HeaderBox>
        <ContainerInfo>
          <p className="title">
            <strong>Adesivos:</strong>
          </p>
          <p>{infoCart.react ? '- React' : ''}</p>
          <p>{infoCart.angular ? '- Angular' : ''}</p>
          <p>{infoCart.vue ? '- Vue' : ''}</p>

          <p className="title">
            <strong>Quantidade: {infoCart.quantity}</strong>
          </p>
          <p className="title">
            <strong>Recado:</strong> <br />
            {infoCart.message && infoCart.message}
          </p>
        </ContainerInfo>

        <div className="div-button">
          <button onClick={resetAll}>Confirmar</button>
        </div>
      </ContainerItems>
    </Container>
  )
}
export default Cart
