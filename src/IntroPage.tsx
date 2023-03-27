import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import ReactPlayer from "react-player/youtube";

function IntroPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(!loading);

    if (email) {
      setTimeout(() => {
        navigate("/login", {
          state: {
            userEmail: email,
          },
        });
        setLoading(false);
      }, 3000);
    }

    setEmail("");
  };

  return (
    <main>
      <section className="relative bg-[url('http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg')] aspect-auto w-screen h-screen md:max-h-[700px] bg-cover ">
        <div className="bg-black bg-opacity-60 h-screen w-screen md:h-[700px] absolute z-1 top-0 left-0"></div>
        <header className="absolute z-20 w-full flex aspect-auto justify-between items-center px-6 bg-gradient-to-b from-black to-transparent ">
          <img
            src="/img/netflix_logo.png"
            alt="net_logo"
            className="w-32 object-contain"
          />
          <button className="px-4 text-white font-bold rounded-md bg-red-700 text-md text-center h-9">
            Sign In
          </button>
        </header>
      </section>

      <section className="flex flex-col text-white absolute z-20 top-52 mx-8 left-[1/2] -translate-x-[1/2] -translate-y-[1/2] space-y-4 text-center">
        <h1 className="  font-bold text-3xl">
          Unlimited films, TV programmes and more.
        </h1>
        <h2 className=" text-lg ">Watch anywhere. Cancel at any time.</h2>
        <h2 className="text-lg pt-3 text-center pb-2">
          Ready to watch? Enter your email to create or restart your membership.
        </h2>
        <form onSubmit={submitEmail} className="flex flex-col space-y-3">
          <input
            className="border border-gray-500 rounded-sm p-3 mx-4 bg-black bg-opacity-70 focus:outline-none focus:ring-white focus:ring-2"
            type="email"
            placeholder="Email address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className=" flex items-center justify-center text-white font-bold rounded-md bg-red-700 text-lg text-center py-3 px-4 mx-auto"
          >
            {loading ? (
              <ClipLoader color="white" />
            ) : (
              <h1 className="flex items-center">
                Get Started{" "}
                <span>
                  <ChevronRightIcon className="text-white w-7 h-7 pb-1" />
                </span>
              </h1>
            )}
          </button>
        </form>
      </section>

      <section className="hidden md:inline-block border-y-4 border-gray-400  bg-black h-[700px] w-screen">
        <div className="flex justify-center items-center space-x-5 mx-10">
          <div className="flex flex-col space-y-2 text-white">
            <h1 className="text-3xl">Enjoy your TV</h1>
            <h2 className="text-xl">
              Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blue-ray players and more{" "}
            </h2>
          </div>
          <div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              className=""
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ViKnrHjzgn4&modestbranding=1"
              width={120}
              height={120}
              muted={true}
              loop={true}
              playing={true}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default IntroPage;
