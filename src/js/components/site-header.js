import logoMenubar from '../../assets/images/logo_menubar.png';

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    const isIndex = page === "index.html" || page === "";

    // URLs para as seções (âncoras na Home, caminhos reais nas outras páginas)
    const inicioHref = isIndex ? "#hero" : "index.html";
    const programacaoHref = isIndex ? "#programacao" : "index.html#programacao";
    const palestrantesHref = isIndex ? "#palestrantes" : "index.html#palestrantes";
    const localHref = isIndex ? "#local" : "index.html#local";
    const comissaoHref = isIndex ? "#comissao" : "index.html#comissao";
    const inscricaoHref = isIndex ? "#inscricao" : "index.html#inscricao";

    // Função auxiliar para determinar classe active
    const getActive = (target) => {
      // Na home, deixamos o primeiro como ativo inicialmente
      if (isIndex && target === "hero") return "active";
      if (page.includes(target)) return "active";
      return "";
    };

    this.innerHTML = `
      <header class="site-header">
        <div class="navbar">
          <div class="logo">
            <a href="${isIndex ? '#hero' : 'index.html'}">
              <img src="${logoMenubar}" alt="Logo Simpósio SPGCST" />
            </a>
          </div>
          <div class="hamburger" id="hamburger">☰</div>
          <nav class="nav-links" id="nav-links">
            <a href="${inicioHref}" class="${getActive('index.html') || getActive('hero')}" data-target="hero">Início</a>
            <a href="${programacaoHref}" class="${getActive('programacao.html')}" data-target="programacao">Programação</a>
            <a href="${palestrantesHref}" class="${getActive('palestrantes.html')}" data-target="palestrantes">Palestrantes</a>
            <a href="${localHref}" class="${getActive('local.html')}" data-target="local">Local</a>
            <a href="${comissaoHref}" class="${getActive('comissao.html')}" data-target="comissao">Comissão</a>
            <a href="${inscricaoHref}" class="btn-primary ${getActive('inscricao.html')}" data-target="inscricao">Inscrição</a>
          </nav>
        </div>
      </header>
    `;

    this.initMenuLogic();
  }

  initMenuLogic() {
    const hamburger = this.querySelector('#hamburger');
    const navLinks = this.querySelector('#nav-links');
    const links = this.querySelectorAll('.nav-links a');

    // Toggle menu hambúrguer vertical
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('show');
      hamburger.textContent = navLinks.classList.contains('show') ? '✕' : '☰';
    });

    // Fecha ao clicar fora
    document.addEventListener('click', (e) => {
      if (!this.contains(e.target)) {
        navLinks.classList.remove('show');
        hamburger.textContent = '☰';
      }
    });

    const page = window.location.pathname.split("/").pop() || "index.html";
    const isIndex = page === "index.html" || page === "";

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Se estiver na Home e for um link interno (âncora)
        if (isIndex && href.startsWith('#')) {
          e.preventDefault();
          navLinks.classList.remove('show');
          hamburger.textContent = '☰';

          const targetId = href.substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
            // Atualiza active class
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Alterna a aba correspondente
            const sections = document.querySelectorAll('.view-section');
            sections.forEach(sec => {
              sec.classList.remove('active-section');
              if (sec.id === targetId) {
                sec.classList.add('active-section');
              }
            });

            // Rola suavemente
            if (targetId === 'hero') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              const headerOffset = 80;
              const elementPosition = targetSection.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY - headerOffset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }
        }
      });
    });
  }
}

customElements.define('site-header', SiteHeader);
