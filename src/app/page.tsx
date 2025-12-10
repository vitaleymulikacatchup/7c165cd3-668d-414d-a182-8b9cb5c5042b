"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MediaSplitTabsAbout from '@/components/sections/about/MediaSplitTabsAbout';
import TestimonialCardEight from '@/components/sections/testimonial/TestimonialCardEight';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactMedia from '@/components/sections/contact/ContactMedia';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="mediumSizeExtraLargeTitles"
      background="none"
      cardStyle="solid-accent-light"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="minimal"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Style-Ok"
          navItems={[
            { name: "Shop", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Discover Your Style"
          description="Curated fashion collection for the modern trendsetter. Find pieces that express your unique personality."
          tag="New Arrivals"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765361217903-uyb5xixa.jpg"
          imageAlt="Fashion brand hero showcase"
          imagePosition="right"
          buttons={[
            { text: "Shop Collection", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Featured Collection"
          description="Hand-picked styles that define the season"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          gridVariant="uniform-all-items-equal"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "1",
              name: "Classic Summer Dress",
              price: "$89.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765361219132-jzssl79q.jpg",
              imageAlt: "Summer dress in cream",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Denim Jacket",
              price: "$129.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765361220320-eeudulgz.jpg",
              imageAlt: "Light denim jacket",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Essential White Shirt",
              price: "$59.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765361221444-6gw4s3p7.jpg",
              imageAlt: "Classic white button shirt",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitTabsAbout
          title="About Style-Ok"
          description="We believe fashion is about expressing yourself"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765361222470-hpbgfer2.jpg"
          imageAlt="Style-Ok boutique store"
          useInvertedBackground="noInvert"
          tabs={[
            {
              id: "mission",
              label: "Our Mission",
              description: "We curate the finest collection of contemporary fashion pieces that celebrate individuality and style. Every item is selected with care to ensure quality, trendiness, and lasting value."
            },
            {
              id: "values",
              label: "Our Values",
              description: "Sustainability, creativity, and customer satisfaction are at the heart of everything we do. We partner with ethical brands and offer pieces that make you feel confident and beautiful."
            },
            {
              id: "community",
              label: "Our Community",
              description: "Style-Ok is more than a brand - it's a community of fashion enthusiasts. Join us in celebrating self-expression and discovering styles that truly resonate with your personality."
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEight
          title="What Our Customers Say"
          description="Real stories from real Style-Ok lovers"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Jessica Martinez",
              role: "Fashion Blogger",
              company: "Style Diaries",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765361223700-w71qygl0.jpg",
              imageAlt: "Jessica Martinez"
            },
            {
              id: "2",
              name: "Emma Thompson",
              role: "Creative Director",
              company: "Urban Styles",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765361225239-sr8ophzj.jpg",
              imageAlt: "Emma Thompson"
            },
            {
              id: "3",
              name: "Sarah Chen",
              role: "Stylist",
              company: "Fashion Forward",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765361226480-fkmijbv0.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "4",
              name: "Olivia Brown",
              role: "Content Creator",
              company: "Style Insider",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765361227286-u9277bx5.jpg",
              imageAlt: "Olivia Brown"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about shopping with Style-Ok"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your return policy?",
              content: "We offer a 30-day money-back guarantee on all items. If you're not completely satisfied, simply return the item in original condition with tags attached for a full refund."
            },
            {
              id: "2",
              title: "How long does shipping take?",
              content: "Standard shipping takes 5-7 business days. We also offer express shipping (2-3 business days) and free standard shipping on orders over $100."
            },
            {
              id: "3",
              title: "Do you offer international shipping?",
              content: "Yes! We ship to over 50 countries worldwide. International orders typically arrive within 10-15 business days. Customs and duties are the responsibility of the customer."
            },
            {
              id: "4",
              title: "How do I care for my purchases?",
              content: "Each item comes with detailed care instructions. Most of our pieces are machine washable, but we recommend checking the label for specific guidance to ensure longevity."
            },
            {
              id: "5",
              title: "Do you offer size exchanges?",
              content: "Absolutely! We offer free size exchanges within 30 days of purchase. Simply contact our customer service team to arrange your exchange."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765361228229-c9qxwhzv.jpg"
          imageAlt="Contact us at Style-Ok"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Get In Touch", href: "#footer" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial
          logoText="Style-Ok"
          description="Discover fashion that expresses your unique style. Shop curated collections designed for the modern trendsetter."
          copyrightText="© 2025 Style-Ok. All rights reserved."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "Featured Collection", href: "products" },
                { label: "New Arrivals", href: "products" },
                { label: "Sale", href: "products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "faq" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Shipping Info", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}