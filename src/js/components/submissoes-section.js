class SubmissionsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="submissions-container">
        <div class="submissions-header">
          <p class="submissions-subtitle">A submissão de resumos para o 13º SPGCST 2026 visa divulgar pesquisas e estudos vinculados à Ciência do Sistema Terrestre. Os trabalhos devem ser enviados em formato de Resumo Expandido.</p>
        </div>

        <div class="submissions-layout">
          <!-- Coluna 1: Normas e Formulários -->
          <div class="submissions-col-info">
            <div class="brutalist-card callout-card">
              <h3 class="card-title text-orange">📅 PRAZO PARA SUBMISSÃO</h3>
              <p class="highlight-date">Até 15 de agosto de 2026</p>
              <p class="card-desc">As submissões poderão ser efetuadas em português, inglês ou espanhol.</p>
            </div>

            <div class="brutalist-card">
              <h3 class="card-title">NORMAS E TEMPLATES</h3>
              <p class="card-desc">Utilize os modelos oficiais para formatação do seu Resumo Expandido e Banner.</p>
              <div class="action-buttons-stack">
                <a href="/src/assets/templates/Template%20XIIISPGCST%202026%20-%20Resumo%20Expandido.docx" download="Template_XIIISPGCST_2026_Resumo_Expandido.docx" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-full text-center margin-bottom-sm">
                  Baixar Template Resumo (.docx)
                </a>
                <a href="/src/assets/templates/XIII%20SPGCST%20-%20Banner.pptx" download="XIII_SPGCST_Banner.pptx" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-full text-center">
                  Baixar Template Banner (.pptx)
                </a>
              </div>
            </div>

            <div class="brutalist-card">
              <h3 class="card-title">ENVIAR TRABALHO</h3>
              <p class="card-desc text-muted">Atenção aos dois formulários específicos de submissão:</p>
              
              <div class="action-buttons-stack">
                <a href="https://forms.gle/QzTjzyWac2UwXLVW6" target="_blank" rel="noopener noreferrer" class="btn-primary btn-full text-center margin-bottom-sm">
                  Apresentação em Banner (Inscritos Gerais)
                </a>
                <a href="https://forms.gle/XGeARpVVJjcX2YZu7" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-full text-center">
                  Apresentação Oral (Exclusivo Alunos PGCST)
                </a>
              </div>
            </div>

            <div class="brutalist-card warning-card">
              <h3 class="card-title text-orange">⚠️ REGRAS ADICIONAIS</h3>
              <ul class="bullet-list">
                <li>Cada inscrição dá direito à submissão de <strong>1 (um) trabalho</strong>.</li>
                <li>Em caso de um segundo trabalho, será cobrada uma taxa de <strong>R$ 15,00</strong>.</li>
              </ul>
            </div>

            <div class="brutalist-card">
              <h3 class="card-title">DÚVIDAS OU SUPORTE</h3>
              <p class="card-desc">Dúvidas relacionadas a trabalhos ou plataforma? Entre em contato com a organização:</p>
              <a href="mailto:spgcst.inpe@gmail.com" class="support-email">spgcst.inpe@gmail.com</a>
            </div>
          </div>

          <!-- Coluna 2: Eixos Temáticos -->
          <div class="submissions-col-axes">
            <h3 class="axes-heading">EIXOS TEMÁTICOS</h3>

            <!-- Eixo 1 -->
            <div class="eixo-card">
              <div class="eixo-header">
                <h4 class="eixo-title">Eixo 1 - Território, Justiça Socioambiental e Educação Transdisciplinar</h4>
              </div>
              <div class="eixo-body">
                <p><strong>Foco:</strong> Interações entre populações humanas e o Sistema Terrestre, abordando dimensões sociais, políticas e participativas das transformações ambientais.</p>
                <div class="eixo-tags">
                  <span>Conflitos socioambientais</span>
                  <span>Justiça ambiental</span>
                  <span>Governança & Políticas</span>
                  <span>Populações tradicionais</span>
                  <span>Resiliência socioecológica</span>
                  <span>Educação & Extensão</span>
                </div>
              </div>
            </div>

            <!-- Eixo 2 -->
            <div class="eixo-card">
              <div class="eixo-header">
                <h4 class="eixo-title">Eixo 2 - Dinâmicas Ambientais e Climáticas no Sistema Terrestre</h4>
              </div>
              <div class="eixo-body">
                <p><strong>Foco:</strong> Análise integrada de processos ambientais e climáticos, suas dinâmicas e implicações para a sustentabilidade.</p>
                <div class="eixo-tags">
                  <span>Uso da terra</span>
                  <span>Extremos climáticos</span>
                  <span>Hidrologia & Serviços</span>
                  <span>Gestão de riscos</span>
                  <span>Impactos socioambientais</span>
                </div>
              </div>
            </div>

            <!-- Eixo 3 -->
            <div class="eixo-card">
              <div class="eixo-header">
                <h4 class="eixo-title">Eixo 3 - Inovação, Modelagem e Monitoramento do Sistema Terrestre</h4>
              </div>
              <div class="eixo-body">
                <p><strong>Foco:</strong> Ferramentas, tecnologias e abordagens integradas para observar, modelar e compreender o funcionamento do Sistema Terrestre.</p>
                <div class="eixo-tags">
                  <span>Sensoriamento remoto</span>
                  <span>Modelagem espacial</span>
                  <span>Inteligência artificial</span>
                  <span>Energias renováveis</span>
                  <span>Cenários ambientais</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('submissions-section', SubmissionsSection);
