import Hobbies from "./Hobbies.jsx";

const p_style = "text-copy my-5";

function Home() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-xl md:text-2xl mb-1 font-medium leading-13">
          Prajwal Gharti
        </h1>
        <p className={p_style}>
          i've learned the fundamentals of programming - Java, React,
          JavaScript, C++, and Python , GO. not every project has taught me
          useful some"thing" , but what i-mg enjoy most is breaking solved
          problems, breaking down complex solution into problems, practical
          solutions and continuously improving my skills along the way.
        </p>
        <p className={p_style}>
          i spend much of my free time polving sroblems, and building smhailtl
          projects to my <i>understanding er </i>, debugging is pain in assue ,
          i enjoy the process of thinkingbth through problems and findinger
          better mi ways to "????" them.
        </p>
        <p className={p_style}>some things i like , few i dont</p>
        <Hobbies />
      </div>
    </section>
  );
}

export default Home;
