 // Base de dados dos artigos do blog
    const posts = [
        {
            id: "era-conveniencia",
            title: "A Era da Conveniência: como a digitalização pode ajudar pequenos negócios",
            category: "Tendências",
            preview: "Vivemos a Economia da Conveniência, onde a praticidade e a redução de atritos na jornada de compras deixou de ser um diferencial competitivo...",
            content: `
                <p>No último episódio da Boca TV foi mostrado uma cena clássica: um cliente entra no estabelecimento, escolhe seus produtos e, ao descobrir que o local só aceita dinheiro, desiste de realizar a compra. Mas o que está por trás disso?</p>
                <p>Vivemos a Economia da Conveniência, onde a praticidade e a redução de atritos na jornada de compras deixou de ser um diferencial competitivo para se tornar um elemento central no comércio local, visto que o consumidor mudou hábito antes de diversos estabelecimentos.</p>
                <img src="IMAGENS/blogFoto.jpeg" alt="Economia da Conveniência" style="width: 100%; max-width: 600px; border-radius: 12px; margin: 24px auto; display: block;">
                <p>Para o presidente da Sabrea, Décio Lima, o domínio do uso do Pix para transações financeiras confirma o comprometimento dos empreendedores com a modernização de seus negocios e com a tecnologia, que é uma realidade na economia brasileira.</p>
                <p>Pesquisas do Sebrae, do Instituto Ipespe e da Fiserv Insights 2026 - Panorama do Varejo revelam o impacto da era digital no comportamento dos consumidores brasileiros:</p>
                <div class="stats-highlight"><div class="stat-item"><h3>75%</h3><span>dos consumidores já desistiram de compra por falta do meio de pagamento preferido</span></div><div class="stat-item"><h3>6/10</h3><span>pequenos negócios têm Pix como principal recebimento</span></div></div>
                <p>Se 75% dos consumidores já abandonaram uma compra por falta de opção de pagamento, a pergunta que fica é: até quando o seu lucro vai pagar o preço do seu receio?</p>
                <p>A Boca TV acredita que a tecnologia não possui a capacidade de substituir o ser humano, e sim, fortalecê-los. Como pontuado pelo presidente da Sebrae, Décio Lima, a modernização é um conceito que não tem mais volta. Portanto, quando o comerciante aceita a tecnologia como o Mercado Pago, ele não está apenas "aceitando cartão", ele está ganhando tempo e aumentando clientes.</p>
                <blockquote>"É um meio que já se consolidou. A tecnologia é um conceito que não tem mais volta e os pequenos negócios utilizam para pulverizar oportunidades e aumentar a geração de empregos."
                Décio Lima, presidente da Sebrae.</blockquote>
                <p>Ampliar os meios de pagamento não é abandonar a essencia dos pequenos negócios, mas sim uma estratégia direta de aumento de conversão. Um comércio que aceita a era digital, além de gerar empregos, garante que a tradição local sobreviva à competitividade das grandes redes. </p>
                <p>Nesse episódio da Boca TV, mostramos que a transformação se inicia com uma escolha de mudança simples, mas termina com o desenvolvimento da economia local.</p>
            `,
            imgClass: "card-img-1",
            views: "1.2k visualizações",
            date: "30 de abril, 2026"
        },
    ];

    const root = document.getElementById('app-root');

    // Hero + Highlights + Blog (Home completa)
    function renderHome() {
        let postsHTML = '';
        posts.forEach(post => {
            postsHTML += `
                <div class="post-card" data-post-id="${post.id}">
                    <div class="card-img ${post.imgClass}"></div>
                    <div class="card-content">
                        <div class="card-category">${post.category}</div>
                        <h3>${post.title}</h3>
                        <p>${post.preview.substring(0, 120)}...</p>
                        <div class="read-more">Ler artigo completo <i class="fas fa-arrow-right"></i></div>
                    </div>
                </div>
            `;
        });

        const html = `
            <!-- Hero Section - Estilo Meu Mercado Digital -->
            <section class="hero-digital">
                <div class="container">
                    <h1>Meu Mercado Digital</h1>
                    <p class="hero-subtitle">Conectando empreendedores à transformação digital com conhecimento técnico e estratégias práticas para o seu sucesso.</p>
                    <div class="hero-buttons">
                        <button class="btn-secondary" id="heroCtaBlog">Ver Blog <i class="fas fa-newspaper"></i></button>
                    </div>
                </div>
            </section>
            
            <!-- Seção do Blog -->
            <div class="container">
                <div class="section-title">📰 Últimos artigos do blog</div>
                <div class="blog-grid" id="blog-grid-home">
                    ${postsHTML}
                </div>
            </div>
        `;
        root.innerHTML = html;

        // Eventos dos cards
        document.querySelectorAll('.post-card').forEach(card => {
            const id = card.getAttribute('data-post-id');
            card.addEventListener('click', () => renderPost(id));
        });

        // Eventos dos botões do hero
        document.getElementById('heroCtaStart')?.addEventListener('click', () => {
            document.querySelector('[data-nav="contato"]')?.click();
        });
        document.getElementById('heroCtaBlog')?.addEventListener('click', () => {
            const blogSection = document.querySelector('.section-title');
            if (blogSection) blogSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    function renderPost(postId) {
        const post = posts.find(p => p.id === postId);
        if (!post) {
            renderHome();
            return;
        }
        const html = `
            <div class="container">
                <div class="article-full">
                    <h1>${post.title}</h1>
                    <div class="article-meta">
                        <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                        <span><i class="far fa-eye"></i> ${post.views}</span>
                        <span><i class="fas fa-tag"></i> ${post.category}</span>
                    </div>
                    <div class="article-body">
                        ${post.content}
                    </div>
                    <div style="margin-top: 36px; border-top: 1px solid #ece3d8; padding-top: 28px;">
                        <button class="back-home" id="backToHomeBtn">← Voltar para o início</button>
                    </div>
                </div>
            </div>
        `;
        root.innerHTML = html;
        document.getElementById('backToHomeBtn')?.addEventListener('click', () => renderHome());
    }

    function renderBlogOnly() {
        let postsHTML = '';
        posts.forEach(post => {
            postsHTML += `
                <div class="post-card" data-post-id="${post.id}">
                    <div class="card-img ${post.imgClass}"></div>
                    <div class="card-content">
                        <div class="card-category">${post.category}</div>
                        <h3>${post.title}</h3>
                        <p>${post.preview.substring(0, 120)}...</p>
                        <div class="read-more">Ler artigo completo <i class="fas fa-arrow-right"></i></div>
                    </div>
                </div>
            `;
        });
        const html = `
            <div class="container">
                <div class="section-title" style="margin-top: 40px;">📰 Blog | Transformação Digital</div>
                <div class="blog-grid" id="blog-grid-only">
                    ${postsHTML}
                </div>
            </div>
        `;
        root.innerHTML = html;
        document.querySelectorAll('.post-card').forEach(card => {
            const id = card.getAttribute('data-post-id');
            card.addEventListener('click', () => renderPost(id));
        });
    }

    function renderSobre() {
        const html = `
            <div class="container">
                <div class="page-card">
                    <h1>📖 Sobre o Meu Mercado Digital</h1>
                    <p style="font-size:1.2rem; margin:20px 0">Somos uma plataforma dedicada a conectar empreendedores à transformação digital, oferecendo conhecimento técnico e estratégias práticas para o sucesso do seu negócio.</p>
                    <p>Acreditamos que a tecnologia não substitui o ser humano, mas o fortalece. A modernização é um conceito que não tem mais volta, e os pequenos negócios podem utilizar essas ferramentas para pulverizar oportunidades e aumentar a geração de empregos.</p>
                    <div class="stats-highlight"><div class="stat-item"><i class="fas fa-store"></i> <strong>+10 mil</strong> <span>empreendedores impactados</span></div> <div class="stat-item"><i class="fas fa-chart-simple"></i> <strong>75%</strong> <span>dos consumidores preferem variedade de pagamento</span></div></div>
                    <p><strong>"Um comércio que aceita a era digital garante que a tradição local sobreviva"</strong> — essa é a nossa missão.</p>
                    <button class="back-home" id="backHomeSobre">← Voltar para o Início</button>
                </div>
            </div>
        `;
        root.innerHTML = html;
        document.getElementById('backHomeSobre')?.addEventListener('click', () => renderHome());
    }

    function renderContato() {
        const html = `
            <div class="container">
                <div class="page-card">
                    <h1>📬 Fale Conosco</h1>
                    <p>Tem alguma sugestão, case de sucesso ou quer saber mais sobre transformação digital? Mande uma mensagem para nossa equipe.</p>
                    <form id="contactForm" style="margin-top: 32px; display:flex; flex-direction:column; gap:24px;">
                        <input type="text" id="contactName" placeholder="Seu nome" required>
                        <input type="email" id="contactEmail" placeholder="E-mail para contato" required>
                        <textarea id="contactMsg" rows="4" placeholder="Sua mensagem sobre digitalização de pequenos negócios..."></textarea>
                        <button type="submit">Enviar mensagem <i class="fas fa-paper-plane"></i></button>
                    </form>
                    <div id="formFeedback" style="margin-top:16px;"></div>
                    <div style="margin-top:36px;"><i class="fas fa-envelope"></i> contato@meu mercadodigital.com.br  |  (11) 99999-8888</div>
                    <button class="back-home" id="backHomeContato" style="margin-top:35px;">← Página inicial</button>
                </div>
            </div>
        `;
        root.innerHTML = html;
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const feedback = document.getElementById('formFeedback');
                feedback.innerHTML = '<span style="color:#2b6e4c;"><i class="fas fa-check-circle"></i> Mensagem enviada! Em breve nosso time responde.</span>';
                form.reset();
                setTimeout(() => feedback.innerHTML = '', 3000);
            });
        }
        document.getElementById('backHomeContato')?.addEventListener('click', () => renderHome());
    }

    // Navegação
    const navLinks = document.querySelectorAll('[data-nav]');
    function setActiveNav(activePage) {
        navLinks.forEach(link => {
            const page = link.getAttribute('data-nav');
            if (page === activePage) link.classList.add('active');
            else link.classList.remove('active');
        });
    }

    function navigateTo(page) {
        if (page === 'home') {
            renderHome();
            setActiveNav('sobre');
        } else if (page === 'blog') {
            renderBlogOnly();
            setActiveNav('blog');
        } else if (page === 'contato') {
            renderContato();
            setActiveNav('contato');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const page = link.getAttribute('data-nav');
            navigateTo(page);
        });
    });

    // Inicializar com Home
    renderHome();
    setActiveNav('home');
