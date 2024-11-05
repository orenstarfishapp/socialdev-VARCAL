import React, { useState, useEffect } from 'react';
import { CreditCard, Calendar, Lock, BadgeCheck, ArrowLeft, Shield, Clock, Users } from 'lucide-react';

const TrialOfferSection = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(4);
  const [timeLeft, setTimeLeft] = useState('');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
    id: ''
  });
  const [step, setStep] = useState('promo'); // 'promo', 'lead', or 'payment'
  const [leadData, setLeadData] = useState({
    fullName: '',
    address: '',
    phone: ''
  });

  useEffect(() => {
    const targetDate = new Date('2024-11-20T23:59:59');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setTimeLeft('הזמן נגמר');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);

      setTimeLeft(`${days} ימים ${hours} שעות ${minutes} דקות`);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSpotsLeft(prev => Math.max(0, prev - 1));
    alert('תודה על ההרשמה! נציג יצור איתך קשר בהקדם');
  };

  const TimerBanner = () => (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 rounded-xl mb-8 shadow-lg">
      <div className="flex items-center justify-between flex-wrap gap-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg">
          <Clock className="w-5 h-5 text-yellow-400" />
          <span className="font-mono text-lg">
            נותרו: <span className="text-yellow-400 font-bold">{timeLeft}</span>
          </span>
        </div>
        <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg">
          <Users className="w-5 h-5 text-yellow-400" />
          <span className="font-mono text-lg">
            <span className="text-yellow-400 font-bold">{spotsLeft}</span> מקומות אחרונים
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white min-h-screen" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <TimerBanner />
        
        {/* Title Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-yellow-100 opacity-10 rounded-full blur-3xl transform animate-pulse"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-heebo mb-6 relative">
            קידום סושיאל אתר במיוחד בשביל עסקים קטנים
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-heebo">
            עיצוב ופיתוח ממשקים חכמים
          </p>
          <div className="mt-8">
            <ArrowLeft className="mx-auto transform rotate-90 text-yellow-500" size={32} />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Promo Banner */}
          {step === 'promo' && (
            <div className="text-center bg-gradient-to-r from-yellow-500 to-yellow-400 p-8 rounded-2xl shadow-xl text-white">
              <h2 className="text-4xl font-bold mb-3">מבצע מיוחד!</h2>
              <div className="text-6xl font-bold mb-4">₪500</div>
              <p className="text-lg mb-4">התחל את המסע הדיגיטלי שלך במחיר מיוחד</p>
              <button
                onClick={() => setStep('lead')}
                className="bg-white text-yellow-500 font-bold py-4 px-8 rounded-xl text-xl"
              >
                לקבלת ההטבה
              </button>
            </div>
          )}

          {/* Lead Capture Form */}
          {step === 'lead' && (
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                קבל קופון למבצע מיוחד
              </h3>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                setStep('payment'); // Move to payment form after submit
              }} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">שם מלא</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border rounded-lg"
                    onChange={(e) => setLeadData(prev => ({...prev, fullName: e.target.value}))}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">כתובת</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border rounded-lg"
                    onChange={(e) => setLeadData(prev => ({...prev, address: e.target.value}))}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">טלפון</label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 border rounded-lg"
                    onChange={(e) => setLeadData(prev => ({...prev, phone: e.target.value}))}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg"
                >
                  קבל את ההטבה
                </button>
              </form>
            </div>
          )}

          {/* Payment Form */}
          {step === 'payment' && (
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <Lock className="w-6 h-6 text-yellow-500" />
                פרטי תשלום
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-5">
                  <div className="group">
                    <label className="block text-gray-700 mb-2 font-medium">שם בעל הכרטיס</label>
                    <div className="relative transition-all duration-300 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-md">
                      <input
                        type="text"
                        name="cardHolderName"
                        className="w-full p-4 border rounded-lg pr-12 bg-transparent focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                        placeholder="ישראל ישראלי"
                        required
                        onChange={handleInputChange}
                      />
                      <CreditCard className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-gray-700 mb-2 font-medium">מספר תעודת זהות</label>
                    <div className="relative transition-all duration-300 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-md">
                      <input
                        type="text"
                        name="id"
                        className="w-full p-4 border rounded-lg pr-12 bg-transparent focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                        placeholder="000000000"
                        required
                        maxLength={9}
                        onChange={handleInputChange}
                      />
                      <Shield className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-gray-700 mb-2 font-medium">מספר כרטיס אשראי</label>
                    <div className="relative transition-all duration-300 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-md">
                      <input
                        type="text"
                        name="cardNumber"
                        className="w-full p-4 border rounded-lg pr-12 bg-transparent focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                        placeholder="0000 0000 0000 0000"
                        required
                        maxLength={19}
                        onChange={handleInputChange}
                      />
                      <CreditCard className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-gray-700 mb-2 font-medium">תוקף</label>
                      <div className="relative transition-all duration-300 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-md">
                        <input
                          type="text"
                          name="expiryDate"
                          className="w-full p-4 border rounded-lg pr-12 bg-transparent focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                          placeholder="MM/YY"
                          required
                          maxLength={5}
                          onChange={handleInputChange}
                        />
                        <Calendar className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-gray-700 mb-2 font-medium">CVV</label>
                      <div className="relative transition-all duration-300 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-md">
                        <input
                          type="text"
                          name="cvv"
                          className="w-full p-4 border rounded-lg pr-12 bg-transparent focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500"
                          placeholder="000"
                          required
                          maxLength={3}
                          onChange={handleInputChange}
                        />
                        <Lock className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-5 h-5 text-yellow-500" />
                      <span className="font-medium text-gray-700">אבטחה מתקדמת</span>
                    </div>
                    <p className="text-sm text-gray-600">כל הפרטים מוצפנים ומאובטחים בסטנדרט הגבוה ביותר</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-white font-bold py-4 px-6 rounded-xl hover:from-yellow-600 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50"
                    disabled={spotsLeft === 0}
                  >
                    <Lock className="w-5 h-5" />
                    {spotsLeft > 0 ? 'אישור תשלום מאובטח' : 'אזלו המקומות'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Shield, text: "תשלום מאובטח" },
            { icon: BadgeCheck, text: "שירות מהיר ומקצוע" },
            { icon: Lock, text: "הגנת פרטיות מלאה" },
            { icon: Calendar, text: "ביטול בכל עת" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl hover:shadow-md transition-all">
              <div className="bg-yellow-100 p-3 rounded-xl mb-4">
                <item.icon className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-gray-700 font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="space-y-12 mt-16">
          <h2 className="text-4xl font-bold text-yellow-500">היתרונות של שיווק בפייסבוק</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "חשיפה מקסימלית", text: "גישה למיליוני משתמשים פעילים בפייסבוק בישראל" },
              { title: "פילוח מדויק", text: "יכולת להגיע לקהל היעד המדויק לפי מיקום, גיל, תחומי עניין ועוד" },
              { title: "מדידה מדויקת", text: "נתונים מפורטים על ביצועי הקמפיין בזמן אמת" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialOfferSection;