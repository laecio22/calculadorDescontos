import EntradaValor from "@/app/_components/EntradaValor";

const SimuladorDescontos = () => {
  return (
    <section className=" h-100 
      w-3xl
     bg-cyan-50
      rounded-lg
      ">
      <form action="" className="flex flex-col gap-4
       items-center p-6
      " >
        <h2 className="font-bold text-3xl ">Simulador de Descontos</h2>
        <EntradaValor  />
      </form>
    </section>
  );
};

export default SimuladorDescontos;
