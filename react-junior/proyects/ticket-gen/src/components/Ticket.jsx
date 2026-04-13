import ticketImage from "../images/pattern-ticket.svg";

function Ticket() {
  return (
    <div className="relative w-full max-w-[600px] aspect-[600/280] mx-auto">
      <div className="absolute inset-0">
        <img src={ticketImage} alt="" />
      </div>
    </div>
  );
}

export default Ticket;
