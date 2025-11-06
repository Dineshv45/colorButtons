import { useState } from "react";
import ButtonLayout from "./components/ButtonLayout";
import { Sun, Moon } from "lucide-react"; 

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      
      <div className="flex justify-end p-4 mr-2">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-2 rounded-full shadow-md transition-all duration-300 ${
            isDark
              ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6">
        </h1>
        <ButtonLayout isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
