/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51MQtyRI7qINSjC3mpZ2BST3c3emuTWoirjjuH6DRtoVP75y5LR4fOVmz0FIMbQTilhZKrj4bfDCIg6FrmMdSUNS300KH5p4hDA'
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id
    //  });
    // res.redirect(303, session.url);
    window.location.replace(session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
