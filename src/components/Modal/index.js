import { useEffect, useState } from 'react'
import './index.css'
import { Input } from 'components/Input'
import { Button } from 'components/atoms/Button'
import { Title } from 'components/atoms'
import { createItem, updateItem, deleteItem } from 'services/request'

export const Modal = ({ onClose, item }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)

  const validadeBeforeSave = () => {
    if (name.length < 3) {
      alert('Nome tem que ter mais de 3 caracteres')
      return false
    }

    if (quantity < 1) {
      alert('Quantidade não pode ser menor do que 1')
      return false
    }
    return true
  }
  const callAddItem = async () => {
    const validade = validadeBeforeSave()
    if (validade) {
      const result = await createItem({ name, quantity: Number(quantity) })
      if (!result?.error) {
        alert('Item salvo com sucesso')
        onClose()
      }
    }
  }
  const callUpdateItem = async () => {
    const validade = validadeBeforeSave()
    if (validade) {
      const result = await updateItem(item?._id, {
        name,
        quantity: Number(quantity),
        checked: item?.checked
      })
      if (!result?.error) {
        alert('Item atualizado com sucesso')
        onClose()
      }
    }
  }

  const callDeleteItem = async () => {
    const result = await deleteItem(item?._id)
    if (!result?.error) {
      alert('Item deletado com sucesso')
      onClose()
    }
  }

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item?.name)
      setQuantity(item?.quantity)
    }
  }, [item])
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <Title>{item ? 'Editar Item' : 'Adicionar novo item'}</Title>
          <button onClick={onClose} className="modal-close-button" />
        </div>
        <Input
          onChange={(text) => setName(text)}
          value={name}
          label="Nome"
          placeholder="Ex: Arroz"
        />
        <Input
          onChange={(text) => setQuantity(text)}
          value={quantity}
          label="Quantidade"
          type="number"
        />
        <div className="buttons-container">
          <Button onClick={item ? callUpdateItem : callAddItem}>
            {item ? 'Atualizar' : 'Adicionar'}
          </Button>
          {item && (
            <Button icon="trash" variant="outline" onClick={callDeleteItem}>
              Deletar Item
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
