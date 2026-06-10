import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex flex-col items-center w-full flex-grow">
        <Hero />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}