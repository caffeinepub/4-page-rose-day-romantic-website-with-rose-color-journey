import RomanticLayout from '../RomanticLayout';
import { Card } from '../ui/card';

export default function BlueRoseScreen() {
  return (
    <RomanticLayout overlayOpacity={0.2}>
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        <Card className="max-w-4xl w-full bg-white/80 backdrop-blur-md border-0 shadow-2xl rounded-3xl overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Rose Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src="/assets/generated/blue-rose-hero.dim_1600x900.png"
                alt="Blue Rose"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Minimal Text */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-blue-700 font-bold">
                Mystery
              </h2>
              <p className="text-lg md:text-xl text-blue-600/80 font-light italic">
                Rare and precious, just like what we share...
              </p>
            </div>
          </div>
        </Card>
      </div>
    </RomanticLayout>
  );
}
