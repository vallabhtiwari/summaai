"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const NavLink = ({ href, children, className }: NavLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName !== "/" && pathName === href;
  return (
    <Link
      href={href}
      className={cn(
        "text-gray-700 hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-400 transition-colors",
        "px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5",
        "text-base sm:text-lg md:text-xl lg:text-3xl",
        className,
        isActive && "text-rose-600 dark:text-rose-400"
      )}
    >
      {children}
    </Link>
  );
};
