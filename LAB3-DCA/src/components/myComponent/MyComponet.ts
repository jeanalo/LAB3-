export enum Attribute {
    "name" = "name",
    "uid" = "uid",
    "image" = "image",
    "age" = "age",
    "gender" = "gender",
    "area" = "area",
    "position" = "position",
    "timeInCompany" = "timeInCompany",
    "experience" = "experience",
}

class WorkersCard extends HTMLElement {
    name?: string;
    uid?: number;
    image?: string;
    age?: number;
    gender?: string;
    area?: string;
    position?: string;
    timeInCompany?: number;
    experience?: number;

    static get observedAttributes() {
        return Object.keys(Attribute);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            case Attribute.uid:
                this.uid = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.age:
                this.age = newValue ? Number(newValue) : undefined;
                break;

            case Attribute.timeInCompany:
                this[propName] = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.experience:
                this[propName] = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section>
                <img src="${this.image || ''}" alt="Worker Image" width="100">
                <h2>${this.name || "No Name"}</h2>
                <p>ID: ${this.id || "N/A"}</p>
                <p>Age: ${this.age || "N/A"}</p>
                <p>Gender: ${this.gender || "N/A"}</p>
                <p>Area: ${this.area || "N/A"}</p>
                <p>Position: ${this.position || "N/A"}</p>
                <p>Time in Company: ${this.timeInCompany || "N/A"} years</p>
                <p>Experience: ${this.experience || "N/A"} years</p>
            </section>
            `;
        }
    }
}

customElements.define('worker-profile', WorkersCard);
export default WorkersCard;

