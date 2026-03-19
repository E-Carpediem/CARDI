fetch("/components/header.html")
    .then((response) => response.text())
    .then((responseText) => {
        document.querySelector('.top-container').insertAdjacentHTML("beforebegin", responseText);
    });
