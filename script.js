const regioes = {
  "norte": {
    titulo: "Região Norte",
    texto: `
      <strong>🌿 Produtos do Campo:</strong> Castanha-do-pará, açaí, mandioca, peixe amazônico.<br>
      <strong>🏙 Produtos Urbanos:</strong> Embalagens de frutas, sucos processados.<br>
      <strong>📌 Curiosidades:</strong> Grande parte da produção é feita por ribeirinhos e povos tradicionais.
    `
  },
  "nordeste": {
    titulo: "Região Nordeste",
    texto: `
      <strong>🌿 Produtos do Campo:</strong> Cana-de-açúcar, caju, milho, feijão.<br>
      <strong>🏙 Produtos Urbanos:</strong> Rapadura, sucos de fruta, roupas artesanais.<br>
      <strong>📌 Curiosidades:</strong> Rica em agricultura familiar e feiras populares.
    `
  },
  "centro-oeste": {
    titulo: "Região Centro-Oeste",
    texto: `
      <strong>🌿 Produtos do Campo:</strong> Soja, milho, carne bovina, arroz.<br>
      <strong>🏙 Produtos Urbanos:</strong> Embutidos, doces típicos.<br>
      <strong>📌 Curiosidades:</strong> É o coração do agronegócio brasileiro e tem vasto cerrado.
    `
  },
  "sudeste": {
    titulo: "Região Sudeste",
    texto: `
      <strong>🌿 Produtos do Campo:</strong> Café, leite, frutas cítricas, hortaliças.<br>
      <strong>🏙 Produtos Urbanos:</strong> Queijos, compotas, pães artesanais.<br>
      <strong>📌 Curiosidades:</strong> Alta integração entre campo e cidade através de cooperativas.
    `
  },
  "sul": {
    titulo: "Região Sul",
    texto: `
      <strong>🌿 Produtos do Campo:</strong> Uva, erva-mate, trigo, leite.<br>
      <strong>🏙 Produtos Urbanos:</strong> Vinhos, queijos coloniais, massas caseiras.<br>
      <strong>📌 Curiosidades:</strong> Cultura de colonos europeus influencia fortemente os produtos.
    `
  }
};

function mostrarInfo(regiao) {
  const infoBox = document.getElementById("info-regiao");
  infoBox.innerHTML = `
    <h2>${regioes[regiao].titulo}</h2>
    <p>${regioes[regiao].texto}</p>
  `;
}
