import React from 'react';
import { Play, Smile } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { name: 'שם לקוח 1', image: '/api/placeholder/150/150', role: 'תפקיד 1' },
    { name: 'שם לקוח 2', image: '/api/placeholder/150/150', role: 'תפקיד 2' },
    { name: 'שם לקוח 3', image: '/api/placeholder/150/150', role: 'תפקיד 3' },
    { name: 'שם לקוח 4', image: '/api/placeholder/150/150', role: 'תפקיד 4' },
    { name: 'שם לקוח 5', image: '/api/placeholder/150/150', role: 'תפקיד 5' },
    { name: 'שם לקוח 6', image: '/api/placeholder/150/150', role: 'תפקיד 6' },
  ];

  return (
    <div className="bg-gradient-to-b from-navy-900 to-navy-800 text-white p-8 text-right min-h-screen flex items-center justify-center" dir="rtl">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-12 leading-tight">
          <span className="text-yellow-400 block">אך עשינו את זה?</span>
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full inline-block transform -skew-x-12 my-2">תשמע</span>
          <span className="text-orange-500 block">שמע מהלקוחות המרוצים שלנו!</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-navy-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 mx-auto" // Center the item
              style={{ width: '350px' }} // Set a fixed width
            >
              <div className="relative aspect-video">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110">
                    <Play className="text-white" size={32} />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{testimonial.name}</h2>
                <p className="text-yellow-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-yellow-400 text-navy-900 px-8 py-3 rounded-full text-lg font-bold flex items-center mx-auto hover:bg-yellow-300 transition-colors duration-300">
            <Smile className="mr-2" />
            צפה בעוד סיפורי הצלחה
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
