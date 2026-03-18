fetch("/components/header.html")
    .then((response) => response.text())
    .then((responseText) => {
        document.querySelector('.container').insertAdjacentHTML("beforebegin", responseText);
    });
