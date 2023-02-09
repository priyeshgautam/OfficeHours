const updateFaceExp =  (currHour) => { // sets moodImage, moodState
  let hourFaceId = 'sleep';
  if (currHour >=10 && currHour <13) {
    hourFaceId = 'awake';
  }  else if (currHour >=13 && currHour <14) {
    hourFaceId = 'food';
  } else if (currHour >=14 && currHour <16) {
    hourFaceId = 'lazy'; 
  } else if (currHour >=16 && currHour <18) {
    hourFaceId = 'drowsy';
  } else if (currHour >=18 && currHour <22) {
    hourFaceId = 'dead';
  } 
  var url = `./assets/moods/${hourFaceId}.png`;

  // sets moodImage
  document.getElementById("photo").src = url;

  //convert to Pascal case
  hourFaceId = hourFaceId.replace(/\w+/g,function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});
  // sets moodState
  document.getElementById("moodState").innerText = `State : ${hourFaceId}`;
  document.getElementById("moodState").textContent = `State : ${hourFaceId}`;
};

const updateTime =  () => { //sets clockTime, timeLeft
  var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    if (h == 0) {
      h = 12;
    }
    if (h > 12) {
      h = h - 12;
      session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;
    
    //sets clockTime,
    document.getElementById("clockDisplay").innerText = `Current Time :${time}`;
    document.getElementById("clockDisplay").textContent = `Current Time :${time}`;

    //sets timeLeft
    document.getElementById("timeLeft").innerText = `Office Hours Left : ${Math. abs(date.getHours() - 19)}`;
    document.getElementById("timeLeft").textContent = `Office Hours Left : ${Math. abs(date.getHours() - 19)}`;
    return  date.getHours();
};

document.addEventListener("DOMContentLoaded", async () => {

    const currHour = updateTime();
    setTimeout(function() {}, 1000); 

    setInterval(()=>{
      updateTime();
      updateFaceExp(currHour)
    }, 1000)
});

