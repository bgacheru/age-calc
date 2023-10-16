function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const currentDate = new Date();

    if (birthdate > currentDate) {
        alert("Please enter a valid birthdate.");
    } else {
        const ageInMilliseconds = currentDate - birthdate;
        const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        const age = Math.floor(ageInYears);

        document.getElementById("result").textContent = `You are ${age} years old.`;
    }
}
