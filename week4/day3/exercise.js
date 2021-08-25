async function randomPics() {
    const picContainer = document.querySelector(".images")
    const nicePics = await fetch("https://picsum.photos/v2/list");
    const jsonPics = await nicePics.json();
    const coolPic = document.createElement("img")
    coolPic.src = jsonPics.image
    picContainer.append(coolPic)
    return jsonPics;
}

randomPics()