import React, { useState, useEffect } from 'react';
import { 
  Brain, TrendingUp, Droplets, Shield, 
  Quote, Calendar, Clock, ArrowUp,
  Facebook, Instagram, Linkedin, Youtube, Menu, X, ChevronRight, Zap,
  Bot, Building, Globe
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="app-container">
      {/* ПОВНІСТЮ АВТОНОМНІ СТИЛІ */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        
        :root {
          --primary: #10b981;
          --primary-soft: #e1f9f0;
          --slate-900: #0f172a;
          --slate-700: #334155;
          --slate-500: #64748b;
          --slate-100: #f1f5f9;
        }

        * { box-sizing: border-box; }
        body { 
          margin: 0; padding: 0;
          font-family: 'Plus Jakarta Sans', sans-serif; 
          background: #ffffff; color: var(--slate-900);
          line-height: 1.7; overflow-x: hidden;
        }

        /* Типографіка */
        h1, h2, h3 { font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; }
        .serif { font-family: 'Playfair Display', serif; }
        .text-gradient { 
          background: linear-gradient(135deg, var(--primary), #3b82f6);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        /* Навігація */
        nav {
          position: fixed; top: 0; width: 100%; z-index: 1000;
          display: flex; justify-content: space-between; align-items: center;
          padding: 25px 5%; transition: 0.4s ease;
        }
        nav.scrolled {
          background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(15px);
          padding: 15px 5%; border-bottom: 1px solid var(--slate-100);
        }

        /* Секції */
        section { max-width: 1100px; margin: 120px auto; padding: 0 25px; }
        .hero {
          height: 90vh; background: #000; position: relative;
          display: flex; align-items: center; justify-content: center; text-align: center; color: white;
        }
        .hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.5; }

        /* Картки */
        .card {
          background: #fff; border: 1px solid var(--slate-100); padding: 35px;
          border-radius: 30px; transition: 0.4s ease; height: 100%;
        }
        .card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.08); }
        .border-l-primary { border-left: 5px solid var(--primary); background: linear-gradient(to right, var(--primary-soft), white); }
        .border-l-blue { border-left: 5px solid #3b82f6; background: linear-gradient(to right, #eff6ff, white); }
        .border-l-purple { border-left: 5px solid #a855f7; background: linear-gradient(to right, #faf5ff, white); }

        /* Сітки */
        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        @media (max-width: 850px) { .grid-2 { grid-template-columns: 1fr; } }

        /* Кнопки */
        .btn {
          background: var(--primary); color: white; padding: 16px 32px;
          border-radius: 100px; text-decoration: none; font-weight: 700;
          display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer;
        }

        /* Цитати */
        .quote-box {
          background: var(--slate-900); color: white; padding: 80px 40px;
          border-radius: 50px; text-align: center; position: relative; margin: 100px auto;
        }

        /* Галерея вертикальних ферм */
        .farm-gallery { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; border-radius: 40px; overflow: hidden; margin-top: 40px; }
        .farm-gallery img { width: 100%; height: 400px; object-fit: cover; }

        .badge {
          background: var(--primary-soft); color: var(--primary);
          padding: 6px 14px; border-radius: 10px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase;
        }
      `}} />

      <motion.div className="progress-bar" style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: 'var(--primary)', zIndex: 1100, scaleX 
      }} />

      {/* ШАПКА */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <div style={{ fontSize: '1.5rem', fontWeight: 900, color: scrolled ? '#000' : '#fff' }}>
          CYBER<span style={{ color: 'var(--primary)' }}>AGRO</span>
        </div>
        <div style={{ display: 'flex', gap: '30px', fontWeight: 700, fontSize: '0.8rem' }}>
          {['ТЕХНОЛОГІЇ', 'РОБОТИ', 'ВИКЛИКИ'].map(item => (
            <a key={item} href={`#${item}`} style={{ color: scrolled ? 'var(--slate-700)' : '#fff', textDecoration: 'none' }}>{item}</a>
          ))}
        </div>
        <button className="btn" style={{ padding: '10px 20px' }}>UA/EN</button>
      </nav>

      {/* HERO */}
      <header className="hero">
        <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2000" className="hero-img" alt="Background" />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', padding: '0 20px' }}>
          <span style={{ background: 'var(--primary)', padding: '8px 20px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800 }}>UKRAINE 2026</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', margin: '25px 0' }}>Ера Розумних <br/> <span className="text-gradient">Чорноземів</span></h1>
          <p className="serif" style={{ fontSize: '1.4rem', opacity: 0.9, marginBottom: '40px' }}>
            Інтелектуальна еволюція, де ШІ бере на себе роль головного агронома.
          </p>
          <a href="#intro" className="btn">Почати читання <ChevronRight size={20} /></a>
        </div>
      </header>

      <main>
        {/* ВСТУП */}
        <section id="intro" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.5rem', color: 'var(--slate-700)', lineHeight: 1.6 }} className="serif">
            Кібер-агрокультура — це не просто технологічний тренд, а необхідність. Такий підхід гарантує, що врожай базується на точному аналізі даних, а не на виснаженні родючості ґрунту.
          </p>
        </section>

        {/* СТАТИСТИКА */}
        <section className="grid-3">
          {[
            { label: "Економія води", value: "50%", icon: Droplets, color: "#3b82f6" },
            { label: "Ріст врожайності", value: "+30%", icon: TrendingUp, color: "#10b981" },
            { label: "Економія добрив", value: "35%", icon: Zap, color: "#f59e0b" },
          ].map((stat, i) => (
            <div key={i} className="card" style={{ textAlign: 'center' }}>
              <stat.icon size={48} color={stat.color} style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '3rem', margin: '0' }}>{stat.value}</h3>
              <p style={{ color: 'var(--slate-500)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem' }}>{stat.label}</p>
            </div>
          ))}
        </section>

        {/* AI SECTION */}
        <section id="ai-brain" className="grid-2">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
              <div style={{ background: 'linear-gradient(to right, #a855f7, #ec4899)', width: 50, height: 50, borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Brain size={28} />
              </div>
              <h2 style={{ fontSize: '2.5rem' }}>Мозок Ферми: ШІ 🤖</h2>
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--slate-700)', marginBottom: '40px' }}>
              Штучний інтелект діє як центральний "мозковий центр" ферми, забезпечуючи точне землеробство:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="card border-l-purple">
                <h4 style={{ margin: '0 0 10px 0' }}>Прогнозування та Аналіз</h4>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>Датчики та супутники збирають терабайти даних, створюючи детальні карти полів.</p>
              </div>
              <div className="card border-l-blue">
                <h4 style={{ margin: '0 0 10px 0' }}>Управління Ресурсами</h4>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>Економія до 50% води завдяки точному керуванню кожною ділянкою.</p>
              </div>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?q=80&w=1200" style={{ width: '100%', borderRadius: '40px' }} alt="AI" />
        </section>

        {/* QUOTE 1 */}
        <div className="quote-box">
          <Quote size={60} style={{ opacity: 0.2, marginBottom: '20px' }} />
          <h3 className="serif" style={{ fontStyle: 'italic', fontWeight: 400, fontSize: '2rem' }}>
            "Українські стартапи, такі як AgriChain та Agritask, вже впроваджують платформи, що аналізують дані від супутників та дронів."
          </h3>
        </div>

        {/* ROBOTS SECTION */}
        <section id="robots">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ background: '#ffedd5', color: '#f97316', padding: '10px 20px', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '0.8rem', marginBottom: '20px' }}>
              <Bot size={20} /> ПОЛЕ МАЙБУТНЬОГО
            </div>
            <h2 style={{ fontSize: '3.5rem' }}>Роботи та Автоматизація 🦾</h2>
          </div>

          <div style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden', height: '500px', marginBottom: '40px' }}>
            <img src="https://images.unsplash.com/photo-1578061748335-7db881e14247?q=80&w=1200" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Robots" />
            <div style={{ position: 'absolute', bottom: 40, left: 40, right: 40, background: 'rgba(255,255,255,0.9)', padding: '30px', borderRadius: '25px', backdropFilter: 'blur(10px)' }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: '1.2rem' }}>Автономне обладнання працює з високою точністю 24 години на добу</p>
            </div>
          </div>

          <div className="grid-2">
            <div className="card" style={{ background: '#f8fafc' }}>
              <span className="badge">Автономність</span>
              <h4 style={{ fontSize: '1.4rem', margin: '15px 0' }}>Автономне Обладнання</h4>
              <p style={{ color: 'var(--slate-700)' }}>Трактори та комбайни з автопілотом для посіву та збирання врожаю з найвищою точністю.</p>
            </div>
            <div className="card" style={{ background: '#f8fafc' }}>
              <span className="badge" style={{ background: '#dbeafe', color: '#2563eb' }}>Дрони</span>
              <h4 style={{ fontSize: '1.4rem', margin: '15px 0' }}>Дрон-Агрономи</h4>
              <p style={{ color: 'var(--slate-700)' }}>Безпілотники покривають до 40 гектарів за годину, моніторячи стан кожної рослини.</p>
            </div>
          </div>
        </section>

        {/* VERTICAL FARMS */}
        <section id="vertical-farms">
          <div className="grid-2">
            <img src="https://images.unsplash.com/photo-1707909888110-f850d96768b8?q=80&w=800" style={{ width: '100%', borderRadius: '40px' }} alt="Vertical Farm" />
            <div>
              <div style={{ background: '#ecfdf5', color: '#059669', width: 50, height: 50, borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Building size={28} />
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '25px' }}>Вертикальні Ферми: Міська Агрокультура 🏙️</h2>
              <p style={{ color: 'var(--slate-700)', fontSize: '1.1rem' }}>
                Це замкнута екосистема, де контролюються всі параметри. Це гарантує стабільний урожай незалежно від погоди та мінімізує логістичні витрати.
              </p>
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section id="challenges">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Globe size={50} color="var(--primary)" style={{ marginBottom: '20px' }} />
            <h2 style={{ fontSize: '3rem' }}>Виклики та Перспективи 🌍</h2>
          </div>
          <div className="grid-3">
            {[
              { t: "Фінансування", d: "Технології вимагають значних інвестицій для впровадження.", c: "amber" },
              { t: "Цифрова Нерівність", d: "Потрібна доступність стабільного інтернету в усіх регіонах.", c: "blue" },
              { t: "Кадрова Політика", d: "Потреба в агрономах-програмістах та аналітиках даних.", c: "purple" }
            ].map((item, i) => (
              <div key={i} className={`card border-l-${item.c}`}>
                <h4 style={{ fontSize: '1.2rem', margin: '0 0 10px 0' }}>{item.t}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate-700)' }}>{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONCLUSION */}
        <section style={{ marginBottom: '100px' }}>
          <div style={{ background: 'linear-gradient(45deg, #0f172a, #1e293b)', color: 'white', padding: '80px 40px', borderRadius: '50px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Майбутнє Агрокультури Сьогодні</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }} className="serif">
              Поєднання штучного інтелекту, робототехніки та точного землеробства відкриває нові можливості для українських фермерів. Це шлях до продовольчої безпеки світу.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ background: '#050505', color: 'white', padding: '100px 5% 50px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '50px', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>CYBER<span style={{ color: 'var(--primary)' }}>AGRO</span></h3>
            <p style={{ color: '#94a3b8' }}>Проект про інтелектуальну еволюцію українського чорнозему.</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--primary)' }}>Контакти</h4>
            <p style={{ color: '#94a3b8' }}>info@cyberagro.ua<br/>Київ, Україна</p>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <div key={i} style={{ width: 45, height: 45, borderRadius: '12px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', color: '#64748b', fontSize: '0.8rem' }}>
          © 2026 Cyber-Agro Ukraine. Розроблено для майбутнього.
        </div>
      </footer>
    </div>
  );
}