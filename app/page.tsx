"use client";
export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-500 text-white py-32 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Get Fit. Stay Healthy.</h1>
        <p className="text-xl mb-8">
          Your daily guide to workouts, nutrition, and wellness.
        </p>
        <button
      onClick={() =>
        document.getElementById("daily-tips")?.scrollIntoView({ behavior: "smooth" })
      }
      className="bg-white text-green-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
    >
      Get Started
    </button>
  </section>
            {/* Popular Workouts Section */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Workouts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Workout Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="text-green-500 text-5xl mb-4 text-center">
              🏋️‍♂️
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">Strength Training</h3>
            <p className="text-gray-600 text-center">
              Build muscle and improve overall strength with targeted exercises.
            </p>
          </div>

          {/* Workout Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="text-green-500 text-5xl mb-4 text-center">
              🤸‍♀️
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">Flexibility</h3>
            <p className="text-gray-600 text-center">
              Stretch and improve mobility to reduce injuries and stay active.
            </p>
          </div>

          {/* Workout Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="text-green-500 text-5xl mb-4 text-center">
              🏃‍♂️
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">Cardio</h3>
            <p className="text-gray-600 text-center">
              Boost endurance and heart health with regular cardio exercises.
            </p>
          </div>
        </div>
      </section>
            {/* Daily Tips Section */}
      <section id="daily-tips" className="py-20 px-6 bg-green-50">
        <h2 className="text-4xl font-bold text-center mb-12">Daily Tips</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tip 1 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-center">
            <div className="text-green-500 text-5xl mb-4">💧</div>
            <h3 className="text-2xl font-semibold mb-2">Stay Hydrated</h3>
            <p className="text-gray-600">Drink at least 8 glasses of water daily to keep your body healthy.</p>
          </div>

          {/* Tip 2 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-center">
            <div className="text-green-500 text-5xl mb-4">🥗</div>
            <h3 className="text-2xl font-semibold mb-2">Eat Healthy</h3>
            <p className="text-gray-600">Include fruits, vegetables, and protein in your daily meals.</p>
          </div>

          {/* Tip 3 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-center">
            <div className="text-green-500 text-5xl mb-4">🛌</div>
            <h3 className="text-2xl font-semibold mb-2">Rest Well</h3>
            <p className="text-gray-600">Ensure 7-8 hours of quality sleep every night for recovery.</p>
          </div>
        </div>
      </section>
            {/* Nutrition Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Nutrition Tips</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tip 1 */}
          <div className="bg-green-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center">
            <div className="text-green-500 text-5xl mb-4">🍎</div>
            <h3 className="text-2xl font-semibold mb-2">Eat Fruits Daily</h3>
            <p className="text-gray-600">Include a variety of fruits in your meals for essential vitamins.</p>
          </div>

          {/* Tip 2 */}
          <div className="bg-green-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center">
            <div className="text-green-500 text-5xl mb-4">🥦</div>
            <h3 className="text-2xl font-semibold mb-2">Include Veggies</h3>
            <p className="text-gray-600">Add vegetables to every meal to boost fiber and nutrients.</p>
          </div>

          {/* Tip 3 */}
          <div className="bg-green-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center">
            <div className="text-green-500 text-5xl mb-4">💧</div>
            <h3 className="text-2xl font-semibold mb-2">Hydrate Properly</h3>
            <p className="text-gray-600">Drink plenty of water throughout the day to stay healthy.</p>
          </div>
        </div>
      </section>
      {/* About FitZone Section */}
        <section className="py-20 px-6 bg-green-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="/fitness-about.png" // weka picha yako hapa kwenye public folder
                alt="About FitZone"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">About FitZone</h2>
              <p className="text-gray-700 text-lg">
                FitZone is your ultimate daily guide to fitness, nutrition, and wellness. 
                We provide easy-to-follow workout routines, nutrition tips, and health advice 
                to help you stay active, strong, and healthy every day.
              </p>
            </div>

          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 text-center">
          <p>© 2025 FitZone. All rights reserved.</p>
          <p>Contact: info@fitzone.com</p>
        </footer>


    </main>
  );
}
