import { ArrowIcon, ArrowIconContainer, CardContainer, CheckImage, TextContainer } from './styles'
import { SmallText } from 'components/atoms'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <CardContainer>
      <CheckImage
        onClick={() => onCheckItem(item)}
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        alt="checkbox-item"
      />
      <TextContainer>
        <SmallText fontSize={16} mb={2} align='left' >{item?.name}</SmallText>
        <SmallText fontSize={14} fontWeight={400} align='left'>{item?.quantity} unidades</SmallText>
      </TextContainer>
      <ArrowIconContainer onClick={() => onClick(item)}>
        <ArrowIcon />
      </ArrowIconContainer>
    </CardContainer>
  )
}
