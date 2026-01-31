type ResultadoProps  = {
    mensagem: string;
    valorFinal: number | null;
}
const Resultado = ({mensagem, valorFinal}: ResultadoProps) => {
  return <div>
       {valorFinal  && <h2>Valor Final: R$ {valorFinal}</h2>}
       <p>{mensagem}</p>
  </div>;
};

export default Resultado;
