export const summaries = [
  {
    id: "1",
    title: "AI in Healthcare",
    createdAt: "March 12, 2025",
    fileName: "AI in Healthcare.pdf",
    original: "Dummy original text",
    summary: `
## 🧠 AI in Healthcare

### 1. Transforming Patient Care
AI enhances diagnostics, personalizes treatments, and enables remote patient monitoring. Machine learning models can detect diseases earlier, improving patient outcomes.

### 2. Efficient Diagnostics
Advanced algorithms analyze medical data quickly, reducing human error. Radiology and pathology are two fields where AI excels in detecting abnormalities.

### 3. Administrative Automation
AI reduces paperwork by automating scheduling, billing, and patient record management, allowing healthcare workers to focus on patient care.

### 4. Drug Discovery
Machine learning accelerates the development of new drugs by simulating chemical reactions and predicting effective compounds.

### 5. Ethical Considerations
AI in healthcare must address privacy concerns and ensure unbiased decision-making to maintain patient trust and regulatory compliance.
    `,
  },
  {
    id: "2",
    title: "Future of Work",
    createdAt: "March 10, 2025",
    fileName: "Future of Work.pdf",
    original: "Dummy original text",
    summary: `
## 🌐 Future of Work

### 1. Rise of Remote Work
Remote work is becoming the norm, allowing employees to work flexibly while companies reduce operational costs.

### 2. Automation & AI
Repetitive tasks are being automated, leading to a shift toward more creative and strategic roles.

### 3. Skills of the Future
Digital literacy, critical thinking, and adaptability are essential skills as the job market evolves.

### 4. Work-Life Balance
Hybrid work models prioritize work-life balance, enhancing employee satisfaction and productivity.

### 5. Global Workforce
Businesses can now hire talent globally, fostering diverse and innovative teams.
    `,
  },
  {
    id: "3",
    title: "Climate Change Impact",
    createdAt: "March 8, 2025",
    fileName: "Climate Change Impact.pdf",
    original: "Dummy original text",
    summary: `
## 🌍 Climate Change Impact

### 1. Global Warming Trends
Rising temperatures affect ecosystems, sea levels, and weather patterns worldwide.

### 2. Policy Changes
Governments are implementing stricter regulations to curb greenhouse gas emissions and promote renewable energy.

### 3. Environmental Justice
Marginalized communities are disproportionately affected by climate change, necessitating equitable policy solutions.

### 4. Sustainable Development
Investing in green technology and sustainable infrastructure mitigates climate impacts and drives economic growth.

### 5. Future Outlook
Urgent action is needed to reduce emissions and transition to a low-carbon future.
    `,
  },
  {
    id: "4",
    title: "Blockchain Basics",
    createdAt: "March 5, 2025",
    fileName: "Blockchain Basics.pdf",
    original: "Dummy original text",
    summary: `
## 🔗 Blockchain Basics

### 1. What is Blockchain?
A decentralized digital ledger that records transactions securely across multiple computers.

### 2. Key Features
Immutability, transparency, and decentralization make blockchain resistant to tampering and censorship.

### 3. Use Cases
Beyond cryptocurrencies, blockchain is used in supply chains, digital identity verification, and voting systems.

### 4. Smart Contracts
Self-executing contracts automate and enforce agreements without intermediaries.

### 5. Future Potential
Blockchain promises secure, transparent systems for industries ranging from finance to healthcare.
    `,
  },
  {
    id: "5",
    title: "Blockchain Basics",
    createdAt: "March 5, 2025",
    fileName: "Blockchain Basics.pdf",
    original: "Dummy original text",
    summary: `
## 🔗 Blockchain Basics

### 1. What is Blockchain?
A decentralized digital ledger that records transactions securely across multiple computers.

### 2. Key Features
Immutability, transparency, and decentralization make blockchain resistant to tampering and censorship.

### 3. Use Cases
Beyond cryptocurrencies, blockchain is used in supply chains, digital identity verification, and voting systems.

### 4. Smart Contracts
Self-executing contracts automate and enforce agreements without intermediaries.

### 5. Future Potential
Blockchain promises secure, transparent systems for industries ranging from finance to healthcare.
    `,
  },
];

export const getSummary = async (id: string) => {
  return summaries.find((summary) => summary.id === id);
};
