async function getCarPics () {
    //create a variable
    // await fetch (URL goes here)
    const carContainer = document.querySelector(".car-images")
    const carPics = await fetch(
        "https://randomfox.ca/floof/");
    const jsonCars = await carPics.json();
    const carImage = document.createElement("img")
    carImage.src = jsonCars.image
    carImage.height = "400";
    carImage.width = "600";
    carContainer.append(carImage)
    return jsonCars;
}
getCarPics();