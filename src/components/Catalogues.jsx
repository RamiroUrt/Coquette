import Shop from "./Shop"


const Catalogues = () => {
  return (
    <>
    <section className="section-catalogue">
      <div className="text-catalogue">
        <h1>VESTIDOS ELEGANTES Y DE GALA</h1>
        <h2>DISEÑOS DE ALTA COSTURA</h2>
        <p className="p-cat">
        En Coquette diseñamos vestidos elegantes y artesanales que te hacen lucir actual, cómoda y realzan tu belleza natural. Nos definimos por nuestro amor al diseño y los detalles, creando piezas sublimes y exclusivas para que cada mujer se sienta excepcional. Nuestra marca celebra la esencia femenina, con diseños audaces, versátiles y distinguidos. En todo el proceso de diseño, nuestro equipo se enfoca en la calidad y la distinción, creando vestidos de día y noche que evolucionan con las tendencias. Nuestras colecciones incluyen vestidos cortos y largos de alta costura, combinando contrastes, tejidos naturales, transparencias, cortes y bordados artesanales.
        <br/>
        Los vestidos de gala son otro distintivo de nuestra firma, diseñados a medida con bordados personalizados, faldas al cuerpo y detalles delicados que aportan distinción, romanticismo y sensualidad. Ofrecemos piezas originales y exclusivas para todo tipo de ocasiones, desde quinceañeras hasta novias y eventos de gala.
        <br/>
        Descubre nuestras colecciones únicas en la tienda online o agenda una cita en nuestro Atelier en Recoleta, donde celebraremos la alta costura y encontraremos el modelo perfecto para ti.
        </p>
        <br></br>
        <b className="text-xl">Bienvenida</b>
      </div>
      <section className="catalogue-shop">
        <Shop />
      </section>
    </section>
    </>
  )
}

export default Catalogues