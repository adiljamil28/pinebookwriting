import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { faArrowRight, faArrowLeft, faPlusCircle, faCheckCircle, faMinusCircle, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    Pagination,
    Navigation,
    EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function BrandFaqs() {
    const swiperRef = useRef();

    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        { question: "How long does the book publishing process typically take?", answer: "Whether you choose Amazon kindle publishing or want to get your book on any other online retailer. The publishing process may take a few weeks to months. It depends on factors like manuscript complexity and the service package chosen. " },
        { question: "What genres of books do you specialize in publishing?", answer: "We specialize in publishing a wide range of genres, including fiction, non-fiction, memoirs, poetry, and more on a variety of platforms, such as kindle and lulu self publishing, etc. Our goal is to accommodate diverse author interests and reader preferences." },
        { question: "Do you offer editing and proofreading services as part of your publishing packages?", answer: "Yes, we offer comprehensive editing and proofreading services to ensure your manuscript meets professional standards before publication. These services are typically included in our publishing packages." },
        { question: "Can I choose my own cover design, or do you provide options?", answer: "You have the option to choose your own cover design from our selection of pre-designed templates or work with our team to create a custom cover that reflects your book's essence and resonates with your target audience." },
        { question: "What distribution channels do you use to get my book into readers' hands?", answer: "We utilize various distribution channels, including online retailers like Amazon, Kindle, Lulu, Barnes & Noble, Kobo and our own platform, to make your book available to a wide audience globally. We also offer options for print-on-demand and eBook distribution." },
        { question: "How much control do I have over pricing and royalties for my published book?", answer: "As an author, you retain control over pricing and royalties for your book. We provide guidance and support in setting competitive prices and offer transparent royalty structures to ensure you receive fair compensation for your work." }
    ];

    return (
        <>
            <section className="brand-testimonials-section overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-4 my-10 relative py-22">
                    <div className="text-center mb-6">
                        <h2 className="font-poppins text-4xl text-black uppercase mb-3 font-bold" >Frequently Asked Questions</h2>
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
                                                className="w-full border-b-2 border-gray-300 text-white p-6 text-left mt-0 focus:outline-none mb-4 rounded-2xl bg-[#2c9384]"
                                                onClick={() => toggleFAQ(actualIndex)}
                                            >
                                                <div className={`text-lg font-semibold flex justify-between ${openFAQ === actualIndex ? 'border-b border-gray-300' : 'border-0'}`}>
                                                    {faq.question}
                                                    {/* <FontAwesomeIcon icon={openFAQ === actualIndex ? faMinusCircle : faArrowDown} color="#2c9384" /> */}
                                                    <div onClick={() => toggleFAQ()}>
                                                        {openFAQ === actualIndex ? (
                                                            <Image src="/brand-img/up-arrow.png" alt="Close" className="brand-faq-icon" width={50} height={20} />
                                                        ) : (
                                                            <Image src="/brand-img/down-arrow.png" alt="Open" className="brand-faq-icon" width={50} height={20} />
                                                        )}
                                                    </div>
                                                </div>
                                                <div className={`mt-3  text-white ${openFAQ === actualIndex ? 'faq-content-open' : 'faq-content-close'}`}>
                                                    <p>
                                                        {faq.answer}
                                                    </p>
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
        </>
    );
}