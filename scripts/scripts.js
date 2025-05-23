const catalogoContainer = document.getElementById('catalogoContainer');
const searchInput = document.getElementById('searchInput');

function createCard(livro) {
    return `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card">
                <img src="imagens/catalogo/${livro.categoria}/${livro.arquivo}" class="card-img-top" data-bs-toggle="modal" data-bs-target="#modal-${livro.categoria}-${removeFileExtension(livro.arquivo)}">
                <div class="card-body">
                    <h5 class="card-title">${livro.titulo}</h5>
                    <p class="card-text">${livro.autor}</p>
                </div>
            </div>
            <div class="modal fade" id="modal-${livro.categoria}-${removeFileExtension(livro.arquivo)}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${livro.titulo}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="imagens/catalogo/${livro.categoria}/${livro.arquivo}" class="img-fluid">
                        </div>
                        <div class="modal-footer">
                            <p class="mb-1 me-3">Mais informações ou compras via 
                                <a href="https://wa.me/555132240309" target="_blank">WhatsApp<img src="imagens/wpp_icon.png" alt="WhatsApp" style="width: 20px; height: 20px; margin-left: 6px"></a>.
                            </p>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    `;
}

function displayCatalogo(catalogo) {
    catalogoContainer.innerHTML = catalogo.map(createCard).join('');
}

function filterCatalogo() {
    const query = searchInput.value.toLowerCase();
    const filteredCatalogo = catalogo.filter(livro =>
        livro.titulo.toLowerCase().includes(query) || livro.autor.toLowerCase().includes(query)
    );
    displayCatalogo(filteredCatalogo);
}

searchInput.addEventListener('input', filterCatalogo);

document.addEventListener('DOMContentLoaded', () => {
    displayCatalogo(catalogo);
});

function removeFileExtension(filename) {
    return filename.split('.').slice(0, -1).join('.');
}