type UserProps = {
  typeUser: string;
  aoSelecionar: (e: string) => void;
};

const styles = {
  border: "border border-cyan-800  rounded-lg",
  tamanho: " w-9/12  h-10",
  padding: " px-3",
};
const SeletorCliente = ({ typeUser, aoSelecionar }: UserProps) => {
  return (
    <select
      className={`${styles.border} ${styles.padding} ${styles.tamanho}`}
      value={typeUser}
      onChange={(e) => aoSelecionar(e.target.value)}
    >
      <option value="">Selecione o tipo de cliente</option>
      <option value="vip">VIP</option>
      <option value="funcionario">Funcionário</option>
      <option value="parceiro">Parceiro</option>
      <option value="comum">Comum</option>
    </select>
  );
};

export default SeletorCliente;
