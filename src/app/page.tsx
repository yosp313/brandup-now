"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Globe,
  PencilRulerIcon,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const userEmail = formData.get("email") as string;

    const response = await fetch("/api//insert-email", {
      method: "POST",
      body: JSON.stringify({ email: userEmail }),
    });

    const data = await response.json();

    setMsg(data.message);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-cream/20">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Brand Up Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-brand-green">Brand Up</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-brand-green transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-brand-green transition-colors"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-brand-green transition-colors"
            >
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-4">
            {/* <Button variant="ghost" className="text-sm"> */}
            {/*   Sign In */}
            {/* </Button> */}
            {/* <Button */}
            {/*   variant="default" */}
            {/*   className="text-sm bg-brand-green text-white hover:bg-brand-green/90" */}
            {/* > */}
            {/*   Get Started */}
            {/* </Button> */}
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <section className="relative bg-gradient-to-b from-brand-green to-brand-green/90 py-24 lg:py-32">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4F7363_1px,transparent_1px),linear-gradient(to_bottom,#4F7363_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10" />
          <div className="container relative px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="animate-fade-up">
                <div className="inline-flex items-center rounded-full border border-brand-cream/20 bg-white/5 px-3 py-1 text-sm text-brand-cream backdrop-blur-xl mb-6">
                  <span className="px-2">New Feature</span>
                  <span className="border-l border-brand-cream/20 pl-2 pr-1">
                    AI-Powered Brand Analytics
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                  Scale Your Brand with Confidence
                </h1>
                <p className="text-lg md:text-xl text-brand-cream/90 max-w-2xl mx-auto">
                  The intelligent platform that helps ambitious brands grow
                  faster through data-driven insights and automated strategies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-200">
                <Link href="#email_submit">
                  <Button
                    size="lg"
                    className="bg-brand-cream text-brand-green hover:bg-brand-cream/90 font-medium"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  className="bg-brand-cream text-brand-green hover:bg-brand-cream/90 font-medium"
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 bg-brand-cream/10">
          <div className="container px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-brand-green mb-4">
                Everything You Need to Scale
              </h2>
              <p className="text-muted-foreground text-lg">
                Powerful tools and insights to help your brand reach its full
                potential
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl bg-white p-8 transition-all hover:shadow-lg animate-fade-up delay-${i + 1
                    }00`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="mb-5 inline-flex items-center justify-center rounded-lg bg-brand-green/10 p-3 text-brand-green">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-brand-green mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 bg-brand-cream/5">
          <div className="container px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-brand-green mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-muted-foreground text-lg">
                Choose the perfect plan for your brand&apos;s growth journey
              </p>
            </div>
            <div className="flex items-center justify-center gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col p-8 rounded-2xl bg-white transition-all ${plan.recommended
                      ? "ring-2 ring-brand-green shadow-lg scale-105 md:scale-110"
                      : "hover:shadow-md"
                    }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-green text-white text-sm rounded-full">
                      Recommended
                    </div>
                  )}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-brand-green mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <svg
                          className={`w-5 h-5 ${plan.recommended
                              ? "text-brand-green"
                              : "text-muted-foreground"
                            }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="#email_submit">
                    <Button
                      className={plan.recommended
                        ? "bg-brand-cream text-brand-green hover:bg-brand-cream/90 w-full"
                        : "bg-brand-green/5 text-brand-green hover:bg-brand-green/10 w-full"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="email_submit"
          className="py-24 bg-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4F7363_1px,transparent_1px),linear-gradient(to_bottom,#4F7363_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-5" />
          <div className="container px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-brand-green">
                    Transform Your Brand&apos;s Growth
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Join thousands of successful brands using Brand Up to scale
                    their business and reach new markets.
                  </p>
                  <div className="space-y-4 max-w-md">
                    <form
                      className="p-6 bg-brand-cream/10 rounded-2xl border border-brand-cream/20"
                      onSubmit={onSubmit}
                    >
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your work email"
                        className="mb-3 bg-white border-brand-cream/20"
                        required
                      />
                      <Button
                        className="w-full bg-brand-green text-white hover:bg-brand-green/90"
                        type="submit"
                      >
                        Start Free Trial
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mt-3">
                        14-day free trial · No credit card required
                      </p>

                      {msg && (
                        <p className="text-xs text-center text-red-500 mt-3">
                          {msg}
                        </p>
                      )}
                    </form>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-cream to-brand-green/30 rounded-2xl blur-2xl opacity-30" />
                  <Image
                    src="/Banner.jpeg"
                    alt="Dashboard Preview"
                    width={600}
                    height={400}
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-brand-cream/10 border-brand-cream/20">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/Logo.png"
                alt="Brand Up Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-brand-green font-semibold">Brand Up</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <Link
                href="#"
                className="hover:text-brand-green transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="hover:text-brand-green transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="hover:text-brand-green transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Custom Website",
    description: "Get Custom Website Designs and Build Your Brand's Website",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Graphic Design",
    description: "Get Custom Graphic Designs For Your Products or Brand",
    icon: <PencilRulerIcon className="w-6 h-6" />,
  },
  {
    title: "Market Targeting",
    description:
      "Identify and reach your ideal customers with precision targeting capabilities.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Archetictural Design",
    description:
      "We will help you create a unique and attractive design for your coming-up store or even booth",
    icon: <Building2 className="w-6 h-6" />,
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Free for now",
    description: "Ideal for growing brands and businesses",
    features: [
      "Custom Website",
      "5 team members working on your brand",
      "Unlimited Campaigns",
      "Priority Support",
      "Custom Reports",
      "Design for your store/booth",
      "Designs for your products",
      "Custom Logo",
    ],
    recommended: true,
  },
];
