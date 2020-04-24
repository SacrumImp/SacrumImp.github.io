const but = document.getElementById("findButton");
const textbox = document.getElementById("line");
but.onclick = find;
let number = 1;

textbox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("findButton").click();
    }
});

function find(){
    const line = textbox.value;
    textbox.value = "";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+line+"&appid=e7248654fb34e78239f774c9f84bad89";
    if(line == ""){
        alert('Название города не введено!');
    }
    else{
        const ask = fetch(url)
        .then((response) => {
            return response.json();
            })
        .then((data) => {
            if(data.cod == "404"){
                alert("Город не найден!")
            }
            else{
                if (number > 5){
                    number = 1;
                    let weathDel;
                    for(i = 1; i < 6; i++){
                        weathDel = document.getElementById("weathTextC"+i);
                        weathDel.parentNode.removeChild(weathDel);
                        weathDel = document.getElementById("weathTextT"+i);
                        weathDel.parentNode.removeChild(weathDel);
                        weathDel = document.getElementById("weathTextH"+i);
                        weathDel.parentNode.removeChild(weathDel);
                        weathDel = document.getElementById("weathImg"+i);
                        weathDel.parentNode.removeChild(weathDel);
                    }
                }
                const chDiv = document.getElementById("div"+number);

                let cityBlocks;

                //город
                cityBlocks = document.createElement('p');
                cityBlocks.className = "weathText";
                cityBlocks.id = "weathTextC" + number;
                cityBlocks.innerHTML = "Город:  " + data.name;
                chDiv.prepend(cityBlocks);
                
                //температура
                cityBlocks = document.createElement('p');
                cityBlocks.className = "weathText";
                cityBlocks.id = "weathTextT" + number;
                cityBlocks.innerHTML = "Температура:  " + Math.round(data.main.temp - 273) + "°";
                chDiv.prepend(cityBlocks);

                //влажность
                cityBlocks = document.createElement('p');
                cityBlocks.className = "weathText";
                cityBlocks.id = "weathTextH" + number;
                cityBlocks.innerHTML = "Влажность:  " + + data.main.humidity + "%";
                chDiv.prepend(cityBlocks);

                //картинка
                cityBlocks = document.createElement('img');
                cityBlocks.className = "weathImg";
                cityBlocks.id = "weathImg" + number;
                cityBlocks.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
                chDiv.prepend(cityBlocks);

                number++;
            }
        })
        .catch(error => {
            alert(error);
        });
    }
}