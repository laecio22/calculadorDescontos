type InputProps = {
  valor: string;
  aoDigitar: (e:string)=> void;
}
const EntradaValor = ({valor, aoDigitar}:InputProps) => {
  return (
    <input
      type="number"
      min={0}
      className="border border-cyan-800 w-9/12 h-10 px-3 rounded-lg "
      placeholder="Informe valor gasto"
      value={valor}
      onChange={(e)=>aoDigitar(e.target.value) }
      
    />
  );
};

export default EntradaValor;
