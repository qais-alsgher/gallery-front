import { React, useState } from 'react';
import FormData from 'form-data';
import axios from 'axios';

function AddImage() {
    const [imgeName, setImageName] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('imgeName', imgeName);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };


        await axios.post(`https://gallery-image1.herokuapp.com/image`, formData, config);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="imgeName" placeholder='Imge Name'
                    onChange={(e) => { setImageName(e.target.value) }} />

                <input type="file" name="image" placeholder="Image"
                    onChange={(e) => { setImage(e.target.files[0]) }} />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddImage;
