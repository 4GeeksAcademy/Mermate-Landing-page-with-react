// 1. Importar React
import React from "react"
import rigoImage from "../../img/rigo-baby.jpg";


// 2. Crear componente
const Card=()=>{
    return (
        
            <div className="card" style={{width: "18rem;"}}>
                <img src={rigoImage} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam maiores veritatis doloribus assumenda, id officiis praesentium possimus a eveniet iure voluptas quo molestias commodi, laborum porro non mollitia aut!</p>
                    <a href="#" className="btn btn-primary">Find out more!</a>
                </div>
            </div>
        
    );
};

// 3. Exportar componente

export default Card;
