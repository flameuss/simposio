class MinicursoSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="minicurso-container">
        <div class="minicurso-header">
          <p class="minicurso-subtitle">Confira as informações, regras e detalhes sobre o minicurso ofertado no 13º SPGCST.</p>
        </div>

        <div class="minicurso-rules-banner">
          <div class="rule-item">
            <span class="rule-icon">📌</span>
            <span><strong>Inscrições abertas</strong> até 20 de setembro de 2026.</span>
          </div>
          <div class="rule-item">
            <span class="rule-icon">🆓</span>
            <span><strong>Inscrição 100% gratuita!</strong></span>
          </div>
          <div class="rule-item">
            <span class="rule-icon">⚠️</span>
            <span><strong>Vagas Limitadas:</strong> Cada participante poderá se inscrever em apenas 1 minicurso ou trabalho de campo, que ocorrerão simultaneamente na manhã do dia <strong>23 de Outubro de 2026</strong>.</span>
          </div>
        </div>

        <!-- Card de Minicurso -->
        <div class="minicurso-card">
          <div class="minicurso-card-header">
            <div class="minicurso-title-area">
              <span class="badge-tag">🎓 MINICURSO 1</span>
              <h3>Geoprocessamento com QGIS</h3>
            </div>
            <div class="minicurso-speaker-thumb">
              <img src="https://static.even3.com/pagina-evento/ImagemdoWhatsAppde2025-08-28s11.20.12_78096117.6d18e42582cb4d3cb380.jpg" alt="Jocilene Dantas Barros" class="speaker-img" />
              <div class="speaker-meta">
                <span class="speaker-label">Proponente</span>
                <span class="speaker-name">Jocilene Dantas Barros</span>
              </div>
            </div>
          </div>

          <div class="minicurso-card-body">
            <div class="minicurso-details-grid">
              <div class="detail-cell">
                <span class="detail-label">📅 DATA</span>
                <span class="detail-value">22 de Outubro de 2026</span>
              </div>
              <div class="detail-cell">
                <span class="detail-label">🕒 HORÁRIO</span>
                <span class="detail-value">08:00 às 12:00</span>
              </div>
              <div class="detail-cell">
                <span class="detail-label">🎯 VAGAS</span>
                <span class="detail-value">Até 16 participantes</span>
              </div>
              <div class="detail-cell">
                <span class="detail-label">📍 LOCAL</span>
                <span class="detail-value">Prédio do SERE/INPE (sala indicada posteriormente)</span>
              </div>
            </div>

            <div class="minicurso-info-block">
              <h4>📖 RESUMO DO MINICURSO</h4>
              <p>O minicurso envolverá uma introdução teórica sobre geoprocessamento utilizando o software livre QGIS e atividades práticas englobando o processamento de dados espaciais, aplicação de simbologias, união de tabelas alfa-numéricas com shapefiles e elaboração de um mapa temático completo do zero.</p>
            </div>

            <div class="minicurso-info-block req-block">
              <h4>💡 REQUISITOS OBRIGATÓRIOS</h4>
              <ul class="bullet-list-tight">
                <li>É obrigatório trazer seu notebook pessoal com o software <strong>QGIS instalado</strong>.</li>
                <li>Baixar previamente os dados espaciais que serão indicados e disponibilizados pela instrutora antes do minicurso.</li>
              </ul>
            </div>

            <div class="minicurso-info-block bio-block">
              <h4>👩‍🏫 MINIBIOGRAFIA</h4>
              <p>É doutoranda em Ciência do Sistema Terrestre pelo INPE, co-autora do canal e blog <strong>Geoaplicada</strong> e instrutora de curso de QGIS na Geoaplicada. É mestre e bacharel em Geografia pela UFRN. Foi pesquisadora bolsista (PCI) do INPE e professora substituta do Departamento de Engenharia Civil da UFRN. Trabalhou como autônoma prestando serviços de mapeamento e ministrando aulas particulares de SIG. Na pesquisa científica, tem atuado principalmente com os temas de degradação da terra, indicadores socioambientais, Cartografia, SIG e vegetação urbana.</p>
            </div>

            <div class="minicurso-action">
              <div class="action-status">
                <span class="status-indicator-green"></span> Inscrições abertas via e-mail!
              </div>
              <a href="#inscricao" class="btn-primary" id="minicurso-to-inscricao">Fazer Inscrição no Simpósio</a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Configura evento de clique para direcionar à seção de inscrição
    const btn = this.querySelector('#minicurso-to-inscricao');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const header = document.querySelector('site-header');
        if (header) {
          const inscLink = header.querySelector('a[data-target="inscricao"]');
          if (inscLink) {
            inscLink.click();
          }
        }
      });
    }
  }
}

customElements.define('minicurso-section', MinicursoSection);
