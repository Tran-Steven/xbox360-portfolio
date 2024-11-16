"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

const Page = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [selectedBox, setSelectedBox] = useState<number>(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

  const sections = ["Home", "Projects", "Contact"];

    const content = [
        [
            { title: "about me", className: "bg-yellow-500" },
            { title: "resume", className: "bg-yellow-500" },
            { title: "portfolio", className: "bg-yellow-500 large" },
            { title: "linkedin", className: "bg-yellow-500" },
            { title: "notion", className: "bg-yellow-500" },
        ],
        [
            { title: "league of wordle", className: "bg-green-500" },
            { title: "multiplaylist", className: "bg-green-500" },
            { title: "github/tran-steven", className: "bg-green-500 large" },
            { title: "COVID19-KG-Integration", className: "bg-green-500" },
            { title: "neovim config", className: "bg-green-500" },
        ],
        [
            { title: "email", className: "bg-purple-500" },
            { title: "phone", className: "bg-purple-500" },
            { title: "tran-steven", className: "bg-purple-500 large" },
            { title: "tran-steven", className: "bg-purple-500" },
            { title: "tran-steven", className: "bg-purple-500" },
        ],
    ];

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const key = e.key.toLowerCase();
        if (key === "arrowup") {
            if (selectedBox === 1) setSelectedBox(0);
            if (selectedBox === 4) setSelectedBox(3);
        } else if (key === "arrowdown") {
            if (selectedBox === 0) setSelectedBox(1);
            if (selectedBox === 3) setSelectedBox(4);
        } else if (key === "arrowright") {
            if (selectedBox === 2) setSelectedBox(3);
            else if (selectedBox === 3 || selectedBox === 4) {
                setActiveSection((prev) => (prev + 1) % sections.length);
                setSelectedBox(0);
            } else setSelectedBox(2);
        } else if (key === "arrowleft") {
            if (selectedBox === 2) setSelectedBox(0);
            else if (selectedBox === 0) {
                setActiveSection((prev) => (prev - 1 + sections.length) % sections.length);
                setSelectedBox(4);
            } else setSelectedBox(2);
        } else if (key === "enter" || key === "a") {
            alert(`Selected: ${content[activeSection][selectedBox].title}`);
        }
    };

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        const checkDarkMode = () => {
            setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
        };
        checkMobile();
        checkDarkMode();
        window.addEventListener("resize", checkMobile);
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", checkDarkMode);
        return () => {
            window.removeEventListener("resize", checkMobile);
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", checkDarkMode);
        };
    }, []);

    if (isMobile) {
        return (
            <div
                className={`h-screen w-screen flex flex-col items-center justify-center ${
                    isDarkMode ? "bg-black text-gray-300" : "bg-white text-black"
                }`}
            >
                <p className="text-4xl font-bold text-center px-4">
                    This website is intended to be viewed on a desktop.
                </p>
                <p className="text-2xl font-bold text-center px-4 mt-10">
                    Mobile support may be added in the future.
                </p>

                <p className="text-2xl font-bold text-center px-4 mt-3">
          Thank you.
                </p>
            </div>
        );
    }

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
