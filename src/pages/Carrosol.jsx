import React from 'react';

const Carrosol = () => {
    return (
        <div className="carousel w-full rounded-xl border border-green-500">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/wZRgGdyZ/Artboard-3.png"
                    className="w-full max-h-[350px] object-cover md:ojecct-fit" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/HfGSdLSP/Artboard-2.png"
                    className="w-full max-h-[350px] object-fit" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/JFx4Rd0Y/Artboard-1.png"
                    className="w-full max-h-[350px] object-fit" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carrosol;