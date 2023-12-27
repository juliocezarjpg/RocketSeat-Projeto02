import { ReactNode, createContext, useState } from 'react'
import { produce } from 'immer'

interface OrderItem {
  id: number
  quantidade: number
}

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
  addItemToCart: (item: OrderItem) => void
  updateQuantity: (item: number, newQuantity: number) => void
  removeItem: (itemId: number) => void
}

export const OrdersContext = createContext({} as OdersContextType)

interface OrdersContextProviderProps {
  children: ReactNode
}

export function OrdersContextProvider({
  children,
}: OrdersContextProviderProps) {
  const [orderForm, setOrderForm] = useState<typeof orderForm>({
    rua: '',
    numero: '',
    cidade: '',
    uf: '',
    items: [], // Inicialize como um array vazio
    paymentData: null,
  })

  function setPaymentData(payment: string) {
    setOrderForm((prevOrderForm: typeof orderForm) => {
      return produce(prevOrderForm, (draft: typeof orderForm) => {
        draft.paymentData = payment
      })
    })
  }

  const addItemToCart = (item: OrderItem) => {
    setOrderForm((prevOrderForm: typeof orderForm) => {
      const existingItemIndex = prevOrderForm.items.findIndex(
        (existingItem: OrderItem) => existingItem.id === item.id,
      )

      if (existingItemIndex !== -1) {
        // Item já existe, atualize a quantidade
        return produce(prevOrderForm, (draft: typeof orderForm) => {
          draft.items[existingItemIndex].quantidade += item.quantidade
        })
      } else {
        // Item não existe, adicione à lista
        return produce(prevOrderForm, (draft: typeof orderForm) => {
          draft.items.push(item)
        })
      }
    })
  }

  const updateQuantity = (itemId: number, newQuantity: number) => {
    setOrderForm((prevOrderForm: typeof orderForm) => {
      return {
        ...prevOrderForm,
        items: prevOrderForm.items.map((item: OrderItem) =>
          item.id === itemId ? { ...item, quantidade: newQuantity } : item,
        ),
      }
    })
  }

  const removeItem = (itemId: number) => {
    setOrderForm((prevOrderForm: typeof orderForm) => {
      return {
        ...prevOrderForm,
        items: prevOrderForm.items.filter(
          (item: OrderItem) => item.id !== itemId,
        ),
      }
    })
  }

  return (
    <OrdersContext.Provider
      value={{
        orderForm,
        setOrderForm,
        setPaymentData,
        addItemToCart,
        updateQuantity,
        removeItem,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
