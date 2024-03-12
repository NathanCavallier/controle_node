

export default function handleDrop(event) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const image = document.createElement('img');
        image.src = e.target.result;
        document.getElementById('dropzone').appendChild(image);
    };
    reader.readAsDataURL(file);
}

function handleDragOver(event) {
    event.preventDefault();
}

const dropzone = document.getElementById('dropzone');
dropzone.addEventListener('drop', handleDrop);
dropzone.addEventListener('dragover', handleDragOver);