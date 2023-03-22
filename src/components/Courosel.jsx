import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import sideimg from "../assets/signupimage.png"
// import Signup from './SignUp';



export default class extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          Slid: [
            {
              id: 0,
              image:sideimg,
              feed:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta porro, ut pariatur sunt, maiores, ex quo perspiciatis fugit dolorem optio dolorum ea! Cum doloribus maiores ratione? Quasi, placeat quod.",
              name:"Abhishek",
              date:"23/7/2002"
            },

            {
              id:1,
              image:sideimg,
              feed:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta porro, ut pariatur sunt, maiores, ex quo perspiciatis fugit dolorem optio dolorum ea! Cum doloribus maiores ratione? Quasi, placeat quod.",
              name:"manu",
              date:"23/7/2001"
            },
            {
              id:2,
              image:sideimg,
              feed:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta porro, ut pariatur sunt, maiores, ex quo perspiciatis fugit dolorem optio dolorum ea! Cum doloribus maiores ratione? Quasi, placeat quod.",
              name:"parth",
              date:"23/7/2001"
            },
            {
              id:3,
              image:sideimg,
              feed:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta porro, ut pariatur sunt, maiores, ex quo perspiciatis fugit dolorem optio dolorum ea! Cum doloribus maiores ratione? Quasi, placeat quod.",
              name:"vishal",
              date:"23/7/2001"
            },
            {
              id:4,
            image:sideimg,
              feed:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta porro, ut pariatur sunt, maiores, ex quo perspiciatis fugit dolorem optio dolorum ea! Cum doloribus maiores ratione? Quasi, placeat quod.",
              name:"utkarsh",
              date:"23/7/2001"
            },
          ]
        };
      }
        
    
    render() {
        const { Slid } = this.state;
      return (

        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={5} className=" mb-14  bg-black text-white mx-20 py-0 rounded-3xl  opacity-50"
        >
            <div className=' pt-5 text-2xl flex justify-center'>
                <h2>Thought Shared </h2>
            </div>
          <Slider className='w-full h-60    '>

            { Slid.map((item)=>(
                 <Slide className='' index={item.id}>
                    <div className='caou p-10 flex flex-col justify-center'>
                 <div className='caou1 flex gap-2 mx-60 '>
                    <div className='Coimg w-20 rounded-tl-3xl '>
                      <img src={item.image} alt="" />
                    </div>
                    <div className='Cocontent'>
                        <h4>{item.name}</h4>
                        <p>{item.date}</p>
                    </div>
                 </div>
                 <div className='caou2 px-60'>
                  <p>{item.feed}</p>
                 </div>
              </div>
      </Slide> 
            ))
    }

          </Slider>
          <div className='flex justify-evenly pb-2'>

          <ButtonBack className=''>Back</ButtonBack>
          <ButtonNext className='' >Next</ButtonNext>
          </div>
        </CarouselProvider>
      );
    }
  }