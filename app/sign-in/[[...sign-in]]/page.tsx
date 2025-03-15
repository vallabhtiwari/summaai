import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container flex items-center justify-center py-16">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}
