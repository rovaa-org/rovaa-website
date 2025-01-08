import femaleStudent from "@/assets/femaleStudent.png";
import background from "@/assets/backgroundImage.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden min-h-[90vh]">
      {/* Background Image with Pattern Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-90" />
      </div>
      
      <div className="relative mx-auto container px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Building a
              <span className="text-orange-600 block mt-2">Brighter Future</span>
              for Indian Education
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We're creating a secure and inclusive platform where students can learn without barriers. 
              Connecting NGOs, universities, and students to foster an environment of growth, 
              innovation, and unlimited potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button 
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Student Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[700px] transform translate-y-[-2rem]">
              <div className="absolute inset-0 bg-gradient-to-t from-orange-100/50 to-transparent rounded-2xl" />
              <img
                src={femaleStudent}
                alt="Female student studying"
                className="w-full h-full object-cover object-center rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;