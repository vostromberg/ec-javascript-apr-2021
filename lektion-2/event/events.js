function handleClick(){
    //this kommer att referera till knappen
    console.log("click 1", this);
}

const handleClick2 = function(){
    // this refererar till knappen
    console.log("click 2", this)
}

const handleClick3 = () => {
    // this refererar till scopet för handleClick3
    console.log("click 3", this)
}

const button = document.createElement("button");
button.innerText = "Klicka här";
button.addEventListener("click", handleClick);
button.addEventListener("click", handleClick2);
button.addEventListener("click", handleClick3);
document.body.appendChild(button);

