import { Header } from './components/Header';
import { Hero } from './sections/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex flex-col items-center w-full">
        <Hero />
        
        {/* futura seção de projetos */}
        <div id="projetos" className="w-full py-20 bg-white text-center">
           <h3 className="text-3xl font-bold text-gray-800">Meus Projetos (Em breve)</h3>
        </div>
      </main>
    </div>
  );
}