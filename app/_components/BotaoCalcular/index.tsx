type ButtonProps = {
  aoClicar: () => void;
};

const BotaoCalcular = ({ aoClicar }: ButtonProps) => {
  return (
    <button
      onClick={() => aoClicar()}
      type="button"
      className="w-3/4 bg-blue-600 text-white
    h-12 rounded-2xl text-2xl hover:bg-blue-500 cursor-pointer"
    >
      Calcular
    </button>
  );
};

export default BotaoCalcular;
