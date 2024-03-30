import Link from "next/link";

const Features = () => {
    const featureItems = [
        {
            featureTitle: "Decentralized Content Distribution",
            featureDesc: "EduChain enables decentralized content distribution, allowing educators to directly share educational materials, courses, and resources with learners without the need for intermediaries.",
        },
        {
            featureTitle: "Transparent Reward System",
            featureDesc: "EduChain implements a transparent reward system powered by blockchain-based tokens. Users earn tokens for various activities such as completing courses, contributing content, or providing peer-to-peer assistance.",
        },
        {
            featureTitle: "Enhanced Data Privacy and Security",
            featureDesc: "Unlike web2 platforms where user data is often vulnerable to breaches and misuse, EduChain prioritizes data privacy and security.",
        },
        {
            featureTitle: "Smart Contract Automation",
            featureDesc: "Smart contracts are employed to automate various administrative processes within the platform, such as course enrollment, certification issuance, and royalty distribution for content creators.",
        },
        {
            featureTitle: "Trustworthy Academic Verification",
            featureDesc: "Leveraging blockchain technology, EduChain offers a robust system for verifying academic credentials and achievements.",
        },
        {
            featureTitle: "Community-Driven Content Curation",
            featureDesc: "Empowering users with a community-driven content curation system, the platform allows educators and learners to collaboratively curate and evaluate educational materials.",
        },
    ];

    return (
        <section className="py-24">
            <div className="max-w-screen-xl mx-auto px-4 text-black md:px-8">
                <div className="max-w-xl space-y-3">
                    <p className="text-black text-3xl font-semibold sm:text-4xl">
                        Everything you need to grow!
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            featureItems.map((item, idx) => (
                                <li key={idx} className="space-y-3">
                                    <div className="w-12 h-12 border text-black rounded-lg flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl hover:text-indigo-600 text-black font-bold cursor-pointer">
                                        {item.featureTitle}
                                    </h4>
                                    <p className="hover:text-indigo-600 cursor-pointer">
                                        {item.featureDesc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Features;