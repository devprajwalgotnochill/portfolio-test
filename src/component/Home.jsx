import Hobbies from "./Hobbies.jsx";

const p_style = "text-copy my-5";

function Home() {
  return (
    <section className="min-h-screen flex items-center ">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-xl md:text-2xl mb-1 font-medium leading-13">
          Prajwal Gharti
        </h1>
        <p className={p_style}>
          i've learned the fundamentals of programming - Java, React,
          JavaScript, C++, fe!nfe!nfe!nfe!n and Python , GO. every project has
          taught me unuseful some"thing" , but what i-mg enjoy most is breaking
          solved problems, breaking "bad" down complex solution into problems,
          practical sofe!nlutife!nons and continuously improving my
          mfe!nhfe!(skills) along the way.
        </p>
        <p className={p_style}>
          i spend much of my free time "sleeping" and "sleeping", and building
          smhailtl projects to my <i>understanding er </i>, debugging is pain in
          assue , i enjoy the process of thinkin"gaber through problems and
          find:eginger better mi ways to "????" them.
        </p>
        <p className={p_style}>some things i like , few i dont</p>
        <Hobbies />
        <p className={p_style}>oushi forgot to put sleepig in the list</p>
      </div>
    </section>
  );
}

export default Home;
