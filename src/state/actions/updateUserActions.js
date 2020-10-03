import { SUBSCRIPTION_ADDED } from '../constants';

export const subscriptionAddedAction = (subscription) => ({
    type: SUBSCRIPTION_ADDED,
    payload: subscription
})