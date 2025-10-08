import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, ShoppingCart, CreditCard, CheckCircle, Truck } from "lucide-react";

const Solutions = () => {
  const plans = [
    {
      name: "Launch",
      description: "Para começar com automação",
      price: "R$ 497",
      features: [
        "Até 500 conversas/mês",
        "Integração WhatsApp",
        "Cardápio digital",
        "Respostas automáticas",
        "Suporte por email",
      ],
    },
    {
      name: "Scale",
      description: "Para crescer com confiança",
      price: "R$ 997",
      featured: true,
      features: [
        "Até 2.000 conversas/mês",
        "Tudo do Launch +",
        "Integração com sistema",
        "Pagamento online",
        "Relatórios avançados",
        "Suporte prioritário",
      ],
    },
    {
      name: "Power",
      description: "Para dominar o mercado",
      price: "R$ 1.997",
      features: [
        "Conversas ilimitadas",
        "Tudo do Scale +",
        "Multi-loja",
        "API customizada",
        "Gerente de conta",
        "Treinamento personalizado",
      ],
    },
    {
      name: "Legacy",
      description: "Solução sob medida",
      price: "Consulte",
      features: [
        "Desenvolvimento exclusivo",
        "Integração completa",
        "White label disponível",
        "SLA garantido",
        "Suporte 24/7",
        "Consultoria estratégica",
      ],
    },
  ];

  const workflow = [
    { icon: ShoppingCart, title: "Pedido", description: "Cliente faz pedido via WhatsApp" },
    { icon: CheckCircle, title: "Escolha", description: "Seleciona itens do cardápio" },
    { icon: CreditCard, title: "Pagamento", description: "Pagamento automático" },
    { icon: CheckCircle, title: "Confirmação", description: "Pedido confirmado" },
    { icon: Truck, title: "Envio", description: "Direto para cozinha/entrega" },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Escolha seu plano
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de automação para cada fase do seu negócio
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.featured
                    ? "border-primary shadow-xl scale-105"
                    : "border-border"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Consulte" && (
                      <span className="text-muted-foreground">/mês</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant={plan.featured ? "default" : "outline"}
                    className="w-full"
                  >
                    <Link to="/contact">
                      Solicitar Demonstração
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Como funciona
            </h2>
            <p className="text-xl text-muted-foreground">
              Do pedido à entrega, tudo automatizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < workflow.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Não encontrou o plano ideal?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Entre em contato e montaremos uma solução personalizada para seu negócio
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Falar com Especialista</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
