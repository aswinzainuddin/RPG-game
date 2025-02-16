document.addEventListener("DOMContentLoaded", () => {
    const randomNameBtn = document.getElementById("random-name-button");
    const playerName = document.getElementById("player-name");
    const submitForm = document.getElementById("submit-name");
    const genderPick = document.querySelector(".gender-pick");
    const genderOptions = document.querySelectorAll(".gender-pick-container div");
    const avatarModal = document.querySelector(".avatar");
    const maleAvatars = document.querySelector(".male-avatar");
    const femaleAvatars = document.querySelector(".female-avatar");
    const undefineAvatars = document.querySelector(".undefine-avatar");
    const closeAvatarBtn = document.querySelector(".close-icon");

    const randomNames = ["Eldrin", "Thalor", "Seraphina", "Garrik", "Vexaria", "Drogan", "Liora", "Pasta Sempa"];

    // 🎲 Generate Random Name
    randomNameBtn?.addEventListener("click", () => {
        playerName.value = randomNames[Math.floor(Math.random() * randomNames.length)];
    });

    // 📝 Show gender selection after name submission
    submitForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        if (playerName.value.trim() === "") {
            alert("Please enter a name!");
            return;
        }
        genderPick?.classList.add("show"); // Ensure gender selection is visible
    });

    // 🎭 Show Avatar Selection Based on Gender
    genderOptions?.forEach(option => {
        option.addEventListener("click", () => {
            avatarModal?.classList.add("show"); // Ensure avatar modal is visible

            // Hide all avatar sections first
            [maleAvatars, femaleAvatars, undefineAvatars].forEach(section => section.style.display = "none");

            // Show the correct avatar section
            if (option.classList.contains("male")) {
                maleAvatars.style.display = "flex";
            } else if (option.classList.contains("female")) {
                femaleAvatars.style.display = "flex";
            } else {
                undefineAvatars.style.display = "flex";
            }
        });
    });

    // ❌ Close Avatar Modal
    closeAvatarBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        avatarModal?.classList.remove("show");
    });
});
