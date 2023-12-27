import { ReactNode, createContext, useState } from 'react'
import { produce } from 'immer'

interface OdersContextType {
  orderForm:
    | {
        rua: string | undefined
        numero: string | undefined
        cidade: string | undefined
        uf: string | undefined

        items:
          | [
              {
                id: number
                quantidade: number
              },
            ]
          | undefined
        paymentData: string | null
      }
    | undefined
  setPaymentData: (payment: string) => void
}

export const OrdersContext = createContext({} as OdersContextType)

interface OrdersContextProviderProps {
  children: ReactNode
}

export function OrdersContextProvider({
  children,
}: OrdersContextProviderProps) {
  const [orderForm, setOrderForm] = useState({})

  function setPaymentData(payment: string) {
    setOrderForm((prevOrderForm) => {
      return produce(prevOrderForm, (draft) => {
        draft.paymentData = payment
      })
    })
  }

  return (
    <OrdersContext.Provider
      value={{
        orderForm,
        setOrderForm,
        setPaymentData,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
