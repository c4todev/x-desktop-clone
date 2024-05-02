import { IoImageOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import Location from "../Icon-Components/Location";
import PropTypes from "prop-types";
import Emoji from "../Icon-Components/Emoji";

export default function PostNewTweet({
  tweetInput,
  handleTweetInput,
  onClick,
}) {
  return (
    <div className="mt-[56px] pl-[5.25rem] pt-5 w-full border-b border-[#2f3336]">
      <main className="bg-black">
        <div className="flex w-full">
          <div>
            <img
              src="/man2.jpg"
              className="aspect-square object-cover rounded-full min-w-10 h-10"
            />
          </div>
          <div className="flex flex-col items-center flex-1 px-4">
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
              className="resize-none bg-transparent placeholder:text-xl placeholder:font-medium placeholder:tracking-wide placeholder:opacity-70 text-xl text-white focus:outline-none w-full self-center"
              value={tweetInput}
              onChange={handleTweetInput}
            ></textarea>
            <div className="flex justify-between items-center w-full pb-2">
              <div className="flex items-center w-full">
                <div className="rounded-full transition ease-linear delay-0 duration-100 bg-none active:bg-[#1d9bf033] pr-2 py-2">
                  <IoImageOutline className="w-5 h-5 text-[#1D9BF0] cursor-pointer" />
                </div>
                <div className="rounded-full transition ease-linear delay-0 duration-100 bg-none active:bg-[#1d9bf033] p-2">
                  <MdOutlineGifBox className="w-5 h-5 text-[#1D9BF0] cursor-pointer" />
                </div>
                <div className="rounded-full transition ease-linear delay-0 duration-100 bg-none active:bg-[#1d9bf033] p-2">
                  <Emoji />
                </div>
                <div className="rounded-full transition ease-linear delay-0 duration-100 bg-none active:bg-[#1d9bf033] p-2">
                  <Location />
                </div>
              </div>
              <div className="flex items-center justify-end w-full">
                <button
                  className="text-tw text-sm font-bold px-4 py-1.5 bg-[#1D9BF0] rounded-full "
                  onClick={onClick}
                >
                  Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

PostNewTweet.propTypes = {
  tweetInput: PropTypes.string.isRequired,
  handleTweetInput: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
