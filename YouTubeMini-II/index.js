let arrData =[];
let container = document.querySelector("#container");
let apiKey = "AIzaSyDPb11NfyvxDxcUGdqJwGpvoXT-ByaLlvk";
https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${API_KEY}&part=snippet&maxResults=20

window.addEventListener("load", () =>{
  onOpen()
})
async function onOpen(){
  try {
    
    let res1 = await fetch(
      `https:///youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${apiKey}&part=snippet&maxResults=40`
    );
    let { items } = await res1.json();
    let actdata = items;
    onCoad(actdata);
    console.log(actdata);
  } catch (err) {
    console.log("error");
  }
}
onOpen();

let getData = async () => {
   
  try {
    let query = document.querySelector("#query").value;
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${query}&order=viewCount&key=${apiKey}&part=snippet&maxResults=40&videoEmbeddable=any`
    );
    let { items } = await res.json();
    let data = items;
    appendData(data);
    console.log(data);
  } catch (err) {
    console.log("error");
  }
};

let onCoad = (actdata) => {
  
  container.innerHTML = null;
  actdata.forEach(({snippet:{title,channelTitle,thumbnails},id}) => {
    let div = document.createElement("div");
    let thumbnail = document.createElement("img");
    thumbnail.src =thumbnails.high.url;
    thumbnail.addEventListener("click", function(){
      
      let addData = {
        
        id:id,
        name:title,
        channeltitle:channelTitle,
        
      }

      localStorage.setItem("moviesData", JSON.stringify(addData));
      location.href="video.html"
    })
    let title1 = document.createElement("p");
    title1.innerHTML = title;
    let name = document.createElement("p");
    name.innerHTML = channelTitle;
    div.append(thumbnail, title1, name);
    container.append(div);
    
  });
    
};


let appendData = (data) => {
  
  container.innerHTML = null;
  data.forEach(({snippet:{title,channelTitle,thumbnails},id:{videoId}}) => {
    let div = document.createElement("div");
    let thumbnail = document.createElement("img");
    thumbnail.src =thumbnails.high.url;
    thumbnail.addEventListener("click", function(){
      
      let addData = {
        
        id:videoId,
        name:title,
        channeltitle:channelTitle,
        
      }

      localStorage.setItem("moviesData", JSON.stringify(addData));
      location.href="video.html"
    })
    let title1 = document.createElement("p");
    title1.innerHTML = title;
    let name = document.createElement("p");
    name.innerHTML = channelTitle;
    div.append(thumbnail, title1, name);
    container.append(div);
    
  });
    
};
