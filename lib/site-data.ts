export interface PageContent {
    title: string;
    description: string;
    heroImage?: string;
    content?: string;
    features?: string[];
    specs?: Record<string, string>;
    faqs?: { question: string; answer: string }[];
}

export const servicesData: Record<string, PageContent> = {
    "pcb-assembly": {
        title: "PCB Assembly Services",
        description: "Our high-speed SMT lines and experienced engineers deliver customized PCB solutions that consistently meet and exceed rigorous demands.",
        content: "Mefron offers state-of-the-art SMT and through-hole PCB assembly services. Our facilities are equipped with high-speed pick and place machines, multi-zone reflow ovens, and automated optical inspection (AOI) systems.",
        features: [
            "Prototype to high-volume production",
            "SMT, Through-hole, and Mixed technology",
            "Rigid, Flexible, and Rigid-flex circuits",
            "Automated Optical Inspection (AOI)",
            "X-ray inspection for BGA and complex components"
        ],
        specs: {
            "Max Board Size": "510mm x 460mm",
            "Min Component Size": "01005 (inch)",
            "Mounting Speed": "200,000 CPH",
            "Accuracy": "±25μm @ 3σ"
        }
    },
    "plastic-injection-molding": {
        title: "Precision Plastic Injection Molding",
        description: "Utilizing state-of-the-art technology, our precision plastic injection moulding ensures high-quality, complex part production.",
        content: "We provide comprehensive tooling and molding solutions. Our facility houses high-tonnage injection molding machines capable of handling various engineering plastics.",
        features: [
            "Custom mold design and manufacturing",
            "Over-molding and insert molding",
            "Wide range of engineering materials (ABS, PC, Nylon, etc.)",
            "Precision tolerance control",
            "Post-molding services like ultrasonic welding"
        ]
    },
    "cable-wire-harness-assembly": {
        title: "Wire & Cable Harness Assembly",
        description: "Reliable wire harness and cable assembly services guarantee seamless connectivity and robust performance.",
        content: "Our cable assembly division specializes in complex wire harnesses for automotive, industrial, and medical applications.",
        features: [
            "Custom wire harness design",
            "Automated wire cutting and stripping",
            "Crimping and termination testing",
            "Over-molded connectors",
            "100% continuity and pull testing"
        ]
    },
    "box-build-electro-mechanical-assembly": {
        title: "Box Build & Electro-Mechanical Assembly",
        description: "Full system integration of electromechanical components into fully functional systems tailored to your specifications.",
        content: "We provide complete 'Box Build' services, taking your product from individual PCBs and components to a fully tested, packaged unit.",
        features: [
            "Full product assembly",
            "Enclosure integration",
            "System-level testing",
            "Final packaging and labeling",
            "Direct order fulfillment"
        ]
    }
};

export const infrastructureData: Record<string, PageContent> = {
    "electronic-manufacturing-facilities": {
        title: "World-Class Manufacturing Facilities",
        description: "Spanning over 150,000 Sqft, our facilities are designed for efficiency and high-quality production.",
        content: "Mefron's manufacturing hub in India is equipped with industry-leading machinery and controlled environments to ensure the highest standards of production.",
        features: [
            "ISO 9001, 14001, and 45001 certified",
            "ESD-controlled production areas",
            "Class 10,000 clean rooms",
            "Advanced supply chain management system"
        ]
    },
    "electronic-r-and-d": {
        title: "Electronic R&D Center",
        description: "Innovating for the future of electronics with our dedicated research and development team.",
        content: "Our R&D team works closely with customers to optimize designs for manufacturability (DFM) and develop next-generation electronic solutions.",
    }
};

export const industriesData: Record<string, PageContent> = {
    "biometric": {
        title: "Biometrics Solutions",
        description: "Manufacturing secure and reliable fingerprint scanners, facial recognition systems, and more.",
        content: "We serve the security industry with high-precision manufacturing for biometric devices, ensuring data integrity and hardware durability.",
    },
    "electric-vehicle": {
        title: "Electric Vehicle (EV) Electronics",
        description: "Powering the future of mobility with advanced EV charging systems and battery management units.",
        content: "Mefron is at the forefront of the EV revolution, providing critical electronics for charging infrastructure and vehicle power systems.",
    }
};

export const blogData = [
    {
        slug: "pcb-assembly-process-guide",
        title: "PCB Assembly Process: A Complete Guide",
        description: "Learn about the step-by-step process of professional PCB assembly, from solder paste printing to final inspection.",
        date: "2024-06-15",
        author: "Mefron Tech Team",
        content: "PCB assembly is a core component of modern electronics manufacturing..."
    },
    {
        slug: "indias-leading-ems-companies",
        title: "Top 10 EMS Companies in India for 2024",
        description: "An overview of the thriving electronics manufacturing landscape in India and key players like Mefron.",
        date: "2024-05-20",
        author: "Industry Analyst",
        content: "The Indian electronics manufacturing sector is witnessing unprecedented growth..."
    }
];

export const faqsData = [
    {
        category: "Services",
        items: [
            {
                question: "What is your typical turnaround time for prototypes?",
                answer: "Standard prototyping takes 3-5 business days depending on component availability."
            },
            {
                question: "Do you offer turnkey manufacturing?",
                answer: "Yes, we offer full turnkey solutions including component sourcing, assembly, and testing."
            }
        ]
    },
    {
        category: "Infrastructure",
        items: [
            {
                question: "Where are your facilities located?",
                answer: "Our primary manufacturing hub is located in Noida, India."
            }
        ]
    }
];
