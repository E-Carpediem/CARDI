const $ = (selector) => document.querySelector(selector)
if ($('#le-content-img') !== null) {
    $('#le-content-img').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                $('.le-content-img').src = event.target.result;
            };
            reader.readAsDataURL(file);
            $('#le-img-input').innerHTML = "";
        }
    })
}
$(".le-content-level").addEventListener("change", () => {
    $(".le-content-level").classList.add("selected");
});