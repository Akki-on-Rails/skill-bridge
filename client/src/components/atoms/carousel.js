import React from "react";
import "../../styles/atoms/carousel.scss"

import { ratingsData } from "../../data/ratingsData.js";

/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
const slideWidth =15;

const length = ratingsData.length;
ratingsData.push(...ratingsData);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {

    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        user: ratingsData[idx].user,
        rating: ratingsData[idx].user.rating,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            // item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);
    // translating the rating value from an integer into star icons
    const stars =[]

    for (let i = 0; i < item.rating; i++) {
      stars.push(<i className="fa-solid fa-star"></i>)
    }
    while (stars.length < 5) {
      // calculating the remaining stars if rating < 5
      stars.push( <span className="empty_stars"><i className="fa-solid fa-star"></i></span>)
    }

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel-slide-item__body">
              <div className="top_text">
                <h4>{stars}</h4>
                <p>{item.user.comment}</p>
              </div>
              <div className="bottom_text">
                <h3>{item.user.name}</h3>
                <h5>{item.user.title}</h5>
              </div>
            </div>
        </li>
    );
};

const keys = Array.from(Array(ratingsData.length).keys());

const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
                <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel
