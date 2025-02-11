import React from "react";

type Props = {
  setFilter: (filter: string) => void;
};

const TodoFilter: React.FC<Props> = ({ setFilter }) => {
  return (
    <div style={{display:"flex", gap:"0.2rem", alignItems: "center", justifyContent:"center", marginTop:"1.1rem"}}>
      <button className="button" onClick={() => setFilter("all")}>All</button>
      <button className="button" onClick={() => setFilter("completed")}>Completed</button>
      <button className="button" onClick={() => setFilter("pending")}>Pending</button>
    </div>
  );
};

export default TodoFilter;