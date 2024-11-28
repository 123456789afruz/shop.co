import React from 'react'
import s from './ALL.module.scss'
import OurCard from '../Our/OurCard/OurCard'

const All = () => {
    return (
        <>
            <section className={s.all}>
                <div className="container">
                    <nav className={s.nav}>
                        <div className={s.info}>
                            <h2>All Reviews</h2>
                            <p>(451)</p>
                        </div>
                        <div className={s.btns}>
                            <button><img src="/all-icon1.svg" alt="" /></button>
                            <button>
                                Latest
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.5306 6.53063L8.53063 11.5306C8.46095 11.6005 8.37816 11.656 8.28699 11.6939C8.19583 11.7317 8.09809 11.7512 7.99938 11.7512C7.90067 11.7512 7.80293 11.7317 7.71176 11.6939C7.6206 11.656 7.53781 11.6005 7.46813 11.5306L2.46813 6.53063C2.32723 6.38973 2.24808 6.19864 2.24808 5.99938C2.24808 5.80012 2.32723 5.60902 2.46813 5.46813C2.60902 5.32723 2.80012 5.24808 2.99938 5.24808C3.19864 5.24808 3.38973 5.32723 3.53063 5.46813L8 9.9375L12.4694 5.4675C12.6103 5.32661 12.8014 5.24745 13.0006 5.24745C13.1999 5.24745 13.391 5.32661 13.5319 5.4675C13.6728 5.6084 13.7519 5.7995 13.7519 5.99875C13.7519 6.19801 13.6728 6.38911 13.5319 6.53L13.5306 6.53063Z"
                                        fill="black"
                                    />
                                </svg>

                            </button>
                            <button>Write a Review</button>
                        </div>
                    </nav>
                    <div className={s.wrapper}>
                        <OurCard img='/rate-4.5.png' name='Samantha D.✅' text='"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It is become my favorite go-to shirt."' data='Posted on August 14, 2023'/>
                        <OurCard img='/rate-4.5.png' name='Alex M.✅' text='"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I am quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."' data='Posted on August 15, 2023'/>
                        <OurCard img='/rate-4.5.png' name='Ethan R.✅' text='"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer is touch in every aspect of this shirt."' data='Posted on August 16, 2023'/>
                        <OurCard img='/rate-4.5.png' name='Olivia P.✅' text='"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It is evident that the designer poured their creativity into making this t-shirt stand out."' data='Posted on August 17, 2023'/>
                        <OurCard img='/rate-4.5.png' name='Liam K.✅' text='"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer is skill. It is like wearing a piece of art that reflects my passion for both design and fashion."' data='Posted on August 18, 2023'/>
                        <OurCard img='/rate-4.5.png' name='Ava H.✅' text='"I am not just wearing a t-shirt; I am wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."' data='Posted on August 19, 2023'/>
                    </div>
                    <button className={s.load}>Load More Reviews</button>
                </div>
            </section>
        </>
    )
}

export default All
