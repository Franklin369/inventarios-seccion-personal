import { create } from "zustand";
import {
  BuscarCategorias,
  EditarCategorias,
  EliminarCategorias,
  InsertarCategorias,
  MostrarCategorias,
} from "../index";
export const useCategoriasStore = create((set, get) => ({
  buscador: "",
  setBuscador: (p) => {
    set({ buscador: p });
  },
  datacategorias: [],
  categoriasItemSelect: [],
  parametros: {},
  mostrarcategorias: async (p) => {
    const response = await MostrarCategorias(p);
    set({ parametros: p });
    set({ datacategorias: response });
    set({ categoriasItemSelect: response[0] });
    return response;
  },
  selectcategorias: (p) => {
    set({ categoriasItemSelect: p });
  },
  insertarcategorias: async (p) => {
    await InsertarCategorias(p);
    const { mostrarcategorias } = get();
    const { parametros } = get();
    set(mostrarcategorias(parametros));
  },
  eliminarcategorias: async (p) => {
    await EliminarCategorias(p);
    const { mostrarcategorias } = get();
    const { parametros } = get();
    set(mostrarcategorias(parametros));
  },
  editarcategorias: async (p) => {
    await EditarCategorias(p);
    const { mostrarcategorias } = get();
    const { parametros } = get();
    set(mostrarcategorias(parametros));
  },
  buscarcategorias: async (p) => {
    const response = await BuscarCategorias(p);
    set({ datacategorias: response });
  },
}));
