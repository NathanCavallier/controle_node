document.getElementById('image-upload').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        var img = document.createElement('img');
        img.src = reader.result;
        document.getElementById('dropzone').appendChild(img);
    }
    if (file) {
        reader.readAsDataURL(file);
    }
});