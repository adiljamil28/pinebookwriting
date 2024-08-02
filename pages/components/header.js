import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "https://static.zdassets.com/ekr/snippet.js?key=6ad75b0f-d085-4cae-9a7a-48abeb69b973";
    //     script.async = true;
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

    const handleOpenChat = () => {
        window.zE && window.zE('webWidget', 'open');
    };
    return (
        <header className="container mx-auto py-2 width-container">
            <div className="flex items-center justify-between px-2 flex-wrap md:justify-strat">
                <div className="head-logo">
                    <Link className="text-center" href="/publishing-lp">
                        <Image alt="LOGO" src={'/brand-img/logo.webp'} width={200} height={80} loading="lazy" />
                    </Link>
                </div>

                <div className="flex items-center justify-end flex-col md:flex-row gap-3 flex-col-reverse">
                    <button className=" btn-a items-center bg-gray-800 md:py-2 py-4 mr-2 px-3 focus:outline-none hover:bg-gray-700">
                        <Link className="" href={'tel:8668417469'}>(866)-841-7469</Link>
                    </button>

                    <button className=" hidden btn-a items-center bg-gray-800 mr-2 md:py-2 py-4 px-3 focus:outline-none hover:bg-gray-700 md:block">
                        <Link className="" href={'mailto:support@pinebookpublishing.com'}>support@pinebookpublishing.com</Link>
                    </button>

                    <button className="btn-a items-center bg-gray-800 md:py-2 py-4 px-3 focus:outline-none hover:bg-gray-700" onClick={handleOpenChat}>
                        <Link className="" href={'javascript:;'}>Talk to an Expert</Link>
                    </button>
                </div>
            </div>
        </header>
    );
}