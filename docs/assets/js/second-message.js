function hiddenMessage() {
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
                    window.location.replace("https://paralumxn.github.io/docs/assets/pages/third-message.html")
                }
            })
        }
    })
}