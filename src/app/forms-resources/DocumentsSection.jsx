import React from "react";
import BrownButton from "../_components/BrownButton";

function DocumentsSection() {
    return (
        <section className="flex flex-col justify-center items-center gap-10 px-4 py-6 lg:px-20 lg:py-16">
            <h3 className="w-full lg:w-[60%] cinzel-title font-[700] text-[32px] text-center">
                THESE DOCUMENTS MAY BE REQUIRED BEFORE YOU TRAVEL WITH US
            </h3>
            <p className="font-[300] text-[18px] text-start">
                To help you finish your paperwork faster, we provided the following forms for you. Feel free to print
                any of the forms in order fill out the necessary requirements and to sign where applicable. After
                completing the relevant forms, please fax or mail us a copy to our office.
            </p>
            <div className="flex flex-col  gap-6 justify-center items-center">
                <h6 className="font-[500] text-[24px] text-center ">Download PDF Documents Below</h6>
                <div className="flex flex-col lg:flex-row flex-wrap justify-center  gap-4">
                    <div className="flex items-center justify-between gap-10 m-3 bg-tertiary rounded-2xl border border-[#00000014] lg:p-4">
                        <p className="text-[18px] font-[300]">Declaration of Faith</p>
                        <BrownButton text={"Download"} />
                    </div>
                    <div className="flex items-center justify-between gap-10 m-3 bg-tertiary rounded-2xl border border-[#00000014] p-4">
                        <p className="text-[18px] font-[300]">Declaration of Faith</p>
                        <BrownButton text={"Download"} />
                    </div>
                    <div className="flex items-center justify-between gap-10 m-3 bg-tertiary rounded-2xl border border-[#00000014] p-4">
                        <p className="text-[18px] font-[300]">Declaration of Faith</p>
                        <BrownButton text={"Download"} />
                    </div>
                    <div className="flex items-center justify-between gap-10 m-3 bg-tertiary rounded-2xl border border-[#00000014] p-4">
                        <p className="text-[18px] font-[300]">Declaration of Faith</p>
                        <BrownButton text={"Download"} />
                    </div>
                    <div className="flex items-center justify-between gap-10 m-3 bg-tertiary rounded-2xl border border-[#00000014] p-4">
                        <p className="text-[18px] font-[300]">Declaration of Faith</p>
                        <BrownButton text={"Download"} />
                    </div>
                   
                </div>
            </div>
        </section>
    );
}

export default DocumentsSection;
