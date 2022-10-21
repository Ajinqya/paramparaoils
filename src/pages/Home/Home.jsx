import React from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import { ROUTES } from '../../routes/RouterConfig'
import ItemCard from '../../components/ItemCard/ItemCard'
import ic1 from "../../assets/images/ic1.png"
import ic2 from "../../assets/images/ic2.png"
import ic3 from "../../assets/images/ic3.png"
import ic4 from "../../assets/images/Tree.png"
import ic5 from "../../assets/images/Snowflake.png"
import ic6 from "../../assets/images/BeerBottle.png"


import Flask from "../../assets/images/Flask.svg"
import GearSix from "../../assets/images/GearSix.svg"
import TestTube from "../../assets/images/TestTube.svg"
import Thermometer from "../../assets/images/Thermometer.svg"
import ThumbsDown from "../../assets/images/ThumbsDown.svg"

import Output from "../../assets/images/Group 6356.svg"


import Hearbeat from "../../assets/images/Heartbeat.svg"
import Sparkle from "../../assets/images/Sparkle.svg"
import Wind from "../../assets/images/Wind.svg"
import Leaf from "../../assets/images/Leaf.svg"
import Subtract from "../../assets/images/Subtract.svg"



import Hand from "../../assets/images/Hand.png"




import Banner1 from '../../components/Banner/Banner1'
import Accordian from '../../components/Accordian/Accordian'
import Faq from '../../components/Faq/Faq'
import ButtonOutline from '../../components/Button/ButtonOutline'
import ButtonGradient from '../../components/Button/ButtonGradient'
import Checkout from '../../components/Checkout/Checkout'
import Banner2 from '../../components/Banner/Banner2'
import { productsArray } from '../../data/products'

