'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef } from 'react';

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

// Section 1: The Future of Pharmacist Scams
const HeroScroll: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    return (
        <motion.section
            style={{ scale, opacity }}
            className="relative font-semibold min-h-screen bg-gradient-to-b from-[#e8e8e8] to-[#d0d0d0] flex flex-col items-center justify-center text-black px-4"
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            <div className="relative z-10 text-center max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                    The Future of{' '}
                    <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                        Pharmacist Scams
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                    Keep Scrolling 👇 <span className="text-gray-400">(si tu oses)</span>
                </p>

                {/* Bouncing Arrow - 90s style */}
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-6xl"
                >
                    ⬇️
                </motion.div>
            </div>
        </motion.section>
    );
};

// Section 2: The Roast Introduction
const RoastIntro: React.FC = () => {
    return (
        <section
            className="relative min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white flex items-center justify-center px-4 py-20"
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
                >
                    <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                        <span className="text-2xl md:text-3xl font-bold text-white block mb-4">
                            🎭 L&apos;histoire vraie...
                        </span>
                        Ton pote pharmacien, ce <span className="text-yellow-400 font-bold">génie autoproclamé</span> qui passe ses journées à compter des pilules, a décidé de révolutionner le monde avec...
                        <span className="block my-4 text-2xl md:text-3xl text-center animate-pulse">🥁 roulement de tambour 🥁</span>
                        ...des <span className="text-green-400 font-bold">huiles essentielles à la menthe et à la caféine</span> !
                        Parce que, visiblement, mâcher un chewing-gum à la menthe tout en buvant un café n&apos;était pas assez innovant.
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed text-gray-300 mt-6">
                        Non, il fallait en faire une <span className="italic">&quot;marque&quot;</span> appelée <span className="text-cyan-400 font-black text-2xl">Pulsee</span>.
                        Pulsee ? Sérieux ? Ça sonne comme un mélange entre &quot;pulsar&quot; et &quot;poussière&quot;.
                        Ou peut-être &quot;pulse&quot; comme dans <span className="text-red-400">&quot;mon pouls s&apos;accélère parce que j&apos;ai abusé de caféine&quot;</span>.
                    </p>

                    <motion.p
                        className="text-center text-2xl mt-10 text-yellow-300 font-bold"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Mais attends, c&apos;est pas fini. Descends pour voir à quel point c&apos;est ridicule. 👇
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

// Section 3: Images That Don't Make Any Sense
const ImagesSection: React.FC = () => {
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1717893777838-4e222311630b?w=600&auto=format&fit=crop',
            title: '🏚️ Balcon d\'appart pourri',
            caption: 'Comme Pulsee : ça a l\'air frais de loin (menthe !), mais de près, c\'est juste un truc banal qui te donne envie de sauter (à cause de la caféine overdose ?).'
        },
        {
            url: 'https://images.unsplash.com/photo-1717618389115-88db6d7d8f77?w=600&auto=format&fit=crop',
            title: '🪵 Barre en bois qui penche',
            caption: 'Représente la stabilité de cette marque. Ton pote a mélangé menthe et caféine ? Bravo, Sherlock, t\'as inventé le thé à la menthe avec un espresso shot.'
        },
        {
            url: 'https://images.unsplash.com/photo-1717588604557-55b2888f59a6?w=600&auto=format&fit=crop',
            title: '🏛️ Arche antique avec gribouillis',
            caption: 'Ancienne comme l\'idée derrière Pulsee. Les Égyptiens faisaient déjà des huiles essentielles, mais eux au moins n\'essayaient pas de te vendre ça comme "le futur".'
        },
        {
            url: 'https://images.unsplash.com/photo-1713417338603-1b6b72fcade2?w=600&auto=format&fit=crop',
            title: '🏗️ Bâtiment tordu',
            caption: 'Comme ton estomac après avoir testé Pulsee. Menthe pour rafraîchir, caféine pour speeder... Résultat ? Tu vas pulser aux toilettes plus vite que la lumière.'
        }
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-4">
                        Images That <span className="line-through text-gray-500">Don&apos;t</span>{' '}
                        <span className="text-red-500">Doesn&apos;t</span> Make Any Sense
                    </h2>
                    <p className="text-xl text-gray-400">
                        (Et qui représentent parfaitement ce produit) 🤡
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">{img.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{img.caption}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center text-xl text-gray-400 mt-12 max-w-3xl mx-auto"
                >
                    <span className="text-2xl">🤔</span> Pourquoi ces images ? Parce que <span className="text-cyan-400 font-bold">Pulsee ne fait aucun sens non plus</span> !
                    C&apos;est comme si ton pharmacien avait sniffé ses propres huiles et décidé :
                    <span className="italic text-yellow-300">&quot;Hey, et si je vendais du Red Bull aromatisé à la menthe poivrée ?&quot;</span>
                </motion.p>
            </div>
        </section>
    );
};

