import React, { useRef } from "react";
import "./App.css";

const App = () => {
  const ref = useRef(null);
  const UserGreeings = ["hello", "hey raj", "ok raj", "hi"];
  const greetings = ["Hello!", "What can I do for you?", "Hai", "Hey!"];
  const Current = ["what time is it", "what is the time now", "time"];
  const Identity = ["what is your name", "name", "what's your name"];
  const CurrentWeather = [
    "weather",
    "what's the weather today",
    "what is today's weather",
    "please show me today's weather",
    "open weather",
  ];
  const BadWords = [
    "porn",
    "xnxx.com",
    "sex",
    "xnxx",
    "bitch",
    "lanja",
    "asshole",
    "pornhub.com",
    "fuck",
    "fucku",
    "can i fuck you",
    "fuck you",
    "fuck off",
  ];
  const BadWordsresult = [
    "I will Fuck you to your death you bitch",
    "fuck off you dumb ass",
    "your an asshole",
    "fuck you",
  ];
  const playSongs = [
    "play songs",
    "open spotify",
    "telugu songs",
    "tamil songs",
    "hindi songs",
    "engish songs",
    "sing a song for me",
  ];
  const networkSpeed = [
    "check my network speed",
    "check my net speed",
    "network speed",
  ];
  const Maps = [
    "open maps",
    "open google maps",
    "show me maps",
    "navigate",
    "maps",
  ];
  const News = [
    "show me today's news",
    "show me news",
    "show me today's updates",
    "news",
    "tell me the today's news",
  ];
  const userLocation = [
    "show me my location",
    "where am i",
    "show my location",
    "my location",
    "location",
  ];
  const covid = ["covid19", "corona", "corona virus"];
  var msg = new SpeechSynthesisUtterance();
  function assistant() {
    var RandomItem = greetings[Math.floor(Math.random() * greetings.length)];
    var RandomBadWord =
      BadWordsresult[Math.floor(Math.random() * BadWordsresult.length)];
    if (UserGreeings.includes(ref.current.value)) {
      let page = RandomItem;
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
    }
    if (ref.current.value === "good morning") {
      let page = "good morning , have a good day";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
    }
    if (ref.current.value === "good afternoon") {
      let page = "wooh , its a sunny day";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
    }
    if (ref.current.value === "good evening") {
      let page = "good evening , have a snack";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
    }
    if (ref.current.value === "good night") {
      let page = "good night , have a good sleep";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
    }
    if (Current.includes(ref.current.value)) {
      let currentDate = new Date();
      let time =
        currentDate.getHours() + "hours" + currentDate.getMinutes() + "minutes";
      let page = time;
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
    }
    if (Identity.includes(ref.current.value)) {
      let page = "I am Raj";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
    }
    if (CurrentWeather.includes(ref.current.value)) {
      const sucessCallback = (position) => {
        console.log(position);
        let link =
          "https://www.accuweather.com/en/in/" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          "/186797/weather-forecast/186797";
        window.location.href = link;
      };
      const errorCallback = (error) => {
        console.log(error);
      };
      let page = "opening web page";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback);
      ref.current.value = "";
    }
    if (networkSpeed.includes(ref.current.value)) {
      let page = "ready to check your network speed";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
      let link = "https://www.fast.com/";
      window.location.href = link;
    }
    if (BadWords.includes(ref.current.value)) {
      let page = RandomBadWord;
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
    }
    if (playSongs.includes(ref.current.value)) {
      let page = "opening spotify";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
      let link = "https://open.spotify.com/";
      window.location.href = link;
    }
    if (Maps.includes(ref.current.value)) {
      let page = "opening maps";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
      let link = "https://www.google.com/maps";
      window.location.href = link;
    }
    if (ref.current.value === "open google") {
      let page = "opening google";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
      let link = "https://www.google.com/";
      window.location.href = link;
    }
    if (ref.current.value === "open youtube") {
      let page = "opening youtube";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
      let link = "https://www.youtube.com/";
      window.location.href = link;
    }
    if (ref.current.value === "open playstore") {
      let page = "opening playstore";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
      let link = "https://play.google.com/store";
      window.location.href = link;
    }
    if (News.includes(ref.current.value)) {
      let page = "Today's news for you";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
      let link = "https://www.bbc.com/news";
      window.location.href = link;
    }
    if (userLocation.includes(ref.current.value)) {
      const sucessCallback = (position) => {
        let link =
          "https://www.google.com/search?q=" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          "&oq=" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          "&aqs=chrome.0.69i59j0i271l3.2400j0j7&sourceid=chrome&ie=UTF-8";
        window.location.href = link;
      };
      const errorCallback = (error) => {
        console.log(error);
      };
      let page = "your location is right at here";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback);
      ref.current.value = "";
    }
    if (covid.includes(ref.current.value)) {
      let page = "opening webpage";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      ref.current.value = "";
      let link = "https://covid19.who.int/";
      window.location.href = link;
    }
    if (ref.current.value === "new movies") {
      let page = "searching google for new movies";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      let link =
        "https://www.google.com/search?q=new+movies&oq=new+movies&aqs=chrome.0.69i59j0i271l3.2400j0j7&sourceid=chrome&ie=UTF-8";
      window.location.href = link;
      ref.current.value = "";
    }
    if (ref.current.value === "hospitals near me") {
      const sucessCallback = (position) => {
        let link =
          "https://www.google.com/maps/search/hospitals+near+me/@" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          ",14z";
        window.location.href = link;
      };
      const errorCallback = (error) => {
        console.log(error);
      };
      let page = "these are the hospitals near you";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback);
      ref.current.value = "";
    }
    if (ref.current.value === "schools near me") {
      const sucessCallback = (position) => {
        let link =
          "https://www.google.com/maps/search/schools+near+me/@" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          ",14z";
        window.location.href = link;
      };
      const errorCallback = (error) => {
        console.log(error);
      };
      let page = "these are the schools near you";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback);
      ref.current.value = "";
    }
    if (ref.current.value === "restaurents near me") {
      const sucessCallback = (position) => {
        let link =
          "https://www.google.com/maps/search/restaurents+near+me/@" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          ",14z";
        window.location.href = link;
      };
      const errorCallback = (error) => {
        console.log(error);
      };
      let page = "the food is still hot , go and eat";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback);
      ref.current.value = "";
    }
    if (ref.current.value === "apollo near me") {
      const sucessCallback = (position) => {
        let link =
          "https://www.google.com/maps/search/apollo+near+me/@" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          ",14z";
        window.location.href = link;
      };
      const errorCallback = (error) => {
        console.log(error);
      };
      let page = "these are the apollos near you";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback);
      ref.current.value = "";
    }
    if (ref.current.value === "hotels near me") {
      const sucessCallback = (position) => {
        let link =
          "https://www.google.com/maps/search/hotels+near+me/@" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          ",14z";
        window.location.href = link;
      };
      const errorCallback = (error) => {
        console.log(error);
      };
      let page = "go and take a nap , there's still rooms are available";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback);
      ref.current.value = "";
    }
    if (ref.current.value === "theaters near me") {
      const sucessCallback = (position) => {
        let link =
          "https://www.google.com/maps/search/theaters+near+me/@" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          ",14z";
        window.location.href = link;
      };
      const errorCallback = (error) => {
        console.log(error);
      };
      let page = "blockbuster movies are currently rolling in these theaters ";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback);
      ref.current.value = "";
    }
    if (ref.current.value === "tourists spots near me") {
      const sucessCallback = (position) => {
        let link =
          "https://www.google.com/maps/search/tourists+spots+near+me/@" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          ",14z";
        window.location.href = link;
      };
      const errorCallback = (error) => {
        console.log(error);
      };
      let page = "pack your bags for a trip";
      msg.text = page;
      window.speechSynthesis.speak(msg);
      navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback);
      ref.current.value = "";
    }
    ref.current.value = "";
  }
  return (
    <div className="Container">
      <input ref={ref} type="text" id="text" placeholder="TYPE!" />
      <button id="btn" onClick={assistant}>
        SUBMIT
      </button>
    </div>
  );
};

export default App;
