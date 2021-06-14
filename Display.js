import react from 'react';

function display({weather, city, dat, state, setState, setCity})
{
    if(state === "weather")
    {
        console.log("render")
        return(
            <div className="container">
                <div className="city-date-temp">
                    <div className="city-name">
                        {city}
                    </div>
                    <div className="date">
                        {dat}
                    </div>
                    <div className="temp">
                        {weather.temp} °C
                    </div>
                </div>
                <div className="other-info">
                    <div className="feels-like">
                        <span>feels like </span> {weather.fl} °C
                    </div>
                    <div className="others">
                        <div>
                            <div className="othersval">pressure</div>
                            <div> {weather.p} hPa</div>
                        </div>
                        <div>
                            <div className="othersval">humidity</div>
                            <div> {weather.h} % </div>
                        </div>
                    </div>
                    <div className="max-min">
                        <div> {weather.tmin} °C </div>
                        <div>/</div>
                        <div> {weather.tmax} °C </div>
                    </div>
                </div>
            </div>
        )
        setState("none");
        setCity("");
    }
    else
    {
        
            return null;
        
    }
}




export default display;