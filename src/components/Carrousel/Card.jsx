
import './Carrousel.css'

const Card = () => {
  return (
    <div className="contenedor-carr">
        <div className="sup-text">
          <div className="img-carr">
          <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 16 16"><path fill="black" d="M7.954 1.372a1 1 0 0 1 1.414-.15l3.262 2.664a1 1 0 0 1 .25 1.245A3 3 0 0 0 12 5h-.3l.298-.34l-1.718-1.403l-1.417 1.744H7.574l1.931-2.376l-.77-.629L6.337 5h-1.28zM10.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM3 5.5a.5.5 0 0 1 .5-.5h.558l.795-1H3.5A1.5 1.5 0 0 0 2 5.5v6A2.5 2.5 0 0 0 4.5 14H12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H3.5a.5.5 0 0 1-.5-.5m0 6V6.915q.236.084.5.085H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4.5A1.5 1.5 0 0 1 3 11.5"></path></svg>       
          </div>
          <div className="cont-text">
            <h2>12 Cuotas</h2>
          </div>
        </div>
      <div className="description-cont">
        <p>Todos los medios de pago</p>
      </div>
    </div>
  )
}

export default Card