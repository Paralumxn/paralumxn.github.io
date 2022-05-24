function google() {
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
                    window.open("https://paralumxn.github.io/docs/assets/pages/first-message.html")
                    
                }
            })
        }
    })
}