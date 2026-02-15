import bgMobile from "../assets/images/bg-main-mobile.png";
import bgDesktop from "../assets/images/bg-main-desktop.png";
import cardFront from "../assets/images/bg-card-front.png";
import cardBack from "../assets/images/bg-card-back.png";
import Form from "./Form";

function InteractiveCardApp() {
  return (
    <div className="grid grid-cols-1">
      <div className="relative"></div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default InteractiveCardApp;
