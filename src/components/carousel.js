import React, { useRef, useState } from 'react'
import useImagesFromAPI from '../hooks/images'
import Image from './image'
import '../scss/_carousel.scss'

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const imagesRef = useRef([])
    const [images, loadMoreImages, totalImages] = useImagesFromAPI()

    const prevImage = () => {
        const prevIndex =
            currentIndex === 0 ? images.length - 1 : currentIndex - 1

        if (!imagesRef.current || !imagesRef.current[prevIndex]) {
            return
        }

        imagesRef.current[prevIndex].scrollIntoView(false)

        setCurrentIndex(prevIndex)
    }

    const nextImage = () => {
        const nextIndex =
            currentIndex === images.length - 1 ? 0 : currentIndex + 1

        if (!imagesRef.current || !imagesRef.current[nextIndex]) {
            return
        }

        imagesRef.current[nextIndex].scrollIntoView(false)

        setCurrentIndex(nextIndex)
        loadMoreImages()
    }

    if (!images.length) return null

    return (
        <section className="carousel" aria-label="Listing">
            <ol className="carousel__list">
                {images.map((image, index) => {
                    return (
                        <li
                            ref={(element) =>
                                (imagesRef.current[index] = element)
                            }
                            key={index}
                            id={`slide_${index}`}
                            tabIndex="0"
                            className="carousel__slide"
                        >
                            <Image src={image} />
                        </li>
                    )
                })}
            </ol>
            <button onClick={prevImage} aria-label="Previous image">
                <i className="icon-arrow-left" />
            </button>
            <p className="carousel__indicator">
                {currentIndex + 1}/{totalImages}
            </p>
            <button onClick={nextImage}>
                <i className="icon-arrow-right" aria-label="Next image" />
            </button>
        </section>
    )
}
