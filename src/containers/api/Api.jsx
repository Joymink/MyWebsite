import '../api/api.css'
import ApiCards from '../../components/api-cards/ApiCards'
import React, {useState} from 'react'


let url = "http://www.boredapi.com/api/activity/"

const Api = () => {
  let [data1, setData1] = useState([]);
  let [data2, setData2] = useState([]);
  let [data3, setData3] = useState([]);
  const [why, setWhy] = useState(false);
  const fetchInfo = async (num) => { 
    console.log("Fetch Info");
    let x = 0;
    while(x<3){
      url=`https://www.boredapi.com/api/activity?participants=${num}`
      
      await fetch(url) 
              .then((res) => res.json()) 
              .then((d) => {
                if(x===1){
                  setData1(d);
                }
                else if (x===2){
                  setData2(d);
                }
                else{
                  setData3(d);
                }
                }
              )
      x++;
    }

  }


  return (
    <div className='api-container' id='api'>
      <div className="api-content">
        <div className="api-title">
            <h2>Need Something Fun to do?</h2>
        </div>
        
        <div className={data1.activity?'api-cards':'hidden'}>
          
          <ApiCards 
            number={1} 
            activity={data1.activity} 
            participants={data1.participants} 
            price={data1.price>=.9? '$$$$' : data1.price>=.65? "$$$" : data1.price>=.35? "$$" : data1.price>0? "$": "Free"} 
            accessibility ={data1.accessibility}

          />
          
          <ApiCards 
            number={2} 
            activity={data2.activity} 
            participants={data2.participants} 
            price={data2.price>=.9? '$$$$' : data2.price>=.65? "$$$" : data2.price>=.35? "$$" : data2.price>0? "$": "Free"} 
            accessibility ={data2.accessibility}
          />
          <ApiCards 
            number={3}
            activity={data3.activity} 
            participants={data3.participants} 
            price={data3.price>=.9? '$$$$' : data3.price>=.65? "$$$" : data3.price>=.35? "$$" : data3.price>0? "$": "Free"} 
            accessibility ={data3.accessibility}
         />
        </div>

        <div className='api-input_container'>
          <h4>Number of People In your Activity?</h4>
          <div className="buttons">
            <button onClick={()=>fetchInfo(1)}>1</button>
            <button onClick={()=>fetchInfo(2)}>2</button>
            <button onClick={()=>fetchInfo(3)}>3</button>
            <button onClick={()=>fetchInfo(4)}>4</button>
          </div>

        </div>
        <div className="api-explaination_container">
            <div onClick={()=>setWhy(!why)}>
              {
                why?(
                  <p>Close</p>
                ):(
                  <p>Why this api?</p>
                )
              }
            </div>
            <div className={why?'api-explaination':"hidden"}>
              <p>
                I chose to use this api because I want people to get that spark back, learn something new, do something new.
                Here are fresh ideas to spice up and inspire the one life you get to live. <br /> and you get to chose how many people you want to join you!
              </p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Api
