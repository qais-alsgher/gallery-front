import { React, useState, useEffect } from 'react';
import axios from 'axios';
function Gallery() {
    const [gallery, setGallery] = useState([]);

    const getImage = async () => {
        const data = await axios.get(`https://gallery-image1.herokuapp.com/image`);
        setGallery(data.data);
        console.log(data);
    };

    useEffect(() => {
        getImage();
    }, []);

    return (
        <div>
            {
                gallery.map((item) => {
                    return (
                        <div key={item}>
                            <h3>{item.imgeName}</h3>
                            <img src={`https://gallery-image1.herokuapp.com/${item.image.split("/").pop()}`}
                                alt='imge game' />
                        </div>
                    );
                }
                )
            }
        </div>
    )
}

export default Gallery;
