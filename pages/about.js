import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import BrandFooter from "./components/BrandFooter";
import BrandAbout from "./components/BrandAbout";
import BrandNavbar from "./components/BrandNavbar";
import BrandBannerLogo from "./components/BrandBannerLogo";
import BrandChooseUs from "./components/BrandChooseUs";
import BrandContact from "./components/BrandContactForm";
import BrandPrimaryHeader from "./components/BrandPrimaryHeader";

export default function About() {
    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "What genres does Pine Book Publishing specialize in?", answer: "We pride ourselves on our versatility and can assist with a wide range of genres, including fiction, non-fiction, memoirs, and more." },
        { question: "How does the publishing process work with Pine Book Publishing?", answer: "Our process begins with an initial consultation to discuss your project's goals and requirements. From there, we'll work closely with you every step of the way, from manuscript development to final publication." },
        { question: "What level of involvement will I have in the editing process?", answer: "Your level of involvement is entirely up to you. We offer collaborative editing services, where you'll have the opportunity to provide feedback and input throughout the editing process." },
        { question: "How long does it typically take to publish a book with Pine Book Publishing?", answer: "The timeline can vary depending on the scope of your project and our current workload. However, we strive to work efficiently without compromising quality, aiming to deliver your finished product within a reasonable timeframe." },
        { question: "What sets Pine Book Publishing apart from other publishing services?", answer: "At Pine Book Publishing, we prioritize personalized attention, expert guidance, and transparent communication. Our goal is not just to publish your book but to ensure it's the best it can be, tailored to your unique vision and goals." },
        { question: "What pricing options are available for your services?", answer: "We offer competitive pricing packages tailored to fit your budget and project needs. Our rates are transparent, and we're happy to provide a detailed quote based on the specific services you require." }
    ];

    return (
        <>
            <Head>
                <title>About the Company | Pine Book Publishing</title>
                <meta
                    name="description"
                    content="Everything about Pine Book Publishing—your partner in crafting, editing, and publishing your story. Experience seamless service from manuscript to bookshelf."
                />
                <link rel="shortcut icon" href="/images/fav.webp" />
            </Head>
            <BrandNavbar />
            <BrandPrimaryHeader
                title="Ready To Write Your Next Chapter? "
                desc="Let Pine Book Publishing be your guide throughout this self-publishing journey. We believe in your story and want the world to read your narrative."
            />
            <BrandBannerLogo />
            <BrandAbout
                subdescone="Have you ever tried publishing a book but don’t know where to start? Did you ever plan to consult a book publishing company? We get it – there are more book publishing companies out there than stars in the sky (okay, maybe not that many, but you get the idea)."
                subdesctwo="Don’t feel overwhelmed; Pine Book Publishing is here to help you meet your publishing needs. We have self-published 100s of books since our inception on 22nd February 2023. Even though we may not have been in the market for too long, but our experts have at least 10-15 years of experience and are masters of their designated fields. We know the difficulties faced by authors worldwide and understand how frustrating the writing journey can be!
                So, we are here to fill this gap and simplify the entire editing and publishing process, offering customized solutions specifically to your needs and requirements."
                subdescthree="Whether you need help with book publishing, editing, or marketing, Pine Book Publishing is here to guide you through it with ease. Our experienced team is not just here to assist you; we're here to walk alongside you every step of the way. So, don't let this chance slip away. Connect with us, share your story idea, and let's transform it into a masterpiece together. We'll ensure that your book successfully makes its way to Amazon, Kindle, Lulu, and other publishing platforms."
            />
            <BrandChooseUs />
            <section className="brand-testimonials-section">
                <div className="max-w-screen-xl mx-auto px-4 my-20 relative py-22">
                    <div className="text-center mb-6">
                        <h2 className="font-poppins text-4xl text-black uppercase mb-3 font-bold">Frequently Asked Questions</h2>
                        {/* <h3 className="text-xl text-black font-poppins uppercase font-bold">each Out to Us for Further Assistance.</h3> */}
                    </div>
                    <div className="faq-que">
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            {Array.from({ length: 2 }).map((_, colIndex) => (
                                <div key={colIndex} className="w-full max-w-screen-sm">
                                    {faqData.slice(colIndex * 3, (colIndex + 1) * 3).map((faq, index) => {
                                        const actualIndex = index + colIndex * 3;
                                        return (
                                            <button
                                                key={actualIndex}
                                                className="w-full border-b-2 border-gray-300 p-6 text-left mt-0 focus:outline-none bg-slate-200 mb-4 rounded-2xl"
                                                onClick={() => toggleFAQ(actualIndex)}
                                            >
                                                <div className={`text-lg font-semibold flex justify-between ${openFAQ === actualIndex ? 'border-b border-gray-300' : 'border-0'}`}>
                                                    {faq.question}
                                                    <div onClick={() => toggleFAQ()}>
                                                        {openFAQ === actualIndex ? (
                                                            <Image src="/brand-img/up-arrow.png" alt="Close" className="brand-faq-icon" width={50} height={20} />
                                                        ) : (
                                                            <Image src="/brand-img/down-arrow.png" alt="Open" className="brand-faq-icon" width={50} height={20} />
                                                        )}
                                                    </div>
                                                </div>
                                                <div className={`mt-3  text-gray-700 ${openFAQ === actualIndex ? 'faq-content-open' : 'faq-content-close'}`}>
                                                    {faq.answer}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <BrandContact />
            <BrandFooter />
        </>
    );
}
