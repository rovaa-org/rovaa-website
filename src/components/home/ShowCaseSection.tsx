import { Building2, GraduationCap } from 'lucide-react';

const ShowCaseSection = () => {
  const clients = [
    {
      name: "Galgotias University",
      icon: <Building2 className="h-8 w-8 text-orange-600" />,
      stats: [
        { value: "15,000+", label: "Active Students" },
        { value: "98%", label: "Student Satisfaction" },
        { value: "24/7", label: "Platform Availability" }
      ]
    },
    {
      name: "Delhi Public School",
      icon: <GraduationCap className="h-8 w-8 text-orange-600" />,
      stats: [
        { value: "8,000+", label: "Students Enrolled" },
        { value: "95%", label: "Parent Satisfaction" },
        { value: "100%", label: "Safety Record" }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Numbers that Matter Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Numbers that Matter
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {clients.map((client, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100 relative overflow-hidden"
              >
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full opacity-50" />
                
                {/* Client Header */}
                <div className="flex items-center space-x-4 mb-8 relative">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    {client.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {client.name}
                  </h3>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6">
                  {client.stats.map((stat, statIdx) => (
                    <div key={statIdx} className="text-center">
                      <div className="text-3xl font-bold text-orange-600">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black opacity-10" />
              <div className="absolute -left-20 -top-20 w-40 h-40 bg-white rounded-full opacity-10" />
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-white rounded-full opacity-10" />
            </div>

         
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowCaseSection;