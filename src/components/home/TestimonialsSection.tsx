import  { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of 10th Grade Student",
      image: "/api/placeholder/80/80",
      content: "As a parent, my biggest concern was always my child's safety in the digital learning environment. This platform has given me peace of mind while providing quality education for my daughter.",
      location: "Delhi"
    },
    {
      name: "Rajesh Kumar",
      role: "Parent of 12th Grade Student",
      image: "/api/placeholder/80/80",
      content: "The transparency of this platform is remarkable. I can see my son's progress, and the absence of any hidden charges or harassment makes it truly student-friendly.",
      location: "Mumbai"
    },
    {
      name: "Anjali Patel",
      role: "Parent of 11th Grade Student",
      image: "/api/placeholder/80/80",
      content: "What impressed me most was how my child gained confidence in their studies. The platform's focus on student well-being while maintaining educational standards is commendable.",
      location: "Bangalore"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          What Parents Say About Us
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear from parents who have witnessed their children thrive in a safe, 
          nurturing educational environment
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-orange-100">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-12">
            <div className="bg-orange-500 rounded-full p-4">
              <Quote className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-700 italic">
              "{testimonials[activeIndex].content}"
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-200"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                  <p className="text-orange-600">{testimonials[activeIndex].location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white shadow-lg hover:bg-orange-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          {/* Indicators */}
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === activeIndex ? 'bg-orange-500' : 'bg-orange-200'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white shadow-lg hover:bg-orange-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Additional Trust Indicators */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-4xl font-bold text-orange-600 mb-2">98%</h4>
            <p className="text-gray-600">Parent Satisfaction Rate</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-4xl font-bold text-orange-600 mb-2">100%</h4>
            <p className="text-gray-600">Safety Record</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-4xl font-bold text-orange-600 mb-2">24/7</h4>
            <p className="text-gray-600">Parent Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;