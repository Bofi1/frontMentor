function AdviceSkeleton() {
  return (
    <div className="flex flex-col items-stretch w-full min-w-full animate-pulse">
      <div className="h-3 w-24 bg-gray-600 rounded mb-8 self-center"></div>

      {/* Usamos w-full explícito aquí también */}
      <div className="h-6 w-full bg-gray-600 rounded mb-4"></div>
      <div className="h-6 w-[90%] bg-gray-600 rounded mb-4 self-center"></div>
      <div className="h-6 w-[60%] bg-gray-600 rounded mb-10 self-center"></div>

      <div className="h-[1px] w-full bg-gray-700 mb-2"></div>
    </div>
  );
}

export default AdviceSkeleton;
