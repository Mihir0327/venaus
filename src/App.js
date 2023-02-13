import './App.css';
import React from 'react';

import { Header,MainSlider, InteriorSlider, NewSlider, StorySlider, TestimonialSlider,  } from './components';
import DesktopMenu from './components/DesktopMenu';





function App() {

  return (
    
    <>
    <div className="relative">
      {/* <div id="inquiry-form">
        <a className="px-[20px] pb-[16px] border bg-[#4a6021] -rotate-90 text-[32px] font-[400] text-[#] fixed top-[50%] -translate-y-[50%] right-[-56px] z-[98] inline-block text-white"
          id="inline-block ">Inquiry
          Now</a>
         
        <div className="model w-[500px] bg-white z-[99] h-[100vh] px-[40px] py-[20px] overflow-scroll">
          <div className="close-btn" id="close-btn">
            <i className="fa-solid fa-xmark text-[30px] absolute left-[10px] top-[10px]" />
          </div>
          <div className="input-section border mt-[100px] px-[20px] py-[40px]">
            <form action="" method="post" className="wpcf7-form init" aria-label="Contact form"
              novalidate="novalidate" data-status="init">
              <p>
                <label> Your Name (required)<br />
                  <span data-name="your-name">
                    <input size="40" aria-required="true" aria-invalid="false" value="" type="text"
                      name="your-name" className="px-[20px] py-[10px] border-b mb-[10px] w-full" /></span>
                </label>
              </p>
              <p>
                <label> Your Email (required)<br />
                  <span data-name="your-email"><input size="40"
                    className="px-[20px] py-[10px] border-b mb-[10px] w-full"
                    aria-required="true" aria-invalid="false" value="" type="email"
                    name="your-email" />
                  </span>
                </label>
              </p>
              <p><label> Your Mobile No(required)<br />
                <span data-name="tel-834"><input size="40" maxlength="10" minlength="10"
                  className="px-[20px] py-[10px] border-b mb-[10px] w-full"
                  aria-required="true" aria-invalid="false" value="" type="tel"
                  name="tel-834" /></span></label>
              </p>
              <p><label className="w-full"> Select Services<br />
                <span data-name="menu-717 w-full"><select
                  className="px-[20px] py-[10px] border-b mb-[10px] w-full"
                  aria-required="true" aria-invalid="false" name="menu-717">
                  <option value="--Select your Service--">--Select your Service--</option>
                  <option value="RESIDENCE INTERIOR">RESIDENCE INTERIOR</option>
                  <option value="HOTEL INTERIOR">HOTEL INTERIOR</option>
                  <option value="RESTAURANT INTERIOR">RESTAURANT INTERIOR</option>
                  <option value="OFFICE INTERIOR">OFFICE INTERIOR</option>
                  <option value="INTERIOR WITH FURNITURE">INTERIOR WITH FURNITURE</option>
                  <option value="SEATING FURNITURE">SEATING FURNITURE</option>
                  <option value="BEDROOM FURNITURE">BEDROOM FURNITURE</option>
                  <option value="DINING FURNITURE">DINING FURNITURE</option>
                  <option value="TABLE FURNITURE">TABLE FURNITURE</option>
                  <option value="VINTAGE FURNITURE">VINTAGE FURNITURE</option>
                  <option value="RESTORATION FURNITURE">RESTORATION FURNITURE</option>
                  <option value="HOTEL FURNITURE">HOTEL FURNITURE</option>
                  <option value="CARVED FURNITURE">CARVED FURNITURE</option>
                  <option value="HOME DECOR">HOME DECOR</option>
                  <option value="OTHER SERVICES">OTHER SERVICES</option>
                </select></span></label>
              </p>
              <p><label> State<br />
                <span className="wpcf7-form-control-wrap" data-name="your-subject"><input size="40"
                  className="px-[20px] py-[10px] border-b mb-[10px] w-full"
                  aria-required="true" aria-invalid="false" value="" type="text"
                  name="your-subject" /></span> </label>
              </p>
              <p><label> Your Message<br />
                <span className="w-full" data-name="your-message"><textarea cols="40" rows="10"
                  className="px-[20px] py-[10px] border-b mb-[10px] border mt-[10px] w-full" aria-invalid="false"
                  name="your-message"></textarea></span> </label><br />
              </p>
              <p className="text-center"><input className="px-[20px] py-[10px] border bg-[#4a6021] text-white" type="submit" value="Send" /><span
                className="wpcf7-spinner"></span>
              </p>
              <div className="wpcf7-response-output" aria-hidden="true"></div>
            </form>
          </div>
        </div>
      </div> */}
    </div>

    <DesktopMenu/>
  
   

    <section class="banner overflow-hidden">
        <div class="slider" id="banner-slider">

          <MainSlider/>
          {/* pt-[80px] pb-[38px] */}
        </div>
    </section>
      <section className="perfect-choice bg-black mt-[-6px]">
        <div className="container mx-auto pt-[20px] pb-[40px]">
          <div className="inner-box row text-white">
            <div className="col-md-3 box pr-[30px] py-[100px] relative">
              <img src="image/pattern.png" alt="" className="absolute top-[30px] left-[0px] w-[40%]" />
              <h2 className="text-[25px] md:text-[30px]">Why South Delhi Prime Is The Perfect Choice?</h2>
            </div>
            <div className="col-md-3 box pr-[20px]">
              <div className="number text-[30px] pb-[10px] md:text-[40px] lg:text-[50px] ">
                01.
              </div>
              <div className="title text-[20px] pb-[10px] lg:text-[30px]">
                Easy To Get Started
              </div>
              <div className="dis text-[#a9a2a2] text-[10px] mb-[45px] md:text-[18px]">
                Discover the most exclusive luxurious properties available in prime areas of South Delhi.
              </div>
            </div>
            <div className="col-md-3 box pr-[20px]">
              <div className="number text-[30px] pb-[10px] md:text-[40px] lg:text-[50px]">
                02.
              </div>
              <div className="title text-[20px] pb-[10px] lg:text-[30px]">
                The Right Property
              </div>
              <div className="dis text-[#a9a2a2] text-[10px] mb-[45px] md:text-[18px]">
                Discover the most exclusive luxurious properties available in prime areas of South Delhi.
              </div>
            </div>
            <div className="col-md-3 box pr-[20px]">
              <div className="number text-[30px] pb-[10px] md:text-[40px] lg:text-[50px]">
                03.
              </div>
              <div className="title text-[20px] pb-[10px] lg:text-[30px]">
                Easy To Get Started
              </div>
              <div className="dis text-[#a9a2a2] text-[10px] mb-[45px] md:text-[18px]">
                Discover the most exclusive luxurious properties available in prime areas of South Delhi.
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="product pt-[100px]">
        <div className="container">
          <div className="title text-center">
            <h2 className="text-[30px] font-[700] mb-[5px] lg:text-[35px]">NEW ARRIVAL</h2>
            <p className="text-[#7a7979] text-[15px] mb-[20px] lg:text-[20px]">Check out our latest collections</p>
          </div>
          <div className="row pb-[50px]">
            <div className="col-md-4 p-[20px]">
              <div className="box p-[40px] bg-white rounded   ">
                <div className="inner-box relative">
                  <div className="product-dis flex justify-between items-center w-full absolute top-0 left-0">
                    <div className="left">
                      <div className="title">
                        <h2 className="text-[15px] font-[600]">MOD NO : VANC120345</h2>
                      </div>
                    </div>
                    <div className="rigth">
                      <div className="heart-ring  w-min px-[15px] py-[10px] border  rounded-[50%]">
                        <i className="fa-regular fa-heart" />
                      </div>
                    </div>
                  </div>
                  <img src="image/product-1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 p-[20px]">
              <div className="box p-[40px] bg-white rounded   ">
                <div className="inner-box relative">
                  <div className="product-dis flex justify-between items-center w-full absolute top-0 left-0">
                    <div className="left">
                      <div className="title">
                        <h2 className="text-[15px] font-[600]">MOD NO : VANC120345</h2>
                      </div>
                    </div>
                    <div className="rigth">
                      <div className="heart-ring  w-min px-[15px] py-[10px] border  rounded-[50%]">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                  </div>
                  <img src="image/product-2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 p-[20px]">
              <div className="box p-[40px] bg-white rounded   ">
                <div className="inner-box relative">
                  <div className="product-dis flex justify-between items-center w-full absolute top-0 left-0">
                    <div className="left">
                      <div className="title">
                        <h2 className="text-[15px] font-[600]">MOD NO : VANC120345</h2>
                      </div>
                    </div>
                    <div className="rigth">
                      <div className="heart-ring  w-min px-[15px] py-[10px] border  rounded-[50%]">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                  </div>
                  <img src="image/product-3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 p-[20px]">
              <div className="box p-[40px] bg-white rounded   ">
                <div className="inner-box relative">
                  <div className="product-dis flex justify-between items-center w-full absolute top-0 left-0">
                    <div className="left">
                      <div className="title">
                        <h2 className="text-[15px] font-[600]">MOD NO : VANC120345</h2>
                      </div>
                    </div>
                    <div className="rigth">
                      <div className="heart-ring  w-min px-[15px] py-[10px] border  rounded-[50%]">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                  </div>
                  <img src="image/product-4.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 p-[20px]">
              <div className="box p-[40px] bg-white rounded   ">
                <div className="inner-box relative">
                  <div className="product-dis flex justify-between items-center w-full absolute top-0 left-0">
                    <div className="left">
                      <div className="title">
                        <h2 className="text-[15px] font-[600]">MOD NO : VANC120345</h2>
                      </div>
                    </div>
                    <div className="rigth">
                      <div className="heart-ring  w-min px-[15px] py-[10px] border  rounded-[50%]">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                  </div>
                  <img src="image/product-5.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4 p-[20px]">
              <div className="box p-[40px] bg-white rounded   ">
                <div className="inner-box relative">
                  <div className="product-dis flex justify-between w-full items-center absolute top-0 left-0">
                    <div className="left">
                      <div className="title">
                        <h2 className="text-[15px] font-[600]">MOD NO : VANC120345</h2>
                      </div>
                    </div>
                    <div className="rigth">
                      <div className="heart-ring  w-min px-[15px] py-[10px] border  rounded-[50%]">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                  </div>
                  <img src="image/product-6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="button w-max mx-auto pb-[50px]">
            <a href="#" className=" px-[15px] py-[8px] bg-[#4a6021] text-white font-[600] text-[17px] md:text-[20px] md:px-[20px] md:py-[10px]">View Store</a>
          </div>
        </div>
      </section>

      <section className="container interior">
        <div className="title text-center">
          <h2 className="text-[30px] font-[700] mb-[5px] md:text-[35px]">INTERIOR IDEAS</h2>
          <p className="text-[#7a7979] text-[15px] mb-[20px] md:text-[20px]">Keeping Things Minimal</p>
        </div>


        <div className="interior-slider" id="interior-slider">
           <InteriorSlider />
          <div className="button w-max mx-auto pt-[60px] ">
            <a href="#" className="px-[15px] py-[8px] bg-[#4a6021] text-white font-[600] text-[17px]">View Store</a>
          </div>
        </div>
      </section>


      <section className="manufacturers mt-[4rem]" >
        <div className="container">
          <div className="title text-center my-[30px]">
            <h2 className="text-[30px] font-[600] mb-[5px]">FURNITURE MANUFACTURERS IN INDIA</h2>
          </div>
          <div className="manufacturers-details">
            <p >We are a Noida based furniture as well as interior designing company having a talented and
              experienced
              team of designers. We committed to creating unique and luxurious interio and furniture for your
              <span className="font-[600]">Residence, Office, Restaurant, Hotel, Banquet</span> and others at
              affordable budget.
            </p>
            <br />
            <h2 className="text-[20px] font-[600]"><span className="text-[#6dbbe9] font-[700px]">FURNITURE</span> EXPERTISE
            </h2>
            <br />
            <p>We offer unique, luxurious and traditional interior and furniture design with a balanced mixture of
              trendy colour, materials and concepts. Our perfect combination of interior and furniture gives you a
              stylish and luxurious feeling.</p>
            <br />
            <h2 className="text-[20px] font-[600]"><span className="text-[#6dbbe9] font-[700px]">PROJECT</span> DELIVERY
            </h2>
            <br />
            <p>We always try to work with the best to serve you a world className product and design. We committed to
              deliver the finest products as per your requirements</p>
            <br />
            <h2 className="text-[20px] font-[600]"><span className="text-[#6dbbe9] font-[700px]">BEST</span> VALUE</h2>
            <br />
            <p>We are committed to provide the best quality services and products with budget friendly in given time
              frame.</p>
            <br />
            <h2 className="text-[20px] font-[600]"><span className="text-[#6dbbe9] font-[700px]">VENUS</span> ASSURANCE</h2>
            <br />
            <p>Customer satisfaction is our first priority. We assure our customers will get the world className
              services
              and products with hassle free environment.</p>
            <br />
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="image/production-machinari-img.jpg" alt="" />
              <div className="name pt-[15px]">
                <h2 className="text-[20px] font-[600] mb-[20px]">Latest Machinery</h2>
                <p>In our company we use the latest tecnology and machinery for production. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="col-md-6">
              <img src="image/worker-img.jpg" alt="" />
              <div className="name pt-[15px]">
                <h2 className="text-[20px] font-[600] mb-[20px]">our worker</h2>
                <p>In our company we hair telented and smart worker. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-story relative mt-[40px] ">
        <div className="container-fluid">
          <div
            className="our-story-details w-[70%] absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-white">
            <div className="title">
              <h2 className="text-[30px] font-[600] mb-[35px] md:text-[35px]">OUR STORY</h2>
            </div>
            <div className="dis mb-[20px]">
              <p>We believe in creativity as one of the major forces of progress. With this idea, we traveled
                throughout Italy to find exceptional artisans and bring their unique handcrafted objects to
                connoisseurs everywhere.</p>
            </div>
            <div className="button">
              <a href="#"
                className=" px-[20px] py-[10px] bg-transparent border border-white text-white font-[600] text-[15px] inline-block">Read
                full story</a>
            </div>
          </div>

        </div>
      </section>
      <section className="our-client mt-[40px]">
        <div className="container">
          <div className="title text-center">
            <h2 className="text-[30px] font-[600] mb-[20px] md:text[35px]">Our Client</h2>
            <p>The best customer service is if the customer doesn't need to call you, doesn't need to talk to you. It just works</p>
          </div>
        <NewSlider/>

         
      
        </div>
           
      </section>
      
      <section className="testimonial my-[100px] xs-">
        <div className="container">
          <div className="title text-center">
            <h2 className="text-[30px] font-[700] mb-[5px]">TESTIMONIAL</h2>
            <p className="text-[#7a7979] text-[15px] mb-[20px]"> Clients Say</p>
          </div>

          <TestimonialSlider/>
          
        </div>
      </section>
      
      
      <section className="stroy display">
        <div className="container-fluid">
          <div className="inner-box row ">
            <div className="title col-md-3 bg-black p-[20px] pl-[40px]">
              <h2 className="text-[30px] font-[600]   my-[25px] text-[#4a6021]">OUR PROJECT</h2>
              <p className="text-[#858585]">Our team is widely known for the highest quality of the products we
                provide. You can rely on us
                whether you need a cabinet or furniture for your kitchen.</p>
            </div>
            <div className="story-slider overflow-hidden  col-md-9 p-0 " id="story-slider">

                  <StorySlider />
            </div>
           
          
          </div>
        </div>
      </section>
      
      
      
      <footer className="py-[50px] mt-[-6px]">
        <div className="container">
          <div className="top-box row items-center pb-[80px] border-b border-[#858585]">
            <div className="left col-md-9">
              <h2 className="text-[30px] text-[#4a6021] font-[600] mb-[20px]">VISIT OUR SHOWROOM</h2>
              <p className="text-[#858585] mb-[5px]">200 12th Ave, New York, NY 10001, USA</p>
              <p className="text-[#858585] mb-[5px]">Mon - Sat: 10 am - 6 pm <span>|</span> Sun: 12 pm - 2 pm</p>
            </div>
            <div className="right col-md-3">
              <div className="button ">
                <a href="#"
                  className=" px-[20px] py-[10px] bg-transparent border border-white text-white font-[600] text-[18px] inline-block mx-[26px] mb-[15px] mt-[15px]"><i
                    className="fa-solid fa-location-dot mr-[5px]"></i> Get directions</a>
              </div>
              <a href="tel:+0 333-278-06622" className="text-[20px] text-[#4a6021]"> <i
                className="fa-solid fa-phone mr-[10px]"></i>333.278.06622</a>
            </div>
          </div>
          <div className="bottom-box pt-[80px]">
            <div className="row">
            
              <div className="col-md-2">
                <h2 className="text-[20px] text-[#4a6021] mb-[5px] mt-[15px]">SEATING</h2>
                <ul>
                  <li className="text-[#858585] mb-[5px]"><a href="#">MODERN SOFA SET</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">MODERN 3 SEATER SOFA</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">MODERN SOFA CHAIRS</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">SECTIONAL SOFA</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">WING CHAIRS</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">CHAISE LOUNGE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">OTTOMON</a></li>
                </ul>
              </div>
              <div className="col-md-2">
                <h2 className="text-[20px] text-[#4a6021] mb-[5px] mt-[15px]">DINING</h2>
                <ul>
                  <li className="text-[#858585] mb-[5px]"><a href="#">MODERN DINING SET</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">MODERN DINING CHAIR</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">BUFFET CABINET</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">CEOCKERY UNIT</a></li>
                </ul>
              </div>
              <div className="col-md-2">
                <h2 className="text-[20px] text-[#4a6021] mb-[5px] mt-[15px]">BEDROOM FURNITURE</h2>
                <ul >
                  <li className="text-[#858585] mb-[5px]"><a href="#">BED</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">BED SIDE TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">BED BENCH</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">WARDROBE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">LCD UNIT</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">DRESSER</a></li>
                  </ul>
              </div>
              <div className="col-md-2">
                <h2 className="text-[20px] text-[#4a6021] mb-[5px] mt-[15px]">STORAGE</h2>
                <ul>
                  <li className="text-[#858585] mb-[5px]"><a href="#">CHESTER</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">SIDEBOARD</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">LCD CABINETS</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">BOOKCASE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">CHEST   </a></li>
                </ul>
              </div>
              <div className="col-md-2">
                <h2 className="text-[20px] text-[#4a6021] mb-[5px] mt-[15px]">TABLE</h2>
                <ul>
                  <li className="text-[#858585] mb-[5px]"><a href="#">COFFEE TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">END TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">CONSOLE TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">STUDY TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">NEST TABLE</a></li>
                </ul>
              </div>
              <div className="col-md-2">
                <h2 className="text-[20px] text-[#4a6021] mb-[5px] mt-[15px]">CARVED FURNITURE</h2>
                <ul>
                  <li className="text-[#858585] mb-[5px]"><a href="#">CARVED SOFA</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">CARVED CHAIRS</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">CARVED DINING SET</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">CARVED DINING CHAIRS</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">CARVED DINING TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">CARVED BED</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">CARVED CABINET</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">WOODEN SWING</a></li>
                </ul>
              </div>
              <div className="col-md-2">
                <h2 className="text-[20px] text-[#4a6021] mb-[5px] mt-[15px]">RESTAURANT</h2>
                <ul>
                  <li className="text-[#858585] mb-[5px]"><a href="#">ARM CHAIRS</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">RESTAURANT CHAIRS</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">RESTAURANT SOFA</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">RESTAURANT TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">BAR CHAIRS</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">BAR STOOL</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">LOUNGE CHAIRS</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">LOUNGE SOFA</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">CAFE CHAIRS</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">CAFE TABLE</a></li>
                </ul>
              </div>
              <div className="col-md-2">
                <h2 className="text-[20px] text-[#4a6021] mb-[5px] mt-[15px]">HOTEL FURNITURE</h2>
                <ul>
                  <li className="text-[#858585] mb-[5px]"><a href="#">HOTEL BED</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">HOTEL BED SIDE TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">HOTEL WARDROBE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">HOTEL LCD UNIT</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">LUGGAGE RACK</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">FRIDGE RACK</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">HOTEL STUDY TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">HOTEL STUDY CHAIR</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">HOTEL ROOM CHAIR</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">HOTEL COFFEE TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">HOTEL SIDE TABLE</a></li>
                </ul>
              </div>
              <div className="col-md-2">
                <h2 className="text-[20px] text-[#4a6021] mb-[5px] mt-[15px]">VINTAGE FURNITURE</h2>
                <ul>
                  <li className="text-[#858585] mb-[5px]"><a href="#">VINTAGE SOFA</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">VINTAGE CHAIRS</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">VINTAGE DINING SET</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">VINTAGE DINING CHAIR</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">VINRAGE DINING TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">VINTAGE BED</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">VINTAGE BED SIDE TABLE</a></li>
                </ul>
              </div>
              <div className="col-md-2">
                <h2 className="text-[20px] text-[#4a6021] mb-[5px] mt-[15px]">VINTAGE FURNITURE</h2>
                <ul>
                  <li className="text-[#858585] mb-[5px]"><a href="#">VINTAGE CABINET</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">VINTAGE COFFEE TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">VINTAGE CONSOLE TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">VINTAGE END TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">VINTAGE STUDY TABLE</a></li>
                  <li className="text-[#858585] mb-[5px]"><a href="#">VINTAGE BED BENCH</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h2 className="text-[20px] text-[#4a6021] mb-[5px] mt-[15px]">SING UP FOR OUR NEWSLETTER</h2>
                <p className="text-[#858585] mb-[5px] w-[80%]">Add your email address to sing up for our monthly
                  emails and to receive promotional offers.</p>
                <div className="input relative mt-[20px]">
                  <input type="email" name="email" id="email"
                    className="px-[20px] py-[10px] w-full bg-transparent border-b border-[#4a6021] text-[#858585]"
                    placeholder="Enter Email address" />
                  <a href="#"
                    className="px-[10px] py-[5px] border text-white rounded absolute top-[50%] -translate-y-[50%] right-[10px] md:mr-[4rem] md:mt-[4rem] lg:mr-[0rem] lg:mt-[0rem]">Subscribe</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer></>

  );
}

export default App;
  