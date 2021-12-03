import { useState } from "react";

export const Slot = ({ content, index, today }) => {
  const [open, setOpen] = useState(false);
  const slotDay = index + 1;

  return (
    <div onClick={setOpen} className={open ? "slot open" : "slot"}>
      <div className="front">
        <h1
          style={{
            textDecoration: slotDay === today ? "underline" : "unset",
          }}
        >
          {slotDay}
        </h1>
      </div>
      <div className="back">
        <p>{slotDay > today ? "Ikke juks!" : content}</p>
      </div>
    </div>
  );
};
