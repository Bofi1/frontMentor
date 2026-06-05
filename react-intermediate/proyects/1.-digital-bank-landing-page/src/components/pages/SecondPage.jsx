import iconBanking from "../../assets/images/icon-online.svg";
import iconBudgeting from "../../assets/images/icon-budgeting.svg";
import iconOnboarding from "../../assets/images/icon-onboarding.svg";
import iconAPI from "../../assets/images/icon-api.svg";

function SecondPage() {
  const features = [
    {
      icon: iconBanking,
      title: "Online Banking",
      desc: "Our modern web and mobile applications allow you to keep track of your finances whereever you are in the world.",
    },
    {
      icon: iconBudgeting,
      title: "Simple Budgeting",
      desc: "See exactly where your money goes each month, Receive notifications when you´re close to hitting your limits.",
    },
    {
      icon: iconOnboarding,
      title: "Fast Onboarding",
      desc: "We don´t branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      icon: iconAPI,
      title: "Open API",
      desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];

  return (
    <div className="bg-[#F5F5F7] px-5 py-20 flex flex-col gap-20 lg:p-30">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl text-center text-[#2E3343] lg:text-start lg:text-5xl">
          Why choose Digitalbank?
        </h2>
        <p className="text-center text-[#B7B7B9] lg:text-start lg:text-xl">
          We leverage Open Banking to turn your bank account into your financial
          hub. <br className="hidden lg:flex" /> Control your finances like
          never before.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-20 lg:grid-cols-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 items-center lg:items-start"
          >
            <img src={item.icon} alt="" />
            <h2 className="text-3xl text-center text-[#2E3343] lg:text-start whitespace-nowrap lg:text-2xl">
              {item.title}
            </h2>
            <p className="text-center text-[#B7B7B9] lg:text-start ">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondPage;
