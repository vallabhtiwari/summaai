import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

export const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const handleCheckoutSession = async ({
  session,
}: {
  session: Stripe.Checkout.Session;
}) => {
  try {
    const customerId = session.customer as string;
    const customer = (await stripeClient.customers.retrieve(
      customerId
    )) as Stripe.Customer;
    if (
      customer.email &&
      customer.name &&
      session.line_items?.data[0].price?.id
    ) {
      const user = await createOrUpdateUser({
        email: customer.email,
        fullName: customer.name,
        customerId: customerId,
        priceId: session.line_items?.data[0].price?.id,
        status: session.status!,
      });
      if (user) {
        const payment = await createPayment({
          amount: session.amount_total!,
          status: session.status!,
          stripePaymentId: session.id,
          priceId: session.line_items?.data[0].price?.id!,
          userId: user.id,
          userEmail: customer.email!,
        });
      }
    }
    return "success";
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const handleSubscriptionDeleted = async ({
  subscription,
}: {
  subscription: Stripe.Subscription;
}) => {
  try {
    await deleteSubscription(subscription.customer as string);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const createOrUpdateUser = async ({
  email,
  fullName,
  customerId,
  priceId,
  status,
}: {
  email: string;
  fullName: string;
  customerId: string;
  priceId: string;
  status: string;
}) => {
  try {
    const user = await prisma.user.upsert({
      where: {
        email: email,
      },
      update: {
        fullName: fullName,
        customerId: customerId,
        priceId: priceId,
        status: status,
      },
      create: {
        email: email,
        fullName: fullName,
        customerId: customerId,
        priceId: priceId,
        status: status,
      },
    });

    return user;
  } catch (error) {
    console.error("Error creating or updating user:", error);
    throw error;
  }
};

export const createPayment = async ({
  amount,
  status,
  stripePaymentId,
  priceId,
  userId,
  userEmail,
}: {
  amount: number;
  status: string;
  stripePaymentId: string;
  priceId: string;
  userId: string;
  userEmail: string;
}) => {
  try {
    const payment = await prisma.payment.create({
      data: {
        amount: amount,
        status: status,
        stripePaymentId: stripePaymentId,
        priceId: priceId,
        userId: userId,
        userEmail: userEmail,
      },
    });
    return payment;
  } catch (error) {
    console.error("Error creating payment:", error);
    throw error;
  }
};

export const deleteSubscription = async (customerId: string) => {
  try {
    const user = await prisma.user.update({
      where: {
        customerId: customerId,
      },
      data: {
        status: "canceled",
      },
    });
    return user;
  } catch (error) {
    console.error("Error deleting subscription:", error);
    throw error;
  }
};
