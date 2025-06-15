import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <header className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white z-50">
        <h1 className="text-2xl font-bold text-[#007D8A]">Sarah Duarte</h1>
        <Button href="https://wa.me/5571999999999">Agende pelo WhatsApp</Button>
      </header>

      <section className="text-center py-20 px-4 bg-[#E6F4F1]">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl md:text-5xl font-semibold text-[#007D8A]">
          Cuidar de você é um ato de amor e coragem.
        </motion.h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Estou aqui para te ajudar a florescer após os 45.
        </p>
        <a href="#sobre" className="mt-8 inline-block bg-[#F47920] text-white px-6 py-3 rounded-2xl shadow hover:bg-orange-600">
          Quero saber mais
        </a>
      </section>

      <section id="sobre" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#007D8A] mb-4">Sobre Mim</h3>
          <p className="text-gray-700 text-lg">
            Sou especialista em acolher mulheres que estão passando pelo climatério, menopausa ou perimenopausa. Minha missão é unir ciência, empatia e cuidado para ajudar você a reencontrar equilíbrio, autoestima e vitalidade — sem dietas malucas, com respeito ao seu corpo.
          </p>
        </div>
      </section>

      <footer className="bg-[#007D8A] text-white text-center py-6">
        <p className="text-sm">Sarah Duarte – Sabedoria e cuidado para a sua melhor fase</p>
      </footer>
    </Layout>
  );
}