// Section 4: What is Pulsee Really?
const WhatIsPulsee: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#10b981] via-[#6b7280] to-[#78350f] py-20 px-4">
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-black text-center text-white mb-12">
                        🔮 La Grande Révélation 🔮
                        <span className="block text-2xl md:text-3xl mt-4 font-normal text-white/80">
                            Qu&apos;est-ce que Pulsee, <em>vraiment</em> ?
                        </span>
                    </h2>

                    <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
                        <p className="text-lg md:text-xl leading-relaxed text-white/90 italic">
                            <span className="text-3xl not-italic">☀️</span> Imagine : tu te lèves le matin, fatigué après une nuit blanche sur TikTok.
                            Au lieu de boire un café normal comme un humain lambda, tu verses quelques gouttes de <span className="text-cyan-300 font-bold not-italic">Pulsee</span> dans ton eau.
                        </p>

                        <motion.p
                            className="text-3xl md:text-4xl text-center my-8 font-black text-yellow-300"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                        >
                            💥 BOOM ! 💥
                        </motion.p>

                        <p className="text-lg md:text-xl leading-relaxed text-white/90 italic">
                            La menthe te rafraîchit l&apos;haleine <span className="not-italic">(parce que clairement, c&apos;était ton plus gros problème 🙄)</span>,
                            et la caféine te donne un coup de fouet. Résultat ?
                        </p>

                        <p className="text-xl md:text-2xl text-center my-6 font-bold text-red-400">
                            Tu pulses... littéralement. 💓💓💓
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed text-white/90 italic">
                            Ton cœur bat la chamade, tes mains tremblent, et tu sens la menthe remonter par les narines.
                            <span className="not-italic text-green-300"> Génial, non ? 😅</span>
                        </p>

                        <div className="mt-10 p-6 bg-red-900/50 rounded-xl border border-red-500/50">
                            <h3 className="text-xl font-bold text-red-300 mb-4">⚠️ Side Effects (qu&apos;il ne te dira jamais) :</h3>
                            <ul className="space-y-2 text-white/80">
                                <li>😵 Insomnie (tu vas compter les moutons jusqu&apos;en 2030)</li>
                                <li>💓 Palpitations (ton Apple Watch va appeler le SAMU)</li>
                                <li>🧛 Haleine qui tue les vampires à 10 mètres</li>
                                <li>💸 Portefeuille vide (50€ le flacon de 10ml, parce que &quot;premium&quot;)</li>
                            </ul>
                        </div>

                        <p className="text-center text-xl mt-8 text-yellow-300">
                            Ton pote jure que c&apos;est &quot;naturel&quot; et &quot;sain&quot;.
                            <span className="block mt-2 text-white/60">Ouais, comme l&apos;arsenic est naturel. 🤷‍♂️</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Section 5: Testimonials
