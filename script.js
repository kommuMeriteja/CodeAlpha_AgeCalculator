function calculateAge() {

    let dob = document.getElementById("dob").value;

    if (dob === "") {
        alert("Please select your Date of Birth.");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    if (birthDate > today) {
        alert("Date of Birth cannot be in the future.");
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;

        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);

        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let result = document.getElementById("result");

    result.style.display = "block";

    result.innerHTML = `
        <h2>Your Age</h2>

        <div class="age">

            🎉 ${years} Years <br>

            📅 ${months} Months <br>

            🌞 ${days} Days

        </div>
    `;
}