// 1. Importar React
import React from "react"
// 2. Crear componente
const Jumbotron=()=>{
    return (
        <>
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas minus suscipit, id libero, laudantium iste doloremque ducimus rerum autem quibusdam labore deserunt numquam ea dolorum unde corporis iure explicabo!</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
        
        
        
        </>
    )
}
// 3. Exportar componente
export default Jumbotron;
