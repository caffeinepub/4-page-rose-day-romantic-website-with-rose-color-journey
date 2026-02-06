import RomanticLayout from '../RomanticLayout';
import { Card } from '../ui/card';

export default function RedRoseScreen() {
  return (
    <RomanticLayout overlayOpacity={0.2}>
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        <Card className="max-w-4xl w-full bg-white/80 backdrop-blur-md border-0 shadow-2xl rounded-3xl overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Rose Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src="/assets/generated/red-rose-hero.dim_1600x900.png"
                alt="Red Rose"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Minimal Text */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-rose-700 font-bold">
                Passion
              </h2>
              <p className="text-lg md:text-xl text-rose-600/80 font-light italic">
                Like this red rose, my love burns bright...
              </p>
            </div>
          </div>
        </Card>
      </div>
    </RomanticLayout>
  );
}
