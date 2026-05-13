 const ARTICLES = [
      { id:0, cat:"Technologie", title:"L'Intelligence Artificielle et l'informatique : va-t-elle remplacer les informaticiens et d'autres métiers ?", excerpt:"L'IA progresse rapidement dans le monde informatique. Mais va-t-elle remplacer les développeurs, les ingénieurs et d'autres professions ?", img:"images/tech.jpg", date:"3 mai 2025", read:"8 min", tags:["#IA","#Futur","#métier"], video:"https://www.youtube.com/embed/aircAruvnKk",
        body:`<p>L'intelligence artificielle s'impose aujourd'hui comme une révolution majeure dans le domaine de l'informatique...</p><h3>Une IA construite par l'informatique</h3><p>L'IA repose entièrement sur l'informatique : algorithmes, langages de programmation, bases de données et puissance de calcul. Les informaticiens sont à l'origine même de cette technologie.</p><blockquote>"L'IA ne remplace pas l'informatique, elle en est une extension avancée." — expert en technologie</blockquote><h3>L'IA peut-elle remplacer les informaticiens ?</h3><p>L'IA peut générer du code et corriger des erreurs, mais remplacer totalement les informaticiens reste très loin de la réalité. Elle ne comprend pas vraiment les besoins humains.</p><h3>Vers une transformation plutôt qu'un remplacement</h3><p>L'IA transforme les métiers plutôt qu'elle ne les supprime. De nouveaux rôles émergent : ingénieur en IA, analyste de données, spécialiste en éthique numérique.</p><h3>Conclusion</h3><p>L'avenir ne sera pas une opposition entre l'homme et la machine, mais une collaboration entre les deux.</p>`},
      { id:1, cat:"réalité", title:"Les clichés sur l'informatique dans la société congolaise", excerpt:"Derrière les préjugés sur l'informatique au Congo se cache une réalité numérique en pleine transformation.", img:"images/cliche-informatique.png", date:"25 avr. 2025", read:"6 min", tags:["#réalité","#brazzaville"],
        body:`<p>Dans beaucoup de familles au Congo, lorsqu'un jeune annonce qu'il étudie l'informatique, les réactions sont souvent : « Ah donc tu vas réparer les téléphones ? »</p><h3>Une vision héritée d'une autre époque</h3><p>Au Congo, l'informatique n'a pas évolué au même rythme que dans d'autres pays. Pendant longtemps, les cybercafés représentaient le principal accès à Internet.</p><h3>Les jeunes Congolais changent les mentalités</h3><p>Malgré les difficultés — manque de matériel, connexion coûteuse — de nombreux jeunes apprennent le développement web, la programmation, le design et la cybersécurité.</p><blockquote>"Tu as pouvoir sur ton esprit, pas sur les événements extérieurs." — Marc Aurèle</blockquote>`},
      { id:2, cat:"Science", title:"La Science en Afrique et dans le monde : entre héritage, défis et révolution", excerpt:"La science façonne le monde moderne, mais son développement reste inégal entre l'Afrique et les grandes puissances scientifiques.", img:"images/science.jpg", date:"18 avr. 2025", read:"9 min", tags:["#Conscience","#Science"], video:"https://www.youtube.com/embed/lyu7v7nWzfo",
        body:`<p>La science est aujourd'hui l'un des moteurs les plus puissants du développement humain.</p><h3>La science dans le monde</h3><p>À l'échelle mondiale, la science est dominée par quelques pôles majeurs : les États-Unis, la Chine, le Japon et l'Europe.</p><h3>La science en Afrique</h3><p>L'Afrique possède un potentiel scientifique énorme, mais encore sous-exploité. Manque de financement, fuite des cerveaux, infrastructures limitées.</p><h3>Vers une science plus inclusive</h3><p>Des partenariats internationaux permettent de renforcer la présence de l'Afrique dans la communauté scientifique mondiale.</p>`},
      { id:3, cat:"Dévélopement", title:"La confiance en soi chez les étudiants : ce combat silencieux que beaucoup cachent", excerpt:"Derrière les sourires, nombreux sont les étudiants qui doutent d'eux-mêmes. La confiance se construit, elle ne se donne pas.", img:"images/confience.png", date:"10 avr. 2025", read:"5 min", tags:["#confience","#Mindset"],
        body:`<p>Dans les universités au Congo, beaucoup d'étudiants vivent une bataille silencieuse : le manque de confiance en soi.</p><h3>La pression de réussir</h3><p>Certaines familles attendent de bonnes notes, un diplôme rapide, un travail stable. Cette pression peut devenir très lourde.</p><h3>Les réseaux sociaux aggravent parfois les choses</h3><p>Les réseaux sociaux montrent rarement les échecs, les nuits difficiles et les doutes.</p><h3>La confiance en soi se construit</h3><p>Elle se développe quand on apprend chaque jour, quand on ose essayer et quand on cesse de se comparer aux autres.</p>`},
      { id:8, cat:"Société", title:"La religion au Congo : entre traditions, christianisme et vie étudiante", excerpt:"Au Congo, la religion influence profondément la société, notamment les étudiants pour qui la prière devient un repère.", img:"images/religion.jpg", date:"12 avr. 2025", read:"12 min", tags:["#Congo","#Religion","#Étudiants","#Prière"],
        body:`<p>Au Congo, la religion est bien plus qu'une simple croyance : elle est une réalité sociale, culturelle et émotionnelle.</p><h3>Un christianisme dominant et très influent</h3><p>La République du Congo est majoritairement chrétienne, avec une forte présence du catholicisme, des Églises protestantes et des mouvements évangéliques.</p><h3>Les étudiants et la prière</h3><p>Face aux défis académiques, beaucoup d'étudiants se tournent vers la prière comme soutien moral et spirituel.</p><h3>Conclusion</h3><p>La religion reste un pilier essentiel de la société congolaise, un espace d'espoir et de résilience.</p>`}
    ];

    let currentCat = "Tous";

    function renderCards(list) {
      const grid = document.getElementById("articlesGrid");
      grid.innerHTML = list.length === 0
        ? `<div class="col-12 text-center text-muted py-5"><i class="bi bi-search fs-1 d-block mb-2"></i>Aucun article trouvé.</div>`
        : list.map(a => `
          <div class="blog-card" style="cursor:pointer" onclick="openArticle(${a.id})">
            <img src="${a.img}" alt="${a.title}"/>
            <div class="card-body">
              <div class="card-category"><i class="bi bi-tag me-1"></i>${a.cat}</div>
              <div class="card-title">${a.title}</div>
              <div class="card-excerpt">${a.excerpt}</div>
              <div class="d-flex flex-wrap mt-2">${a.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
              <div class="card-meta mt-2"><i class="bi bi-calendar3 me-1"></i>${a.date}<span class="ms-3"><i class="bi bi-clock me-1"></i>${a.read}</span></div>
              <button class="read-btn">Lire <i class="bi bi-arrow-right ms-1"></i></button>
            </div>
          </div>`).join('');
    }

    function filterCat(cat, el) {
      currentCat = cat;
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      el.classList.add('active');
      applyFilters();
    }

    function filterArticles() { applyFilters(); }

    function applyFilters() {
      const q = document.getElementById("searchInput").value.toLowerCase();
      let list = ARTICLES;
      if (currentCat !== "Tous") list = list.filter(a => a.cat === currentCat);
      if (q) list = list.filter(a => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.tags.join(' ').toLowerCase().includes(q));
      renderCards(list);
    }

    function openArticle(id) {
      const a = ARTICLES.find(x => x.id === id);
      if (!a) return;
      const vid = a.video ? `<h3>📽 Vidéo associée</h3><div class="video-wrap"><iframe src="${a.video}" allowfullscreen loading="lazy"></iframe></div>` : '';
      document.getElementById("articleContent").innerHTML = `
        <img class="article-hero" src="${a.img}" alt="${a.title}"/>
        <div class="article-category mb-2" style="color:var(--accent);font-weight:700;font-size:.85rem;text-transform:uppercase;letter-spacing:.08em"><i class="bi bi-tag me-1"></i>${a.cat}</div>
        <h1 class="article-title">${a.title}</h1>
        <div class="article-meta"><i class="bi bi-calendar3 me-1"></i>${a.date} &nbsp;•&nbsp; <i class="bi bi-clock me-1"></i>${a.read} de lecture</div>
        <div class="article-body">${a.body}${vid}<p style="margin-top:1.5rem">Merci d'avoir lu cet article. Si ces réflexions vous ont touché, n'hésitez pas à le partager.</p></div>`;
      document.getElementById("articleTags").innerHTML = a.tags.map(t=>`<span class="tag me-1">${t}</span>`).join('');
      const related = ARTICLES.filter(x => x.id !== id).slice(0, 3);
      document.getElementById("relatedArticles").innerHTML = related.map(r=>`<div class="pop-article" onclick="openArticle(${r.id})" style="cursor:pointer"><img src="${r.img}" alt=""/><div><div class="pop-article-title">${r.title}</div><div class="pop-article-date">${r.date}</div></div></div>`).join('');
      document.getElementById("homeView").style.display = "none";
      document.getElementById("articleView").style.display = "block";
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showHome() {
      document.getElementById("homeView").style.display = "block";
      document.getElementById("articleView").style.display = "none";
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function filterTag(tagName) {
      const filtered = ARTICLES.filter(a => a.tags.some(t => t.toLowerCase().includes(tagName.toLowerCase())));
      renderCards(filtered);
      showHome();
      setTimeout(() => document.getElementById("articles").scrollIntoView({ behavior: "smooth" }), 100);
    }

    renderCards(ARTICLES);