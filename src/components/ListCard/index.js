import "./index.css"

export const ListCard = (props) => {
    const { item } = props;
    item.checked = true;
    return (
        <div className="list-card-container">
            <div className="checkbox">
                <input
                    
                />
                <label htmlFor="checkbox" />
            </div>
            <div className="list-card-text-container">
                <span className="list-card-title">{item?.name}</span>
                <span className="list-card-subtitle">{item?.quantity} unidades</span>
            </div>
            <img src="/images/arrow.svg" alt="arrow-icon" className="arrow-icon"/>
        </div>
    )
}