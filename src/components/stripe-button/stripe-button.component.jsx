import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import './stripe-button.styles.scss'


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_lcZxE0b0VJZvCv2Mdpi4LsVn00occJCUmo'

    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="React Online Shop"
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton