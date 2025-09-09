const About = () => {
    return (
      <section
        id="about"
        className="min-h-screen w-full bg-gradient-to-br from-[#D0E3F3] via-[#B8D4F0] to-[#DA82C8] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 relative overflow-hidden"
      >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#e4229d]/20 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#062A55]/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/15 rounded-full blur-sm animate-bounce"></div>
      </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">About This Project</h2>
        <p className="text-lg md:text-xl max-w-3xl text-center leading-relaxed mb-8">
          Welcome to <span className="text-[#DA82C8] font-semibold">SecondBrain</span>!  
          This is a practice project I built to explore **React, TypeScript, and
          Tailwind CSS with Backend using Mongoose and express** while creating something useful.  
          The idea is simple: a place where you can save and organize your links,
          resources, and notes so that they’re always just a click away. 🚀
        </p>
  
        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-4xl w-full ">
          <div className="bg-transparent rounded-2xl shadow-lg p-6 hover:scale-105 transition border-2 border-[#DA82C8]">
            <h3 className="text-xl font-bold text-[#e4229d] mb-3">Why I built it</h3>
            <p>
              I wanted to learn **fullstack development** by working on something
              practical and fun instead of just following tutorials.
            </p>
          </div>
  
          <div className="bg-transparent rounded-2xl shadow-lg p-6 hover:scale-105 transition border-2 border-[#DA82C8]">
            <h3 className="text-xl font-bold text-[#e4229d] mb-3">What it does</h3>
            <p>
              Lets you save links, categorize them, and quickly access them when
              you need — almost like your own personal **digital brain**.
            </p>
          </div>
  
          <div className="bg-transparent rounded-2xl shadow-lg p-6 hover:scale-105 transition border-2 border-[#DA82C8]">
            <h3 className="text-xl font-bold text-[#e4229d] mb-3">What’s next</h3>
            <p>
              I plan to add new features like tags and reminders to
              make it even more powerful.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  