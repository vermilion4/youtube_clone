import React from 'react';

const Billing = () => {
  return (
    <>
      <h4>Billing and payments</h4>
      <div className='account-header'>
        <div className='billing-title'>
          <h2>Choose how you make purchases on YouTube</h2>
        </div>
      </div>
      <hr />
      <div className='billing-body'>
        <div className='billing-body__text'>
          <p className='quick-purchase'>Quick purchase is disabled.</p>
          <p className='grey-txt'>
            You will be asked to verify your account for all YouTube purchases
          </p>
          <p className='blue-txt'>Learn more about purchase verification</p>
        </div>
        <button className='billing-body__btn blue-txt'>Enable</button>
      </div>
    </>
  );
};

export default Billing;
