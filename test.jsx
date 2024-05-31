import React, { useState } from 'react';
import axios from 'axios'
const AddHome = () => {
    const [locality, setlocality] = useState();
    const [bhkType, setbhkType] = useState();
    const [rent, setrent] = useState();
    const [isFurnished, setisFurnished] = useState();
    const [address, setaddress] = useState();
    const [image, setimage] = useState();
    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/add", { locality:locality, bhkType:bhkType, rent:rent, isFurnished:isFurnished, address:address, image:image })
            .then(result => console.log(result.data))
            .catch(err => console.log("Error in post" + err))
    }
    return (
        <div>
            <div className="container ">
                <h1>Add a new home</h1>
                <form method="post" id="add-form" onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="loacality" className="form-label">Locality</label>
                        <input type="text" className="form-control" name="locality"
                            onChange={(e) => setlocality(e.target.value)} />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="bhkType" className="form-label">Bhk Type</label>
                        <input type="text" className="form-control" name="bhkType"
                            onChange={(e) => setbhkType(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rent" className="form-label">rent</label>
                        <input type="text" className="form-control" name="rent"
                            onChange={(e) => setrent(e.target.value)} />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name='isFurnished'
                            value='true'
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
                            onChange={(e) => setisFurnished(e.target.value === 'true')}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Non Furnished</label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="address" className="form-control" name="address"
                            onChange={(e) => setaddress(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">image</label>
                        <input type="file" className="form-control" name="image" required
                            onChange={(e) => setimage(e.target.files)} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}


// owner jsx

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import "./css/owner_css.css";
const Owner = () => {
    // const homes = [{ locality: 'Patia', bhkType: '1bhk', rent: '12000',isFurnished:true,address:"patia 3310", image: "agrygr.jpg" }];
    const [homes, sethomes] = useState();
    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(result => {
                console.log(result.data)
                sethomes(result.data);
            })
            .catch(err => console.log(err))
        //u was here
    }, [])

    // const handelDelete = (id) => {
    //     useEffect(() => {
    //         axios.get('http://localhost:3000/delete/' + id)
    //             .then(result => console.log(result))
    //             .catch(err => console.log(err))
    //         //u was here
    //     }, [])
    // }
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        if (deleteId !== null) {
            axios.get('http://localhost:3000/delete/' + deleteId)
                .then(result => {
                    console.log(result)
                    window.location.reload();
                })
                .catch(err => console.log(err));
        }
    }, [deleteId]);

    const handelDelete = (id) => {
        setDeleteId(id);

    }


    return (
        <div className="container my-4">
            {/* <h1>Owner dash board</h1> */}
            
            {/* {message ? (
                <div className="alert alert-dismissible fade show alert-<%= message.type %>" role="alert">
                    <button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                    <strong> {message.message}</strong>
                </div>
            ):(<h1>No message found</h1>)} */}
            <header>
                <h1>Welcome to HouseRental</h1>
                <nav>
                    <ul>
                        <li><a href="/AddHome">Add Home +</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                
                <div className="house-container">
                    <img src="h2img.jpg" alt="House Image" />
                    <div className="house-details">
                        <h3>House Title</h3>
                        <p>Description of the house.</p>
                        <ul>
                            <li>Bedrooms: 3</li>
                            <li>Bathrooms: 2</li>
                            <li>Location: City, State</li>
                            
                        </ul>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </main>

            <div className="table-responsive">
                {homes ? (
                    <table className="table table-striped my-3">
                        <thead>
                            <tr className="table-dark text-center align-middle">
                                <th>Id</th>
                                <th>Locality</th>
                                <th>bhkType</th>
                                <th>rent</th>
                                <th>isFurnished</th>
                                <th>address</th>
                                <th>image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {homes.map((row, index) => (
                                <tr className='text-center' key={index}>
                                    <td>{index}</td>
                                    <td>{row.locality}</td>
                                    <td>{row.bhkType}</td>
                                    <td>{row.rent}</td>
                                    <td>{row.isFurnished ? ('yes') : ('no')}</td>
                                    <td>{row.address}</td>
                                    <td><img src={`http://localhost:3000/images/${row.image}`} alt="no img found" width='50px' /></td>
                                    <td>
                                        <Link to={`/update/${row._id}`} className="btn btn-sucess">edit<i data-lucide="square-pen"></i></Link>
                                        <button className="text-danger" onClick={() => handelDelete(row._id)}>delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                ) : (
                    <h1 className="text-center text-secondary mt-5">No home found in the database!!</h1>
                )}
            </div>
        </div>
    );
}

export default Owner;
