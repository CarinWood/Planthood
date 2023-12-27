import "./earlier.css";
import plant from "../../assets/images/plant.svg";

export const Earlier = () => {
  return (
    <section className="earlier-container">
      <article>
        <p className="earlier-headline">Våra tidigare odlingar</p>
        <p className="earlier-text">
          Våren är äntligen här i kollektivet! Lorem ipsum dolor sit amet
          consectetur. Sit venenatis arcu nunc consectetur neque. Vel amet netus
          amet eu elit.
        </p>
        <button className="earlier-btn">Planterade plantor</button>
      </article>
      <div className="green-circle">
        <img src={plant} alt="plant" />
      </div>
    </section>
  );
};
