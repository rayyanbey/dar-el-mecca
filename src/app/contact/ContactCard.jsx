import React from "react";

const ContactCard = ({ icon, title, children }) => {
  return (
    <div className="w-full md:w-[350px] min-h-[250px] flex flex-col justify-center items-center gap-4 p-8 bg-tertiary rounded-lg border-[1px] border-[#00000014] shadow-sm">

      {icon}

      <h6 className="font-[700] text-[20px] cinzel-title text-center">
        {title}
      </h6>
      <div className="flex flex-col justify-center items-center text-[16px] font-[300] text-center leading-6">
        {children}
      </div>
    </div>
  );
};

export default ContactCard;