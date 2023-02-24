import "./index.css";

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <div className="list-card-container">
      <img
        onClick={() => onCheckItem(item)}
        checked={item?.checked}
        src={`/images/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
        alt="checked-item"
      />
      <div className="list-card-text-container">
        <span className="list-card-title">{item?.name}</span>
        <span className="list-card-subtitle">{item?.quantity} unidades</span>
      </div>
      <div className="arrow-icon-container" onClick={() => onClick(item)}>
        <img src="/images/arrow.svg" alt="arrow-icon" className="arrow-icon" />
      </div>
    </div>
  );
};
