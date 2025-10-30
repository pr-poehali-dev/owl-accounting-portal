import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-2xl">
              🦉
            </div>
            <span className="font-bold text-xl">Центральная бухгалтерия</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'services', label: 'Услуги' },
              { id: 'about', label: 'О компании' },
              { id: 'clients', label: 'Наши клиенты' },
              { id: 'contacts', label: 'Контакты' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button variant="default" className="hidden md:flex">
            Связаться с нами
          </Button>
        </div>
      </header>

      <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="md:text-6xl leading-tight px-0 text-5xl font-extrabold mx-0">
                Профессиональная бухгалтерия для вашего бизнеса
              </h1>
              <p className="text-xl text-muted-foreground">
                Надёжное бухгалтерское, юридическое и аутсорсинговое обслуживание в Севастополе. 
                Мы заботимся о вашем бизнесе, как мудрая сова — внимательно и точно.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in bg-transparent">
              <img 
                src="https://cdn.poehali.dev/projects/9bd29bfc-b3f5-409c-b828-c3d8d1dd5eb0/files/45f125c8-ba6b-484f-b2f0-635e90def22d.jpg" 
                alt="Сова-маскот компании с калькулятором"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр бухгалтерских и юридических услуг для юридических и физических лиц
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Calculator',
                title: 'Бухгалтерское обслуживание',
                description: 'Ведение бухгалтерского учёта, составление отчётности, налоговое планирование и оптимизация',
                features: ['Ведение учёта', 'Налоговая отчётность', 'Консультации', 'Аудит']
              },
              {
                icon: 'Scale',
                title: 'Юридическое сопровождение',
                description: 'Правовая поддержка бизнеса, составление договоров, регистрация компаний, арбитраж',
                features: ['Регистрация ООО', 'Договоры', 'Судебная защита', 'Консалтинг']
              },
              {
                icon: 'Users',
                title: 'Аутсорсинг персонала',
                description: 'Кадровое делопроизводство, расчёт зарплаты, управление персоналом, HR-консалтинг',
                features: ['Расчёт ЗП', 'Кадровый учёт', 'HR-поддержка', 'Оптимизация']
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-secondary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">О компании</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>ООО "Центральная бухгалтерия"</strong> — это команда профессионалов с многолетним 
                опытом работы в сфере бухгалтерского учёта и юридического консалтинга. Мы базируемся в 
                Севастополе и обслуживаем клиентов по всему региону.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наш маскот — мудрая сова — символизирует внимательность, точность и заботу о каждой 
                детали вашего бизнеса. Мы работаем с компаниями всех размеров — от стартапов до 
                крупных корпораций.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: '500+', label: 'Довольных клиентов' },
                  { number: '15+', label: 'Лет на рынке' },
                  { number: '99%', label: 'Положительных отзывов' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'Shield', title: 'Надёжность', description: 'Защита ваших интересов' },
                { icon: 'Clock', title: 'Оперативность', description: 'Быстрое решение задач' },
                { icon: 'Award', title: 'Качество', description: 'Высокие стандарты работы' },
                { icon: 'HeartHandshake', title: 'Индивидуальный подход', description: 'К каждому клиенту' }
              ].map((item, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon name={item.icon as any} size={24} className="text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Нам доверяют ведущие компании Севастополя
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div 
                key={item}
                className="aspect-video bg-muted rounded-lg flex items-center justify-center hover:bg-muted/70 transition-colors"
              >
                <Icon name="Building2" size={48} className="text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">Свяжитесь с нами</h2>
              <p className="text-lg opacity-90">
                Готовы обсудить ваш проект? Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время.
              </p>
              
              <div className="space-y-4 pt-6">
                {[
                  { icon: 'MapPin', text: 'г. Севастополь, ул. Центральная, д. 1' },
                  { icon: 'Phone', text: '+7 (8692) 55-55-55' },
                  { icon: 'Mail', text: 'info@centralbuh.ru' },
                  { icon: 'Clock', text: 'Пн-Пт: 9:00 - 18:00' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name={contact.icon as any} size={20} className="opacity-90" />
                    <span>{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-background text-foreground">
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Мы ответим вам в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="bg-background" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" className="bg-background" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="bg-background" />
                  </div>
                  <div>
                    <Textarea placeholder="Ваше сообщение" rows={4} className="bg-background" />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t bg-muted/30 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-2xl">
                  🦉
                </div>
                <span className="font-bold">Центральная бухгалтерия</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные бухгалтерские и юридические услуги в Севастополе
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Бухгалтерия</li>
                <li>Юридические услуги</li>
                <li>Аутсорсинг</li>
                <li>Консалтинг</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Наши клиенты</li>
                <li>Контакты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>г. Севастополь</li>
                <li>+7 (8692) 55-55-55</li>
                <li>info@centralbuh.ru</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 ООО "Центральная бухгалтерия". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;