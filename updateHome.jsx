import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const UpdateHome = () => {
    const { id } = useParams();
    const [home, sethome] = useState();
    // useEffect(() => {
    //     axios.get('http://localhost:3000/edit/'+id)
    //         .then(result => {
    //             console.log(result.data)
    //             sethome(result.data);
    //             //setimage(result.data.image);
    //         })
    //         .catch(err => console.log(err))
        
    // }, []);
    useEffect(() => {
        axios.get('http://localhost:3000/edit/'+id)
            .then(result => {
                console.log(result.data)
                sethome(result.data);
                setlocality(result.data.locality);
                setbhkType(result.data.bhkType);
                setrent(result.data.rent);
                setisFurnished(result.data.isFurnished);
                setaddress(result.data.address);
                //setimage(result.data.image);
            })
            .catch(err => console.log(err))
    }, []);
    


    const [locality, setlocality] = useState();
    const [bhkType, setbhkType] = useState();
    const [rent, setrent] = useState();
    const [isFurnished, setisFurnished] = useState();
    const [address, setaddress] = useState();
    const [image, setimage] = useState();
    const nevigate = new useNavigate();

    
    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('locality', locality);
        formData.append('bhkType', bhkType);
        formData.append('rent', rent);
        formData.append('isFurnished', isFurnished);
        formData.append('address', address);
        {image?formData.append('image', image[0]):formData.append('image','')}
        
        formData.append('old_image',home.image)
         


        axios.post("http://localhost:3000/update/"+id, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            // .then(result => console.log(result.data))
            .then(result => {
                console.log(result.data);
                // reset the state
                // setlocality('');
                // setbhkType('');
                // setrent('');
                // setisFurnished(null);
                // setaddress('');
                // setimage(null);
                // redirect to home page
                nevigate('/owner');
            })
            .catch(err => console.log("Error in post" + err))

    }

    return (
        <div>
            <div className="container ">
                <h1>Update this home</h1>
                {home ? (
                    
                    <form onSubmit={submit} method="post" id="add-form" >
                        <div className="mb-3">
                            <label htmlFor="loacality" className="form-label">Locality</label>
                            <input type="text" className="form-control" name="locality"
                                defaultValue={home.locality} onChange={(e) => setlocality(e.target.value)} />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="bhkType" className="form-label">Bhk Type</label>
                            <input type="text" className="form-control" name="bhkType"
                                defaultValue={home.bhkType} onChange={(e) => setbhkType(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rent" className="form-label">rent</label>
                            <input type="text" className="form-control" name="rent"
                                defaultValue={home.rent} onChange={(e) => setrent(e.target.value)} />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                name='isFurnished'
                                value='true'
                                defaultChecked={home.isFurnished}
                                onChange={(e) => setisFurnished(e.target.value === 'true')}
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">Furnished      </label>
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                name='isFurnished'
                                value='false'
                                defaultChecked={!home.isFurnished}
                                onChange={(e) => setisFurnished(e.target.value === 'true')}
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">Non Furnished</label>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="address" className="form-control" name="address"
                                defaultValue={home.address} onChange={(e) => setaddress(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">old image</label>
                            <img src={`http://localhost:3000/images/${home.image}`} width="100px" alt="" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">image</label>
                            <input type="file" className="form-control" name="image"
                                onChange={(e) => setimage(e.target.files)} />
                        </div>

                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                ) : (<h1 className="text-center text-secondary mt-5">No user found in the database!!</h1>)}
            </div>
        </div>
    );
}

export default UpdateHome;
