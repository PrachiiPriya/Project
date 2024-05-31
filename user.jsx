import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './css/user_css.module.css';

const User = () => {
    const [homes, sethomes] = useState();
    useEffect(() => {
       axios.get('http://localhost:3000/')
            .then(result => {
                console.log(result.data)
                sethomes(result.data);
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <body className={styles.body}>
            <div>
                <div className={styles.container}>
                    <h1 className={styles.h1}>user dashboard</h1>
                    <div className={styles['search-form']}>
                        <form id="searchForm">
                            <input type="text" id="searchInput" placeholder="Search for locality,landmark,project or builder..." />
                            <input type="submit" value="Search" />
                        </form>
                        
                    </div> 
                    <div className={styles['search-results']} id="searchResults">
                    </div>
                    {homes ? (
                        homes.map((row, index) => (
                            <div className={styles.house_container} key={index}>
                                <img src={`http://localhost:3000/images/${row.image}`} id="home_img" alt="House Image" />
                                <div className={styles.house_details}>
                                    <h3>{row.bhkType}</h3>
                                    <p>Description of the house.</p>
                                    <ul>
                                        <li>locality:{row.locality}</li>
                                        <li>rent: {row.rent}</li>
                                        <li>Furnished:{row.isFurnished ? ('yes') : ('no')}</li>
                                        <li>Address:{row.address}</li>
                                    </ul>
                                    <button className="text-danger">contact to owner</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1 className="text-center text-secondary mt-5">No home found in the database!!</h1>
                    )}
                </div>
            </div>
        </body>
    );
}

export default User;
