import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  const vpsPlans = [
    {
      name: "Starter VPS",
      price: "$12.50",
      features: [
        "1 vCore CPU",
        "2 GB RAM",
        "20 GB SSD NVMe",
        "250 Mbps network",
        "1 IPv4 address",
      ],
      description: "Great for small websites, testing, or first-time users",
      color: "from-brand-purple to-brand-hotpink",
    },
    {
      name: "Value VPS",
      price: "$16.00",
      features: [
        "1 vCore CPU",
        "2 GB RAM",
        "40 GB SSD NVMe",
        "250 Mbps network",
        "1 IPv4 address",
      ],
      description:
        "A step up for developers and simple apps that need more storage",
      color: "from-brand-hotpink to-brand-aqua",
    },
    {
      name: "Essential VPS",
      price: "$34.00",
      features: [
        "2 vCore CPUs",
        "4 GB RAM",
        "80 GB SSD NVMe",
        "500 Mbps network",
        "1 IPv4 address",
      ],
      description: "Ideal for mid-size projects, CMS sites, or business tools",
      color: "from-brand-aqua to-brand-mint",
      popular: true,
    },
    {
      name: "Comfort VPS",
      price: "$54.00",
      features: [
        "4 vCore CPUs",
        "8 GB RAM",
        "160 GB SSD NVMe",
        "1 Gbps network",
        "1 IPv4 address",
      ],
      description: "Perfect for eCommerce, client websites, and heavy traffic",
      color: "from-brand-mint to-brand-lemon",
    },
    {
      name: "Elite VPS",
      price: "$60.00",
      features: [
        "8 vCore CPUs",
        "up to 32 GB RAM",
        "160–640 GB SSD NVMe",
        "2 Gbps network",
        "1 IPv4 address",
      ],
      description:
        "Designed for agencies, big platforms, or resource-heavy apps",
      color: "from-brand-lemon to-brand-purple",
    },
  ];

  const features = [
    {
      title: "Affordable VPS Server with Premium Specs",
      description:
        "Get high-end resources like NVMe SSD, powerful CPUs, and fast networks — all at a budget-friendly price. No overpaying for unused features.",
      icon: "💰",
    },
    {
      title: "VPS Hosting Cheap but Scalable",
      description:
        "Start with a small plan, then scale RAM, storage, or CPU when you're ready. Growth made simple, not expensive.",
      icon: "📈",
    },
    {
      title: "Full Root Access & OS Control",
      description:
        "Install any Linux or Windows OS. Full admin control for software, security, and custom setups.",
      icon: "🔧",
    },
    {
      title: "Cheap High Performance VPS",
      description:
        "Even our entry plans offer NVMe SSDs, 250+ Mbps bandwidth, and rapid deployment — perfect for performance seekers on a budget.",
      icon: "⚡",
    },
  ];

  const securityFeatures = [
    {
      title: "DDoS Protection",
      description:
        "Every VPS includes automated DDoS filtering to guard against attacks and downtime.",
    },
    {
      title: "Snapshot Backups & Restore",
      description:
        "Safeguard your files with auto-backups and restore anytime with a click.",
    },
    {
      title: "Private Networking Options",
      description:
        "Secure your communications with private IPs, firewalls, and internal routing.",
    },
    {
      title: "99.9% Uptime Guarantee",
      description:
        "Our high-availability infrastructure ensures your site, app, or tools are always reachable.",
    },
  ];

  const performanceFeatures = [
    {
      title: "Blazing-Fast SSD NVMe Storage",
      description:
        "Faster read/write speeds for your apps, websites, or workloads. Load pages in seconds.",
    },
    {
      title: "High Bandwidth (up to 2 Gbps)",
      description:
        "Fast transfer speeds mean no bottlenecks — even during peak traffic times.",
    },
    {
      title: "Ideal for Any Project",
      description:
        "Perfect for web hosting, app development, game servers, trading bots, remote desktops, and more.",
    },
  ];

  const targetUsers = [
    "Developers & Programmers – Build, test, and deploy projects in your own environment",
    "Startups & Businesses – Reliable hosting for websites, SaaS apps, or management tools",
    "Agencies & Freelancers – Host multiple clients and projects on one scalable platform",
    "Students & Learners – Affordable practice space for real-world server experience",
    "Gamers & Streamers – Create private gaming servers or streaming environments",
  ];

  const keyFeatures = [
    "SSD NVMe Drives – Fast, efficient data storage",
    "Root Access – Full control to install and configure as needed",
    "Custom OS Options – Choose Linux, Windows, or your own ISO",
    "Instant Setup – VPS provisioned in minutes",
    "24/7 Support – Friendly help available anytime",
    "Firewall Management – Protect your applications effortlessly",
  ];

  const faqItems = [
    {
      question: "What makes this the cheapest VPS?",
      answer:
        "Our entry plan starts as low as $9.50/month, offering unbeatable pricing without cutting corners on quality.",
    },
    {
      question: "Can I upgrade my VPS later?",
      answer:
        "Yes! All plans are fully scalable. Just choose what you need now and expand anytime.",
    },
    {
      question: "Is this a shared server?",
      answer:
        "No, all VPS hosting plans provide isolated virtual environments. You get full CPU and RAM allocation.",
    },
    {
      question: "Do you offer support?",
      answer:
        "Absolutely. Our technical team is available 24/7 for any questions or assistance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Cheap VPS Hosting – Fast, Flexible & Forever Affordable
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
            Searching for the cheapest VPS server without cutting corners on
            performance? Welcome to a world of VPS cheap hosting where speed,
            security, and control come standard — all at a budget-friendly
            price.
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Whether you're a developer, business owner, or startup founder, our
            VPS plans offer premium value with low monthly costs, full root
            access, and blazing SSD speeds. Start your VPS journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-purple hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <a
                href="https://arzhost.com/vps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Choose a VPS Plan Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-purple font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <a href="#plans">View Pricing</a>
            </Button>
          </div>
        </div>
      </section>

      {/* VPS Plans Section */}
      <section id="plans" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              VPS Plans – Smart Pricing That Scales with You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the best value VPS hosting that fits your budget and goals.
              Each plan is customizable, powerful, and cost-efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {vpsPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  plan.popular ? "ring-2 ring-brand-aqua" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-aqua to-brand-mint text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader
                  className={`bg-gradient-to-r ${plan.color} text-white ${plan.popular ? "pt-12" : "pt-6"}`}
                >
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-lg font-normal">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold`}
                  >
                    <a
                      href="https://arzhost.com/vps/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started with {plan.name}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our VPS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our VPS?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-brand-purple to-brand-hotpink hover:from-brand-hotpink hover:to-brand-aqua text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <a
                href="https://arzhost.com/vps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try a VPS Built for You
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Secure, Stable & Always Online
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-aqua hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <a
                href="https://arzhost.com/vps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Secure Your VPS Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Global-Ready Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {performanceFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-brand-aqua to-brand-mint hover:from-brand-mint hover:to-brand-lemon text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <a
                href="https://arzhost.com/vps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy a High-Speed VPS
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who Is This Perfect For?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetUsers.map((user, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-brand-purple to-brand-hotpink rounded-full"></div>
                  <p className="text-gray-700 font-medium">{user}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-brand-purple to-brand-hotpink hover:from-brand-hotpink hover:to-brand-aqua text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <a
                href="https://arzhost.com/vps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find Your Perfect VPS Fit
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Features in Every VPS Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-brand-aqua"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-brand-aqua text-brand-aqua hover:bg-brand-aqua hover:text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <a
                href="https://arzhost.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Full Feature List
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <a
                href="https://arzhost.com/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Still Have Questions? Let's Talk
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Budget VPS Hosting That Performs?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Choose a very cheap VPS that feels premium. No hidden fees. No
            complicated contracts. Just fast, secure, and scalable hosting at a
            price you'll love.
          </p>
          <div className="space-y-4">
            <p className="text-lg text-white/80 font-semibold">
              One-Click VPS Deployment Starts Now
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-purple hover:bg-gray-100 font-bold text-xl px-12 py-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <a
                href="https://arzhost.com/vps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Your VPS Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
