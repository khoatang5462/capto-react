import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './Testmonial.scss'; // Đảm bảo rằng bạn đã import style

export const SliderReview = () => {
    const [testimonial, setTestimonial] = useState([]);
    const url = "https://679eff4e946b0e23c06475b7.mockapi.io/Testimonial";

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Hiển thị 1 slide tại một thời điểm
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    useEffect(() => {
        const fetchTest = async () => {
            try {
                const result = await axios.get(url);
                setTestimonial(result.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchTest();
    }, []);

    return (
        <Slider {...settings}>
            {testimonial.map(item => (
                <div key={item.id} className="testimonial-item">
                    <div className="left">
                        <img src={item.img} alt={item.name} />
                        <button onClick={() => handleVideoClick(item.id)}>
                            <i className="fa-solid fa-circle-play"></i>
                        </button>
                    </div>
                    <div className="right">
                        <div className="title">
                            <h5>{item.name} | </h5>
                            <span className="logo">
                                <img src={item.logo} alt="" />
                            </span>
                        </div>
                        <i className="review">{item.testimonial}</i>
                    </div>
                    {showVideoOverlay === item.id && (
                        <div className="overlay" onClick={closeVideoOverlay}>
                            <div className="video">
                                <video src={item.videoUrl} controls autoPlay />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </Slider>
    );
};