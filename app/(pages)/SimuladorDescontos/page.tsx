"use client";
import BotaoCalcular from "@/app/_components/BotaoCalcular";
import EntradaValor from "@/app/_components/EntradaValor";
import Resultado from "@/app/_components/Resultado";
import SeletorCliente from "@/app/_components/SeletorCliente";
import { useState } from "react";

const SimuladorDescontos = () => {
  const [valor, setValor] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [valorFinal, setValorFinal] = useState(null);

  const calcularDesconto = () => {
    console.log("cloicou");
  };

  return (
    <section
      className=" h-100 
      w-3xl
     bg-cyan-50
      rounded-lg
      "
    >
      <form
        action=""
        className="flex flex-col gap-8
       items-center p-6
      "
      >
        <h2 className="font-bold text-3xl ">Simulador de Descontos</h2>
        <EntradaValor valor={valor} aoDigitar={setValor} />
        <SeletorCliente typeUser={tipoUsuario} aoSelecionar={setTipoUsuario} />
        <BotaoCalcular aoClicar={calcularDesconto} />
        <Resultado mensagem={mensagem} valorFinal={valorFinal}/>
        {valor}
        {tipoUsuario}
      </form>
    </section>
  );
};

export default SimuladorDescontos;
