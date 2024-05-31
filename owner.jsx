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
        <body className='body_owner'>
            
        
        <div className="container my-4">
            {/* <h1>Owner dash board</h1> */}

            {/* {message ? (
                <div className="alert alert-dismissible fade show alert-<%= message.type %>" role="alert">
                    <button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                    <strong> {message.message}</strong>
                </div>
            ):(<h1>No message found</h1>)} */}
            <header className='header_owner'>
                <h1>Welcome to HomeRent</h1>
                <nav className='nav_owner'>
                    <ul>
                        <li><a href="/AddHome">Add Home +</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </nav>
            </header>
           
            <main>
                {homes ? (
                    homes.map((row, index) => (
                        <div className="house-container-owner" key={index}>
                            <img src={`http://localhost:3000/images/${row.image}`} id="home_img" alt="House Image" />
                            <div className="house-details-owner">
                                <h3>{row.bhkType}</h3>
                                <p>Description of the house.</p>
                                <ul>
                                    <li>locality:{row.locality}</li>
                                    <li>rent: {row.rent}</li>
                                    <li>Furnished:{row.isFurnished ? ('yes') : ('no')}</li>
                                    <li>Address:{row.address}</li>

                                </ul>
                                <Link to={`/update/${row._id}`} className="btn btn-sucess">edit<i data-lucide="square-pen"></i></Link>
                                <button className="text-danger" onClick={() => handelDelete(row._id)}>delete</button>

                            </div>
                        </div>
                    ))
                ) : (
                    <h1 className="text-center text-secondary mt-5">No home found in the database!!</h1>
                )}

            </main>

        </div>
        </body>
    );
}

export default Owner;
