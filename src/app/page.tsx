
"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";

const Page = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [selectedBox, setSelectedBox] = useState<number>(0);

    const sections = ["Home", "Projects", "Contact"];

    const content = [
        [
            { title: "About Me", className: "bg-yellow-500" },
            { title: "Resume", className: "bg-yellow-500" },
            { title: "Github", className: "bg-yellow-500 large" },
            { title: "LinkedIn", className: "bg-yellow-500" },
            { title: "Notion", className: "bg-yellow-500" },
        ],
        [
            { title: "league of wordle", className: "bg-green-500" },
            { title: "multiplaylist", className: "bg-green-500" },
            { title: "github/tran-steven", className: "bg-green-500 large" },
            { title: "COVID19-KG-Integration", className: "bg-green-500" },
            { title: "neovim config", className: "bg-green-500" },
        ],
        [
            { title: "Email Us", className: "bg-purple-500" },
            { title: "Phone", className: "bg-purple-500" },
            { title: "Location", className: "bg-purple-500 large" },
            { title: "Support", className: "bg-purple-500" },
            { title: "Feedback", className: "bg-purple-500" },
        ],
    ];

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowUp") {
            if (selectedBox === 1) setSelectedBox(0);
            if (selectedBox === 4) setSelectedBox(3);
        } else if (e.key === "ArrowDown") {
            if (selectedBox === 0) setSelectedBox(1);
            if (selectedBox === 3) setSelectedBox(4);
        } else if (e.key === "ArrowRight") {
            if (selectedBox === 2) setSelectedBox(3);
            else if (selectedBox === 3 || selectedBox === 4) {
                setActiveSection((prev) => (prev + 1) % sections.length);
                setSelectedBox(0);
            } else setSelectedBox(2);
        } else if (e.key === "ArrowLeft") {
            if (selectedBox === 2) setSelectedBox(0);
            else if (selectedBox === 0) {
                setActiveSection((prev) => (prev - 1 + sections.length) % sections.length);
                setSelectedBox(4);
            } else setSelectedBox(2);
        } else if (e.key === "Enter") {
            alert(`Selected: ${content[activeSection][selectedBox].title}`);
        }
    };

    const previousContent =
        content[(activeSection - 1 + sections.length) % sections.length];
    const nextContent = content[(activeSection + 1) % sections.length];

    return (
        <div
            className="h-screen flex flex-col items-center justify-center relative"
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            <Navbar
                onChange={setActiveSection}
                sections={sections}
                activeSection={activeSection}
            />
            <div className="relative mt-16 w-full flex justify-center items-center">
                {/* Previous Section Preview */}
                <div className="absolute left-0 flex items-center justify-center w-48 h-full opacity-40">
                    <div className="w-full h-4/5 grid grid-rows-2 gap-2">
                        {previousContent.slice(0, 2).map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center justify-center text-sm ${item.className}`}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
                    <div className="flex flex-col gap-4">
                        <div
                            className={`p-24 ${
                                selectedBox === 0 ? "scale-105 border-4 border-white" : ""
                            } ${
                                content[activeSection][0].className
                            } flex items-center justify-center text-3xl`}
                        >
                            {content[activeSection][0].title}
                        </div>
                        <div
                            className={`p-24 ${
                                selectedBox === 1 ? "scale-105 border-4 border-white" : ""
                            } ${
                                content[activeSection][1].className
                            } flex items-center justify-center text-3xl`}
                        >
                            {content[activeSection][1].title}
                        </div>
                    </div>
                    <div
                        className={`p-40 col-span-1 ${
                            selectedBox === 2 ? "scale-105 border-4 border-white" : ""
                        } ${
                            content[activeSection][2].className
                        } flex items-center justify-center text-4xl`}
                    >
                        {content[activeSection][2].title}
                    </div>
                    <div className="flex flex-col gap-4">
                        <div
                            className={`p-24 ${
                                selectedBox === 3 ? "scale-105 border-4 border-white" : ""
                            } ${
                                content[activeSection][3].className
                            } flex items-center justify-center text-3xl`}
                        >
                            {content[activeSection][3].title}
                        </div>
                        <div
                            className={`p-24 ${
                                selectedBox === 4 ? "scale-105 border-4 border-white" : ""
                            } ${
                                content[activeSection][4].className
                            } flex items-center justify-center text-3xl`}
                        >
                            {content[activeSection][4].title}
                        </div>
                    </div>
                </div>

                {/* Next Section Preview */}
                <div className="absolute right-0 flex items-center justify-center w-48 h-full opacity-40">
                    <div className="w-full h-4/5 grid grid-rows-2 gap-2">
                        {nextContent.slice(0, 2).map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center justify-center text-sm ${item.className}`}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* A Button */}
            <div className="absolute bottom-8 left-8 flex items-center space-x-4">
                <span className="bg-green-500 w-12 h-12 flex items-center justify-center rounded-full text-black text-xl font-bold">
                    A
                </span>
                <span className="text-lg text-black font-medium">Select</span>
            </div>
        </div>
    );
};

export default Page;
