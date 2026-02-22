import './menuStyles.css';

const content = document.getElementById("content");

const MenuUI = {
    make(tag, className, text = "") {
        const el = document.createElement(tag);
        if (className) el.classList.add(className);
        if (text) el.textContent = text;
        return el;
    },

    createMenuHero() {
        const section = this.make('section', 'menu-hero');
        const title = this.make('h1', 'menu-title', 'Seasonal Menu');
        const subtitle = this.make(
            'p',
            'menu-subtitle',
            'Crafted with intention. Rooted in seasonality.'
        );

        section.append(title, subtitle);
        return section;
    },

    createMenuSection(titleText, items) {
        const section = this.make('section', 'menu-section');
        const title = this.make('h2', 'menu-section-title', titleText);

        const list = this.make('div', 'menu-items');

        items.forEach(item => {
            const itemWrap = this.make('div', 'menu-item');

            const header = this.make('div', 'menu-item-header');
            const name = this.make('h3', null, item.name);
            const price = this.make('span', 'menu-price', item.price);

            const desc = this.make('p', 'menu-desc', item.desc);

            header.append(name, price);
            itemWrap.append(header, desc);
            list.appendChild(itemWrap);
        });

        section.append(title, list);
        return section;
    }
};

const initMenu = () => {
    content.innerHTML = "";

    const starters = [
        { name: "Oysters & Champagne Mignonette", price: "$24", desc: "Half dozen east coast oysters, citrus mignonette." },
        { name: "Burrata & Charred Peaches", price: "$19", desc: "Local burrata, basil oil, toasted sourdough." }
    ];

    const mains = [
        { name: "Dry-Aged Ribeye", price: "$68", desc: "14oz ribeye, rosemary jus, confit garlic." },
        { name: "Seared Halibut", price: "$42", desc: "Spring pea purée, beurre blanc, crispy leeks." }
    ];

    const desserts = [
        { name: "Dark Chocolate Torte", price: "$16", desc: "72% cacao, crème fraîche, sea salt." },
        { name: "Vanilla Bean Panna Cotta", price: "$14", desc: "Seasonal berries, honey tuile." }
    ];

    content.appendChild(MenuUI.createMenuHero());
    content.appendChild(MenuUI.createMenuSection("Starters", starters));
    content.appendChild(MenuUI.createMenuSection("Mains", mains));
    content.appendChild(MenuUI.createMenuSection("Desserts", desserts));
};

export default initMenu;