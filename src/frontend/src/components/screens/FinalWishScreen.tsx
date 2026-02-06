import RomanticLayout from '../RomanticLayout';
import { Card } from '../ui/card';
import { Heart } from 'lucide-react';

export default function FinalWishScreen() {
  return (
    <RomanticLayout overlayOpacity={0.25}>
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        <Card className="max-w-4xl w-full bg-white/85 backdrop-blur-md border-0 shadow-2xl rounded-3xl overflow-hidden">
          <div className="p-8 md:p-16">
            {/* Rose Day Card Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-10">
              <img
                src="/assets/generated/rose-day-card.dim_1600x900.png"
                alt="Rose Day Card"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Message */}
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
                <Heart className="w-10 h-10 text-pink-500 fill-pink-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>

              <h1 className="text-5xl md:text-6xl font-serif text-rose-700 font-bold mb-6">
                Happy Rose Day, bacha🌹
              </h1>

              <div className="space-y-4 text-center">
                <p className="text-2xl md:text-3xl text-pink-600 font-medium">
                  Dear Urvi ji
                </p>
                
                <p className="text-lg md:text-xl text-rose-600/80 font-light italic max-w-2xl mx-auto leading-relaxed">
                  Every color of rose reminds me of the different shades of love I feel for you.
                  You make every day special, but today is just for you. 💕
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 mt-8">
                <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
                <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                <Heart className="w-6 h-6 text-red-400 fill-red-400" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </RomanticLayout>
  );
}
