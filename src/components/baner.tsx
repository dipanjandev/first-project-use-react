import banerPhoto from "../assets/banner-main.png";

export function Baner() {
  return (
    <section className="container mx-auto border-4 rounded-4xl bg-[#131313] w-310 h-[60vh] mt-5 grid justify-center items-center">
      <div>
        <div className="grid justify-center text-center">
          <div>
            <div className="flex justify-center">
              <img className="w-80 mb-5" src={banerPhoto} alt="" />
            </div>
            <h1 className="text-white text-4xl font-bold mb-5">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <h4 className="text-white opacity-70 text-2xl font-medium">
              Beyond Boundaries Beyond Limits
            </h4>
            <div className="mt-5">
              <button className="bg-[#E7FE29] w-46 h-12  rounded-3xl p-2">
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
