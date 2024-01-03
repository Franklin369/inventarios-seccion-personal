import { useQuery } from "@tanstack/react-query";
import {
  BloqueoPagina,
  CategoriasTemplate,
  SpinnerLoader,
  useCategoriasStore,
  useEmpresaStore,
  useUsuariosStore,
} from "../index";

export function Categorias() {
  const { datapermisos } = useUsuariosStore();
  const statePermiso = datapermisos.some((objeto) =>
    objeto.modulos.nombre.includes("Categoria de productos")
  );

  const { mostrarcategorias, datacategorias, buscarcategorias, buscador } =
    useCategoriasStore();
  const { dataempresa } = useEmpresaStore();
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar categorias", { id_empresa: dataempresa?.id }],
    queryFn: () => mostrarcategorias({ id_empresa: dataempresa?.id }),
    enabled: dataempresa?.id != null,
  });
  const { data: buscardata } = useQuery({
    queryKey: [
      "buscar categorias",
      { id_empresa: dataempresa.id, descripcion: buscador },
    ],
    queryFn: () =>
      buscarcategorias({ id_empresa: dataempresa.id, descripcion: buscador }),
    enabled: dataempresa.id != null,
  });
  if (statePermiso == false) {
    return <BloqueoPagina />;
  }
  if (isLoading) {
    return <SpinnerLoader />;
  }
  if (error) {
    return <span>Error...</span>;
  }

  return <CategoriasTemplate data={datacategorias} />;
}