const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: 'Jean-Michel le Testeur',
            avatar: '😵‍💫',
            quote: 'Après Pulsee, je n\'ai plus besoin de dormir ! J\'ai couru un marathon... aux urgences. 5/5 pour l\'adrénaline !',
            rating: '⭐⭐⭐⭐⭐'
        },
        {
            name: 'Sophie la Sceptique',
            avatar: '🤢',
            quote: 'Menthe + caféine ? C\'est comme mélanger du toothpaste avec du Monster Energy. Mon haleine est fresh, mais mon foie pleure.',
            rating: '⭐⭐'
        },
        {
            name: 'Ton Pote le Pharmacien',
            avatar: '🤑',
            quote: 'C\'est révolutionnaire ! J\'ai inventé ça en mélangeant mes stocks périmés. Achetez-en, j\'ai besoin d\'un yacht.',
            rating: '⭐⭐⭐⭐⭐ (auto-évaluation)'
        },
        {
            name: 'Le Cardiologue du Coin',
            avatar: '👨‍⚕️',
            quote: 'Grâce à Pulsee, mon business n\'a jamais été aussi florissant. Merci pour les nouveaux patients !',
            rating: '⭐⭐⭐⭐⭐'
        }
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-[#1e1e1e] to-[#0d0d0d] py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        💬 Témoignages
                    </h2>
                    <p className="text-xl text-gray-400">
                        (Fictifs, parce que personne n&apos;a encore testé cette merde 🤷‍♂️)
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-5xl">{t.avatar}</span>
                                <div className="flex-1">
                                    <p className="text-white/90 italic mb-4">&quot;{t.quote}&quot;</p>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-cyan-400">{t.name}</span>
                                        <span className="text-sm">{t.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Section 6: CTA
const CTASection: React.FC = () => {
    return (
        <section className="relative min-h-[70vh] bg-gradient-to-b from-[#0d0d0d] to-black flex items-center justify-center px-4">
            <div className="text-center max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-white mb-8"
                >
                    Prêt à <span className="text-cyan-400">Pulser</span> ?
                    <span className="block text-2xl md:text-3xl mt-4 text-gray-400 font-normal">
                        (Ou à te faire avoir ?)
                    </span>
                </motion.h2>

                <motion.button
                    animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                            '0 0 20px rgba(6, 182, 212, 0.5)',
                            '0 0 40px rgba(6, 182, 212, 0.8)',
                            '0 0 20px rgba(6, 182, 212, 0.5)'
                        ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="bg-gradient-to-r from-cyan-500 to-green-500 text-black font-black text-xl md:text-2xl px-12 py-6 rounded-full cursor-pointer hover:from-cyan-400 hover:to-green-400 transition-all"
                >
                    🚀 Acheter Maintenant !
                    <span className="block text-sm font-normal mt-1">(Ou Pas, C&apos;est Mieux)</span>
                </motion.button>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-[10px] text-gray-600 mt-8 max-w-lg mx-auto"
                >
                    * Pulsee n&apos;est pas responsable si tu deviens un zombie cafeiné. Consultez un vrai médecin, pas un pharmacien wannabe entrepreneur.
                    Produit peut contenir des traces de délires nocturnes et de rêves de grandeur pharmaceutique.
                </motion.p>
            </div>
        </section>
    );
};

// Footer
const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-20">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-[12vw] md:text-[16vw] leading-[100%] uppercase font-black text-center bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-clip-text text-transparent"
            >
                PULSEE
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center text-gray-500 mt-8 text-lg"
            >
                Si t&apos;es arrivé là, bravo ! 🎉
                <span className="block mt-2 text-gray-600">
                    T&apos;as plus de patience que ce produit n&apos;a de sens.
                </span>
                <span className="block mt-4 text-xl">
                    Maintenant, dis à ton pote d&apos;arrêter les conneries et de retourner vendre des aspirines. 😆💊
                </span>
            </motion.p>

            <div className="text-center mt-12 text-gray-700 text-sm">
                Made with 🖤 and lots of ☕ (the normal kind, not Pulsee)
            </div>
        </footer>
    );
};

// Main Component
export default function ScrollSections() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <main ref={container} className="relative bg-black">
            <HeroScroll scrollYProgress={scrollYProgress} />
            <RoastIntro />
            <ImagesSection />
            <WhatIsPulsee />
            <Testimonials />
            <CTASection />
            <Footer />
        </main>
    );
}
