type ButtonProps = {
  aoClicar: () => void;
};

const styles = {
  tamanho: "w-3/4 h-12",
  border: "rounded-2xl",
  font: "text-2xl",
  background: "bg-blue-600 hover:bg-blue-500",
  color: "text-white",
};

const BotaoCalcular = ({ aoClicar }: ButtonProps) => {
  return (
    <button
      onClick={() => aoClicar()}
      type="button"
      className={`${styles.tamanho} ${styles.border} ${styles.font} ${styles.background} ${styles.color}`}
    >
      Calcular
    </button>
  );
};

export default BotaoCalcular;
