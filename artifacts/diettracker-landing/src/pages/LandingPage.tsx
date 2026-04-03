import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingDown, Clock, CheckCircle2, ShieldAlert, BarChart3, PackageOpen, Calculator, Apple } from "lucide-react";
import { Link } from "wouter";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-foreground overflow-hidden font-sans selection:bg-primary selection:text-primary-foreground">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
              <Apple size={20} strokeWidth={2.5} />
            </div>
            DietTracker
          </div>
          <Button asChild size="sm" className="font-semibold px-6 shadow-md hover:shadow-lg transition-all" data-testid="button-header-cta">
            <Link href="#pricing">Começar grátis</Link>
          </Button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Nunca mais fure sua dieta
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              A sua dieta falha na <span className="text-primary relative whitespace-nowrap">
                <span className="relative z-10">despensa</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>, <br className="hidden md:block"/> não na força de vontade.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Um sistema de controle logístico brutalmente eficiente para quem treina pesado. Chega de pedir iFood porque esqueceu de comprar frango.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-lg h-14 px-8 font-bold shadow-xl shadow-primary/20" data-testid="button-hero-cta">
                <Link href="#pricing">
                  Começar grátis <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <div className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-primary" /> R$ 9,90/mês após o teste
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PAIN IDENTIFICATION */}
      <section className="py-24 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">O ciclo da falha</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Você calcula os macros, prepara as marmitas, mas no meio da semana a realidade bate à porta.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-xl flex items-center justify-center mb-6">
                <PackageOpen size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Estoque cego</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Você nunca sabe exatamente quanto de arroz ou frango ainda tem na geladeira até a hora de cozinhar.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-orange-500/10 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Furo logístico</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                A comida acaba na quarta-feira à noite. Você está cansado para ir ao mercado. O delivery vence a dieta.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingDown size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Rombo financeiro</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Sem planejamento, você compra picado, paga mais caro no mercado da esquina e gasta o dobro do necessário.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BELIEF BREAKING */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              O problema não é sua disciplina. <br/><span className="text-primary">É a sua organização.</span>
            </h2>
            <p className="text-xl text-muted/80 leading-relaxed font-medium mb-12">
              Bater meta de proteína não é sobre força de vontade, é sobre cadeia de suprimentos. 
              Grandes fábricas não ficam sem matéria-prima, e o seu corpo também não deveria. 
              Trate sua dieta como um negócio.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Três passos para a consistência</h2>
          <p className="text-lg text-muted-foreground font-medium">Um sistema simples, direto e sem firulas.</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-24">
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex font-black text-primary text-6xl opacity-20">01</div>
              <h3 className="text-3xl font-bold">Controle de Estoque de Guerra</h3>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Registre os alimentos base da sua dieta. O app monitora seu consumo diário e deduz automaticamente do seu estoque. Você abre o app e sabe exatamente o que tem na cozinha sem precisar abrir a porta da geladeira.
              </p>
              <ul className="space-y-3 font-semibold text-foreground/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-primary w-5 h-5"/> Cadastro rápido de alimentos</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-primary w-5 h-5"/> Baixa automática diária</li>
              </ul>
            </div>
            <div className="flex-1 w-full bg-card rounded-3xl aspect-[4/3] border border-border shadow-xl relative overflow-hidden flex items-center justify-center p-8">
               <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-border overflow-hidden">
                  <div className="p-4 border-b border-border bg-card/50 font-bold flex justify-between items-center">
                    <span>Estoque Atual</span>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Peito de Frango</span>
                      <span className="font-bold text-primary">2.5 kg</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[70%]"></div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-semibold">Arroz Branco</span>
                      <span className="font-bold text-orange-500">400 g</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full w-[15%]"></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex font-black text-primary text-6xl opacity-20">02</div>
              <h3 className="text-3xl font-bold">Previsão Inteligente</h3>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Não espere a comida acabar para ir ao mercado. O DietTracker calcula seu ritmo de consumo e avisa exatamente em qual dia seu estoque vai zerar.
              </p>
              <ul className="space-y-3 font-semibold text-foreground/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-primary w-5 h-5"/> Alertas prévios de reposição</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-primary w-5 h-5"/> Geração de lista de compras exata</li>
              </ul>
            </div>
            <div className="flex-1 w-full bg-card rounded-3xl aspect-[4/3] border border-border shadow-xl relative overflow-hidden flex items-center justify-center p-8">
               <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-border overflow-hidden">
                  <div className="p-5 flex gap-4 items-start border-l-4 border-destructive bg-destructive/5">
                    <div className="mt-1"><ShieldAlert className="text-destructive w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-foreground">Alerta de Reposição</h4>
                      <p className="text-sm font-medium text-muted-foreground mt-1">Seu estoque de Ovos acaba em 2 dias. Vá ao mercado amanhã.</p>
                    </div>
                  </div>
                  <div className="p-4 flex gap-4 items-start border-l-4 border-primary bg-primary/5 mt-4">
                    <div className="mt-1"><CheckCircle2 className="text-primary w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-foreground">Ritmo Saudável</h4>
                      <p className="text-sm font-medium text-muted-foreground mt-1">Whey Protein suficiente para 24 dias.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex font-black text-primary text-6xl opacity-20">03</div>
              <h3 className="text-3xl font-bold">Raio-X Financeiro</h3>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Descubra o custo real do seu shape. Insira o valor pago nas compras e saiba exatamente quanto sua dieta custa por mês, por semana e por dia.
              </p>
              <ul className="space-y-3 font-semibold text-foreground/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-primary w-5 h-5"/> Custo mensal da dieta calculado</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-primary w-5 h-5"/> Identifique onde você gasta mais</li>
              </ul>
            </div>
            <div className="flex-1 w-full bg-card rounded-3xl aspect-[4/3] border border-border shadow-xl relative overflow-hidden flex items-center justify-center p-8">
               <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-border overflow-hidden">
                  <div className="p-6 text-center border-b border-border bg-card/50">
                    <h4 className="font-semibold text-muted-foreground uppercase tracking-wider text-xs mb-2">Custo Mensal Estimado</h4>
                    <div className="text-4xl font-black text-foreground">R$ 845<span className="text-lg text-muted-foreground">,00</span></div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-semibold text-sm">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        Proteínas
                      </div>
                      <span className="font-bold">R$ 420</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-semibold text-sm">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        Suplementos
                      </div>
                      <span className="font-bold">R$ 310</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-semibold text-sm">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        Carboidratos
                      </div>
                      <span className="font-bold">R$ 115</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* PRICING / CTA */}
      <section id="pricing" className="py-24 bg-card/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-primary/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            
            <div className="text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">O investimento no seu resultado</h2>
              <p className="text-lg text-muted-foreground font-medium mb-8">
                Mais barato que o hambúrguer que você pede quando a dieta falha.
              </p>

              <div className="flex justify-center items-end gap-2 mb-8">
                <span className="text-6xl font-black tracking-tight">R$ 9,90</span>
                <span className="text-xl text-muted-foreground font-bold pb-2">/mês</span>
              </div>

              <ul className="max-w-sm mx-auto space-y-4 text-left mb-10 font-semibold">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-6 h-6 shrink-0"/> Controle de estoque ilimitado</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-6 h-6 shrink-0"/> Alertas preditivos de compras</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-6 h-6 shrink-0"/> Dashboard financeiro da dieta</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-6 h-6 shrink-0"/> Sem fidelidade, cancele quando quiser</li>
              </ul>

              <Button size="lg" className="w-full md:w-auto h-16 px-12 text-xl font-bold shadow-xl shadow-primary/25" data-testid="button-final-cta">
                Começar período grátis de 7 dias
              </Button>
              <p className="mt-4 text-sm font-semibold text-muted-foreground">Não exigimos cartão de crédito no cadastro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 font-bold text-xl tracking-tight mb-6 opacity-80">
            <Apple size={24} strokeWidth={2.5} />
            DietTracker
          </div>
          <p className="text-muted-foreground font-semibold text-sm">
            © {new Date().getFullYear()} DietTracker. Feito para quem leva a sério.
          </p>
        </div>
      </footer>

    </div>
  );
}
