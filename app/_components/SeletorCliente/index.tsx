type UserProps = {
  typeUser : string ;
  aoSelecionar: (e:string) => void
}
const SeletorCliente = ({typeUser, aoSelecionar}:UserProps) => {
  return (
    <select className="border
     border-cyan-800
      w-9/12
       h-10 px-3 
       rounded-lg"
       value={typeUser}
       onChange={(e) => aoSelecionar(e.target.value)}
       >
        <option value="">Selecione o tipo de  cliente</option>
        <option value="vip">VIP</option>
        <option value="funcionario">Funcionário</option>
        <option value="parceiro">Parceiro</option>
          <option value="comum">Comum</option>
    </select>
  )
}

export default SeletorCliente