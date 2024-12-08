"use client";

import React, { useState } from "react";
import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import EconomicStatus from "@/components/economicStatus"
import SocialConditions from "@/components/SocialConditions";
import Performance from "@/components/Performance";
import Behavior from "@/components/Behavior";
import TechResources from "@/components/TechResources";

function Producttabs() {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState("economic");

    // Function to render dynamic content based on the selected tab
    const renderContent = () => {
        switch (activeTab) {
            case "economic":
                return <EconomicStatus />;
            case "social":
                return <SocialConditions />;
            case "performance":
                return <Performance />;
            case "behavior":
                return <Behavior />;
            case "tech":
                return <TechResources />;
            default:
                return <p>Select a tab to view content.</p>;
        }
    };

    return (
        <>
            <Tabs value={activeTab} className="font-custom mx-auto max-w-7xl w-full mb-16">
                <div className="w-full flex mb-8 flex-col items-center">
                    <TabsHeader
                        className="h-10 !w-12/12 md:w-[50rem] border border-white/25 bg-opacity-90"
                        value={activeTab}
                    >
                        <Tab value="economic" onClick={() => setActiveTab("economic")}>
                            Economic Status
                        </Tab>
                        <Tab value="social" onClick={() => setActiveTab("social")}>
                            Social Conditions
                        </Tab>
                        <Tab value="performance" onClick={() => setActiveTab("performance")}>
                            Performance
                        </Tab>
                        <Tab value="behavior" onClick={() => setActiveTab("behavior")}>
                            Behavior
                        </Tab>
                        <Tab value="tech" onClick={() => setActiveTab("tech")}>
                            Tech Resources
                        </Tab>
                    </TabsHeader>
                </div>
                {/* Dynamic content rendering */}
                <div className="mt-6">{renderContent()}</div>
            </Tabs>
        </>
    );
}
export default Producttabs;
