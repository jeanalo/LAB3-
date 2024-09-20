import * as components from './components/indexPadre';
import  WorkersCard, {Attribute} from './components/myComponent/MyComponet';
import {workers} from './data/data'




class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

            render() {
                if (this.shadowRoot) {
                    this.shadowRoot.innerHTML = `<div id="workers-container"></div>`;
        
                    const container = this.shadowRoot.querySelector('#workers-container');
        
                    if (container) {
                        const evenWorkers = workers.filter(worker => worker.id % 2 === 0);
                        console.log(evenWorkers);
        
                        evenWorkers.forEach(worker => {
                            const workerProfile = document.createElement('worker-profile');
        
                            workerProfile.setAttribute('name', worker.name);
                            workerProfile.setAttribute('uid', worker.id.toString());
                            workerProfile.setAttribute('image', worker.image);
                            workerProfile.setAttribute('age', worker.age.toString());
                            workerProfile.setAttribute('gender', worker.gender);
                            workerProfile.setAttribute('area', worker.jobDetails.area);
                            workerProfile.setAttribute('position', worker.jobDetails.position);
                            workerProfile.setAttribute('timeInCompany', worker.jobDetails.timeInCompany.toString());
                            workerProfile.setAttribute('experience', worker.jobDetails.experience.toString());
        
                            container.appendChild(workerProfile);
                            console.log(workerProfile);

                        });
                    }
                }
            }
        }
        
        customElements.define('app-container', AppContainer);