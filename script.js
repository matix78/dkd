function addLinks() {
    const selectElement = document.getElementById("months");

    if (selectElement) {
        const meetingsList = document.getElementById("meetingsList");

        const existingLinks = meetingsList.querySelectorAll("li");
        const link0Exists = Array.from(existingLinks).some(link => link.textContent.includes("08-03-2024"));
        const link1Exists = Array.from(existingLinks).some(link => link.textContent.includes("09-03-2024"));
        const link2Exists = Array.from(existingLinks).some(link => link.textContent.includes("10-03-2024"));

        if (!link0Exists) {
            const link0 = document.createElement("li");
            const anchor0 = document.createElement("a");
            anchor0.className = "view dkd-color";
            anchor0.href = "./08-03-2024.html";
            anchor0.textContent = "🟢08-03-2024-brak żadnego spotkania na ten dzień";
            link0.appendChild(anchor0);
            meetingsList.appendChild(link0);
        }

        if (!link1Exists) {
            const link1 = document.createElement("li");
            const anchor1 = document.createElement("a");
            anchor1.className = "view dkd-color";
            anchor1.href = "./09-03-2024.html";
            anchor1.textContent = "🔴09-03-2024-rezerwacja-kubens";
            link1.appendChild(anchor1);
            meetingsList.appendChild(link1);
        }

        if (!link2Exists) {
            const link2 = document.createElement("li");
            const anchor2 = document.createElement("a");
            anchor2.className = "view dkd-color";
            anchor2.href = "./10-03-2024.html";
            anchor2.textContent = "🔴10-03-2024-gang-olsena-urodziny-łośka";
            link2.appendChild(anchor2);
            meetingsList.appendChild(link2);
        }
    }
}
