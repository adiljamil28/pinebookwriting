import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BrandServices() {

    return (
        <>
            <section className="brand-service-section overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-4 my-20 relative">
                    <div className="text-center mb-6">
                       
                        <h2 className="font-poppins text-5xl md:text-5xl text-black font-bold">Our Services</h2>
                        <h3 className="text-xl text-black font-poppins">Choose Pine Book Writing Services for Inspiring, Entertaining and Authentic Content Across All Genres!
                        </h3>
                        <p className="text-black pt-3">Experience the power of expertly crafted, engaging and thought-provoking book content with Pine Book Writing Services - where our best, unique and impressive services are designed to turn your book dream into a publishing reality!
</p>
                    </div>

                    {/* 1 of 2 */}
                    <div className="brand-service-content flex gap-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                        <div className="brand-service-card flex gap-4">
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon1.png"} className="icon" width={50} height={50}></Image>
                                    <span className="font-poppins text-4xl">01</span>
                                </div>
                                <p >We turn your drafts into masterpieces.</p>
                                <h4 className="mt-4 font-poppins text-2xl">EDITING</h4>
                            </div>
                            <div className="basis-1/2 brand-service-card-img relative"> 
                                <span class="square">
                                    <Link href="#">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img1.png"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>
                        <div className="brand-service-card flex gap-4">
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon2.png"} className="icon" width={50} height={50}></Image>
                                    <span className="font-poppins text-4xl">02</span>
                                </div>
                                <p >Catching every typo, ensuring perfection</p>
                                <h4 className="mt-4 font-poppins text-2xl break-words">PROOFREADING</h4>
                            </div>
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="#">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img2.png"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2 of 4 */}
                    <div className="brand-service-content flex mt-4 gap-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        <div className="brand-service-card flex gap-4">
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="#">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img3.webp"} width={270} height={200}></Image>
                                </div>
                            </div>
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon3.png"} className="icon" width={50} height={50}></Image>
                                    <span className="font-poppins text-4xl">03</span>
                                </div>
                                <p >Giving your words the perfect structure.</p>
                                <h4 className="mt-4 font-poppins text-2xl">FORMATTING</h4>
                            </div>
                        </div>
                        <div className="brand-service-card flex gap-4">
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="#">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img4.webp"} width={250} className="icon" height={200}></Image>
                                </div>
                            </div>
                            <div className="brand-service-card-content gap-4 basis-1/2 relative">
                                <span className="right-4"></span>
                                <span className="bottom-4"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon4.png"} className="icon" width={50} height={50}></Image>
                                    <span className="font-poppins text-4xl">04</span>
                                </div>
                                <p >Aligning your content with professional precision.</p>
                                <h4 className="mt-4 font-poppins text-2xl uppercase">Typesetting & Layout adjustment</h4>
                            </div>

                        </div>
                    </div>

                    {/* 4 of 6 */}
                    <div className="brand-service-content flex gap-4 mt-4 flex-col md:flex-row aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                        <div className="brand-service-card flex gap-4">
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right-5"></span>
                                <span className="bottom-5"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon5.png"} width={50} className="icon" height={50}></Image>
                                    <span className="font-poppins text-4xl">05</span>
                                </div>
                                <p >Crafting covers that captivate at first glance.</p>
                                <h4 className="mt-4 font-poppins text-2xl">COVER DESIGN</h4>
                            </div>
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="#">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img5.webp"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>
                        <div className="brand-service-card flex gap-4">
                            <div className="brand-service-card-content basis-1/2 relative">
                                <span className="right-5"></span>
                                <span className="bottom-5"></span>
                                <div className="flex justify-between mb-12">
                                    <Image src={"/brand-img/service-icon6.png"} width={50} className="icon" height={50}></Image>
                                    <span className="font-poppins text-4xl">06</span>
                                </div>
                                <p >Bringing your story to the shelves and screens of the world.</p>
                                <h4 className="mt-4 font-poppins text-2xl">PUBLISHING</h4>
                            </div>
                            <div className="basis-1/2 brand-service-card-img relative">
                                <span class="square">
                                    <Link href="#">Read More</Link>
                                </span>
                                <div className="service-card-img">
                                    <Image src={"/brand-img/service-img6.webp"} width={250} height={200}></Image>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="text-center">
                        <p className="font-poppins text-white mt-6 text-md">Discover the Difference: Our Publishing Service Puts Your Story Front and Center, <br></br> Guiding It from Conception to Bookshelf Success.</p>
                    </div> */}
                </div>
            </section>
        </>
    );
}