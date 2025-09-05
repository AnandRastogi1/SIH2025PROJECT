const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY || '');

async function createPaymentIntent(amount, currency = 'usd') {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency
  });
  return paymentIntent;
}

module.exports = { createPaymentIntent };
