import { NavLink } from "@/components/NavLink";
import { FileText } from "lucide-react";

export const Header = () => {
  const isLoggedIn = false;
  return (
    <header className="py-4">
      <div className="container flex justify-between items-center">
        <NavLink href="/" className="flex items-center gap-2 font-extrabold">
          <FileText className="size-6 text-gray-700 hover:rotate-15 transform transition duration-200" />
          <span>Summarry</span>
        </NavLink>

        <NavLink href="#pricing">Pricing</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/signout">Sign Out</NavLink>
          </>
        ) : (
          <NavLink href="/signin">Sign In</NavLink>
        )}
      </div>
    </header>
  );
};
