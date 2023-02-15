import { FiSearch } from "react-icons/fi";
import "./Home.css";
import { useState } from "react";
import api from "../../services/api";

function Home() {
  const [input, setInput] = useState("");

  async function handleSearch() {
    if (input == 0 || input.length < 8 || input.length > 8) {
      alert("Digite um CEP valido");
      return;
    }
    try{
      const response = await api.get(`${input}/json/`);
      const data = await response.json();
      console.log(data);
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="button" className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="FFF" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 37514000</h2>
        <span>Rua Teste</span>
        <span>Complemento</span>
        <span>Bairro</span>
        <span>Campo Grande - MS</span>
      </main>
    </div>
  );
}

export default Home;
