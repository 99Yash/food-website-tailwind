import React from "react";

const HeadlineCard = (props) => {
  return (
    <div className="rounded-xl relative  ">
      {/* overlay */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
        <p className="font-bold text-2xl px-2 pt-4 text-zinc-300 ">
          {props.title}
        </p>
        <p className="px-2 text-zinc-100/80 "> {props.subtext}</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">
          {props.btnText}
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl transition-all hover:scale-150  "
        src={props.img}
        alt={props.title}
      />
    </div>
  );
};

export default HeadlineCard;
