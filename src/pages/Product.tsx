const Product = () => {
    return (
      <section
        id="product"
        className="min-h-screen w-full bg-gradient-to-br from-[#D0E3F3] via-[#B8D4F0] to-[#DA82C8] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 relative overflow-hidden"
      >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#e4229d]/20 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#062A55]/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/15 rounded-full blur-sm animate-bounce"></div>
      </div>
        <h3 className="text-3xl md:text-5xl font-bold text-[#062a55] mb-10">
          Product
        </h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          {/* Card 1 */}
          <div className="p-6 bg-transparent rounded-2xl shadow-md border-t-4 border-[#DA82C8]">
            <h4 className="text-xl font-semibold text-[#062a55] mb-3">
              Save Anything
            </h4>
            <p className="text-[#062a55]">
              Store links, articles, YouTube videos, and personal notes all in one
              organized hub.
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-transparent rounded-2xl shadow-md border-t-4 border-[#e4229d]">
            <h4 className="text-xl font-semibold text-[#062a55] mb-3">
              Access Anywhere
            </h4>
            <p className="text-[#062a55]">
              Your SecondBrain syncs across devices, so your knowledge is always
              at your fingertips.
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-transparent rounded-2xl shadow-md border-t-4 border-[#DA82C8]">
            <h4 className="text-xl font-semibold text-[#062a55] mb-3">
              Smart Organization
            </h4>
            <p className="text-[#062a55]">
              Use tags, categories, and search to keep your saved items structured
              and easy to find.
            </p>
          </div>
        </div>

         {/* Pricing Section */}
      <h4 className="p-4  text-2xl md:text-4xl font-bold text-[#062a55] mb-8">
        Pricing Plans
      </h4>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Free Plan */}
        <div className="p-8 bg-transparent rounded-2xl shadow-lg border-t-4 border-[#DA82C8] flex flex-col">
          <h5 className="text-2xl font-semibold text-[#062a55] mb-2">Free</h5>
          <p className="text-4xl font-bold text-[#DA82C8] mb-4">$0</p>
          <ul className="text-[#062a55] flex-1 space-y-2 mb-6">
            <li>✔ Save up to 50 links</li>
            <li>✔ Basic search</li>
            <li>✔ Access on 1 device</li>
          </ul>
          <button className="w-full py-3 bg-[#DA82C8] text-white rounded-xl hover:bg-[#e4229d] transition">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="p-8 bg-transparent rounded-2xl shadow-lg border-t-4 border-[#e4229d] flex flex-col">
          <h5 className="text-2xl font-semibold text-[#062a55] mb-2">Pro</h5>
          <p className="text-4xl font-bold text-[#e4229d] mb-4">$9/mo</p>
          <ul className="text-[#062a55] flex-1 space-y-2 mb-6">
            <li>✔ Unlimited links</li>
            <li>✔ Advanced search & filters</li>
            <li>✔ Access on 3 devices</li>
            <li>✔ Priority support</li>
          </ul>
          <button className="w-full py-3 bg-[#e4229d] text-white rounded-xl hover:bg-[#DA82C8] transition">
            Upgrade
          </button>
        </div>

        {/* Team Plan */}
        <div className="p-8 bg-transparent rounded-2xl shadow-lg border-t-4 border-[#DA82C8] flex flex-col">
          <h5 className="text-2xl font-semibold text-[#062a55] mb-2">Team</h5>
          <p className="text-4xl font-bold text-[#DA82C8] mb-4">$29/mo</p>
          <ul className="text-[#062a55] flex-1 space-y-2 mb-6">
            <li>✔ Unlimited links & storage</li>
            <li>✔ Team collaboration</li>
            <li>✔ Access on unlimited devices</li>
            <li>✔ Dedicated support</li>
          </ul>
          <button className="w-full py-3 bg-[#DA82C8] text-white rounded-xl hover:bg-[#e4229d] transition">
            Start Team Plan
          </button>
        </div>
      </div>
      </section>
    );
  };
  
  export default Product;
  