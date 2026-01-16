import { ImageWithFallback } from './figma/ImageWithFallback';
import { QuoteBox } from './QuoteBox';
import { InteractiveStatsCard } from './InteractiveStatsCard';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Brain, Bot, Building, Globe } from 'lucide-react';
import { motion } from 'motion/react';

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

        {/* Interactive Stats */}
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
            <h2 className="text-3xl text-gray-800">Мозок Ферми: ШІ для Точних Рішень 🤖</h2>
          </motion.div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Штучний інтелект діє як центральний "мозковий центр" ферми, забезпечуючи точне землеробство:
          </p>

          <div className="grid gap-6 mb-8">
            {[
              {
                title: 'Прогнозування та Аналіз',
                description: 'Датчики, дрони та супутники збирають терабайти даних. ШІ-системи обробляють їх, створюючи детальні карти полів.',
                color: 'purple'
              },
              {
                title: 'Управління Ресурсами',
                description: 'ШІ-алгоритми точно керують потребами кожної ділянки. Результат — економія до 50% води та до 30% добрив.',
                color: 'blue'
              },
              {
                title: 'Боротьба з Шкідниками',
                description: 'Камери на дронах розпізнають хвороби та шкідників, дозволяючи точково захищати рослини.',
                color: 'emerald'
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
                <Card className={`p-6 border-l-4 border-l-${item.color}-500 bg-gradient-to-r from-${item.color}-50 to-white hover:shadow-lg transition-all duration-300`}>
                  <h3 className={`text-xl mb-3 text-${item.color}-700`}>{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quote about Ukrainian startups */}
        <QuoteBox text="Українські стартапи, такі як AgriChain та Agritask, вже впроваджують платформи, що аналізують дані від супутників, дронів та наземних датчиків. Ці системи створюють детальні карти полів та прогнозують урожайність." />

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
            <h2 className="text-3xl text-gray-800">Поле Майбутнього: Роботи та Автоматизація 🦾</h2>
          </motion.div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Фізичні завдання в аграрному секторі передаються роботам, які працюють 24/7:
          </p>

          {/* Robot Image */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1578061748335-7db881e14247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjByb2JvdHMlMjBmYXJtaW5nJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NTkxNTc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Agricultural robots working in modern farming operations"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-lg">
                  Автономне обладнання працює з високою точністю 24 години на добу
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 mb-8">
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
              <Badge className="bg-orange-100 text-orange-700 px-3 py-1">Автономність</Badge>
              <div>
                <h3 className="text-lg mb-2 text-gray-800">Автономне Обладнання</h3>
                <p className="text-gray-700">
                  Великі агрохолдинги України вже покладаються на трактори та комбайни з автопілотом 
                  для посіву та збирання врожаю з найвищою точністю.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
              <Badge className="bg-blue-100 text-blue-700 px-3 py-1">Дрони</Badge>
              <div>
                <h3 className="text-lg mb-2 text-gray-800">Дрон-Агрономи</h3>
                <p className="text-gray-700">
                  Безпілотні літальні апарати можуть моніторити поля та виконувати критично важливі функції.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote about drone efficiency */}
        <QuoteBox text="Дрони можуть покрити до 40 гектарів землі за годину, що значно більше, ніж традиційні методи. Це забезпечує ефективність у боротьбі з втратами." />

        {/* Vertical Farms Section */}
        <section id="vertical-farms" className="mb-16">
          <motion.div 
            className="flex items-left gap-3 mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-left justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl text-gray-800">Вертикальні Ферми: Агрокультура в Містах 🏙️</h2>
          </motion.div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Кібер-агрокультура відкрила шлях для міської та вертикальної агрокультури. Перші вертикальні ферми 
            вже з'являються у великих містах України. Це замкнута екосистема, де контролюються всі параметри, 
            що гарантує стабільний урожай незалежно від погоди, сприяє продовольчій безпеці та мінімізує логістичні витрати.
          </p>
          
          <div className="mb-8">
            <div className="flex gap-4 rounded-2xl overflow-hidden shadow-xl">
               <div className="relative w-2/4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1707909888110-f850d96768b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJ0aWNhbCUyMGZhcm1pbmclMjB1cmJhbiUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1OTE1Nzg4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="First vertical farming image"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="relative w-2/4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1707909888110-f850d96768b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJ0aWNhbCUyMGZhcm1pbmclMjB1cmJhbiUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1OTE1Nzg4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Second vertical farming image"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-lg">
                  Вертикальні ферми забезпечують контрольовані умови росту цілий рік
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section id="challenges" className="mb-16">
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl text-gray-800">Виклики та Перспективи для України 🌍</h2>
          </motion.div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Просування кібер-агрокультури пов'язане з певними викликами:
          </p>

          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-50 to-white">
              <h3 className="text-xl mb-3 text-amber-700">Доступ до Фінансування</h3>
              <p className="text-gray-700">
                Технології вимагають значних інвестицій для впровадження та підтримки.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-white">
              <h3 className="text-xl mb-3 text-blue-700">Цифрова Нерівність</h3>
              <p className="text-gray-700">
                Потрібна доступність стабільного інтернету в усіх регіонах України.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-white">
              <h3 className="text-xl mb-3 text-purple-700">Кадрова Політика</h3>
              <p className="text-gray-700">
                Потреба в нових фахівцях — агрономах-програмістах та аналітиках даних.
              </p>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <motion.section 
          className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1564584812691-eab58e10a7f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHdoZWF0JTIwZmllbGQlMjBzdW5zZXR8ZW58MXx8fHwxNzU5OTM0NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Ukrainian agriculture field at sunset"
              className="w-full h-full object-cover"
            />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-black/80" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 px-8 py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
            
              
              <h3 className="text-4xl mb-8 text-white drop-shadow-lg">
                Майбутнє Агрокультури Сьогодні
              </h3>
              
              <div className="max-w-2xl mx-auto">
                <p className="text-xl text-white/95 leading-relaxed backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 shadow-2xl">
                  Кібер-агрокультура в Україні — це не просто технологічний тренд, а необхідність для забезпечення 
                  продовольчої безпеки та сталого розвитку. Поєднання штучного інтелекту, робототехніки та 
                  точного землеробства відкриває нові можливості для українських фермерів.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </article>
  );
}