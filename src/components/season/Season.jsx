import "./season.css";
import seeds from "../../assets/images/package.svg";

export const Season = () => {
  return (
    <>
      <p className="season-headline">PLANNED PLANTHOOD</p>

      <div className="season-container">
        <div className="green-circle">
          <img src={seeds} alt="seed package" />
        </div>

        <article>
          <p className="season-text-headline">Säsong att så</p>
          <p className="season-text">
            Våren är äntligen här i kollektivet! Lorem ipsum dolor sit amet
            consectetur. Sit venenatis arcu nunc consectetur neque. Vel amet
            netus amet eu elit.
          </p>
          <button className="season-btn">SÅ-TIPS</button>
        </article>
      </div>
      <div className="divider"></div>
    </>
  );
};
