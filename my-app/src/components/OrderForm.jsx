import './OrderForm.scss'
import orderOptions from '../constants/orderOptions';

const DEFAULT_CLASSNAME = 'order-form';

const OrderForm = () => {

    const optionsRenderer = (options) => (
        <select>
            {options.map((option) => (
                <option key={option}>{option}</option>
            ))}
        </select>
    )

    const dressingsRenderer = (options) => (
        <div className={`${DEFAULT_CLASSNAME}__dressings`}>
            {options.map((option) => (
                <div className={`${DEFAULT_CLASSNAME}__dressing`} key={`${option}-${option.id}`}>
                    <input checked={false} type={'checkbox'}></input>
                    <label>{option}</label>
                </div>
            ))}
        </div>
    )

    return (
        <div className={DEFAULT_CLASSNAME}>
            <div className={`${DEFAULT_CLASSNAME}__entry`}>
                <span className={`${DEFAULT_CLASSNAME}__label`}>Base: </span>
                {optionsRenderer(Object.values(orderOptions.bases))}
            </div>
            <div className={`${DEFAULT_CLASSNAME}__entry`}>
                <span className={`${DEFAULT_CLASSNAME}__label`}>Protein: </span>
                {optionsRenderer(Object.values(orderOptions.proteins))}
            </div>
            <div className={`${DEFAULT_CLASSNAME}__entry`}>
                <span className={`${DEFAULT_CLASSNAME}__label`}>Dressings: </span>
                {dressingsRenderer(Object.values(orderOptions.dressings))}
            </div>
            <button className={`${DEFAULT_CLASSNAME}__button`}>{'Create New Order'}</button>
        </div>
    )
};

export default OrderForm;