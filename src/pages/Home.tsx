import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Zap, Clock, TrendingUp, Sparkles, MessageSquare } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Atendimento Automático",
      description: "IA natural que conversa e vende como um atendente humano",
    },
    {
      icon: Zap,
      title: "Integração Total",
      description: "Conecta com seu sistema e processa pedidos automaticamente",
    },
    {
      icon: Sparkles,
      title: "Personalização",
      description: "Adapta-se ao seu cardápio, promoções e forma de atender",
    },
    {
      icon: TrendingUp,
      title: "Resultados Reais",
      description: "Mais vendas, menos trabalho manual, clientes satisfeitos",
    },
  ];

  const stats = [
    { value: "80%", label: "Redução no tempo de resposta" },
    { value: "55%", label: "Mais leads convertidos" },
    { value: "24/7", label: "Disponível" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              HR SmartBot
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Transformando conversas<br />em resultados
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Automação inteligente que trabalha por você 24h por dia
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-lg h-14 px-8">
                <Link to="/contact">Quero automatizar meu atendimento</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg h-14 px-8">
                <Link to="/solutions">Ver Planos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-none bg-background">
                <CardContent className="pt-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              HR SmartBot
            </h2>
            <p className="text-xl text-muted-foreground">
              Inteligência artificial que vende por você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto max-w-4xl text-center">
          <Bot className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para automatizar?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Comece hoje e veja seus resultados crescerem
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-8">
            <Link to="/contact">Solicitar Demonstração</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
