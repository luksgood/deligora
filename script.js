document.getElementById("upload-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const file = document.getElementById("file").files[0];
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("https://SEU-BACKEND.onrender.com/upload", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  document.getElementById("resultado").innerText = data.qrcode || "Erro ao gerar Pix";
});
