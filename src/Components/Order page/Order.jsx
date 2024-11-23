import React from 'react';

const Order = () => {
    return (
        <div className='flex flex-col justify-center items-center my-10'>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total price</div>
                    <div className="stat-value">890.00 USD</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
            </div>
        </div>
    );
};

export default Order;