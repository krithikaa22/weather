import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Dw from './Display';
import Df from './DisplayFive';

function App() {

  const [city, setCity] =  useState("");
  const [weather, setWeather] = useState({});
  const [dat, setDate] = useState("");
  const [state, setState] = useState("none");
  const [five ,setFive] = useState([]);
  const [dates, setDates] = useState([]);

  const cityHandler = (e) => {
    setCity(e.target.value);
    setState("none");
    setFive([]);
    setWeather({});
    var d = new Date();
    var day = d.getDay();
    switch (day)
    {
      case 1: day = 'Monday'; break;
      case 2: day = 'Tuesday'; break;
      case 3: day = 'Wednessday'; break;
      case 4: day = 'Thursday'; break;
      case 5: day = 'Friday'; break;
      case 6: day = 'Saturday'; break;
      case 0: day = 'Sunday'; break;
    }
    var fulldate = day + '  '+ d.getDate() + '/' + d.getMonth() + '/' +d.getFullYear() ;
    setDate(fulldate);
    console.log(dat)
  }

  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  const key = '4eb14807fe3ab5d4c279c90502bcdd26';
  const getWeather = (e) => {
    e.preventDefault();
    setState("none");
    console.log("api");
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4eb14807fe3ab5d4c279c90502bcdd26&units=metric`;
    fetch(api)
      .then(response => {
          return response.json();
      })
      .then(function(data)
      {
        setWeather({
          ['fl']: data.main.feels_like,
          ['p']: data.main.pressure,
          ['h']: data.main.humidity,
          ['temp']: data.main.temp,
          ['tmin']: data.main.temp_min,
          ['tmax']: data.main.temp_max
        })
        //console.log(weather)
        //console.log(weather.fl)
      })
      setState("weather");
  }
  const getFive = (e) => {
    e.preventDefault();
    console.log("api");
    let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=4eb14807fe3ab5d4c279c90502bcdd26&units=metric`;
    fetch(api)
     .then(response => {
         return response.json();
     })
     .then(function(data){
       //var str = data.list[0].dt_txt;
       //var new_str = str.split(" ")
       //console.log(new_str[0])
       var date_arr = [];
        var arr = [];
        //console.log(data.list)
        for(var i=0; i<5; i++)
        {
          //console.log(data.list[i*6].main);
          let obj = data.list[i*8].main;
          arr.push(obj);
          let str = data.list[i*8].dt_txt.split(" ");
          var temp = str[0].split("-");
          temp = temp[2] + ' / ' + temp[1] + ' / ' + temp[0];
          date_arr.push(temp);
          //console.log(data.list[i*8].dt_txt)
        }
        setDates(date_arr);
        setFive(arr);
        //console.log(five);
        //console.log(date_arr)
     })
     setState("five");
  }

  return (
    <body className="main">
       <div className="form">
        <form>
            <label for="city">Enter city:</label><br></br>
            <input type="text" name="city" onChange={cityHandler}></input>
            <button onClick={getWeather}>Today</button>
            <button onClick={getFive}>Five Days</button>
        </form>
        </div>
        <br></br>
      <Dw weather={weather} city={city} dat={dat} state={state} setState={setState} setCity={setCity}></Dw>
      <Df state={state} five={five} city={city} dat={dat} dates={dates} setState={setState} setCity={setCity}></Df>
    </body>
  );
}

export default App;