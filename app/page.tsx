import SimuladorDescontos from "./(pages)/SimuladorDescontos/page";

const styles = {
  tamanho: "min-h-screen",
  cor: "bg-gray-800",
  alinhamento: "flex flex-col items-center justify-center",
};
const Home = () => {
  return (
    <main className={`${styles.tamanho} ${styles.alinhamento} ${styles.cor}`}>
      <SimuladorDescontos />
    </main>
  );
};

export default Home;
