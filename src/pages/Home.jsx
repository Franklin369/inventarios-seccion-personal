import { useQuery } from "@tanstack/react-query";
import { HomeTemplate, useEmpresaStore } from "../index";
export function Home() {
  const {contarusuariosXempresa,dataempresa} = useEmpresaStore();
  const {data,isLoading} = useQuery({queryKey:["contar usuarios por empresa",{idempresa:dataempresa?.id}],queryFn:()=>contarusuariosXempresa({id_empresa:dataempresa?.id}),enabled:!!dataempresa})
  return (<HomeTemplate/>);
}
