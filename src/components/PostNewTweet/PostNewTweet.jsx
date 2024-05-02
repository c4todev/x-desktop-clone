import { MdKeyboardBackspace } from "react-icons/md";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import Poll from "../Icon-Components/Poll";
import Scheduler from "../Icon-Components/Scheduler";
import Location from "../Icon-Components/Location";
import PropTypes from "prop-types";

export default function PostNewTweet({
  back,
  tweetInput,
  handleTweetInput,
  onClick,
}) {
  return (
    <div className="px-2">
      <nav className="flex justify-between px-2 items-center h-14 ">
        <div>
          <MdKeyboardBackspace
            onClick={back}
            className="text-tw w-6 h-6 cursor-pointer"
          />
        </div>
        <div className="flex gap-8 items-center">
          <a className="text-sm text-[#1D9BF0] font-bold">Taslaklar</a>
          <button
            className="text-tw text-sm font-bold px-4 py-1.5 bg-[#1D9BF0] rounded-full"
            onClick={onClick}
          >
            Gönder
          </button>
        </div>
      </nav>
      <main className="bg-black">
        <div>
          <div className="flex items-start px-2 gap-3 mt-3 w-full">
            <div>
              <img
                src="/man2.jpg"
                className="aspect-square object-cover w-[40px] rounded-full"
              />
            </div>
            <div className="self-center mt-1 w-full">
              <textarea
                aria-autocomplete="list"
                aria-controls="typeaheadDropdownWrapped-0"
                aria-label="Metni gönderi olarak yayınla"
                autoCapitalize="sentences"
                autoComplete="on"
                autoCorrect="on"
                placeholder="Neler oluyor?"
                spellCheck="true"
                dir="auto"
                className="h-[120px] resize-none bg-transparent placeholder:text-xl placeholder:font-medium placeholder:tracking-wide placeholder:opacity-70 text-xl text-white focus:outline-none w-full"
                value={tweetInput}
                onChange={handleTweetInput}
              ></textarea>
            </div>
          </div>
          <div>
            <div className="px-2 flex flex-row items-center border-b border-b-[#2f3336] pb-4 gap-1 mr-4">
              <div>
                <GiEarthAsiaOceania className="w-4 h-4 text-[#1D9BF0]" />
              </div>
              <div className="text-base font-bold text-[#1D9BF0]">
                <p>Herkes yanıtlayabilir</p>
              </div>
            </div>
            <div className="pt-4 flex justify-start">
              <div className="rounded-full transition ease-linear delay-0 duration-100 bg-none  active:bg-[#1d9bf033] p-2">
                <IoImageOutline className="w-5 h-5 text-[#1D9BF0] cursor-pointer" />
              </div>
              <div className="rounded-full transition ease-linear delay-0 duration-100 bg-none  active:bg-[#1d9bf033] p-2">
                <MdOutlineGifBox className="w-5 h-5 text-[#1D9BF0] cursor-pointer" />
              </div>
              <div className="rounded-full transition ease-linear delay-0 duration-100 bg-none  active:bg-[#1d9bf033] p-2">
                <Poll />
              </div>
              <div className="rounded-full transition ease-linear delay-0 duration-100 bg-none  active:bg-[#1d9bf033] p-2">
                <Scheduler />
              </div>
              <div className="rounded-full transition ease-linear delay-0 duration-100 bg-none  active:bg-[#1d9bf033] p-2">
                <Location />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-transparent h-[370px]" onClick={back}></div>
    </div>
  );
}

PostNewTweet.propTypes = {
  back: PropTypes.func.isRequired,
  tweetInput: PropTypes.string.isRequired,
  handleTweetInput: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
