// Footer.tsx
export function Footer() {
    return (
      <footer className="bg-[#062a55] text-[#d0e3f3]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold text-[#e4229d]">MyWebsite</h1>
            <p className="mt-3 text-sm text-[#d0e3f3]">
              Building a second brain for you — organized, simple & smart.
            </p>
          </div>
  
          {/* Links */}
          <div>
            <h2 className="text-lg font-semibold text-[#e4229d]">Quick Links</h2>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-[#486285]">Home</a></li>
              <li><a href="#" className="hover:text-[#486285]">About</a></li>
              <li><a href="#" className="hover:text-[#486285]">Services</a></li>
              <li><a href="#" className="hover:text-[#486285]">Contact</a></li>
            </ul>
          </div>
  
          {/* Socials */}
          <div>
            <h2 className="text-lg font-semibold text-[#e4229d]">Follow Us</h2>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="hover:text-[#486285]">Twitter</a>
              <a href="#" className="hover:text-[#486285]">LinkedIn</a>
              <a href="#" className="hover:text-[#486285]">GitHub</a>
            </div>
          </div>
        </div>
  
        {/* Bottom bar */}
        <div className="border-t border-[#486285] text-center py-4 text-sm text-[#d0e3f3]">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </footer>
    );
  }
  