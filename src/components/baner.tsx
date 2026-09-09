// Baner.tsx

import banerPhoto from "../assets/banner-main.png";

export function Baner() {
  return (
    <section className="container mx-auto rounded-4xl bg-[#131313] bg-[url('/bg-shadow.png')] bg-cover bg-center w-300 mt-5 grid justify-center items-center">
      <div className="grid justify-center text-center">
        <div>
          <div className="flex justify-center mt-12">
            <img className="w-80 mb-5" src={banerPhoto} alt="" />
          </div>
          <h1 className="text-white text-4xl font-bold mb-5">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <h4 className="text-white opacity-70 text-2xl font-medium">
            Beyond Boundaries Beyond Limits
          </h4>
          <div className="mt-5 mb-12 ">
            <button className="bg-[#E7FE29] w-46 h-12  rounded-3xl p-2 outline-2 outline-[#E7FE29] outline-offset-5">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
