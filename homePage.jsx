import React from 'react';
import Navbar from './Navbar/Navbar';
import Style from './css/homepage_css.module.css';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <body className={Style.body_home}>
                
            
            <div>
                
                {/* <a href="user">user page</a> <br />
                <a href="owner">owner page</a> */}
                <header className={Style.header_home}>
                    
                    <h1 className={Style.h1_home}>Welcome to HomeRental</h1>
                    <div className={Style['search-bar']}>
                        <input type="text" placeholder="Search for houses..." />
                        <button type="submit">Search</button>
                    </div>
                </header>
                <main>
                    <section id="featured-listings">
                        <h2 className={Style.h2}>Featured Listings</h2>
                        <div className={Style['listing-grid']}>
                            <div className={Style['listing-item']}>
                                <img src="./images/h12img.jpg" alt="Listing 1" />
                                <h3>Listing 1</h3>
                                <p>$500/month</p>
                            </div>
                            <div className={Style['listing-item']}>
                                <img src="./images/h13img.jpg" alt="Listing 2" />
                                <h3>Listing 2</h3>
                                <p>$600/month</p>
                            </div>
                            <div className={Style['listing-item']}>
                                <img src="./images/h14img.jpg" alt="Listing 3" />
                                <h3>Listing 3</h3>
                                <p>$700/month</p>
                            </div>
                            <div className={Style['listing-item']}>
                                <img src="./images/h15img.jpg" alt="Listing 4" />
                                <h3>Listing 4</h3>
                                <p>$800/month</p>
                            </div>
                        </div>
                    </section>
                    <footer className={Style.foo}>Part of ET Group</footer>
                    <div className={Style.about}>
                        <img src="./images/h18img.jpg" height="300px" width="300px" alt="Listing 5" />
                        <div className={Style.one}>
                            <ul>
                                <li>Real estate in Acharya Vihar</li>
                                <li>Real estate in Patia</li>
                                <li>Real estate in Jaydev Vihar</li>
                                <li>Real estate in Koel Campus</li>
                                <li>Real estate in KIIT Square</li>
                                <li>Real estate in Saileshri Vihar </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
            </body>
        </>
    );
}

export default HomePage;
