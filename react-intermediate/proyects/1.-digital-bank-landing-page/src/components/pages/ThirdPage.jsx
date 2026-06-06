import currency from "../../assets/images/image-currency.jpg";
import restaurant from "../../assets/images/image-restaurant.jpg";
import plane from "../../assets/images/image-plane.jpg";
import confetti from "../../assets/images/image-confetti.jpg";

function ThirdPage() {
  const features = [
    {
      name: "currency",
      img: currency,
      autor: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      desc: "The world is getting smaller and we´re becoming more mobile. So why should you be forced to only receive money in a single...",
    },
    {
      name: "restaurant",
      img: restaurant,
      autor: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
    },
    {
      name: "plane",
      img: plane,
      autor: "Wilson Hutton",
      title: "Take your Digitalbank card wherever you go",
      desc: "We want you to enjoy your travels. This is why we don´t charge any fees on purchases while you´re abroad. We´ll even...",
    },
    {
      name: "confetti",
      img: confetti,
      autor: "Clairo Robinson",
      title: "Our invite-only Beta accounts are now live!",
      desc: "After a lot of hard work by the whole team, we´re excited to launch our closed beta. It´s easy to request an invite through...",
    },
  ];
  return (
    <div className="lg:p-10 2xl:p-30">
      <h2 className="text-center text-3xl mt-13 mb-8 text-[#404354] lg:text-5xl lg:text-start lg:mt-5 lg:mb-15">
        Latest Articles
      </h2>
      <div className="flex flex-col lg:flex-row p-5 items-center lg:justify-between lg:items-stretch lg:gap-5 2xl:gap-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col mb-5 lg:mb-0 shadow-md rounded-xl  lg:max-w-[303px] "
          >
            <img
              className="rounded-t-xl lg:max-h-[202px]"
              src={item.img}
              alt={item.name}
            />
            <div className="p-7 flex flex-col gap-3">
              <p className=" text-[#C8C6CA] text-sm">By {item.autor}</p>
              <h3 className="text-[#5C5F67] text-lg ">{item.title}</h3>
              <p className="text-[#A7A6AB] lg:text-[13px]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThirdPage;
