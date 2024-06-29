import React from "react";

export default function Form() {
  const handleSubmit = () => {
    alert("sucesso");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="text"
        name="title"
        placeholder="O que há para fazer hoje?"
      />
      <button>Salvar</button>
    </form>
  );
}
