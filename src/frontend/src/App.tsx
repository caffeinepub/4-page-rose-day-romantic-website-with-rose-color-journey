import { useState } from 'react';
import RedRoseScreen from './components/screens/RedRoseScreen';
import BlueRoseScreen from './components/screens/BlueRoseScreen';
import PinkRoseScreen from './components/screens/PinkRoseScreen';
import FinalWishScreen from './components/screens/FinalWishScreen';
import ScreenTransition from './components/ScreenTransition';
import { Button } from './components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const screens = [
    { component: RedRoseScreen, key: 'red' },
    { component: BlueRoseScreen, key: 'blue' },
    { component: PinkRoseScreen, key: 'pink' },
    { component: FinalWishScreen, key: 'final' }
  ];

  const CurrentScreen = screens[currentStep].component;

  const handleNext = () => {
    if (currentStep < screens.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <ScreenTransition key={screens[currentStep].key}>
        <CurrentScreen />
      </ScreenTransition>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        {currentStep > 0 && (
          <Button
            onClick={handlePrevious}
            variant="outline"
            size="lg"
            className="bg-white/90 hover:bg-white backdrop-blur-sm border-2 border-rose-200 text-rose-600 hover:text-rose-700 shadow-xl rounded-full px-6"
          >
            <ChevronLeft className="mr-2 h-5 w-5" />
            Previous
          </Button>
        )}

        {currentStep < screens.length - 1 && (
          <Button
            onClick={handleNext}
            size="lg"
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-xl rounded-full px-8 border-0"
          >
            Next
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Progress Dots */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentStep
                ? 'w-8 bg-gradient-to-r from-rose-500 to-pink-500'
                : 'w-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
