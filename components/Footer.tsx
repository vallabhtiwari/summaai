import Link from "next/link";
import Image from "next/image";

type FooterLinkItem = {
  href: string;
  label: string;
};

type FooterSection = {
  title: string;
  links: FooterLinkItem[];
};
const footerSections: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { href: "/", label: "Home" },
      { href: "#pricing", label: "Pricing" },
      { href: "/trial", label: "Try Now" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
      { href: "/support", label: "Support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-gray-800 dark:text-gray-200 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">SummaAI</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              AI-powered PDF summarization tool to help you save time and
              increase productivity.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-rose-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} SummaAI. All rights reserved.
          </p>

          <div className="flex items-center mt-4 md:mt-0">
            <span className="mr-2">Made with ❤️ by</span>
            <Link
              href="https://github.com/vallabhtiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-rose-600 transition-colors"
            >
              <Image
                src="https://github.com/vallabhtiwari.png"
                alt="GitHub Profile"
                width={24}
                height={24}
                className="rounded-full mr-2"
              />
              <span>vallabhtiwari</span>
              <Image
                src="/github.svg"
                alt="GitHub"
                width={16}
                height={16}
                className="ml-1 size-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
