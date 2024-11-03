import React from 'react';
import { Play, Smile, Star, Quote, ArrowLeft, Building2 } from 'lucide-react';

interface Testimonial {
  name: string;
  image: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  videoThumbnail: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'דניאל כהן',
      image: '/api/placeholder/150/150',
      videoThumbnail: '/api/placeholder/350/200',
      role: 'מנכ״ל',
      company: 'חברת טכנולוגיה',
      rating: 5,
      quote: 'העבודה עם הצוות הייתה מדהימה. קיבלנו תוצאות מעולות ושירות מקצועי ברמה הגבוהה ביותר.'
    },
    {
      name: 'מיכל לוי',
      image: '/api/placeholder/150/150',
      videoThumbnail: '/api/placeholder/350/200',
      role: 'בעלת עסק',
      company: 'סטודיו ליופי',
      rating: 5,
      quote: 'האתר החדש שינה את העסק שלי. הלקוחות מתלהבים מהעיצוב והפונקציונליות.'
    },
    {
      name: 'יוסי אברהם',
      image: '/api/placeholder/150/150',
      videoThumbnail: '/api/placeholder/350/200',
      role: 'מנהל שיווק',
      company: 'רשת מסעדות',
      rating: 5,
      quote: 'תוצאות מדהימות! האתר החדש הכפיל את כמות ההזמנות שלנו תוך חודשיים.'
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            הלקוחות שלנו מספרים
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            הצצה לסיפורי ההצלחה של הלקוחות שלנו - שמע מהם איך שינינו את העסק שלהם
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video">
                <img 
                  src={testimonial.videoThumbnail} 
                  alt="" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 hover:bg-yellow-300">
                      <Play className="w-8 h-8 text-gray-900 fill-gray-900" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-yellow-400"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400">{testimonial.name}</h3>
                    <p className="text-gray-300 flex items-center gap-2">
                      <span>{testimonial.role}</span>
                      <span className="text-gray-500">|</span>
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {testimonial.company}
                      </span>
                    </p>
                  </div>
                </div>

                <blockquote className="relative">
                  <Quote className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400/20" />
                  <p className="text-gray-300 leading-relaxed relative z-10 pr-6">
                    {testimonial.quote}
                  </p>
                </blockquote>

                <div className="mt-6 pt-6 border-t border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <button className="text-yellow-400 flex items-center gap-2 text-sm hover:text-yellow-300 transition-colors">
                      צפה בסיפור המלא
                      <ArrowLeft className="w-4 h-4 transform -rotate-180" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="#all-testimonials"
            className="inline-flex items-center gap-3 bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            <Smile className="w-6 h-6" />
            <span>צפה בעוד סיפורי הצלחה</span>
            <ArrowLeft className="w-5 h-5 transform -rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;