import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Heart, Zap, Shield, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Automação Real",
      description: "Tecnologia que funciona de verdade, sem complicação",
    },
    {
      icon: Heart,
      title: "Atendimento Natural",
      description: "IA que conversa como humano, vende como profissional",
    },
    {
      icon: Shield,
      title: "Integração Total",
      description: "Conecta perfeitamente com seus sistemas existentes",
    },
    {
      icon: Users,
      title: "Suporte Próximo",
      description: "Time dedicado ao seu sucesso",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sobre a HR Labs
          </h1>
          <p className="text-xl text-muted-foreground">
            Transformamos o atendimento de restaurantes com inteligência artificial
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-border">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Nossa Missão</h2>
                  <p className="text-lg text-foreground leading-relaxed">
                    Automatizar o atendimento e os pedidos de restaurantes, transformando o WhatsApp 
                    no principal canal de vendas, 24 horas por dia. Queremos que todo estabelecimento 
                    de alimentação possa vender mais, trabalhar melhor e encantar seus clientes com 
                    tecnologia de ponta acessível.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-muted-foreground">
              O que nos torna únicos no mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Tone */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <CardContent className="p-8 md:p-12 text-center">
              <Lightbulb className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Nossa Forma de Trabalhar</h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Somos profissionais, diretos e confiáveis. Não vendemos promessas impossíveis, 
                entregamos resultados reais. Nossa tecnologia é sofisticada, mas nosso jeito de 
                trabalhar é simples: ouvimos seu negócio, implementamos a solução certa e 
                acompanhamos seus resultados de perto.
              </p>
              <p className="text-lg font-semibold text-primary">
                Profissional. Direto. Confiável.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Tecnologia de Ponta
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Utilizamos inteligência artificial de última geração para criar conversas naturais 
            que realmente convertem. Nossa plataforma se integra com os principais sistemas do 
            mercado e está sempre evoluindo para entregar os melhores resultados.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
