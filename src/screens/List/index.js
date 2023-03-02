import { useState, useEffect } from 'react'
import { getList, updateItem } from 'services/request'
import { Button, ListRender, Loader, Modal, Title } from 'components'
import { ContentContainer, HeaderButtonContainer, HeaderContainer, ListContainer, LogoImage, ScreenContainer, TitleContainer } from './styles'

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const [listData, setListData] = useState([])
  const [selectedItem, setselectedItem] = useState(null)

  const loadListItems = async () => {
    setLoading(true)
    const result = await getList()
    setListData(result)
    setLoading(false)
  }
  useEffect(() => {
    loadListItems()
  }, [])

  const onClickAddButton = () => {
    setModalVisible(true)
    setselectedItem(null)
  }

  const onCloseModal = () => {
    setModalVisible(false)
    loadListItems()
    setselectedItem(null)
  }

  const onEditItem = (item) => {
    setselectedItem(item)
    setModalVisible(true)
  }

  const onCheckItem = async (item) => {
    const result = await updateItem(item._id, {
      name: item.name,
      quantity: Number(item.quantity),
      checked: !item.checked
    })
    if (!result.error) {
      await loadListItems()
    }
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <HeaderContainer>
          <TitleContainer>
            <LogoImage
              src="/images/logo.svg"
              alt="supermarket-list-logo"
            />
            <Title fontSize={32} lineHeight={32} ml={12}>Lista Supermercado</Title>
          </TitleContainer>
          <HeaderButtonContainer>
            <Button onClick={onClickAddButton}>
              {window.innerWidth <= 420 ? '+' : 'Adicionar'}
            </Button>
          </HeaderButtonContainer>
        </HeaderContainer>
        <ListContainer>
          {loading ? (
            <Loader />
          ) : (
            <ListRender
              onCheckItem={onCheckItem}
              onEdit={onEditItem}
              list={listData}
            />
          )}
        </ListContainer>
      </ContentContainer>
      {modalVisible && <Modal item={selectedItem} onClose={onCloseModal} />}
    </ScreenContainer>
  )
}
