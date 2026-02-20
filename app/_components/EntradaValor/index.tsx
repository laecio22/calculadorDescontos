type InputProps = {
  valor: string;
  aoDigitar: (e:string)=> void;
}

const  styles = {
  border: 'border border-cyan-800 rounded-lg',
  tamanho: ' w-9/12 h-10 ' ,
  padding: 'px-3'
}
const EntradaValor = ({valor, aoDigitar}:InputProps) => {
  return (
    <input
      type="number"
      min={0}
      className={`${styles.border} ${styles.padding} ${styles.tamanho}`}
      placeholder="Informe valor gasto"
      value={valor}
      onChange={(e)=>aoDigitar(e.target.value) }
      
    />
  );
};

export default EntradaValor;
