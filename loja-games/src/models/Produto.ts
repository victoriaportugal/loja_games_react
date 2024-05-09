import Categoria from "./Categoria"

export default interface Postagem {
  id: number
  nome: string
  preco: number
  foto: string
  curtir: number
  categoria: Categoria | null
}