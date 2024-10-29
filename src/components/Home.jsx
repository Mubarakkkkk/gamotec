import React from 'react'

import { Footer } from './Footer'

import '../styles/home.css';

import Pic1 from '../gamotec images/img-1.jpg';
import Pic2 from '../gamotec images/img-2.jpg';
import Pic3 from '../gamotec images/img-3.jpg';
import Pic4 from '../gamotec images/img-4.jpg';
import Pic5 from '../gamotec images/img-5.jpg';
import Pic6 from '../gamotec images/img-6.jpg';

export const Home = () => {
  return (
    <>
    
        <section className="flex flex-col py-7">
            <div className="flex justify-center items-center">
                <span className="border dark:border-white border-gray-900 rounded-full p-2">Gamotec Nigeria Limited</span>
            </div>
            <div className="px-2 md:px-10 py-2">
                {/* <div> */}
                    <div className="desc">
                        <div className="desc-heading">
                            <h1 className="desc-heading__head">Your Trusted Partner in Building Construction</h1>
                        </div>
                        <div className="desc-para">
                            <p className="desc-para__paragraph">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa id 
                                aspernatur ipsam deserunt assumenda, et hic sit nemo veniam perspiciatis!
                                Ea exercitationem explicabo at voluptates, neque laboriosam modi culpa praesentium.
                            </p>
                            {/* <div className="py-5">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                                    Read More
                                </button>
                                <button className="bg-white-500 text-blue-500 border border-blue-500 px-4 py-2 ml-5 rounded-full">
                                    Contact Us
                                </button>
                            </div> */}
                        </div>
                    </div>
                {/* </div> */}
            </div>
            <div className="flex justify-between flex-wrap gap-2 px-2 md:px-10">
                <img src={Pic1} alt="Not found" className ="flex-auto w-96 h-auto md:w-4 rounded-md" />
                <img src={Pic2} alt="Not found" className ="flex-auto w-96 h-auto md:w-4 rounded-md" loading="lazy"/>
                <img src={Pic3} alt="Not found" className ="flex-auto w-96 h-auto md:w-4 rounded-md" loading="lazy"/>
                <img src={Pic4} alt="Not found" className ="flex-auto w-96 h-auto md:w-4 rounded-md" loading="lazy"/>
                <img src={Pic5} alt="Not found" className ="flex-auto w-96 h-auto md:w-4 rounded-md" loading="lazy"/>
                <img src={Pic6} alt="Not found" className ="flex-auto w-96 h-auto md:w-4 rounded-md" loading="lazy"/>
            </div>
        </section>

        <section className="bg-white py-7 bg-transparent">
            <div className="px-2 md:px-10 py-2">
                <span className="text-blue-500 text-sm rounded-full border border-gray-500 py-1 px-3">About Us</span>
            </div>
            <div className="px-2 md:px-10 py-2">
                <h3 className="desc-heading__head">We are your trusted partner in building construction</h3>
            </div>
            <div>
                <p className="px-2 md:px-10 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nobis officia fugiat quae maiores temporibus beatae neque! 
                    Commodi eius illo illum facilis numquam culpa cum, harum placeat eligendi dolore assumenda.
                </p>
            </div>
        </section>

        <section className="bg-gray-200 py-7 dark:bg-transparent">
            <div className="px-2 md:px-10 py-2">
                <span className="text-blue-500 text-sm rounded-full border border-gray-500 py-1 px-3">Why choose Us</span>
            </div>
            <div className="px-2 md:px-10 py-2">
                <h3 className="desc-heading__head">Expertise and Experience</h3>
            </div>
            <div>
                <p className="px-2 md:px-10 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nobis officia fugiat quae maiores temporibus beatae neque! 
                    Commodi eius illo illum facilis numquam culpa cum, harum placeat eligendi dolore assumenda.
                </p>
            </div>
            <div className="px-2 md:px-10 py-2">
                <div className="flex gap-2 items-center">
                    <input type="checkbox" name="" id="x1" defaultChecked="checked"/>
                   <label htmlFor="x1"> Client-Centric Approach</label>
                </div>
                <div className="flex gap-2 items-center">
                    <input type="checkbox" name="" id="x2" defaultChecked="checked"/>
                   <label htmlFor="x2"> Quality and Reliability</label>
                </div>
                <div className="flex gap-2 items-center">
                    <input type="checkbox" name="" id="x3" defaultChecked="checked"/>
                   <label htmlFor="x3"> 24/7 Support</label>
                </div>
            </div>
        </section>

        <Footer />
    </>
   
  )
}
