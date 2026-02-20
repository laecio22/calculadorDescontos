"use client";
import BotaoCalcular from "@/app/_components/BotaoCalcular";
import EntradaValor from "@/app/_components/EntradaValor";
import Resultado from "@/app/_components/Resultado";
import SeletorCliente from "@/app/_components/SeletorCliente";
import { useState } from "react";

const styles = {
  tamanho: 'h-100 w-3xl',
  cor: 'bg-cyan-50',
  borda:'rounded-lg',
  padding: 'p-6',
  alinhamento: 'flex flex-col items-center'
}

const SimuladorDescontos = () => {
  const [valor, setValor] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [valorFinal, setValorFinal] = useState<null | number>(null);

  const calcularDesconto = () => {
    console.log("cloicou");
    const preco = Number(valor);
    let resultado = 0;

    //condicional simples  para  verificar se  foi  digitado um número no input e  que  seja  maior que 0
    if (isNaN(preco) || preco <= 0) {
      setMensagem("Não  é um valor  válido,  digite  novamente");
    } else {
      //  switch  para  aplicar  desconto de  acordo  com tipo de  cliente
      switch (tipoUsuario) {
        case "vip":
          resultado = preco - preco * 0.2;
          setMensagem("Você  obteve  um desconto de  20%");
          break;
        case "funcionario":
          resultado = preco - preco * 0.3;
          setMensagem("Você  obteve um  desconto  de 30%");
          break;

        case "parceiro":
          resultado = preco - preco * 0.15;
          setMensagem("Você obteve  um desconto  de 15%");
          break;
        case "comum":
          resultado = preco - preco * 0.05;
          setMensagem("Você  recebeu um desconto de 5%");
          break;
        default:
          setMensagem("Selecione  um tipo  de  usuário");
      }

      setValorFinal(resultado);
    }
  };

  return (
    <section
      className={`${styles.borda} ${styles.cor} ${styles.tamanho}`}    
    >
      <form
        action=""
        className={`${styles.alinhamento} ${styles.padding} gap-8`}
      >
        <h2 className="font-bold text-3xl ">Simulador de Descontos</h2>
        <EntradaValor valor={valor} aoDigitar={setValor} />
        <SeletorCliente typeUser={tipoUsuario} aoSelecionar={setTipoUsuario} />
        <BotaoCalcular aoClicar={calcularDesconto} />
        <Resultado mensagem={mensagem} valorFinal={valorFinal} />
        </form>
    </section>
  );
};

export default SimuladorDescontos;
