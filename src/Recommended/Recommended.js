import Buttons from "../components/Buttons";
import "./Recommended.css";

function Recommended ({ handleClick }) {
  return (
      <div>
        <h2 className="Recommended-title">Recommended</h2>
        <div className="Recommended-flex">
          <Buttons onClickHandler={handleClick} value="" title="All Products" />
          <Buttons onClickHandler={handleClick} value="ZEROYAA" title="ZEROYAA" />
          <Buttons onClickHandler={handleClick} value="JC DISTRO" title="JC DISTRO" />
          <Buttons onClickHandler={handleClick} value="BETTERCHIC" title="BETTERCHIC" />
          <Buttons onClickHandler={handleClick} value="ARMOUR" title="ARMOUR" />
          <Buttons onClickHandler={handleClick} value="CHILDREN's PLACE" title="CHILDREN's PLACE" />
          <Buttons onClickHandler={handleClick} value="SPRING&GEGE" title="SPRING&GEGE" />
        </div>
      </div>
  );
};

export default Recommended;