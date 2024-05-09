import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import ListaCategoria from "./components/categorias//listaCategoria/ListaCategoria"
import FormularioCategoria from "./components/categorias//formularioCategoria/FormularioCategoria"
import DeletarCategoria from "./components/categorias//deletarCategoria/DeletarCategoria"



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/categoria" element={<ListaCategoria />} />
          <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
          <Route
            path="/editarCategoria/:id"
            element={<FormularioCategoria />}
          />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App