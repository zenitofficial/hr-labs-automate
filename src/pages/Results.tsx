import { Card, CardContent } from "@/components/ui/card";
import { Clock, TrendingUp, Star, Users, Zap, Target } from "lucide-react";

const Results = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Ganho de Tempo",
      before: "Atendentes ocupados com pedidos repetitivos",
      after: "Equipe focada em qualidade e experiência",
      impact: "80% menos tempo em atendimento básico",
    },
    {
      icon: TrendingUp,
      title: "Mais Vendas",
      before: "Clientes desistem por demora na resposta",
      after: "Respostas instantâneas, vendas automáticas",
      impact: "55% de aumento na conversão",
    },
    {
      icon: Star,
      title: "Experiência Premium",
      before: "Atendimento inconsistente e limitado",
      after: "Padrão de excelência 24 horas por dia",
      impact: "4.8/5 de satisfação média",
    },
  ];

  const metrics = [
    { value: "10min", label: "Tempo médio economizado por pedido" },
    { value: "3x", label: "Mais pedidos processados simultaneamente" },
    { value: "95%", label: "Taxa de conclusão de pedidos" },
    { value: "2h", label: "Tempo médio de implementação" },
  ];

  const testimonials = [
    {
      business: "Pizzaria Bella",
      result: "+120% em vendas noturnas",
      quote: "O bot atende enquanto dormimos. Acordamos com pedidos confirmados.",
      owner: "João Silva",
    },
    {
      business: "Burger Station",
      result: "5x mais pedidos por WhatsApp",
      quote: "Não precisamos mais contratar atendentes. A IA faz tudo melhor.",
      owner: "Maria Santos",
    },
    {
      business: "Sushi Express",
      result: "Zero pedidos perdidos",
      quote: "Antes perdíamos clientes por demora. Agora todos são atendidos na hora.",
      owner: "Carlos Tanaka",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Resultados Comprovados
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como a automação transforma restaurantes em máquinas de vendas
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Antes e Depois
            </h2>
            <p className="text-xl text-muted-foreground">
              A diferença que a automação faz
            </p>
          </div>

          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold">{benefit.title}</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="text-sm font-semibold text-muted-foreground mb-2">ANTES</div>
                          <p className="text-foreground">{benefit.before}</p>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-primary mb-2">DEPOIS</div>
                          <p className="text-foreground">{benefit.after}</p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="inline-flex items-center gap-2 text-primary font-semibold">
                          <Target className="h-5 w-5" />
                          {benefit.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground italic">"{testimonial.quote}"</p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-semibold">{testimonial.business}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.owner}</div>
                    <div className="text-primary font-bold mt-2">{testimonial.result}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for Future Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <Users className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold mb-4">
            Cases de Sucesso Completos
          </h2>
          <p className="text-muted-foreground">
            Em breve: estudos de caso detalhados de transformações reais
          </p>
        </div>
      </section>
    </div>
  );
};

export default Results;
