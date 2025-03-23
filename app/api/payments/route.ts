import {
  handleCheckoutSession,
  handleSubscriptionDeleted,
  stripeClient,
} from "@/lib/payments";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature");
  let event;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  try {
    event = stripeClient.webhooks.constructEvent(payload, sig!, endpointSecret);
    switch (event.type) {
      case "checkout.session.completed":
        console.log("checkout.session.completed");
        const session = await stripeClient.checkout.sessions.retrieve(
          event.data.object.id,
          { expand: ["line_items"] }
        );
        await handleCheckoutSession({ session });

        break;
      case "customer.subscription.deleted":
        console.log("customer.subscription.deleted");
        const subscription = event.data.object;
        await handleSubscriptionDeleted({ subscription });

        break;
      default:
        return NextResponse.json(
          { error: "Unknown event type" },
          { status: 400 }
        );
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
  return NextResponse.json({ message: "success" }, { status: 200 });
};
