import React ,{useState} from 'react';


function DisplayFive({state, five, city, dat, dates, setState, setCity}){
    if(state === "five")
    {
        console.log("render")
        return(
            <div className="five-container">
                <div className="city-date-five">
                    <div className="city-five">
                        {city}
                    </div>
                    <div className="date-five">
                        {dat}
                    </div>
                </div>
                <div className="data-five ">
                    {
                        dates.map(element => (
                            <div className="dates data-child">{element}</div>
                        ))
                    }
                </div>
                <div className="data-five dets">
                     
                     {   
                       five.map(element => (
                              <div className="data-child">
                                  <div>{element.temp} °C</div>
                                  <div>pressure <span>{element.pressure} hPa</span></div>
                                  <div>humidity <span>{element.humidity} %</span></div>
                                  <div>{element.temp_min} °C <span>/</span> {element.temp_max} °C</div>
                              </div> 
                        ))
                    }
                </div>
            </div>
        )
        setCity("");
        setState("none");
    }
    else{
        return null;
    }
}



export default DisplayFive;