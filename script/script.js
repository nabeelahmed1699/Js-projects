const element = (query) => document.querySelector(query);

// Rendering projects dynamically
import { projects } from "./projects.js";

console.log(projects);

const navbar = element('.navbar');

// handling navbar
window.addEventListener('scroll', () => {
    let navbarHeight = navbar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
    if (scrollHeight >= navbarHeight) {
        navbar.classList.add('navbar-shadow');
        return;
    }
    navbar.classList.remove('navbar-shadow');
});


function renderProject() {
    console.log('created');
    const projectContainer = element('.projects-container');
    projects.map(project => {
        projectContainer.appendChild(createProject(project))
    });
}


function createProject(project) {
    const { id, sourceCode, img, name, visitLink } = project;
    let article = document.createElement('article');
    article.classList.add('project');
    article.innerHTML = `<div class="project-img">
                        <img src="${img}" alt="${name}">
                    </div>
                    <div class="project-footer">
                        <a href="${sourceCode}">source code</a>
                        <a href="${visitLink}">visit</a>
                    </div>`
    return article;
}

renderProject();