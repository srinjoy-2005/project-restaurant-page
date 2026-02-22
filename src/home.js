import './homeStyles.css';
import logo from './logo.png';

const content = document.getElementById("content");
const UI = {
    // Helper to create elements with classes/text quickly
    make(tag, className, text = "") {
        const el = document.createElement(tag);
        if (className) el.classList.add(className);
        if (text) el.textContent = text;
        return el;
    },


    createHero() {
        const section = this.make('section', 'hero');
        const content = this.make('div', 'hero-content');
        
        const preTitle = this.make('p', 'pre-title', 'ESTABLISHED 2024');
        const h1 = this.make('h1', null, 'The Art of the Occasion');
        const desc = this.make('p', 'description', 'Bespoke culinary experiences tailored for intimate elopements and grand galas.');

        const logoImg = document.createElement('img');
        logoImg.classList.add('logo');
        logoImg.src = logo;
        logoImg.height = 180;
        logoImg.width = 180;
        logoImg.alt = 'Restaurant Logo';

        content.append(logoImg, preTitle, h1, desc);
        section.appendChild(content);
        return section;
    },

    createServices() {
        const section = this.make('section', 'services-grid');
        const services = [
            { title: 'Weddings', desc: 'Elegant multi-course plated dinners.' },
            { title: 'Corporate', desc: 'Refined lunch service and galas.' },
            { title: 'Private', desc: 'Intimate in-home chef experiences.' }
        ];

        services.forEach(s => {
            const card = this.make('div', 'service-card');
            card.append(this.make('h3', null, s.title), this.make('p', null, s.desc));
            section.appendChild(card);
        });

        return section;
    },

    createFooter() {
        const footer = this.make('footer', 'footer');
        const address = this.make('address', 'footer-addr', '712 VERMONT AVE, NEW YORK, NY');
        footer.appendChild(address);
        return footer;
    }
};

// Orchestration
const init = () => {
    
    content.innerHTML = ""; 
    content.appendChild(UI.createHero());
    content.appendChild(UI.createServices());
    content.appendChild(UI.createFooter());
};

export default init;