var searchimage=document.getElementById("#searchimage");
//searchimage.addEventListener("click", displayImage)
function displayImage()
{
  alert("display");
  var img=document.createElement("img");
  img.src="https://miro.medium.com/max/1200/1*oOcY2Gn-LVt1h-e9xOv5oA.jpeg";
  img.width=300;
  img.height=300;
  document.body.appendChild(img);
}
