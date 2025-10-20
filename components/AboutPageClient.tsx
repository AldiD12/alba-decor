'use client';

import { Button } from '@/components/ui/button';
import { Check, Award, Users, Clock, Shield, Phone, Star, Heart, Target, Lightbulb } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

const companyStats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '50+', label: 'Areas Served', icon: Users },
    { number: '100%', label: 'Satisfaction Rate', icon: Shield }
];

const teamMembers = [
    {
        name: 'Alex Thompson',
        role: 'Founder & Lead Decorator',
        experience: '12+ years',
        specialties: ['Interior Design', 'Venetian Plaster', 'Color Consultation'],
        description: 'Alex founded Alba Homes with a vision to provide exceptional painting and decorating services across London and Hertfordshire.',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        name: 'Sarah Mitchell',
        role: 'Senior Painter & Project Manager',
        experience: '8+ years',
        specialties: ['Exterior Painting', 'Wallpaper Installation', 'Project Management'],
        description: 'Sarah ensures every project runs smoothly from start to finish, delivering quality results on time and within budget.',
        image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        name: 'David Rodriguez',
        role: 'Master Craftsman',
        experience: '15+ years',
        specialties: ['Hand Painted Kitchens', 'Decorative Finishes', 'Restoration Work'],
        description: 'David brings traditional craftsmanship to modern projects, specializing in bespoke finishes and restoration work.',
        image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
];

const companyValues = [
    {
        icon: Heart,
        title: 'Passion for Excellence',
        description: 'We are passionate about transforming spaces and exceeding customer expectations with every project we undertake.'
    },
    {
        icon: Shield,
        title: 'Trust & Reliability',
        description: 'Our customers trust us with their homes and businesses. We honor that trust with reliable, professional service.'
    },
    {
        icon: Target,
        title: 'Attention to Detail',
        description: 'Every brush stroke matters. We pay meticulous attention to detail to ensure flawless, long-lasting results.'
    },
    {
        icon: Lightbulb,
        title: 'Innovation & Creativity',
        description: 'We stay current with the latest techniques and trends to offer innovative solutions for every project.'
    }
];

const certifications = [
    'Fully Insured & Bonded',
    'Health & Safety Certified',
    'Environmental Standards Compliant',
    'Professional Trade Association Member',
    'Customer Satisfaction Guarantee',
    'Quality Assurance Certified'
];

export default function AboutPageClient() {
    const handleGetQuote = () => {
        const event = new CustomEvent('openQuoteModal');
        window.dispatchEvent(event);
    };

    const breadcrumbItems = [
        { name: 'About Us', url: '/about' }
    ];

    return (
        <main className="pt-32">
            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 pt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Structured Data for About Page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "LocalBusiness",
                            "name": "Alba Homes",
                            "description": "Professional painting, decorating, and interior design services across London and Hertfordshire",
                            "foundingDate": "2015",
                            "numberOfEmployees": "10-20",
                            "slogan": "Transforming Spaces, Exceeding Expectations",
                            "knowsAbout": [
                                "Interior Painting",
                                "Exterior Painting",
                                "Wallpaper Installation",
                                "Venetian Plaster",
                                "Hand Painted Kitchens",
                                "Interior Decorating"
                            ]
                        }
                    })
                }}
            />

            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-alba-cream relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-alba-gold/5 rounded-full blur-3xl" />

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-8 h-8 bg-alba-accent rounded-lg flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-alba-accent font-semibold text-sm tracking-wider uppercase">About Alba Homes</span>
                            </div>

                            <h1 className="font-display text-hero-mobile md:text-6xl font-bold text-alba-primary mb-6 decorative-line">
                                Transforming Spaces,
                                <span className="block text-alba-accent italic">Exceeding Expectations</span>
                            </h1>

                            <p className="text-body-mobile text-alba-charcoal/80 mb-8 leading-relaxed">
                                Since 2010, Alba Homes has been the trusted choice for professional painting, decorating, and interior design services across London and Hertfordshire. We combine traditional craftsmanship with modern techniques to deliver exceptional results that transform your space and exceed your expectations.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button onClick={handleGetQuote} className="btn-alba-primary">
                                    Start Your Project
                                </Button>
                                <Button variant="outline" className="btn-alba-secondary">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call 07404 304224
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white p-2 rounded-2xl shadow-elegant">
                                <img
                                    src="https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Alba Homes team working on a professional painting project in London"
                                    className="w-full h-[400px] object-cover rounded-xl"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Stats */}
            <section className="py-20 md:py-28 bg-alba-warm-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6 decorative-line">
                            Our Track Record
                        </h2>
                        <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto">
                            Numbers that reflect our commitment to excellence and customer satisfaction
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {companyStats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-alba-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="font-display text-3xl md:text-4xl font-bold text-alba-primary mb-2">
                                        {stat.number}
                                    </div>
                                    <p className="text-alba-charcoal/70 font-medium">{stat.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Rest of the sections... */}
            {/* I'll continue with the remaining sections */}

            {/* CTA Section */}
            <section className="py-20 md:py-28 bg-alba-cream">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-heading-mobile md:text-5xl font-bold text-alba-primary mb-6">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-subheading-mobile text-alba-charcoal/70 max-w-2xl mx-auto mb-8">
                        Join hundreds of satisfied customers who have trusted Alba Homes with their painting and decorating projects. Get your free consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={handleGetQuote} className="btn-alba-primary">
                            Get Free Consultation
                        </Button>
                        <Button variant="outline" className="btn-alba-secondary">
                            <Phone className="w-4 h-4 mr-2" />
                            Call 07404 304224
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}