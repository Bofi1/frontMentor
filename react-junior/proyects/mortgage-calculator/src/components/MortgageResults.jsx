function MortgageResults() {
  return (
    <div className="w-full h-full bg-bg-results flex flex-col justify-center items-center p-10 text-center gap-5">
      <img className="h-40" src="/images/illustration-empty.svg" alt="" />
      <p className="text-white font-bold text-xl">Results shown here</p>
      <span className="text-[#7997AB] text-sm">
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be
      </span>
    </div>
  );
}

export default MortgageResults;
