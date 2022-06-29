function google() {
    swal.fire({
        allowEscapeKey: false,
        allowOutsideClick: false,
        html: "Are you sure you want to go to this <u style='text-decoration: none;' onclick='puzzle1()'>page?</u>",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirm"
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
        confirmButtonText: "Confirm"
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
        confirmButtonText: "Confirm"
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

function codepen() {
    swal.fire({
        allowEscapeKey: false,
        allowOutsideClick: false,
        html: "Are you sure you want to go to this page?",
        icon: "question",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirm"
    }).then((result) => {
        if(result.isConfirmed) {
            swal.fire({
                timerProgressBar: true,
                timer: 2000,
                allowEscapeKey: false,
                allowOutsideClick: false,
                icon: "info",
                html: "You're now redirecting to codepen profile of this creator.",
                showConfirmButton: false,
                showCancelButton: false,
                didOpen: () => {
                    timerInterval = setInterval(() => {
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                    window.open("https://www.codeply.com/u/paralumxn")
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
        confirmButtonText: "Confirm"
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
        confirmButtonText: "Confirm"
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

function CHF() {
    swal.fire({
        html: "Are you sure to download these file?",
        icon: "question",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL"
    }).then((result) => {
        if(result.isConfirmed) {
            swal.fire({
                html: "You're now redirecting.<br>Please wait.",
                allowOutsideClick: false,
                allowOutsideClick: false,
                showCancelButton: false,
                showConfirmButton: false,
                icon: "success",
                didOpen: () => {
                    timerInterval = setInterval(() => { }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval);
                    window.open("https://www.mediafire.com/file/scsuo6bri08kaph/Command_Handler.rar/file")
                }
            })
        }
    })
}

function SCHF() {
    swal.fire({
        html: "Are you sure to download these file?",
        icon: "question",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL"
    }).then((result) => {
        if(result.isConfirmed) {
            swal.fire({
                html: "You're now redirecting.<br>Please wait.",
                allowOutsideClick: false,
                allowOutsideClick: false,
                showCancelButton: false,
                showConfirmButton: false,
                icon: "success",
                didOpen: () => {
                    timerInterval = setInterval(() => { }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval);
                    window.open("https://www.mediafire.com/file/8t845jouyo6yo1d/slashbot.rar/file")
                }
            })
        }
    })
}

function REBORN() {
    swal.fire({
        html: "Are you sure to download these file?",
        icon: "question",
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL"
    }).then((result) => {
        if(result.isConfirmed) {
            swal.fire({
                html: "You're now redirecting.<br>Please wait.",
                allowOutsideClick: false,
                allowOutsideClick: false,
                showCancelButton: false,
                showConfirmButton: false,
                icon: "success",
                didOpen: () => {
                    timerInterval = setInterval(() => { }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval);
                    window.open("https://www.mediafire.com/file/16hubv5joqmnkq8/Reborn.rar/file")
                }
            })
        }
    })
}