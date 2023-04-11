import { FiSearch } from "react-icons/fi";
import "./Home.css";
import { useState } from "react";
import api from "../../services/api";

function Home() {
  const [input, setInput] = useState("");

  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === 0 || input.length < 8 || input.length > 8) {
      console.log("clique informações incorretas")
      alert("Digite um CEP valido");
      return;
    }
    try {
      console.log("clique informações corretas")
      const response = await api.get(`${input}/json/`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Cep inexistente");
      setInput("");
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

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default Home;
