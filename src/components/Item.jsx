import React from "react";

export default function Item({ title }) {
  const handleChange = () => alert("Alterado");
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onChange={handleChange} />
      <p>{title}</p>
    </div>
  );
}
