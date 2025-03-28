import { ParsedSummaryOutput, SummarySection } from "@/lib/types";

export const demoSummary: ParsedSummaryOutput = {
  mainHeading: "🔗 Understanding Blockchain Technology",
  sections: [
    {
      subheading: "📜 Introduction to Blockchain",
      points: [
        "🔄 Blockchain is a decentralized digital ledger.",
        "💻 It records transactions across multiple computers.",
        "🔒 Ensures transparency and security without intermediaries.",
      ],
    },
    {
      subheading: "⚙️ How Blockchain Works",
      points: [
        "📦 Transactions are grouped into blocks.",
        "🔗 Each block is linked to the previous one, forming a chain.",
        "🛡️ Uses cryptographic hashing for security.",
      ],
    },
    {
      subheading: "🌟 Key Features of Blockchain",
      points: [
        "🌍 Decentralization: No single point of control.",
        "✍️ Immutability: Once recorded, data cannot be altered.",
        "🔐 Security: Cryptographic techniques prevent fraud.",
      ],
    },
    {
      subheading: "🚀 Use Cases of Blockchain",
      points: [
        "💰 Cryptocurrencies like Bitcoin and Ethereum.",
        "🤖 Smart contracts for automated agreements.",
        "📦 Supply chain tracking and data integrity.",
      ],
    },
    {
      subheading: "⚠️ Challenges and Future of Blockchain",
      points: [
        "⚡ Scalability issues and high energy consumption.",
        "📜 Regulatory concerns and adoption challenges.",
        "🔮 Potential innovations in efficiency and usability.",
      ],
    },
  ],
};

export function parseSummary(input: string): ParsedSummaryOutput {
  const sections: SummarySection[] = [];

  // Split by '#' to get headings and content
  let parts = input.split("#").filter((part) => part.trim());

  // Extract the main heading
  let mainHeading =
    parts
      .shift()
      ?.replace(/^[\#\s]+/, "")
      .trim() || "";

  parts.forEach((part) => {
    // Extract section content
    let lines = part.trim().split("\n");
    let subheading =
      lines
        .shift()
        ?.replace(/^[\#\s]+/, "")
        .trim() || "";
    let cleanLines = lines.map((line) => line.replace(/^[\*\s]+/, "").trim());
    sections.push({
      subheading,
      points: cleanLines,
    });
  });

  const cleanSections = sections.filter(
    (section) => section.points.length > 0 && section.subheading
  );

  return { mainHeading, sections: cleanSections };
}
