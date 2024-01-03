import Swal from "sweetalert2";
import { ObtenerIdAuthSupabase, supabase } from "../index";

export const MostrarEmpresa = async (p) => {
const { error, data } = await supabase
    .from("asignarempresa")
    .select(`empresa(id,nombre,simbolomoneda)`)
    .eq("id_usuario", p.idusaurio)
    .maybeSingle();
  if (data) {
    return data;
  }
};
export const ContarUsuariosXempresa =async (p)=>{
  const {data,error} = await supabase.rpc("contar_usuarios_por_empresa",{_id_empresa:p.id_empresa})
  if(data){
    return data;
  }
  
}
