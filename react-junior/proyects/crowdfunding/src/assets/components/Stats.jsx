import CountUp from "react-countup";
import { motion } from "framer-motion";

function Stats({ data }) {
  const total = data?.stats?.totalRaised || 0;
  const goal = data?.stats?.goal || 100000;
  // Calculamos el porcentaje (limitándolo al 100% para que no se salga de la barra)
  const percentage = Math.min((total / goal) * 100, 100);

  const now = new Date();
  const target = new Date(data?.stats?.daysLeft);

  // Diferencia en milisegundos
  const difference = target - now;

  // Convertir milisegundos a días
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-white flex flex-col items-center gap-5 border border-gray-200 rounded-xl w-full py-10 px-10 lg:justify-start max-w-170">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full lg:gap-10 ">
        <div className="border-b border-gray-100 lg:border-gray-300 pb-5 lg:pb-0 text-center border-w-10 lg:border-b-0 lg:border-r  lg:text-start">
          <p className="font-bold text-3xl">
            <CountUp
              end={data?.stats?.totalRaised || 0}
              duration={0.2}
              separator=","
              prefix="$"
              decimals={0}
            />
          </p>

          <span className="text-[#808080] text-sm">
            of ${data?.stats?.goal} backed
          </span>
        </div>
        <div className="border-b border-gray-100 lg:border-gray-300 pb-5 lg:pb-0 text-center lg:border-b-0 lg:border-r lg:text-start">
          <p className="font-bold text-3xl">
            <CountUp
              e
              end={data?.stats?.totalBackers || 0}
              duration={0.2}
              separator=","
              decimals={0}
            />
          </p>
          <span className="text-[#808080] text-sm">total backed</span>
        </div>
        <div className="text-center lg:text-start">
          <p className="font-bold text-3xl">
            <CountUp
              end={days > 0 ? days : 0}
              duration={0.2}
              separator=","
              decimals={0}
            />
          </p>
          <span className="text-[#808080] text-sm">days left</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden mt-3">
        <motion.div
          className="bg-[#3CB3AB] h-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }} // <-- Valor dinámico
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default Stats;
