import axios from 'axios'
import { useEffect, useState } from 'react'

const IMAGE_URL = 'https://run.mocky.io/v3/8dac4388-ce28-4406-95bb-91aec813168d'

export default function useImagesFromAPI(howMany = 3) {
    const [data, setData] = useState([])
    const [imagesToLoad, setImagesToLoad] = useState(howMany)
    const [images, setImages] = useState([])

    const loadMoreImages = () => {
        setImagesToLoad(imagesToLoad + 1)
        setImages(data.slice(0, imagesToLoad + 1))
    }

    useEffect(() => {
        async function getImages() {
            const {
                data: { imageUrls },
            } = await axios.get(IMAGE_URL)
            setData(imageUrls.slice(0, 30))
            setImages(imageUrls.slice(0, howMany))
        }
        getImages()
    }, [])

    return [images, loadMoreImages, data.length]
}
