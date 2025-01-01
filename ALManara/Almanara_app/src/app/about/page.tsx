import React from "react";

export default function About() {
    return (
        <>
            <section className="bg-gray-50 py-10">
                <div className="container mx-auto px-4 space-y-10">

                    {/* Section 1 */}
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Image */}
                        <div className="p-4">
                            <img
                                className="rounded-lg object-cover shadow-[10px_10px_20px_0px_rgba(0,0,0,0.15)] w-full"
                                src="/image/custom/img.png"
                                alt="problem statement"
                            />
                        </div>
                        {/* Text */}
                        <div className="text-gray-900 space-y-4">
                            <h2 className="text-4xl font-custom font-bold">
                                <span className="text-customRed">Problem</span>
                                <span className="text-customBlue"> Statement</span>
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Morocco faces <span
                                className="text-customRed">significant regional disparities</span> in
                                <span className="text-customRed"> education</span>, characterized by varying
                                <span className="text-customBlue"> dropout rates</span>,
                                <span className="text-customBlue"> performance gaps</span>, and
                                <span className="text-customBlue"> socio-economic challenges</span>.
                            </p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Text */}
                        <div className="text-gray-900 space-y-4">
                            <p className="text-lg leading-relaxed">
                                Despite substantial investments in education, policymakers struggle to identify
                                and address region-specific needs effectively.
                            </p>
                        </div>
                        {/* Image */}
                        <div className="p-4">
                            <img
                                className="rounded-lg object-cover shadow-[10px_10px_20px_0px_rgba(0,0,0,0.15)] w-full"
                                src="/image/custom/img_1.png"
                                alt="region-specific challenges"
                            />
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Image */}
                        <div className="p-4">
                            <img
                                className="rounded-lg object-cover shadow-[10px_10px_20px_0px_rgba(0,0,0,0.15)] w-full"
                                src="/image/custom/rb_1064.png"
                                alt="problem statement"
                            />
                        </div>
                        {/* Text */}
                        <div className="text-gray-900 space-y-4">

                            <p className="text-lg leading-relaxed">
                                <span className="text-customBlue">Traditional analysis</span> methods
                                <span className="text-customRed"> lack</span> the
                                <span className="text-customBlue"> scalability</span> and the
                                <span className="text-customBlue"> precision</span>
                                needed to derive actionable insights from the vast and complex educational data.
                            </p>


                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-gray-35 py-10">
                <div className="container mx-auto px-4 space-y-10">

                    {/* Section 1 */}
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Image */}
                        <div className="p-4">
                            <img
                                className="w-10/12 rounded-lg object-cover shadow-[10px_10px_20px_0px_rgba(0,0,0,0.15)] w-full"
                                src="/image/custom/Analytics-bro.png"
                                alt="problem statement"
                            />
                        </div>
                        {/* Text */}
                        <div className="text-gray-900 space-y-4">
                            <h2 className="text-4xl font-custom font-bold">
                                <span className="text-customRed">Our</span>
                                <span className="text-customBlue"> Solution</span>
                            </h2>
                            <p className="text-2xl text-lg leading-relaxed">
                                Use <span
                                className="text-customRed">advanced analytics</span> to process data from
                                <span className="text-customBlue"> national exams</span>,
                                <span className="text-customBlue"> socio-economic statistics</span> and
                                <span className="text-customBlue"> student performance metrics</span>.


                            </p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Text */}
                        <div className="text-gray-900 space-y-4">
                            <p className="text-lg leading-relaxed">
                                Employ <span
                                className="text-customRed">clustering</span> to uncover regional challenges.
                            </p>
                        </div>
                        {/* Image */}
                        <div className="p-4 pl-20">
                            <img
                                className="w-2/3 rounded-lg object-cover shadow-[10px_10px_20px_0px_rgba(0,0,0,0.15)] w-full"
                                src="/image/custom/img_2.png"
                                alt="region-specific challenges"
                            />
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Image */}
                        <div className="p-4">
                            <img
                                className="w-4/6 rounded-lg object-cover shadow-[10px_10px_20px_0px_rgba(0,0,0,0.15)] w-full"
                                src="/image/custom/rag.jpg"
                                alt="problem statement"
                            />
                        </div>
                        {/* Text */}
                        <div className="text-gray-900 space-y-4">

                            <p className="text-lg leading-relaxed">
                                Integrate a
                                <span className="text-customRed"> Retrieval-Augmented Generation (RAG)</span>
                                system to extract insights from
                                <span className="text-customBlue"> OECD policy reports</span>.
                            </p>

                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Text */}
                        <div className="text-gray-900 space-y-4">
                            <p className="text-lg leading-relaxed">
                                Use <span
                                className="text-customRed">LLMs</span> to generate tailored recommendations addressing
                                identified challenges.
                            </p>
                        </div>
                        {/* Image */}
                        <div className="p-4 pl-20">
                            <img
                                className="w-2/3 rounded-lg object-cover shadow-[10px_10px_20px_0px_rgba(0,0,0,0.15)] w-full"
                                src="/image/custom/llm1.jpeg"
                                alt="region-specific challenges"
                            />
                        </div>
                    </div>


                </div>
            </section>
            <section className="bg-gray-50 py-10">
                <div className="container mx-auto px-4 space-y-10">

                    {/* Section 1 */}
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Image */}
                        <div className="p-4">
                            <img
                                className="rounded-lg object-cover shadow-[10px_10px_20px_0px_rgba(0,0,0,0.15)] w-full"
                                src="/image/custom/img_3.png"
                                alt="problem statement"
                            />
                        </div>
                        {/* Text */}
                        <div className="text-gray-900 space-y-4">
                            <h2 className="text-4xl font-custom font-bold">
                                <span className="text-customRed">Our</span>
                                <span className="text-customBlue"> Goal</span>
                            </h2>
                            <p className="text-lg leading-relaxed">
                                <span
                                    className="text-customBlue">Create a scalable, AI-driven solution to analyze, visualize, and recommend
                            tailored policies that align with international best practices, such as those outlined by OECD.</span>

                            </p>
                            <h2 className="text-4xl font-custom font-bold">
                                <span className="text-customRed">Our</span>
                                <span className="text-customBlue"> Target</span>
                            </h2>
                            <p className="text-lg leading-relaxed">
                                <span
                                    className="text-customRed">Policymakers often lack the tools to analyze trends, forecast challenges, and implement targeted solutions.</span>


                            </p>

                        </div>
                    </div>


                </div>
            </section>

        </>
    );
}
