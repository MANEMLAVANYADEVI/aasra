document.addEventListener("DOMContentLoaded", () => {

    // Mobile menu
    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", () => {
            navbar.classList.toggle("mobile-active");
        });
    }

    // Close mobile menu after clicking a link
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navbar?.classList.remove("mobile-active");
        });
    });

    // Header effect while scrolling
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 50);
        }
    });

});
/* =====================================================
   BENEFICIARY MANAGEMENT
===================================================== */

const beneficiaryForm = document.getElementById("beneficiaryForm");
const showFormBtn = document.getElementById("showFormBtn");
const cancelFormBtn = document.getElementById("cancelFormBtn");
const beneficiaryFormSection = document.getElementById("beneficiaryFormSection");
const searchBeneficiary = document.getElementById("searchBeneficiary");


/* Show Beneficiary Form */

if (showFormBtn && beneficiaryFormSection) {

    showFormBtn.addEventListener("click", () => {

        beneficiaryFormSection.style.display = "block";

        beneficiaryFormSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}


/* Cancel Form */

if (cancelFormBtn && beneficiaryFormSection && beneficiaryForm) {

    cancelFormBtn.addEventListener("click", () => {

        beneficiaryForm.reset();

        beneficiaryFormSection.style.display = "none";

    });

}


/* Add Beneficiary */

if (beneficiaryForm) {

    beneficiaryForm.addEventListener("submit", (event) => {

        event.preventDefault();


        // Get form values

        const name =
            document.getElementById("beneficiaryName").value;

        const age =
            document.getElementById("beneficiaryAge").value;

        const location =
            document.getElementById("beneficiaryLocation").value;

        const disability =
            document.getElementById("disabilityType").value;


        // Create new table row

        const newRow = document.createElement("div");

        newRow.classList.add("beneficiary-row");


        newRow.innerHTML = `

            <span>
                ${name}
            </span>

            <span>
                ${age}
            </span>

            <span>
                ${location}
            </span>

            <span>
                ${disability}
            </span>

            <span class="status active">
                Active
            </span>

        `;


        // Add row to table

        const table =
            document.querySelector(".beneficiary-table");

        if (table) {

            table.appendChild(newRow);

        }


        // Show success message

        alert("Beneficiary added successfully!");


        // Clear form

        beneficiaryForm.reset();


        // Hide form

        beneficiaryFormSection.style.display = "none";

    });

}


/* Search Beneficiary */

if (searchBeneficiary) {

    searchBeneficiary.addEventListener("input", () => {

        const searchValue =
            searchBeneficiary.value.toLowerCase();

        const rows =
            document.querySelectorAll(".beneficiary-row");

        rows.forEach((row) => {

            const rowText =
                row.textContent.toLowerCase();

            if (rowText.includes(searchValue)) {

                row.style.display = "grid";

            } else {

                row.style.display = "none";

            }

        });

    });

}
/* =====================================================
   HEALTHCARE & APPOINTMENT MANAGEMENT
===================================================== */

const appointmentForm =
    document.getElementById("appointmentForm");

const showAppointmentBtn =
    document.getElementById("showAppointmentBtn");

const cancelAppointmentBtn =
    document.getElementById("cancelAppointmentBtn");

const appointmentFormSection =
    document.getElementById("appointmentFormSection");


/* Show Appointment Form */

if (showAppointmentBtn && appointmentFormSection) {

    showAppointmentBtn.addEventListener("click", () => {

        appointmentFormSection.style.display = "block";

        appointmentFormSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}


/* Cancel Appointment Form */

if (
    cancelAppointmentBtn &&
    appointmentFormSection &&
    appointmentForm
) {

    cancelAppointmentBtn.addEventListener("click", () => {

        appointmentForm.reset();

        appointmentFormSection.style.display = "none";

    });

}


/* Add Appointment */

if (appointmentForm) {

    appointmentForm.addEventListener("submit", (event) => {

        event.preventDefault();


        // Get appointment information

        const beneficiary =
            document.getElementById(
                "appointmentBeneficiary"
            ).value;

        const type =
            document.getElementById(
                "appointmentType"
            ).value;

        const date =
            document.getElementById(
                "appointmentDate"
            ).value;

        const therapist =
            document.getElementById(
                "therapistName"
            ).value;

        const status =
            document.getElementById(
                "appointmentStatus"
            ).value;


        // Convert date to readable format

        const formattedDate =
            new Date(date + "T00:00:00")
                .toLocaleDateString(
                    "en-GB",
                    {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    }
                );


        // Create new appointment row

        const newRow =
            document.createElement("div");

        newRow.classList.add(
            "appointment-row"
        );


        // Choose status class

        let statusClass = "pending";

        if (status === "Upcoming") {

            statusClass = "upcoming";

        } else if (status === "Completed") {

            statusClass = "completed";

        }


        newRow.innerHTML = `

            <span>
                ${beneficiary}
            </span>

            <span>
                ${type}
            </span>

            <span>
                ${formattedDate}
            </span>

            <span>
                ${therapist}
            </span>

            <span class="status ${statusClass}">
                ${status}
            </span>

        `;


        // Add appointment to table

        const table =
            document.querySelector(
                ".appointment-table"
            );

        if (table) {

            table.appendChild(newRow);

        }


        // Success message

        alert(
            "Appointment added successfully!"
        );


        // Clear form

        appointmentForm.reset();


        // Hide form

        appointmentFormSection.style.display =
            "none";

    });

}
/* =====================================================
   VOLUNTEER MANAGEMENT
===================================================== */

const volunteerForm =
    document.getElementById("volunteerForm");

const showVolunteerBtn =
    document.getElementById("showVolunteerBtn");

const cancelVolunteerBtn =
    document.getElementById("cancelVolunteerBtn");

const volunteerFormSection =
    document.getElementById("volunteerFormSection");

const searchVolunteer =
    document.getElementById("searchVolunteer");


/* Show Volunteer Form */

if (showVolunteerBtn && volunteerFormSection) {

    showVolunteerBtn.addEventListener("click", () => {

        volunteerFormSection.style.display = "block";

        volunteerFormSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}


/* Cancel Volunteer Form */

if (
    cancelVolunteerBtn &&
    volunteerFormSection &&
    volunteerForm
) {

    cancelVolunteerBtn.addEventListener("click", () => {

        volunteerForm.reset();

        volunteerFormSection.style.display = "none";

    });

}


/* Add Volunteer */

if (volunteerForm) {

    volunteerForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const name =
            document.getElementById(
                "volunteerName"
            ).value;

        const skills =
            document.getElementById(
                "volunteerSkills"
            ).value;

        const location =
            document.getElementById(
                "volunteerLocation"
            ).value;

        const availability =
            document.getElementById(
                "volunteerAvailability"
            ).value;

        const interest =
            document.getElementById(
                "volunteerInterest"
            ).value;


        /* Create new volunteer row */

        const newRow =
            document.createElement("div");

        newRow.classList.add(
            "volunteer-row"
        );


        newRow.innerHTML = `

            <span>
                ${name}
            </span>

            <span>
                ${skills}
            </span>

            <span>
                ${location}
            </span>

            <span>
                ${availability}
            </span>

            <span>
                ${interest}
            </span>

            <span class="status active">
                Active
            </span>

        `;


        /* Add row to volunteer table */

        const table =
            document.querySelector(
                ".volunteer-table"
            );

        if (table) {

            table.appendChild(newRow);

        }


        /* Success message */

        alert(
            "Volunteer registered successfully!"
        );


        /* Reset form */

        volunteerForm.reset();


        /* Hide form */

        volunteerFormSection.style.display =
            "none";

    });

}


/* Search Volunteers */

if (searchVolunteer) {

    searchVolunteer.addEventListener(
        "input",
        () => {

            const searchValue =
                searchVolunteer.value
                    .toLowerCase();

            const rows =
                document.querySelectorAll(
                    ".volunteer-row"
                );


            rows.forEach((row) => {

                const rowText =
                    row.textContent
                        .toLowerCase();


                if (
                    rowText.includes(searchValue)
                ) {

                    row.style.display =
                        "grid";

                } else {

                    row.style.display =
                        "none";

                }

            });

        }
    );

}
/* =====================================================
   RESOURCE MANAGEMENT
===================================================== */

const resourceForm =
    document.getElementById("resourceForm");

const showResourceBtn =
    document.getElementById("showResourceBtn");

const cancelResourceBtn =
    document.getElementById("cancelResourceBtn");

const resourceFormSection =
    document.getElementById("resourceFormSection");

const searchResource =
    document.getElementById("searchResource");


/* Show Resource Form */

if (showResourceBtn && resourceFormSection) {

    showResourceBtn.addEventListener("click", () => {

        resourceFormSection.style.display = "block";

        resourceFormSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}


/* Cancel Resource Form */

if (
    cancelResourceBtn &&
    resourceFormSection &&
    resourceForm
) {

    cancelResourceBtn.addEventListener("click", () => {

        resourceForm.reset();

        resourceFormSection.style.display = "none";

    });

}


/* Add Resource */

if (resourceForm) {

    resourceForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const name =
            document.getElementById(
                "resourceName"
            ).value;

        const category =
            document.getElementById(
                "resourceCategory"
            ).value;

        const required =
            Number(
                document.getElementById(
                    "requiredQuantity"
                ).value
            );

        const available =
            Number(
                document.getElementById(
                    "availableQuantity"
                ).value
            );

        const priority =
            document.getElementById(
                "resourcePriority"
            ).value;


        /* Determine resource status */

        let resourceStatus = "Complete";
        let statusClass = "completed";


        if (available === 0) {

            resourceStatus = "Needed";
            statusClass = "pending";

        } else if (available < required) {

            resourceStatus = "Low Stock";
            statusClass = "upcoming";

        }


        /* Create new resource row */

        const newRow =
            document.createElement("div");

        newRow.classList.add(
            "resource-row"
        );


        newRow.innerHTML = `

            <span>
                ${name}
            </span>

            <span>
                ${category}
            </span>

            <span>
                ${required}
            </span>

            <span>
                ${available}
            </span>

            <span>
                ${priority}
            </span>

            <span class="status ${statusClass}">
                ${resourceStatus}
            </span>

        `;


        /* Add resource to table */

        const table =
            document.querySelector(
                ".resource-table"
            );

        if (table) {

            table.appendChild(newRow);

        }


        /* Success message */

        alert(
            "Resource added successfully!"
        );


        /* Reset form */

        resourceForm.reset();


        /* Hide form */

        resourceFormSection.style.display =
            "none";

    });

}


/* Search Resources */

if (searchResource) {

    searchResource.addEventListener(
        "input",
        () => {

            const searchValue =
                searchResource.value
                    .toLowerCase();


            const rows =
                document.querySelectorAll(
                    ".resource-row"
                );


            rows.forEach((row) => {

                const rowText =
                    row.textContent
                        .toLowerCase();


                if (
                    rowText.includes(searchValue)
                ) {

                    row.style.display =
                        "grid";

                } else {

                    row.style.display =
                        "none";

                }

            });

        }
    );

}
/* =====================================================
   EMERGENCY / SOS MANAGEMENT
===================================================== */

const emergencyForm =
    document.getElementById("emergencyForm");

const showEmergencyBtn =
    document.getElementById("showEmergencyBtn");

const cancelEmergencyBtn =
    document.getElementById("cancelEmergencyBtn");

const emergencyFormSection =
    document.getElementById("emergencyFormSection");

const searchEmergency =
    document.getElementById("searchEmergency");

const sosButton =
    document.getElementById("sosButton");


/* Show Emergency Form */

if (showEmergencyBtn && emergencyFormSection) {

    showEmergencyBtn.addEventListener("click", () => {

        emergencyFormSection.style.display = "block";

        emergencyFormSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}


/* Cancel Emergency Form */

if (
    cancelEmergencyBtn &&
    emergencyFormSection &&
    emergencyForm
) {

    cancelEmergencyBtn.addEventListener("click", () => {

        emergencyForm.reset();

        emergencyFormSection.style.display = "none";

    });

}


/* Add Emergency Contact */

if (emergencyForm) {

    emergencyForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const beneficiary =
            document.getElementById(
                "emergencyBeneficiary"
            ).value;

        const contact =
            document.getElementById(
                "guardianName"
            ).value;

        const phone =
            document.getElementById(
                "emergencyPhone"
            ).value;

        const relationship =
            document.getElementById(
                "relationship"
            ).value;

        const supportType =
            document.getElementById(
                "emergencyType"
            ).value;


        /* Create new row */

        const newRow =
            document.createElement("div");

        newRow.classList.add(
            "emergency-row"
        );


        newRow.innerHTML = `

            <span>
                ${beneficiary}
            </span>

            <span>
                ${contact}
            </span>

            <span>
                ${phone}
            </span>

            <span>
                ${relationship}
            </span>

            <span>
                ${supportType}
            </span>

            <span class="status active">
                Available
            </span>

        `;


        /* Add to table */

        const table =
            document.querySelector(
                ".emergency-table"
            );

        if (table) {

            table.appendChild(newRow);

        }


        alert(
            "Emergency contact added successfully!"
        );


        emergencyForm.reset();

        emergencyFormSection.style.display =
            "none";

    });

}


/* Search Emergency Contacts */

if (searchEmergency) {

    searchEmergency.addEventListener(
        "input",
        () => {

            const searchValue =
                searchEmergency.value
                    .toLowerCase();


            const rows =
                document.querySelectorAll(
                    ".emergency-row"
                );


            rows.forEach((row) => {

                const rowText =
                    row.textContent
                        .toLowerCase();


                if (
                    rowText.includes(searchValue)
                ) {

                    row.style.display =
                        "grid";

                } else {

                    row.style.display =
                        "none";

                }

            });

        }
    );

}


/* SOS Button */

if (sosButton) {

    sosButton.addEventListener("click", () => {

        const confirmed =
            confirm(
                "Are you sure you want to activate the SOS demonstration?"
            );


        if (confirmed) {

            alert(
                "SOS demonstration activated. In the final system, this action can notify authorised NGO staff."
            );

        }

    });

}
/* =====================================================
   PROGRESS MONITORING
===================================================== */

const progressForm =
    document.getElementById("progressForm");

const showProgressBtn =
    document.getElementById("showProgressBtn");

const cancelProgressBtn =
    document.getElementById("cancelProgressBtn");

const progressFormSection =
    document.getElementById("progressFormSection");

const searchProgress =
    document.getElementById("searchProgress");


/* Show Form */

if (showProgressBtn && progressFormSection) {

    showProgressBtn.addEventListener("click", () => {

        progressFormSection.style.display = "block";

        progressFormSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}


/* Cancel */

if (
    cancelProgressBtn &&
    progressFormSection &&
    progressForm
) {

    cancelProgressBtn.addEventListener("click", () => {

        progressForm.reset();

        progressFormSection.style.display = "none";

    });

}


/* Add Assessment */

if (progressForm) {

    progressForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const beneficiary =
            document.getElementById(
                "progressBeneficiary"
            ).value;

        const date =
            document.getElementById(
                "assessmentDate"
            ).value;

        const communication =
            document.getElementById(
                "communicationLevel"
            ).value;

        const selfCare =
            document.getElementById(
                "selfCareLevel"
            ).value;

        const social =
            document.getElementById(
                "socialSkillsLevel"
            ).value;

        const motor =
            document.getElementById(
                "motorSkillsLevel"
            ).value;


        const formattedDate =
            new Date(date + "T00:00:00")
                .toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                });


        const newRow =
            document.createElement("div");

        newRow.classList.add("progress-row");


        newRow.innerHTML = `

            <span>${beneficiary}</span>

            <span>${formattedDate}</span>

            <span>${communication}</span>

            <span>${selfCare}</span>

            <span>${social}</span>

            <span>${motor}</span>

        `;


        const table =
            document.querySelector(
                ".progress-table"
            );

        if (table) {

            table.appendChild(newRow);

        }


        alert(
            "Progress assessment added successfully!"
        );


        progressForm.reset();

        progressFormSection.style.display =
            "none";

    });

}


/* Search */

if (searchProgress) {

    searchProgress.addEventListener("input", () => {

        const value =
            searchProgress.value.toLowerCase();

        const rows =
            document.querySelectorAll(
                ".progress-row"
            );


        rows.forEach((row) => {

            if (
                row.textContent
                    .toLowerCase()
                    .includes(value)
            ) {

                row.style.display = "grid";

            } else {

                row.style.display = "none";

            }

        });

    });

}
/* =====================================================
   VOLUNTEER MATCHING
===================================================== */

const findVolunteerBtn =
    document.getElementById("findVolunteerBtn");

const matchBeneficiary =
    document.getElementById("matchBeneficiary");

const matchSkill =
    document.getElementById("matchSkill");

const matchLocation =
    document.getElementById("matchLocation");

const matchingResults =
    document.getElementById("matchingResults");


if (findVolunteerBtn) {

    findVolunteerBtn.addEventListener("click", () => {

        const beneficiary =
            matchBeneficiary.value;

        const skill =
            matchSkill.value;

        const location =
            matchLocation.value;


        if (!beneficiary || !skill) {

            alert(
                "Please select a beneficiary and required support."
            );

            return;

        }


        const volunteers = [

            {
                name: "Priya Sharma",
                location: "Tanuku",
                skill: "Teaching",
                availability: "Weekends",
                score: "95%"
            },

            {
                name: "Arjun Kumar",
                location: "Tanuku",
                skill: "Sports",
                availability: "Evenings",
                score: "88%"
            },

            {
                name: "Sneha Reddy",
                location: "Palangi",
                skill: "Healthcare",
                availability: "Weekdays",
                score: "92%"
            },

            {
                name: "Rahul Varma",
                location: "Tanuku",
                skill: "Therapy",
                availability: "Flexible",
                score: "90%"
            },

            {
                name: "Kavya Rao",
                location: "Velivennu",
                skill: "Counselling",
                availability: "Weekends",
                score: "85%"
            },

            {
                name: "Anjali Devi",
                location: "Tanuku",
                skill: "Companionship",
                availability: "Flexible",
                score: "87%"
            }

        ];


        let matches = volunteers.filter((volunteer) => {

            const skillMatch =
                volunteer.skill.toLowerCase()
                === skill.toLowerCase();

            const locationMatch =
                !location ||
                volunteer.location.toLowerCase()
                === location.toLowerCase();

            return skillMatch && locationMatch;

        });


        /*
           If there is no exact match,
           show volunteers with the required skill.
        */

        if (matches.length === 0) {

            matches = volunteers.filter((volunteer) => {

                return volunteer.skill
                    .toLowerCase()
                    === skill.toLowerCase();

            });

        }


        if (matches.length === 0) {

            matchingResults.innerHTML = `

                <div class="no-matches">

                    <div>🔍</div>

                    <h3>
                        No exact match found
                    </h3>

                    <p>
                        Try selecting another support type
                        or choosing "Any location".
                    </p>

                </div>

            `;

            return;

        }


        matchingResults.innerHTML = "";


        matches.forEach((volunteer) => {

            const card =
                document.createElement("div");

            card.classList.add("match-result");


            const initial =
                volunteer.name.charAt(0);


            card.innerHTML = `

                <div class="volunteer-avatar">
                    ${initial}
                </div>

                <div class="match-details">

                    <h3>
                        ${volunteer.name}
                    </h3>

                    <p>
                        📍 ${volunteer.location}
                        &nbsp; • &nbsp;
                        🎯 ${volunteer.skill}
                    </p>

                    <p>
                        Available:
                        ${volunteer.availability}
                    </p>

                </div>

                <span class="match-score">
                    ${volunteer.score} Match
                </span>

            `;


            matchingResults.appendChild(card);

        });


        matchingResults.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    });

}
/* =====================================================
   HEALTHCARE & THERAPY MANAGEMENT
===================================================== */

const appointmentForm =
    document.getElementById("appointmentForm");

const showAppointmentBtn =
    document.getElementById("showAppointmentBtn");

const cancelAppointmentBtn =
    document.getElementById("cancelAppointmentBtn");

const appointmentFormSection =
    document.getElementById("appointmentFormSection");


/* Show Appointment Form */

if (showAppointmentBtn && appointmentFormSection) {

    showAppointmentBtn.addEventListener("click", () => {

        appointmentFormSection.style.display = "block";

        appointmentFormSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}


/* Cancel */

if (
    cancelAppointmentBtn &&
    appointmentFormSection &&
    appointmentForm
) {

    cancelAppointmentBtn.addEventListener("click", () => {

        appointmentForm.reset();

        appointmentFormSection.style.display = "none";

    });

}


/* Add Therapy Session */

if (appointmentForm) {

    appointmentForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const beneficiary =
            document.getElementById(
                "appointmentBeneficiary"
            ).value;

        const type =
            document.getElementById(
                "appointmentType"
            ).value;

        const date =
            document.getElementById(
                "appointmentDate"
            ).value;

        const time =
            document.getElementById(
                "appointmentTime"
            ).value;

        const therapist =
            document.getElementById(
                "therapistName"
            ).value;

        const status =
            document.getElementById(
                "appointmentStatus"
            ).value;


        const formattedDate =
            new Date(date + "T00:00:00")
                .toLocaleDateString("en-GB", {

                    day: "2-digit",
                    month: "short",
                    year: "numeric"

                });


        let statusClass = "pending";


        if (status === "Upcoming") {

            statusClass = "upcoming";

        }

        else if (status === "Completed") {

            statusClass = "completed";

        }


        const newRow =
            document.createElement("div");


        newRow.classList.add(
            "appointment-row"
        );


        newRow.innerHTML = `

            <span>
                ${beneficiary}
            </span>

            <span>
                ${type}
            </span>

            <span>
                ${formattedDate}
                <br>
                <small>${time}</small>
            </span>

            <span>
                ${therapist}
            </span>

            <span class="status ${statusClass}">
                ${status}
            </span>

        `;


        const table =
            document.querySelector(
                ".appointment-table"
            );


        if (table) {

            table.appendChild(newRow);

        }


        alert(
            "Therapy session scheduled successfully!"
        );


        appointmentForm.reset();

        appointmentFormSection.style.display =
            "none";

    });

}