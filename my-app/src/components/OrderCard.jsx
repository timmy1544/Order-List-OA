import './OrderCard.scss';

const DEFAULT_CLASSNAME = 'order-card'

const OrderCard = ({
    order
}) => {
    const {
        base, protein, dressings
    } = order;
    return (
        <div className={DEFAULT_CLASSNAME}>
            <div className={`${DEFAULT_CLASSNAME}__entry`}>
                <div className={`${DEFAULT_CLASSNAME}__label`}>Base:</div>
                <div className={`${DEFAULT_CLASSNAME}__content`}>{base}</div>
            </div>
            <div className={`${DEFAULT_CLASSNAME}__entry`}>
                <div className={`${DEFAULT_CLASSNAME}__label`}>Protein:</div>
                <div className={`${DEFAULT_CLASSNAME}__content`}>{protein}</div>
            </div>
            <div className={`${DEFAULT_CLASSNAME}__entry`}>
                <div className={`${DEFAULT_CLASSNAME}__label`}>Dressing:</div>
                <div className={`${DEFAULT_CLASSNAME}__content`}>{dressings.join(',')}</div>
            </div>
        </div>
    )
};

export default OrderCard;