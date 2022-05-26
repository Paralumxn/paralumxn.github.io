function google() {
    swal.fire({
        allowEscapeKey: false,
        allowOutsideClick: false,
        html: "Are you sure you want to go to this <u style='text-decoration: none;' onclick='puzzle1()'>page?</u>",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
    }).then((result) => {
        if(result.isConfirmed) {
            swal.fire({
                timerProgressBar: true,
                timer: 2000,
                allowEscapeKey: false,
                allowOutsideClick: false,
                icon: "info",
                html: "You're now redirecting to google profile of this creator.",
                showConfirmButton: false,
                showCancelButton: false,
                didOpen: () => {
                    timerInterval = setInterval(() => {
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                    window.open("https://g.dev/paraluman")
                }
            })
        }
    })
}

function puzzle1() {
    swal.fire({
        allowEscapeKey: false,
        allowOutsideClick: false,
        html: "It looks like you find other puzzle to finished.<br>Do you want to finish this puzzle?",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true
    }).then((result) => {
        if(result.isConfirmed) {
            swal.fire({
                allowEscapeKey: false,
                allowOutsideClick: false,
                timer: 5000,
                timerProgressBar: true,
                html: "What icon showed up on the first sweet alert before this one?<br><br>" + 
                "<input placeholder='Put your answer here' type='text' class='form-control puzzle1field' id='puzzle1field'><br>" +
                "<button class='btn btn-primary' onclick='confirm1button()' id='confirm1button'>CONFIRM</button>",
                showConfirmButton: false,
                showCancelButton: false,
            })
        }
    })
}

// puzzle1field
// confirm1button

var input = document.getElementById('puzzle1field')

$(document).on("keypress", input, function(e){
    if(e.which == 13){
        //var inputVal = $(this).val();
        //alert("You've entered: " + inputVal);

        $('#confirm1button').click();
    }
});

function confirm1button() {
    var answer1swal = $('#puzzle1field').val();
    var rightAnswer = "question"
    var rightAnswer1 = "QUESTION"

    if(answer1swal == "" || answer1swal == null || answer1swal == " ") {
        swal.fire({
            html: "Enter a valid answer before clicking the button.",
            allowEscapeKey: false,
            allowOutsideClick: false,
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            showCancelButton: false,
            icon: "warning"
        })
    } else if(answer1swal === rightAnswer || answer1swal === rightAnswer1) {
        swal.fire({
            html: "You got the correct answer!<br>Do you want to proceed to the hidden message?",
            imageUrl: "https://thumbs.dreamstime.com/b/doctors-hospital-corridor-nurse-pushing-gurney-stretcher-bed-male-senior-female-patient-32154012.jpg", 
            imageWidth: "200px",
            allowEscapeKey: false,
            allowOutsideClick: false,
            showCancelButton: true,
            showConfirmButton: true,
            icon: "success"
        }).then((result) => {
            if(result.isConfirmed) {
                swal.fire({
                    html: "Redirecting...",
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    icon: "info",
                    didOpen: () => {
                        timerInterval = setInterval(() => {
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                        window.location.replace("https://paralumxn.github.io/docs/assets/page/secondP-f.html")
                        
                    }
                })
            }
        })
    } else if(answer1swal != rightAnswer1 || answer1swal != rightAnswer) {
        swal.fire({
            html: "You entered an incorrect password.",
            timer: 3000,
            timerProgressBar: true,
            showCancelButton: false,
            showConfirmButton: false,
            allowEscapeKey: false,
            allowOutsideClick: false,
            icon: "warning"
        })
    } 
}

function stackoverflow() {
    swal.fire({
        allowEscapeKey: false,
        allowOutsideClick: false,
        html: "Are you sure you want to go to this page?",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
    }).then((result) => {
        if(result.isConfirmed) {
            swal.fire({
                timerProgressBar: true,
                timer: 2000,
                allowEscapeKey: false,
                allowOutsideClick: false,
                icon: "info",
                html: "You're now redirecting to stackoverflow profile of this creator.",
                showConfirmButton: false,
                showCancelButton: false,
                didOpen: () => {
                    timerInterval = setInterval(() => {
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                    window.open("https://stackoverflow.com/users/17680233/%e6%96%b0acesyyy")
                }
            })
        }
    })
}

function discord() {
    swal.fire({
        allowEscapeKey: false,
        allowOutsideClick: false,
        html: "Are you sure you want to go to this page?",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
    }).then((result) => {
        if(result.isConfirmed) {
            swal.fire({
                timerProgressBar: true,
                timer: 2000,
                allowEscapeKey: false,
                allowOutsideClick: false,
                icon: "info",
                html: "You're now redirecting to discord profile of this creator.",
                showConfirmButton: false,
                showCancelButton: false,
                didOpen: () => {
                    timerInterval = setInterval(() => {
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                    window.open("https://discords.com/bio/p/810e2796-076e-0e57-4617-30e56096b345")
                }
            })
        }
    })
}

function github() {
    swal.fire({
        allowEscapeKey: false,
        allowOutsideClick: false,
        html: "Are you sure you want to go to this page?",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
    }).then((result) => {
        if(result.isConfirmed) {
            swal.fire({
                timerProgressBar: true,
                timer: 2000,
                allowEscapeKey: false,
                allowOutsideClick: false,
                icon: "info",
                html: "You're now redirecting to github profile of this creator.",
                showConfirmButton: false,
                showCancelButton: false,
                didOpen: () => {
                    timerInterval = setInterval(() => {
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                    window.open("https://github.com/Paralumxn")
                }
            })
        }
    })
}

function gitlab() {
    swal.fire({
        allowEscapeKey: false,
        allowOutsideClick: false,
        html: "Are you sure you want to go to this page?",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
    }).then((result) => {
        if(result.isConfirmed) {
            swal.fire({
                timerProgressBar: true,
                timer: 2000,
                allowEscapeKey: false,
                allowOutsideClick: false,
                icon: "info",
                html: "You're now redirecting to gitlab profile of this creator.",
                showConfirmButton: false,
                showCancelButton: false,
                didOpen: () => {
                    timerInterval = setInterval(() => {
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                    window.open("https://gitlab.com/Paralumxn")
                }
            })
        }
    })
}

function bubble1() {
    swal.fire({
        timer: 5000,
        timerProgressBar: true,
        html: "You found a hidden message!<br>Would you like to know the message?",
        showConfirmButton: true,
        showCancelButton: true,
    }).then((result) => {
        if(result.isConfirmed) {
            swal.fire({
                timerProgressBar: true,
                timer: 2000,
                allowEscapeKey: false,
                allowOutsideClick: false,
                icon: "info",
                html: "You're now redirecting to the hidden message of this creator.",
                showConfirmButton: false,
                showCancelButton: false,
                didOpen: () => {
                    timerInterval = setInterval(() => {
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                    window.location.replace("https://paralumxn.github.io/docs/assets/pages/first-message.html")
                    
                }
            })
        }
    })
}