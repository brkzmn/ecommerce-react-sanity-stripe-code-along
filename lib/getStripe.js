import { loadStripe } from "@stripe/stripe-js";

let stipePromise;

const getStripe = () => {
  if (!stipePromise) {
    stipePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  return stipePromise;
};

export default getStripe;
