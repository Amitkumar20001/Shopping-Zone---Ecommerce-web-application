import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch,useSelector } from 'react-redux';
import { detailsOrder, payOrder } from '../actions/orderActions';

import { ORDER_DELIVER_RESET, ORDER_PAY_RESET } from '../constants/orderConstants';

export default function PayScreen(props) {
    const orderId = props.match.params.id;
    const [sdkReady, setSdkReady] = useState(false);
    const orderDetails = useSelector((state) => state.orderDetails);
    const orderPay = useSelector((state) => state.orderPay);
    const { order} = orderDetails;
  const orderDeliver = useSelector((state) => state.orderDeliver);
    const {
        //loading: loadingDeliver,
        //error: errorDeliver,
        success: successDeliver,
      } = orderDeliver;
      const {
       // loading: loadingPay,
       // error: errorPay,
        success: successPay,
      } = orderPay;
    const dispatch = useDispatch();
    useEffect(() => {
        const addStripeScript = async () => {
        //const { data } = await Axios.get('/api/config/stripe');
        const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = `http://localhost:8282/payment`;//`http://www.stripe.com/sdk/js?secret-key=${data}`;
          script.async = true;
          script.onload = () => {
          setSdkReady(true);
          };
          document.body.appendChild(script);
        };
        
    if (!order || successPay || successDeliver ||(order && order._id !== orderId) ) 
      {  
            dispatch({ type: ORDER_PAY_RESET });
            dispatch({ type: ORDER_DELIVER_RESET });
            dispatch(detailsOrder(orderId));
      }
     else 
     {
        if (!order.isPaid)
          {
            if (!window.stripe) 
             {
               addStripeScript();
             } 
            else 
             {
              setSdkReady(true);
             }
           }
      }
  //}, [dispatch, order, orderId, sdkReady]);
}, [dispatch, order, orderId, sdkReady, successPay, successDeliver]);
    
    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(order, paymentResult));
       
      };
      const [product] = useState({
        name : 'Apple mac book',
        price: 67000
      })
    
    const makePayment = token=>{
      const body ={
        token , product
      }
      const headers ={
        "Content-Type": "application/json"
      };
      return fetch(`http://localhost:3000/payment`,{
        method:"POST",
        headers,
        body:JSON.stringify(body)
       })
       .then(
         response => {
       console.log("RESPONSE", response);
       const {status} =response;
       console.log('STATUS', status);
         })
       
       .catch(error => 
        console.log(error)
       )
      }
    
    return (
        <div  className="row center"
        >

<StripeCheckout stripeKey="pk_test_51JjJQNSILfLAyarrLLNnyq2PnutuhkvJg03uGJV2WMzlSLsoxyKPPzVnevSpGUWCjLVn087uujbiG6iJlS5c1fvI007bIWZPyu"//{process.env.REACT_APP_KEY}
        token={makePayment}
        name="Enter details"
        currency='INR'
        amount={product.price*100}
         >
         <button 
        
         className="primary container" size="lg"
          
         //disabled={order.paymentMethod === 'cod'}
         //disabled={<LoadingBox></LoadingBox>}
         >Pay now</button>

         </StripeCheckout>
          <div>
              
          </div> 
        </div>
    )
}
