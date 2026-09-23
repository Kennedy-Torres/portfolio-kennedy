import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      // O setTimeout garante que o React terminou de desenhar o HTML na tela
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // pequeno atraso de 100 milissegundos para dar tempo do React injetar todo o seu código na tela e, em seguida, simula o comportamento nativo do navegador, rolando suavemente até a seção exata que foi compartilhada
    }
  }, []);



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex flex-col items-center w-full flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}