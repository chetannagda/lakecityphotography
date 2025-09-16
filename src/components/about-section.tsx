"use client";

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg md:text-xl text-neutral-300 mb-6">
              At Lake City Photography, we believe every moment tells a story worth preserving. 
              With over a decade of experience, we specialize in capturing life's most precious moments 
              through our lens.
            </p>
            <p className="text-lg md:text-xl text-neutral-300 mb-6">
              From intimate weddings to corporate events, family portraits to artistic compositions, 
              we bring passion and professionalism to every shoot.
            </p>
            <p className="text-lg md:text-xl text-neutral-300">
              Our mission is to create timeless memories that you'll treasure forever.
            </p>
          </div>
          <div className="bg-neutral-800 h-96 rounded-lg flex items-center justify-center">
            <span className="text-neutral-500">About Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}