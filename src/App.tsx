import React from 'react';
import { Brain, Bot, Building, Globe } from 'lucide-react';
import { motion } from 'framer-motion'; 



const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-xl border bg-white shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${className}`}>
    {children}
  </span>
);

const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <img 
    src={src} 
    alt={alt} 
    className={className} 
    onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000'; }} 
  />
);

const QuoteBox = ({ text }: { text: string }) => (
  <div className="my-12 border-l-4 border-black pl-6">
    <p className="text-2xl italic text-gray-700 leading-relaxed">"{text}"</p>
  </div>
);

const InteractiveStatsCard = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
    {[
      { label: 'Економія води', value: '50%', color: 'text-blue-600' },
      { label: 'Економія добрив', value: '30%', color: 'text-green-600' },
      { label: 'Ефективність', value: '24/7', color: 'text-purple-600' },
    ].map((stat, i) => (
      <Card key={i} className="p-6 border-none bg-gray-50 text-center">
        <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
        <div className="text-gray-600 font-medium">{stat.label}</div>
      </Card>
    ))}
  </div>
);



export function BlogContent() {
  return (
    <article className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl leading-relaxed text-gray-700 mb-8">
            Кібер-агрокультура — це інтелектуальна еволюція, де штучний інтелект (ШІ) бере на себе роль головного агронома, 
            а робототехніка замінює ручну працю. Такий підхід гарантує, що врожай базується на точному аналізі даних, 
            а не на виснаженні родючості ґрунту.
          </p>
        </div>

        <InteractiveStatsCard />

        {/* AI Brain Section */}
        <section id="ai-brain" className="mb-16">
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Мозок Ферми: ШІ для Точних Рішень 🤖</h2>
          </motion.div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Штучний інтелект діє як центральний "мозковий центр" ферми, забезпечуючи точне землеробство:
          </p>

          <div className="grid gap-6 mb-8">
            {[
              {
                title: 'Прогнозування та Аналіз',
                description: 'Датчики, дрони та супутники збирають терабайти даних. ШІ-системи обробляють їх, створюючи детальні карти полів.',
                borderColor: 'border-l-purple-500',
                bgColor: 'from-purple-50',
                textColor: 'text-purple-700'
              },
              {
                title: 'Управління Ресурсами',
                description: 'ШІ-алгоритми точно керують потребами кожної ділянки. Результат — економія до 50% води та до 30% добрив.',
                borderColor: 'border-l-blue-500',
                bgColor: 'from-blue-50',
                textColor: 'text-blue-700'
              },
              {
                title: 'Боротьба з Шкідниками',
                description: 'Камери на дронах розпізнають хвороби та шкідників, дозволяючи точково захищати рослини.',
                borderColor: 'border-l-emerald-500',
                bgColor: 'from-emerald-50',
                textColor: 'text-emerald-700'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className={`p-6 border-l-4 ${item.borderColor} bg-gradient-to-r ${item.bgColor} to-white hover:shadow-lg transition-all duration-300`}>
                  <h3 className={`text-xl font-bold mb-3 ${item.textColor}`}>{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <QuoteBox text="Українські стартапи, такі як AgriChain та Agritask, вже впроваджують платформи, що аналізують дані від супутників, дронів та наземних датчиків." />

        {/* Robots Section */}
        <section id="robots" className="mb-16">
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Поле Майбутнього: Роботи 🦾</h2>
          </motion.div>

          <motion.div 
            className="mb-10 relative rounded-2xl overflow-hidden shadow-xl group"
            whileHover={{ scale: 1.01 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1578061748335-7db881e14247?auto=format&fit=crop&q=80&w=1080"
              alt="Agricultural robots"
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-lg font-medium">Автономне обладнання працює з високою точністю 24/7</p>
            </div>
          </motion.div>

          <div className="grid gap-6 mb-8">
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
              <Badge className="bg-orange-100 text-orange-700 px-3 py-1">Автономність</Badge>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Автономне Обладнання</h3>
                <p className="text-gray-700">Великі агрохолдинги України вже покладаються на трактори з автопілотом.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vertical Farms */}
        <section id="vertical-farms" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Вертикальні Ферми 🏙️</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
             <ImageWithFallback src="https://images.unsplash.com/photo-1707909888110-f850d96768b8?auto=format&fit=crop&q=80&w=600" alt="Farm 1" className="rounded-xl h-64 w-full object-cover" />
             <ImageWithFallback src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=600" alt="Farm 2" className="rounded-xl h-64 w-full object-cover" />
          </div>
        </section>

        {/* Conclusion */}
        <motion.section 
          className="relative rounded-3xl overflow-hidden bg-gray-900 text-white p-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">Майбутнє Агрокультури Сьогодні</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Кібер-агрокультура в Україні — це не просто технологічний тренд, а необхідність для забезпечення продовольчої безпеки.
            </p>
          </div>
        </motion.section>
      </div>
    </article>
  );
}