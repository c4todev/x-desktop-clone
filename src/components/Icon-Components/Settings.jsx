import { MdKeyboardBackspace } from "react-icons/md";
import PropTypes from "prop-types";

export default function Settings({ back }) {
  return (
    <div className="flex flex-col">
      <div className="px-4 flex flex-row justify-between h-14 items-center">
        <div className="flex flex-row items-center gap-10">
          <MdKeyboardBackspace onClick={back} className="text-white w-6 h-6" />
          <p className="text-white full mx-auto text-xl font-bold">
            Zaman akışı ayarları
          </p>
        </div>
        <div>
          <button
            onClick={back}
            className="rounded-full bg-white text-black font-bold text-sm tracking-wide px-4 py-1.5"
          >
            Bitti
          </button>
        </div>
      </div>
      <main>
        <div className="flex flex-col justify-center px-8 my-8">
          <h1 className="text-white text-3xl font-extrabold tracking-wide">
            Henüz burada içerik yok
          </h1>
          <p className="text-gray-500 text-[15px] font-light mt-1">
            Favori içeriklerine daha kolay erişmek için bir{" "}
            <a className="text-[#1D9BF0] active:underline">Liste</a> veya{" "}
            <a className="text-[#1D9BF0] active:underline">Topluluğu</a>{" "}
            sabitlemeyi dene.
          </p>
        </div>
      </main>
    </div>
  );
}

Settings.propTypes = {
  back: PropTypes.func.isRequired,
};
