class OrganizingCommittee extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="comissao-grid">
        <a href="http://lattes.cnpq.br/4176275903762014" target="_blank" rel="noopener noreferrer" class="comissao-card" style="text-decoration: none; color: inherit;">
          <h3 class="comissao-name">Amanda Freitas Silva Garcia</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </a>
        <a href="http://lattes.cnpq.br/1029419001766518" target="_blank" rel="noopener noreferrer" class="comissao-card" style="text-decoration: none; color: inherit;">
          <h3 class="comissao-name">Diego Pinheiro de Menezes</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </a>
        <a href="http://lattes.cnpq.br/1565640401714398" target="_blank" rel="noopener noreferrer" class="comissao-card" style="text-decoration: none; color: inherit;">
          <h3 class="comissao-name">Francisco Gilney Silva Bezerra</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </a>
        <a href="http://lattes.cnpq.br/1365593903295297" target="_blank" rel="noopener noreferrer" class="comissao-card" style="text-decoration: none; color: inherit;">
          <h3 class="comissao-name">Gabrielly Vitória Camargo do Prado</h3>
          <p class="comissao-institution">PGCAP/INPE</p>
        </a>
        <a href="http://lattes.cnpq.br/2145278611728231" target="_blank" rel="noopener noreferrer" class="comissao-card" style="text-decoration: none; color: inherit;">
          <h3 class="comissao-name">Giulia Katherine Romas Tomazeli</h3>
          <p class="comissao-institution">PGCAP/INPE</p>
        </a>
        <a href="http://lattes.cnpq.br/5644797510360085" target="_blank" rel="noopener noreferrer" class="comissao-card" style="text-decoration: none; color: inherit;">
          <h3 class="comissao-name">Gisleine da Silva Cunha Zeri</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </a>
        <a href="http://lattes.cnpq.br/6219123828472700" target="_blank" rel="noopener noreferrer" class="comissao-card" style="text-decoration: none; color: inherit;">
          <h3 class="comissao-name">Jaqueline Carolino Santos</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </a>
        <a href="http://lattes.cnpq.br/9188935626206652" target="_blank" rel="noopener noreferrer" class="comissao-card" style="text-decoration: none; color: inherit;">
          <h3 class="comissao-name">Luciana Cristina de Sousa Vieira</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </a>
        <a href="http://lattes.cnpq.br/5805774428674625" target="_blank" rel="noopener noreferrer" class="comissao-card" style="text-decoration: none; color: inherit;">
          <h3 class="comissao-name">Marcio Malacarne</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </a>
        <a href="http://lattes.cnpq.br/1550938244546046" target="_blank" rel="noopener noreferrer" class="comissao-card" style="text-decoration: none; color: inherit;">
          <h3 class="comissao-name">Mariana Marques Wolf</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </a>
        <a href="http://lattes.cnpq.br/3409308862408759" target="_blank" rel="noopener noreferrer" class="comissao-card" style="text-decoration: none; color: inherit;">
          <h3 class="comissao-name">Sara Bastos de Oliveira</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </a>
        <a href="http://lattes.cnpq.br/4000600506794328" target="_blank" rel="noopener noreferrer" class="comissao-card" style="text-decoration: none; color: inherit;">
          <h3 class="comissao-name">Sofia Sena Tavares</h3>
          <p class="comissao-institution">PGCAP/INPE</p>
        </a>
        <a href="http://lattes.cnpq.br/3013521089136688" target="_blank" rel="noopener noreferrer" class="comissao-card" style="text-decoration: none; color: inherit;">
          <h3 class="comissao-name">Yumi Okumura Moliné</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </a>
      </div>
    `;
  }
}

customElements.define('organizing-committee', OrganizingCommittee);
