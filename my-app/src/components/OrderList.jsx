import './OrderList.scss';
import mockOrderData from '../constants/mockOrderData';

import OrderCard from './OrderCard';

const DEFAULT_CLASSNAME = 'order-list';

const OrderList = () => {
    return (
        <div className={DEFAULT_CLASSNAME}>
            {mockOrderData.map((order, index) => <OrderCard order={order} key={index} />)}
        </div>
    )
};

export default OrderList;