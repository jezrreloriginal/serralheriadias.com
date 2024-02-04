document.getElementById("payPix").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("modal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("modal").style.display = "none";
});

document.getElementById("copyCode").addEventListener("click", function() {
    var pixCodeInput = document.getElementById("pixCode");
    
    pixCodeInput.select();
    pixCodeInput.setSelectionRange(0, 99999);

    document.execCommand("copy");
    
    alert("Código Pix copiado com sucesso!");
});
