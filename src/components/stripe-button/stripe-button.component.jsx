import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HPOIFKn7CIwmamgD7rUdoZNt1YsjJW9vRbZU75Me2erkUc12Q7zvCe2n4JDqsrzYmDPZxxjU9eqh1moMyfJGiuk00GX8ve105';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful!');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Apple Aftermarket'
      billingAddress
      shippingAddress
      image="https://storecba.com/wp-content/uploads/2020/09/logo-apple.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton