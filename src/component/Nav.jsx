import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import profile_img from "../assets/download.jfif";

// {tailwindcsswebsite css}
const linkClass =
  "rounded-md px-3 py-2 text-gray-100 hover:bg-white/7 hover:font-bold";
function Nav() {
  const handleClick = () => {
    alert("no cats for u getlost ! mewo ! 'shhh' bequite 'shush'");
  };
  return (
    <>
      <nav className="flex justify-between p-3 text-start items-center bg-slate-700 text-white w-full shadow-md">
        <div></div>
        <div className="justify-center items-center text-center  ">
          <img
            className="rounded-full h-13 w-auto ml-7 border-3 border-t-blue-700 border-b-yellow-400 border-l-pink-600"
            src={profile_img}
            alt="Are you serious"
          />
          <p>Prajwal Gharti</p>
        </div>
        <div>
          <ul className="flex gap-7">
            <li className={linkClass}>
              <a href="#home">Home</a>
            </li>

            <li className={linkClass}>
              <a href="#hobobies">Hobbies </a>
            </li>
            <li className={linkClass}>
              <a href="#">Contact me </a>
            </li>
            <li className={linkClass} onClick={handleClick}>
              <a href="#">Cats</a>
            </li>
          </ul>
        </div>

        {/* to aligne item */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {/* login button*/}

        <div className="text-shadow-fuchsia-300 text-white">
          <a
            href="https://github.com/devprajwalgotnochill"
            title="Visit my GitHub profile"
            className="text-center items-center flex gap-1 hover:underline"
          >
            <FaGithubAlt />
            <p>Github</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/devprajwol-gharti-8065093a6/"

            className="text-center items-center flex gap-1 hover:underline"
          >
            <FaLinkedin />
            <p>LinkedIn</p>
          </a>
        </div>

        <div></div>
      </nav>
    </>
  );
}
export default Nav;
