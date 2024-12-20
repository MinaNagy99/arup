import React from "react";

function SectionHeader({ text }) {
  return (
    <>
      <div className="flex items-center">
        <h2 className="font-bold text-xxxl pe-3">{text}</h2>
        <img className="md:w-14 w-10 object-contain" src="/images/arrow.png" alt="" />
      </div>
    </>
  );
}

export default SectionHeader;
