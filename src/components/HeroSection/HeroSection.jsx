import React, { useEffect } from 'react';

// @React-Redux
import { useDispatch, useSelector } from 'react-redux';

// @Actions
import { fetchSlides } from '../../actions/slides';

// @Url's
import { server } from '../../urls/urls';

const HeroSection = () => {

    const dispatch = useDispatch()

    const state = useSelector(state => state.slides.payload)

    useEffect(() => {
        dispatch(fetchSlides());
    }, [dispatch]);

    let slides = state === undefined ? null : state.map((item) => {
        return item.slider.map(photo => {
            return photo.formats.large.url
        })
    })

    let data = []
    if(slides === null){
        return null
    }else{
        slides.map((item) => {
            item.map((element) => {
                data.push(element);
                return null;
            });
            return null
        });
    }

    return (
        <>
            <div className="w-full carousel">
                {
                    data.map((url, i) => (
                        <div key={i} id={`slide-${i}`} className="relative w-full carousel-item">
                            <img src={`${server}${url}`} className="w-full" alt='img' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={`/carousel#slide-${i - 1}`} className="btn btn-circle">❮</a>
                                <a href={`/carousel#slide-${i + 1}`} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default HeroSection;