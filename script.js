function getSkinHead() {
    let username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Lütfen bir Minecraft kullanıcı adı girin!");
        return;
    }

    // 2D Avatar
    let avatar2D = document.getElementById("avatar2D");
    avatar2D.src = `https://mc-heads.net/avatar/${username}/100`;
    avatar2D.style.display = "block";

    // 3D Kafa
    let avatar3D = document.getElementById("avatar3D");
    avatar3D.src = `https://mc-heads.net/head/${username}/100`;
    avatar3D.style.display = "block";
}

