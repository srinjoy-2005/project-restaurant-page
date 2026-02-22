import './aboutStyles.css';

const content = document.getElementById("content");

const AboutUI = {
    make(tag, className, text = "") {
        const el = document.createElement(tag);
        if (className) el.classList.add(className);
        if (text) el.textContent = text;
        return el;
    },

    createHero() {
        const section = this.make('section', 'about-hero');
        const title = this.make('h1', 'about-title', 'Our Philosophy');
        const subtitle = this.make(
            'p',
            'about-subtitle',
            'Where craft meets intention.'
        );

        section.append(title, subtitle);
        return section;
    },

    createStory() {
        const section = this.make('section', 'about-story');

        const heading = this.make('h2', 'about-section-title', 'The Story of Yomato');
        const text = this.make(
            'p',
            'about-text',
            'Founded in 2024, Yomato was created to redefine private dining and curated events. We believe food is not simply served — it is experienced. Each menu is composed with seasonality, refinement, and emotional resonance in mind.'
        );

        section.append(heading, text);
        return section;
    },

    createValues() {
        const section = this.make('section', 'about-values');
        const heading = this.make('h2', 'about-section-title', 'Our Values');

        const values = [
            {
                title: "Seasonality",
                desc: "We work with local purveyors to source peak ingredients."
            },
            {
                title: "Craft",
                desc: "Technique and detail guide every plate we compose."
            },
            {
                title: "Hospitality",
                desc: "Every guest is treated with warmth and thoughtful service."
            }
        ];

        const grid = this.make('div', 'values-grid');

        values.forEach(v => {
            const card = this.make('div', 'value-card');
            const title = this.make('h3', null, v.title);
            const desc = this.make('p', null, v.desc);
            card.append(title, desc);
            grid.appendChild(card);
        });

        section.append(heading, grid);
        return section;
    }
};

const initAbout = () => {
    content.innerHTML = "";

    content.appendChild(AboutUI.createHero());
    content.appendChild(AboutUI.createStory());
    content.appendChild(AboutUI.createValues());
};

export default initAbout;