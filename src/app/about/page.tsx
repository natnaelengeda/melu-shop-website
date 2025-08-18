"use client";

import React from 'react';
import Link from 'next/link';

// components
import { Typography } from '@/components/ui/typography';
import DefaultLayout from '@/layouts/default-layout';

// icons
import { Heart, Leaf, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-purple-100/20" />
          <div className="relative mx-auto max-w-4xl text-center">
            <Typography
              variant="h1"
              className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary  to-indigo-600 bg-clip-text text-transparent">
              Welcome to Melu Clothes Shop
            </Typography>
            <p className="mt-8 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
              Where fashion meets passion, and every piece tells a story of craftsmanship,
              sustainability, and timeless elegance.
            </p>
            <div className="mt-12 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-purple-600 blur-lg opacity-30 animate-pulse" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                  <Heart className="w-12 h-12 mx-auto text-rose-500 animate-bounce" />
                  <p className="mt-4 text-lg font-medium text-gray-800">Crafted with Love</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <Typography
                variant="h2"
                className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-6">
                Our Story
              </Typography>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-purple-600 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2025 with a vision to revolutionize sustainable fashion,
                  Melu Clothes Shop began as a small dream in a cozy studio. Our founders,
                  passionate about both style and environmental responsibility, wanted to
                  create clothing that {`doesn't`} compromise on quality or ethics.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-purple-300 rounded-3xl transform rotate-3" />
                <div className="relative bg-white rounded-3xl p-8 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <Award className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Loved By Customers</h3>
                    <p className="text-gray-600">Recognized for sustainable fashion innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-slate-100">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Typography
                variant="h2"
                className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-6">
                Our Values
              </Typography>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Affordability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {`We're`} committed to provide affordable clothing to every lady who wants to walk in style
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We believe in fair trade, supporting local artisans, and building
                    a community that values both people and craftsmanship.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every piece is meticulously crafted with attention to detail,
                    ensuring durability and timeless style that lasts for years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Typography
              variant="h2"
              className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-8"
            >
              Our Mission
            </Typography>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-purple-600/10 rounded-3xl" />
              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
                <p className="text-xl leading-relaxed text-gray-800 mb-8">
                  {`"To`} create beautiful, sustainable fashion that empowers women
                  to express their unique style while making a positive impact on the {`world."`}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full text-rose-800 font-medium">
                    #SustainableFashion
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full text-purple-800 font-medium">
                    #EthicalClothing
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-green-800 font-medium">
                    #ConscientStyle
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-primary">
          <div className="mx-auto max-w-4xl text-center">
            <Typography
              variant="h2"
              className="text-3xl font-bold tracking-tight sm:text-4xl text-black mb-8">
              Join the Melu Family
            </Typography>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Discover fashion that feels good, looks amazing, and makes a difference.
              Your journey to conscious style starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="px-8 py-4 bg-white text-black font-semibold rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105">
                Start Shopping
              </Link>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}