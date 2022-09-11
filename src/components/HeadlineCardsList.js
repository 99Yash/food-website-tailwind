import React from "react";
import HeadlineCard from "./HeadlineCard";

const HeadlineCardsList = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
      <HeadlineCard
        title="It's hot in there!"
        subtext="30 minutes. That's it."
        btnText="Order Now"
        img="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <HeadlineCard
        title="New Restaurants"
        subtext="Added Daily"
        btnText="Explore"
        img="https://images.unsplash.com/photo-1532939624-3af1308db9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />

      <HeadlineCard
        title="We deliver sweets too"
        subtext="Tasty Treats"
        btnText="Check Out"
        img="https://images.unsplash.com/photo-1606188074044-fcd750f6996a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      />
    </div>
  );
};

export default HeadlineCardsList;
