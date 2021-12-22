function createSnowflake() {
  const snowflake = document.createElement("i");
  snowflake.classList.add("far");
  snowflake.classList.add("fa-snowflake");
  snowflake.style.width = Math.random() * 10 + 10 + "px";
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
  snowflake.style.opacity = Math.random();
document.body.appendChild(snowflake);
  
  setTimeout(() => {
    snowflake.remove();
  }, 5000)
}

setInterval(createSnowflake, 100);