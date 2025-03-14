import { NavLink } from "@/components/NavLink";
import { FileText } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export const Header = () => {
  return (
    <header className="py-2">
      <div className="container flex justify-between items-center">
        <NavLink href="/" className="flex items-center gap-2 font-extrabold">
          <FileText className="size-6 text-gray-700 hover:rotate-15 transform transition duration-200" />
          <span>SummaAI</span>
        </NavLink>

        <SignedIn>
          <NavLink href="/dashboard">Dashboard</NavLink>
          <div className="flex items-center align-baseline gap-2">
            <NavLink href="/upload">Upload PDF</NavLink>
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="/sign-in">Sign In</NavLink>
        </SignedOut>
      </div>
    </header>
  );
};
