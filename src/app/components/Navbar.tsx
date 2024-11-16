"use client";

const Navbar = ({
    onChange,
    sections,
    activeSection,
}: {
    onChange: (index: number) => void;
    sections: string[];
    activeSection: number;
}) => {
    return (
        <nav className="absolute top-20 flex justify-center space-x-16 text-3xl font-light">
            {sections.map((section, index) => (
                <span
                    key={index}
                    className={`cursor-pointer ${
                        activeSection === index
                            ? "text-white opacity-100"
                            : "text-white opacity-50"
                    }`}
                    onClick={() => onChange(index)}
                >
                    {section}
                </span>
            ))}
        </nav>
    );
};

export default Navbar;
