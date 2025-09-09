import { Mail, Github, Linkedin, Handshake } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-gradient-to-br from-[#D0E3F3] via-[#B8D4F0] to-[#DA82C8] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#e4229d]/20 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#062A55]/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/15 rounded-full blur-sm animate-bounce"></div>
      </div>
      <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Contact Creator</h3>
      <p className="mb-8 text-lg text-center max-w-xl text-[#062a55]">
        This is a practice project made by me. If you’d like to connect, here
        are my details 👇
      </p>

      <div className="bg-[#d0e3f3] text-[#062a55] p-8 rounded-2xl shadow-lg max-w-lg w-full">
        <h4 className="text-2xl font-bold mb-4">Akash</h4>
        <p className="mb-6">
          Aspiring developer building projects to learn and grow. 🚀
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#DA82C8]" />
            <a
              href="mailto:vikalpandey723@gmail.com"
              className="hover:underline hover:text-[#DA82C8] transition"
            >
              vikalpandey723@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Github className="w-5 h-5 text-[#DA82C8]" />
            <a
              href="https://github.com/vikalpis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#DA82C8] transition"
            >
              github.com/vikalpis
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Linkedin className="w-5 h-5 text-[#DA82C8]" />
            <a
              href="https://www.linkedin.com/in/vikalp-pandey-303bb0276/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#DA82C8] transition"
            >
              linkedin.com/in/vikalp
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Handshake className="w-5 h-5 text-[#DA82C8]" />
            <a
              href="https://hashnode.com/@vikalp004"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#DA82C8] transition"
            >
              hashnode.com/@vikalp
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
