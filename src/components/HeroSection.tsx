import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/Screenshot 2026-02-16 060840.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7faf9]">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-accent/10 rounded-full -top-20 -left-20 blur-3xl" />
        <div className="absolute w-80 h-80 bg-primary/10 rounded-full bottom-0 right-0 blur-3xl" />
      </div>

      <div className="relative container section-padding py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block border-blue-500 text-black border border-accent/20 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            🏆 Trusted Govt Exam Coaching in Sonipat
          </span>

          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 leading-tight mb-6">
            Your Government Job <br />
            <span className="text-blue-800">Journey Starts Here</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Prepare for SSC, HSSC, CET, Banking, Police and Teacher exams with expert mentors, 
            structured study plans and proven results.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="bg-blue-800 text-white hover:bg-blue-500 font-semibold"
              asChild
            >
              <Link to="/courses">
                Explore Courses <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            <Button size="lg" variant="outline"   className="font-semibold text-black hover:text-black hover:bg-gray-300 hover:border-gray-300 transition-colors"
  asChild
>
              <Link to="/book-demo">Book Free Demo</Link>
            </Button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
{/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="relative w-full h-[420px] md:h-[520px] lg:h-[600px]"
>
  {/* Decorative shapes */}
  <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-accent/40 rounded-full" />
  <div className="absolute -bottom-10 -left-10 w-32 h-32 border-2 border-primary/40 rounded-full" />

  {/* Image */}
  <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-xl border border-gray-200">
    <img
      src={heroBg}
      alt="Government exam students studying"
      className="w-full h-full object-cover"
      loading="eager"
    />
  </div>

  {/* Floating badge */}
  <div className="absolute bottom-6 right-6 bg-white shadow-lg rounded-xl px-5 py-3 border">
    <p className="text-xs text-gray-500">Selections</p>
    <p className="font-bold text-accent text-lg">10,000+</p>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
