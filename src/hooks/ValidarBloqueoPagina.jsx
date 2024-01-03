import { BloqueoPagina, useUsuariosStore } from "../index";
export function ValidarBloqueoPagina(modulo) {
    const { datapermisos } = useUsuariosStore();
    const statePermiso = datapermisos.some((objeto) =>
      objeto.modulos.nombre.includes("Categoria de productos")
    );
    // if (statePermiso == false) {
    //   return <BloqueoPagina />;
    // }
    return statePermiso
}
