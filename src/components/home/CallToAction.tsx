import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";



function CallToAction() {
  return (
    <> 
      <div className=" bg-orange-100">
    <div className="relative px-8 py-16 md:px-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Ready to Transform Education?
              </h2>
              <p className="text-xl text-black/90 mb-8 max-w-2xl mx-auto">
                Join us in creating a safer, more accessible educational environment 
                for institutions across India.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-orange-50"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-black hover:bg-white/10"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
            </div>

    
    </>
  )
}

export default CallToAction

