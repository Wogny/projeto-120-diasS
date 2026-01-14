/**
 * Design Philosophy: Energia Dinâmica com Diagonal Cuts
 * - Cortes diagonais criando movimento visual
 * - Vermelho (#D32F2F) como cor primária energética
 * - Cinza escuro (#3A3A3A) para ancoragem
 * - Sobreposição de camadas com transparência
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  X, 
  Dumbbell, 
  Apple, 
  Calculator, 
  Video, 
  FileText, 
  MessageCircle,
  TrendingDown,
  TrendingUp,
  Activity,
  ChevronDown,
  Menu
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleCTA = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o Projeto 120 dias", "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <img 
              src="/images/logo-mc.png" 
              alt="Mateus Casarini" 
              className="h-12 w-auto"
            />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("resultados")} className="text-sm font-medium hover:text-primary transition-colors">
                Resultados
              </button>
              <button onClick={() => scrollToSection("como-funciona")} className="text-sm font-medium hover:text-primary transition-colors">
                Como Funciona
              </button>
              <button onClick={() => scrollToSection("beneficios")} className="text-sm font-medium hover:text-primary transition-colors">
                Benefícios
              </button>
              <Button onClick={handleCTA} size="lg" className="font-bold">
                COMEÇAR AGORA
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection("resultados")} className="text-left py-2 font-medium">
                  Resultados
                </button>
                <button onClick={() => scrollToSection("como-funciona")} className="text-left py-2 font-medium">
                  Como Funciona
                </button>
                <button onClick={() => scrollToSection("beneficios")} className="text-left py-2 font-medium">
                  Benefícios
                </button>
                <Button onClick={handleCTA} size="lg" className="w-full font-bold">
                  COMEÇAR AGORA
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background with diagonal cut */}
        <div 
          className="absolute inset-0 bg-secondary"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-20">
            <img 
              src="/images/hero-fitness.jpg" 
              alt="Fitness" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border-2 border-primary px-4 py-2 rounded-full mb-6">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">Transforme seu corpo em 120 dias!</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Alcance o corpo dos seus{" "}
                <span className="text-primary">sonhos</span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Programa completo de <strong>emagrecimento</strong>, <strong>ganho de massa magra</strong> ou <strong>hipertrofia</strong> personalizado por Mateus Casarini
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleCTA}
                  size="lg" 
                  className="text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  QUERO COMEÇAR AGORA
                </Button>
                <Button 
                  onClick={() => scrollToSection("como-funciona")}
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 font-bold bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-secondary"
                >
                  SAIBA MAIS
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/images/hero-fitness.jpg" 
                alt="Atleta em forma" 
                className="rounded-lg shadow-2xl"
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 90%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection("resultados")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Resultados Section */}
      <section id="resultados" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Resultados Reais
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Transformações em 120 dias
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja os resultados alcançados por pessoas que confiaram no método
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/images/transformation-before-after.jpg" 
                    alt="Transformação" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">-15kg em 120 dias</p>
                    <p className="text-sm">Emagrecimento</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/images/workout-training.jpg" 
                    alt="Treino" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">+8kg de massa magra</p>
                    <p className="text-sm">Ganho de massa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/images/personal-trainer-coaching.jpg" 
                    alt="Personal trainer" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">Hipertrofia avançada</p>
                    <p className="text-sm">Definição muscular</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4 Pilares Section */}
      <section className="py-20 bg-muted relative">
        <div 
          className="absolute top-0 left-0 right-0 h-24 bg-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 50%)",
          }}
        />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Metodologia Completa
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Os 4 Pilares do Projeto 120 dias
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Dumbbell className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Fichas de Treino Personalizadas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Treinos adaptados ao seu objetivo específico e nível de condicionamento. Cada exercício com vídeo demonstrativo, séries, repetições e tempo de descanso.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Apple className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Dieta Individualizada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Plano alimentar completo baseado nas suas preferências, rotina e objetivos. Refeições práticas e saborosas que cabem no seu dia a dia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Calculadora de Gasto Calórico</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ferramenta exclusiva para calcular seu gasto energético e ajustar sua dieta com precisão para maximizar seus resultados.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Suporte Completo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Acompanhamento contínuo via WhatsApp, materiais em vídeo e PDF, e suporte para tirar todas as suas dúvidas durante os 120 dias.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Compare e Veja
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Por que escolher o Projeto 120 dias?
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Outros programas */}
              <Card className="border-2 border-destructive/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Outros Programas</h3>
                  <ul className="space-y-4">
                    {[
                      "Treino genérico para todos",
                      "Dieta padrão sem personalização",
                      "Sem suporte ou acompanhamento",
                      "Materiais básicos ou inexistentes",
                      "Sem ferramentas de controle"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <X className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Projeto 120 dias */}
              <Card className="border-2 border-primary shadow-lg">
                <CardContent className="p-8 bg-primary/5">
                  <h3 className="text-2xl font-bold mb-6 text-center text-primary">Projeto 120 dias</h3>
                  <ul className="space-y-4">
                    {[
                      "Fichas de treino personalizadas",
                      "Dieta individualizada completa",
                      "Suporte via WhatsApp durante 120 dias",
                      "Vídeos, PDFs e materiais exclusivos",
                      "Calculadora de gasto calórico"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Escolha seu objetivo */}
      <section id="beneficios" className="py-20 bg-secondary text-white relative">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Personalize Sua Jornada
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Escolha seu objetivo
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              O Projeto 120 dias se adapta ao seu objetivo específico
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingDown className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Emagrecimento</h3>
                <p className="text-white/80 leading-relaxed">
                  Perca peso de forma saudável e sustentável, mantendo massa muscular e energia
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ganho de Massa</h3>
                <p className="text-white/80 leading-relaxed">
                  Aumente massa magra de qualidade com treino e nutrição otimizados
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Hipertrofia</h3>
                <p className="text-white/80 leading-relaxed">
                  Maximize o crescimento muscular com técnicas avançadas e nutrição precisa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-20 bg-white relative">
        <div 
          className="absolute top-0 left-0 right-0 h-24 bg-secondary"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 100%)",
          }}
        />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Processo Simples
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Como funciona o Projeto 120 dias
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Entre em contato",
                  description: "Clique no botão e fale comigo pelo WhatsApp para conhecer melhor o programa"
                },
                {
                  number: "02",
                  title: "Escolha seu objetivo",
                  description: "Defina se seu foco é emagrecimento, ganho de massa magra ou hipertrofia"
                },
                {
                  number: "03",
                  title: "Receba seu plano personalizado",
                  description: "Em até 48h você recebe suas fichas de treino, dieta e todos os materiais"
                },
                {
                  number: "04",
                  title: "Comece sua transformação",
                  description: "Inicie o programa com suporte completo durante todos os 120 dias"
                }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="bg-primary text-white text-3xl font-black w-20 h-20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={handleCTA}
              size="lg" 
              className="text-lg px-12 py-6 font-bold shadow-lg hover:shadow-xl transition-all"
            >
              QUERO COMEÇAR MINHA TRANSFORMAÇÃO
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Mateus Casarini */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/images/personal-trainer-coaching.jpg" 
                  alt="Mateus Casarini" 
                  className="rounded-lg shadow-xl"
                  style={{
                    clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
                  }}
                />
              </div>
              <div>
                <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
                  Seu Personal Trainer
                </p>
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Mateus Casarini
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Personal trainer com mais de 10 anos de experiência em transformação corporal, especializado em emagrecimento, ganho de massa magra e hipertrofia.
                  </p>
                  <p>
                    Criador do método Projeto 120 dias, já ajudou centenas de pessoas a alcançarem seus objetivos através de um programa completo e personalizado.
                  </p>
                  <p className="font-semibold text-foreground">
                    Certificações: CREF ativo, Especialização em Nutrição Esportiva, Treinamento Funcional e Musculação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
              Perguntas Frequentes
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Tire suas dúvidas
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Quanto tempo dura o programa?",
                answer: "O Projeto 120 dias tem duração de 4 meses (120 dias) com acompanhamento completo durante todo o período."
              },
              {
                question: "Posso escolher meu objetivo?",
                answer: "Sim! O programa é totalmente adaptado ao seu objetivo: emagrecimento, ganho de massa magra ou hipertrofia."
              },
              {
                question: "Como funciona o suporte?",
                answer: "Você terá acesso direto ao Mateus via WhatsApp durante os 120 dias para tirar dúvidas, solicitar ajustes e receber orientações."
              },
              {
                question: "Preciso de equipamentos especiais?",
                answer: "O treino é adaptado aos equipamentos que você tem acesso, seja em academia completa ou treino em casa."
              },
              {
                question: "Como recebo os materiais?",
                answer: "Após a contratação, você recebe em até 48h todas as fichas de treino, dieta, calculadora e materiais em PDF e vídeo."
              },
              {
                question: "A dieta é muito restritiva?",
                answer: "Não! A dieta é personalizada com alimentos que você gosta e que cabem na sua rotina, sem restrições extremas."
              }
            ].map((faq, i) => (
              <Card 
                key={i} 
                className="border-2 hover:border-primary transition-all cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{faq.question}</h3>
                    <ChevronDown 
                      className={`h-5 w-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </div>
                  {openFaq === i && (
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/hero-fitness.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Pronto para transformar seu corpo?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Comece hoje sua jornada de 120 dias rumo ao corpo dos seus sonhos
          </p>
          <Button 
            onClick={handleCTA}
            size="lg" 
            variant="secondary"
            className="text-lg px-12 py-6 font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            FALAR COM MATEUS CASARINI
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="/images/logo-mc.png" 
                alt="Mateus Casarini" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/70">
                Projeto 120 dias - Transforme seu corpo com acompanhamento profissional
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <p className="text-white/70 mb-2">WhatsApp: (11) 99999-9999</p>
              <p className="text-white/70">Email: contato@mateuscasarini.com</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
              <p className="text-white/70 mb-2">Instagram: @mateuscasarini</p>
              <p className="text-white/70">Facebook: /mateuscasarini</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>© 2025 Mateus Casarini - Projeto 120 dias. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
