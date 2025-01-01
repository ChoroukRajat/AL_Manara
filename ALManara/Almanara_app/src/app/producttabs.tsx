"use client";



import React, { useState } from "react";
import { Tab, Tabs, TabsHeader, Typography } from "@material-tailwind/react";
import GeoJSONMap from '@/components/GeoJSONMap';



interface TabData {
    title: string;
    port: number;
}

// Definition the tabData object
const tabData: Record<string, TabData> = {
    economic: {
        title: "Economic Status",
        port: 8052,
    },
    social: {
        title: "Social Conditions",
        port: 8051,
    },
    performance: {
        title: "Performance",
        port: 8050,
    },
    behavior: {
        title: "Behavior",
        port: 8053,
    },
    tech: {
        title: "Tech Resources",
        port: 8054,
    },
    policies: {
        title: "Policies",
        port: 8055,
    },
};


const DashIframe: React.FC<{ port: number }> = ({ port }) => {
    if (port === -1) return null;

    return (
        <iframe
            src={`http://127.0.0.1:${port}`}
            style={{
                width: '100%',
                height: '1500px',
                border: 'none',
                borderRadius: '8px',
            }}

        />
    );
};


const TabContent: React.FC<{ tabData: TabData }> = ({ tabData }) => {
    return (
        <div className="space-y-8 mx-6 my-6">

            <DashIframe port={tabData.port} />


            {tabData.port === 8055 && (
                <div className="w-10/12 justify-self-center">
                    <GeoJSONMap/>
                </div>
            )}
        </div>
    );
};

// Main component for the product tabs
const ProductTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<keyof typeof tabData>("economic");

    return (
        <Tabs value={activeTab} className="font-custom mx-auto max-w-7xl w-full mb-16">

            <div className="w-full flex mb-8 flex-col items-center">
                <TabsHeader
                    className="h-10 !w-12/12 md:w-[70rem] border border-white/25 bg-opacity-90
"
                    value={activeTab}
                >
                    {Object.keys(tabData).map((key) => (
                        <Tab key={key} value={key} onClick={() => setActiveTab(key as keyof typeof tabData)}>
                            {tabData[key].title}
                        </Tab>
                    ))}
                </TabsHeader>
            </div>


            <div className="mt-6">
                <Typography
                    color="blue-gray"
                    className="font-custom text-customBlue ml-5 w-full text-[24px] lg:text-[36px] font-bold leading-[35px] lg:leading-[50px] lg:max-w-2xl text-left"
                >
                    {tabData[activeTab].title}
                </Typography>
                <TabContent tabData={tabData[activeTab]} />
            </div>
        </Tabs>
    );
};

export default ProductTabs;
