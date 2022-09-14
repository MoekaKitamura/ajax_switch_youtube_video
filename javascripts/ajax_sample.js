function getData() {
  const button = document.getElementById("btn");
  const titleArea = document.getElementById("title");
  const contentArea = document.getElementById("content");
  const videoArea = document.getElementById("video");

  let index = 0
  button.onclick = function() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
          titleArea.innerHTML = request.response[index].title;
          contentArea.innerHTML = request.response[index].content;
          videoArea.setAttribute("src", request.response[index].url);
          index++;
          if (index == request.response.length) index = 0 
        }
      }
    };
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
  };
};

window.onload = getData;

