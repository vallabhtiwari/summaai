import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container flex items-center justify-center py-16">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
}
