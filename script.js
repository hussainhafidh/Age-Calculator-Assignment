function calculateAge() {
    let d1 = document.getElementById("date-input").value;
    let m1 = document.getElementById("month-input").value;
    let y1 = document.getElementById("year-input").value;
    let date = new Date();
    let d2 = date.getDate();
    console.log(d2)

    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

    if(m1 > m2){
        m2 =m2 +12;
        y2 = y2 -1;
    }

    let d = d2 - d1;
    let m = m2 -m1;
    let y = y2- y1;
    document.getElementById("result").innerHTML = "Your age is " + y + " years " + m + " months " + d + " days";

}


/////////////

// function calculateAge() {
//     let dateNode = document.getElementById("date-input");
//     let date = parseInt(dateNode.value);

//     let monthNode = document.getElementById("month-input");
//     let month = parseInt(monthNode.value);

//     let yearNode = document.getElementById("year-input");
//     let year = parseInt(yearNode.value);

//     let errorMessage = "Please enter valid data for ";

//     if (isNaN(date) || date <= 0 || date >= 31) {
//         errorMessage += "Date Field, "
//     }

//     if (isNaN(month) || month <= 0 || month >= 12) {
//         errorMessage += "Month Field, "
//     }

//     if (isNaN(year) || year <= 0) {
//         errorMessage += "Year Field, "
//     }

//     if (errorMessage !== "Please enter valid data for ") {
//         document.getElementById("result").innerText = errorMessage;
//     }
//     else {
//         let now = new Date();
//         let presentYear = now.getFullYear();
//         let presentMonth = now.getMonth();
//         let presentDate = now.getDate();

//         let resultYear = presentYear - year;
//         let resultMonth = presentMonth - month;
//         if (resultMonth < 0) {
//             resultMonth += 12;
//             resultYear--
//         }

//         let resultDays = presentDate - date;
//         if (resultDays < 0) {
//             resultDays += 30;
//             resultMonth--
//         }

//         let resultAge = ` Your Age is $(resultYear) years $(resultMonth) months $(resultDays) Days`;
//         document.getElementById("result").innerText = resultAge;

//     }


// }