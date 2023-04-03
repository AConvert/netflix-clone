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
        <header className="absolute z-20 w-full flex aspect-auto justify-between items-center px-6  bg-gradient-to-b from-black to-transparent ">
          <img
            src="/img/netflix_logo.png"
            alt="net_logo"
            className="w-32 md:w-48 xl:w-52 object-contain lg:ml-32 xl:ml-20"
          />
          <button className="px-4 text-white font-bold rounded-md lg:mr-36  bg-red-700 text-md xl:text-xl xl:h-12 text-center h-9">
            Sign In
          </button>
        </header>
      </section>

      <section className="flex flex-col md:pt-16 md:left-0 lg:left-32 xl:left-40 text-white absolute z-20 top-52 mx-8 left-[1/2] -translate-x-[1/2] -translate-y-[1/2] space-y-4 text-center">
        <h1 className="  font-bold text-3xl md:text-5xl">
          Unlimited films, TV programmes and more.
        </h1>
        <h2 className=" text-lg md:text-3xl ">
          Watch anywhere. Cancel at any time.
        </h2>
        <h2 className="text-lg pt-3 md:text-xl  text-center pb-2">
          Ready to watch? Enter your email to create or restart your membership.
        </h2>
        <form
          onSubmit={submitEmail}
          className="flex flex-col md:flex md:flex-row md:justify-center md:items-center space-y-3 md:space-y-0"
        >
          <input
            className="border border-gray-500 md:text-lg rounded-md p-3 md:py-4 md:w-1/3 xl:w-[40%] mx-4 bg-black bg-opacity-70 focus:outline-none focus:ring-white focus:ring-2"
            type="email"
            placeholder="Email address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className=" flex items-center justify-center text-white font-bold rounded-md bg-red-700 text-lg text-center  md:p-[15px] mt-0  px-4 mx-auto md:mx-0"
          >
            {loading ? (
              <ClipLoader color="white" />
            ) : (
              <h1 className="flex items-center md:text-2xl">
                Get Started{" "}
                <span>
                  <ChevronRightIcon className="text-white w-7 h-7  pb-1" />
                </span>
              </h1>
            )}
          </button>
        </form>
      </section>

      <section className="relative hidden md:flex md:justify-center  border-y-4 border-gray-400  bg-black h-[700px] w-screen">
        <div className="flex justify-center items-center space-x-5 xl:space-x-20 mx-10">
          <div className="flex flex-col space-y-4 w-[460px] xl:w-[500px] text-white">
            <h1 className="text-6xl font-bold">Enjoy your TV.</h1>
            <h2 className="text-2xl font-semibold mr-4">
              Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blue-ray players and more{" "}
            </h2>
          </div>
          <div>
            <div className="border-2 border-gray-400">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ViKnrHjzgn4&modestbranding=1"
                width={340}
                height={200}
                muted={true}
                loop={true}
                playing={true}
                playsinline={true}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default IntroPage;
