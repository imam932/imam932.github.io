const modal = document.getElementById("modal");
const img = document.getElementById("img01");
const captionText = document.getElementById("caption");
const closeButton = document.getElementsByClassName("close")[0];

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', event => {
        modal.style.display = "block";
        img.src = item.src; // Set img source
        captionText.innerHTML = item.alt; // Set image caption
    });
});

closeButton.onclick = function() {
    modal.style.display = "none";
};

// Close modal when clicking outside of the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
