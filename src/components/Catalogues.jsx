import Shop from "./Shop"


const Catalogues = () => {
  return (
    <>
    <section className="section-catalogue">
      <div className="text-catalogue">
        <h1>ELEGANT AND GALA DRESSES</h1>
        <h2>HAUTE COUTURE DESIGNS</h2>
        <p className="p-cat">
        At Coquette, we design elegant and handcrafted dresses that make you look modern, comfortable, and enhance your natural beauty. We define ourselves by our love for design and details, creating sublime and exclusive pieces so that every woman feels exceptional. Our brand celebrates the feminine essence with bold, versatile, and distinguished designs. Throughout the design process, our team focuses on quality and distinction, creating day and night dresses that evolve with trends. Our collections include short and long haute couture dresses, combining contrasts, natural fabrics, transparencies, cuts, and handcrafted embroidery.
        <br/>
        Gala dresses are another hallmark of our brand, custom-designed with personalized embroidery, body-hugging skirts, and delicate details that bring distinction, romance, and sensuality. We offer original and exclusive pieces for all kinds of occasions, from quinceañeras to brides and gala events.
        <br/>
        Discover our unique collections in the online store or schedule an appointment at our Atelier in Recoleta, where we celebrate haute couture and find the perfect model for you.
        </p>
        <br></br>
        <b className="text-xl">Welcome!</b>
      </div>
      <section className="catalogue-shop">
        <Shop />
      </section>
    </section>
    </>
  )
}

export default Catalogues