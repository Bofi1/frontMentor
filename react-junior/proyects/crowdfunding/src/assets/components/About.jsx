import Reward from "./Reward";

function About({ donation }) {
  return (
    <div className="bg-white p-10 border border-gray-200 w-full max-w-170 rounded-xl">
      <h2 className="font-bold text-xl mb-5">About this project</h2>

      <div className="text-[#9B9A9B] mb-10">
        <p className="mb-7">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </div>

      <Reward donation={donation} />
    </div>
  );
}

export default About;
