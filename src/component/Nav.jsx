import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// {AI css}
const linkClass =
  "rounded-md px-3 py-2 text-gray-100 hover:bg-white/7 hover:text-white";
function Nav() {
  const handleClick = () => {
    alert("no cats for u getlost ! mewo ! 'shhh' bequite 'shush'");
  };
  return (
    <>
      <nav className="flex justify-between p-3 text-start items-center bg-slate-900 text-white ">
        <div></div>
        <div className="justify-center items-center flex">
          <img
            className="rounded-full h-10 w-auto"
            src="https://i.pinimg.com/736x/3b/1a/80/3b1a80df61b41345de244d52b4617923.jpg"
            alt="Are you serious"
          />
        </div>
        <div>
          <ul className="flex gap-8 ">
            <li className={linkClass}>
              <a href="#">Home</a>
            </li>

            <li className={linkClass}>
              <a href="#">About Me</a>
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

        <div>
          <a
            href="https://github.com/devprajwalgotnochill"
            className="text-center items-center flex gap-1"
          >
            <FaGithubAlt />
            <p>Github</p>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/devprajwol-gharti-8065093a6/"
            className="text-center items-center flex gap-1"
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
