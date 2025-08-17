import './OrderContainer.scss'
import { useState } from 'react';
import OrderForm from './OrderForm';
import OrderList from './OrderList';

const DEFAULT_CLASSNAME = 'order-container';
const OrderContainer = () => {

    return (
        <div className={DEFAULT_CLASSNAME}>
            <div>
                <div className={`${DEFAULT_CLASSNAME}__header`}>Create a New Order</div>
                <OrderForm />
            </div>
            <div >
                <div className={`${DEFAULT_CLASSNAME}__header`}>Orders</div>
                <OrderList />
            </div>
        </div>
    )
};

export default OrderContainer;