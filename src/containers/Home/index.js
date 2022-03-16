import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

import BoxIcon from '../../assets/caixas.png'
import {
  Container,
  ContainerItems,
  HeaderBox,
  InputBox,
  ErrorMessage,
  ContainerInputs,
  QuantityBox
} from './styles'

function Home() {
  let schema = Yup.object().shape({
    quantity: Yup.string()
      .required('Clique novamente para confirmar')
      .min(1, 'A quantidade deve ser maior que 0'),
    message: Yup.string(),
    react: Yup.bool(),
    vue: Yup.bool(),
    angular: Yup.bool()
  })

  schema = schema.test('myCustomCheckboxTest', null, obj => {
    if (obj.react || obj.vue || obj.angular) {
      return true
    }
    return new Yup.ValidationError(
      'Selecione pelo menos uma opção',
      null,
      'myCustomCheckboxTest'
    )
  })

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  function removeValue() {
    const atual = document.getElementById('input-quantity').value
    if (atual > 0) {
      const novo = atual - 1
      document.getElementById('input-quantity').value = novo
    }
  }

  function addValue() {
    let atual = document.getElementById('input-quantity').value
    atual++
    document.getElementById('input-quantity').value = atual
  }

  async function onSubmit(data) {
    await localStorage.setItem('reactForm:buyData', JSON.stringify(data))
    navigate('/carrinho')
  }

  return (
    <Container>
      <ContainerItems>
        <HeaderBox>
          <p>
            Formulário <br /> para compra de <br />
            <strong>Pacote de adesivos</strong>
          </p>
          <img src={BoxIcon} />
        </HeaderBox>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <ContainerInputs>
            <p className="label-input">
              <strong>Quais adesivos:</strong>
            </p>

            <InputBox>
              <div>
                <input {...register('react')} type="checkbox" /> React
              </div>

              <div>
                <input {...register('vue')} type="checkbox" /> Vue
              </div>

              <div>
                <input {...register('angular')} type="checkbox" /> Angular
                <ErrorMessage>
                  {errors.myCustomCheckboxTest?.message}
                </ErrorMessage>
              </div>
            </InputBox>

            <p className="label-input">
              <strong>Quantos adesivos de cada?</strong>
            </p>

            <QuantityBox>
              <button type="button" onClick={removeValue}>
                -
              </button>
              <input
                min="0"
                {...register('quantity')}
                type="number"
                id="input-quantity"
              />
              <button type="button" onClick={addValue}>
                +
              </button>
            </QuantityBox>
            <ErrorMessage>{errors.quantity?.message}</ErrorMessage>
            <p>
              <strong>Observações:</strong>
            </p>
            <textarea
              {...register('message')}
              placeholder="Alguma dúvida? Recado?"
            ></textarea>
          </ContainerInputs>

          <div className="div-button">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </ContainerItems>
    </Container>
  )
}

export default Home
