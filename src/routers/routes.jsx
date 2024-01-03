import { Routes, Route } from "react-router-dom";
import {
  Configuracion,
  ErrorMolecula,
  Home,
  Login,
  Marca,
  ProtectedRoute,
  SpinnerLoader,
  UserAuth,
  useEmpresaStore,
  useUsuariosStore,Categorias, Productos, Usuarios
} from "../index";
import { useQuery } from "@tanstack/react-query";

export function MyRoutes() {
  const { user } = UserAuth();
  const { mostrarUsuarios,idusuario,mostrarpermisos } = useUsuariosStore();
  const {mostrarEmpresa} = useEmpresaStore()
  const { data:datausuarios, isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: mostrarUsuarios,
  });
  const {data:dataempresa}=useQuery({queryKey:["mostrar empresa"],queryFn:()=>mostrarEmpresa({idusaurio:idusuario}),enabled:!!datausuarios})
  const {data:datapermisos}=useQuery({queryKey:["mostrar permisos",{id_usuario:idusuario}],queryFn:()=>mostrarpermisos({id_usuario:idusuario}),enabled:!!datausuarios})

  if (isLoading){
    return <SpinnerLoader/>
  }
  if(error){
    return <ErrorMolecula mensaje={error.message}/>
  }
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
        <Route path="/configurar" element={<Configuracion />} />
        <Route path="/configurar/marca" element={<Marca />} />
        
        <Route path="/configurar/categorias" element={<Categorias />} />
        <Route path="/configurar/productos" element={<Productos />} />
        <Route path="/configurar/personal" element={<Usuarios />} />
      </Route>
    </Routes>
  );
}