// products
import item from './../../assets/images/item.png'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Home = () => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className='Home'>

      <Navbar/>

      {/* <Checkout /> */}

      <Banner />

      {/* SECTION 1*/}

      <section className=' bg-[#fff] px-12 py-12'>

        <div className='container px-6 py-6 mx-auto'>
          <div className=''>
            <h2 className='text-5xl font-semibold text-[#433B39]'>Straightforward & Transparent Process</h2>
            <p className='text-base text-[#433B39]'>We love sharing how we produce our products,
              you exactly know what you are getting into your kitchen. </p>

          </div>



          <div className="card-box flex justify-between py-6">

            <div className="card bg-white py-6 flex flex-col">

              <div className="flex items-center w-[100%]">
                <div className="round p-2 w-[fit-content] flex align-center rounded-[50%] bg-[#543731]">
                  <img src={ic4} className="h-[25px]" alt="" />
                </div>
                <div className='h-[1px] bg-[#D0CECE] w-full'></div>
              </div>
              <h6 className='text-lg font-semibold  my-2'>Increased output</h6>
              <p className='w-[70%]'>During solvent extraction, addition of heat & solvents enable achieving a very high output.  </p>
            </div>

            <div className="card flex bg-white py-6 flex-col">

              <div className="flex items-center w-[100%]">
                <div className="round p-2 flex align-center w-[fit-content] rounded-[50%] bg-[#186218]">
                  <img src={ic5} className="h-[25px]" alt="" />
                </div>
                <div className='h-[1px] bg-[#D0CECE] w-full'></div>
              </div>


              <h6 className='text-lg font-semibold my-2'>Removed color & aroma</h6>
              <p className='w-[70%]'>By bleaching process, oil looking as clear as water and without any aroma is achieved.</p>
            </div>


            <div className="card flex w-[30%] bg-white py-6 flex-col">

              <div className="flex items-center w-[100%]">
                <div className="round p-2 flex align-center w-[fit-content] rounded-[50%] bg-[#3877B2]">
                  <img src={ic6} className="h-[25px]" alt="" />
                </div>
              </div>

              <h6 className='text-lg font-semibold my-2'>Increased shelf life</h6>
              <p className='text-base w-[70%]'>Addition of preservatives makes sure that it can be kept on the shelf for longer time.</p>
            </div>


          </div>

        </div>

      </section>

      {/* SECTION 2 */}

      <>
        {/* component */}
        <div className="mx-auto bg-[#186218] lg:py-16  lg:p-12">

          <div className="container pb-12 px-6">
            <h2 className='text-5xl font-semibold text-white w-[50%]'>Eating healthy starts with choosing
              a healthy oil to cook with.</h2>
            <p className='text-white w-[35%] mt-5 opacity-90'>A comparison of refined oil and cold pressed oil would help you understand the key
              differences between the two. Make an informed decision concerning your health.</p>
          </div>

          <div className="container px-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded bg-[#FBF4F4] p-4 lg:p-12">
              <div className="mb-6 flex items-center text-[#B61F1F]">
                <p className="text-xl font-bold uppercase">
                  Refined Oil
                </p>
              </div>
              <div className="item py-3 border-b-2">
                <div className="flex items-center ">
                  <img src={GearSix} alt="" />
                  <p className='ml-2 text-[#726C6B]'>Process involved</p>
                </div>
                <h2 className='text-lg text-[#433B39] font-semibold'>Solvent Extraction </h2>
                <p className='text-[#555555]'>Degumming, Neutralization, Bleaching, Dewaxing, Deodorizing</p>
              </div>

              <div className="item py-3 border-b-2">
                <div className="flex items-center ">
                  <img src={Flask} alt="" />
                  <p className='ml-2 text-[#726C6B]'>Solvents added</p>
                </div>
                <h2 className='text-lg text-[#433B39] font-semibold'>NaOH, Fuller’s earth, CH3-CH2-OH (Ethanol) </h2>
                {/* <p className='text-[#555555]'>Degumming, Neutralization, Bleaching, Dewaxing, Deodorizing</p> */}
              </div>


              <div className="item py-3 border-b-2">
                <div className="flex items-center ">
                  <img src={Thermometer} alt="" />
                  <p className='ml-2 text-[#726C6B]'>Temperature heated to</p>
                </div>
                <h2 className='text-lg text-[#433B39] font-semibold'>Upto 300°C  </h2>
                {/* <p className='text-[#555555]'>Degumming, Neutralization, Bleaching, Dewaxing, Deodorizing</p> */}
              </div>

              <div className="item py-3 ">
                <div className="flex items-center ">
                  <img src={TestTube} alt="" />
                  <p className='ml-2 text-[#726C6B]'>Preservatives added</p>
                </div>
                <h2 className='text-lg text-[#433B39] font-semibold'>BHT, BHA and tocopherol </h2>
                {/* <p className='text-[#555555]'>Degumming, Neutralization, Bleaching, Dewaxing, Deodorizing</p> */}
              </div>

              <button className={`border-2 px-6 border-[#dcdcdc] bg-transparent text-black  font-semibold p-4 w-[100%] rounded text-lg flex justify-center gap-3 mt-6 items-center w-[fit-content] `}>
                <img src={ThumbsDown} alt="" /> Not recommended for health
              </button>


            </div>
            <div className="overflow-hidden rounded bg-[#F4F9F4] p-4 lg:p-12">
              <div className="flex mb-6 items-center  text-[#228B22]">
                <p className="text-xl font-bold uppercase">
                  Cold Pressed Oil
                </p>
              </div>
              <div className="item py-3 border-b-2">
                <div className="flex items-center ">
                  <img src={GearSix} alt="" />
                  <p className='ml-2 text-[#726C6B]'>Process involved</p>
                </div>
                <h2 className='text-lg text-[#433B39] font-semibold'>Cold Pressing </h2>
                <p className='text-[#555555]'>Pressing seeds at low temperature</p>
              </div>

              <div className="item py-3 border-b-2">
                <div className="flex items-center ">
                  <img src={Flask} alt="" />
                  <p className='ml-2 text-[#726C6B]'>Solvents added</p>
                </div>
                <h2 className='text-lg text-[#433B39] font-semibold'>H2O (Water) </h2>
                {/* <p className='text-[#555555]'>Degumming, Neutralization, Bleaching, Dewaxing, Deodorizing</p> */}
              </div>


              <div className="item py-3 border-b-2">
                <div className="flex items-center ">
                  <img src={Thermometer} alt="" />
                  <p className='ml-2 text-[#726C6B]'>Temperature heated to</p>
                </div>
                <h2 className='text-lg text-[#433B39] font-semibold'>Upto 35°C  </h2>
                {/* <p className='text-[#555555]'>Degumming, Neutralization, Bleaching, Dewaxing, Deodorizing</p> */}
              </div>

              <div className="item py-3 ">
                <div className="flex items-center ">
                  <img src={TestTube} alt="" />
                  <p className='ml-2 text-[#726C6B]'>Preservatives added</p>
                </div>
                <h2 className='text-lg text-[#433B39] font-semibold'>None </h2>
                {/* <p className='text-[#555555]'>Degumming, Neutralization, Bleaching, Dewaxing, Deodorizing</p> */}
              </div>

              <button className={`w-full p-4 text-lg px-6 font-medium tracking-wider text-white highlighted-color text-lg transition-colors duration-300 transform  rounded mt-6 lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}>
                See Available Options
              </button>

            </div>
          </div>
        </div>
      </>



      {/* SECTION 3 */}
      <section className='py-12 px-12 bg-[#F4F9F4]'>

        <div className='container py-6 px-6 mx-auto'>
          <div className=''>
            <h2 className='text-5xl font-semibold text-[#433B39]'>Why is oil refined?</h2>
            <p className='text-base text-[#433B39] opacity-80 w-[40%] mt-2'>Most large-scale commercial cooking oil refinement will involve solvent extraction in order to achieve a product with the following properties: </p>

          </div>


          <div className="card-box flex justify-between py-6">

            <div className="card w-[30%] bg-white p-6 flex flex-col">
              <div className="round p-3 w-[fit-content] flex align-center justify-center rounded-[50%] bg-[#543731]">
                <img src={ic1} className="h-[17px]" alt="" />
              </div>
              <h6 className='text-lg font-semibold my-2'>Increased output</h6>
              <p>During solvent extraction, addition of heat & solvents enable achieving a very high output.  </p>
            </div>

            <div className="card flex w-[30%] bg-white p-6 flex-col">
              <div className="round p-2 flex align-center w-[fit-content] rounded-[50%] bg-[#186218]">
                <img src={ic2} className="h-[20px]" alt="" />
              </div>
              <h6 className='text-lg font-semibold my-2'>Removed color & aroma</h6>
              <p>By bleaching process, oil looking as clear as water and without any aroma is achieved.</p>
            </div>


            <div className="card flex w-[30%] bg-white p-6 flex-col">
              <div className="round p-2 flex align-center w-[fit-content] rounded-[50%] bg-[#3877B2]">
                <img src={ic3} className="h-[18px]" alt="" />
              </div>
              <h6 className='text-lg font-semibold my-2'>Increased shelf life</h6>
              <p className='text-base'>Addition of preservatives makes sure that it can be kept on the shelf for longer time.</p>
            </div>


          </div>

        </div>

      </section>


      {/* SECTION 4 */}

      <section className='py-12 px-12'>
        <div className="container px-6 m-auto">
          <h2 className="text-5xl mb-3 font-semibold">Output comparison</h2>
          <p className=' opacity-80 w-[40%]'>Same quantity of seeds on refining produce 50% more oil whereas
            on cold pressing, a lesser yield but 100% pure and chemical free oil is produced.</p>

          <img className='w-[100%] my-12 m-auto' src={Output} alt="" />
        </div>

      </section>


      {/* SECTION 5 */}

      <section className='py-12 px-12 bg-[#F4F9F4] overflow-hidden'>
        <div className="container px-6 m-auto">
          <h2 className="text-5xl mb-3 font-semibold w-[50%]">Never compromise on the
            quality of what you cook with</h2>
          <p className=' opacity-80 w-[40%]'>Experience purity of the oil in all forms. 100% natural & chemical free.</p>

          <div className='flex mt-6'>
            <div class="py-4 w-[60%]">
              <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div class="overflow-hidden rounded bg-white p-4 lg:p-12">
                  <div class="flex flex-col ">
                    <div className="round p-2 w-[fit-content] flex align-center rounded-[50%] bg-[#543731]">
                      <img src={Hearbeat} className="h-[25px]" alt="" />
                    </div>
                    <p className="mt-3 font-bold ">Rich in nutrients</p>
                    <p className='text-sm opacity-90 mt-2'>All the nutrients from the seeds are intact as no chemical processing is done.</p>
                  </div>
                </div>


                <div class="overflow-hidden rounded bg-white p-4 lg:p-12">
                  <div class="flex flex-col ">
                    <div className="round p-2 w-[fit-content] flex align-center rounded-[50%] bg-[#D8940E]">
                      <img src={Wind} className="h-[25px]" alt="" />
                    </div>
                    <p className="mt-3 font-bold ">Aroma like the seed</p>
                    <p className='text-sm opacity-90 mt-2'>You get the typical seed aroma, which is a proof of purity.</p>
                  </div>
                </div>


                <div class="overflow-hidden rounded bg-white p-4 lg:p-12">
                  <div class="flex flex-col ">
                    <div className="round p-2 w-[fit-content] flex align-center rounded-[50%] bg-[#3877B2]">
                      <img src={Sparkle} className="h-[25px]" alt="" />
                    </div>
                    <p className="mt-3 font-bold ">Retained color </p>
                    <p className='text-sm opacity-90 mt-2'>Looking at the oil, you can tell the seed the oil was made from.</p>
                  </div>
                </div>


                <div class="overflow-hidden rounded bg-white p-4 lg:p-12">
                  <div class="flex flex-col ">
                    <div className="round p-2 w-[fit-content] flex align-center rounded-[50%] bg-[#4EA24E]">
                      <img src={Leaf} className="h-[25px]" alt="" />
                    </div>
                    <p className="mt-3 font-bold ">No added preservatives</p>
                    <p className='text-sm mt-2 opacity-90'>We don’t add any preservatives. What you get is a 100% natural product.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="w-[40%] flex relative ">
              <img src={Hand} alt="" className='bottom-[-4.5rem] right-[-4.5rem] absolute w-[110%] z-10  right ' />
              <img src={Subtract} className=' right-[-4.5rem] bottom-[-4.5rem] absolute w-[50%] z-100' alt="" />
            </div>
          </div>

        </div>
      </section>

      {/* Products */}
      <div className='p-12  bg-[#FAFAFA]'>
        <div className="container px-6  mx-auto">
        <div className='text-4xl font-bold mt-4'>Our products</div>
        <div className='text-base text-[#433B39] text-lg mt-2 mb-4'>Explore through our range of cold pressed oils and get started with a healthy lifestyle today.</div>
        <div className="grid grid-cols-3 gap-5 ">
          {
            productsArray?.map((i,key)=>(
              <div className="col-span-1" key={key}>
                <ItemCard imgBg={i.bg} name={i.name} quantity={i.quantity} price={i.price} img={item}/>
              </div>
            ))
          }
        </div>
        </div>
      </div>

      {/* <ItemCard/> */}

      <div className=" bg-[#fff] p-12">

        <div className="container px-6 m-auto">

          <Banner1 />
          <Banner2/>
        </div>

      </div>
      <div className='mt-6 p-[100px]'>
        <Faq />
      </div>
      <Footer/>
    </div>
  )
}

export default Home