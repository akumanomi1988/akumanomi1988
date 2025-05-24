console.log("Script loaded!");

async function fetchRepositories(username) {
    const repoContainer = document.querySelector('.repo-container');
    const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`;

    try {
        repoContainer.innerHTML = '<p>Loading repositories...</p>'; // Ensure loading message is present

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching repos: ${response.status} ${response.statusText}`);
        }
        const repos = await response.json();

        repoContainer.innerHTML = ''; // Clear loading message

        if (repos.length === 0) {
            repoContainer.innerHTML = '<p>No public repositories found.</p>';
            return;
        }

        repos.forEach(repo => {
            const card = document.createElement('div');
            card.classList.add('repo-card');

            const nameLink = document.createElement('a');
            nameLink.href = repo.html_url;
            nameLink.target = '_blank'; // Open in new tab
            nameLink.rel = 'noopener noreferrer'; // Security best practice

            const repoName = document.createElement('h3');
            repoName.textContent = repo.name;
            nameLink.appendChild(repoName);

            const description = document.createElement('p');
            description.textContent = repo.description || 'No description available.'; // Handle null descriptions

            const language = document.createElement('span');
            language.classList.add('repo-language');
            language.textContent = repo.language ? `Language: ${repo.language}` : 'Language: N/A';

            const stars = document.createElement('span');
            stars.classList.add('repo-stars');
            stars.textContent = `Stars: ${repo.stargazers_count}`;

            const forks = document.createElement('span');
            forks.classList.add('repo-forks');
            forks.textContent = `Forks: ${repo.forks_count}`;

            card.appendChild(nameLink);
            card.appendChild(description);
            card.appendChild(language);
            card.appendChild(stars);
            card.appendChild(forks);

            repoContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Failed to fetch repositories:", error);
        repoContainer.innerHTML = `<p>Error loading repositories. ${error.message}</p>`;
    }
}

function handleScrollAnimations() {
    const sections = document.querySelectorAll('.fade-in-section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const elementTop = section.getBoundingClientRect().top;
        // Trigger when the top of the element is 100px above the bottom of the viewport
        if (elementTop < windowHeight - 100) {
            section.classList.add('is-visible');
        }
        // Optional: To re-trigger animation, remove 'is-visible' when out of view
        // else if (elementTop > windowHeight) { // Example: if element is below viewport
        //     section.classList.remove('is-visible');
        // }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchRepositories('Akumanomi1988');
    handleScrollAnimations(); // Check on load
    window.addEventListener('scroll', handleScrollAnimations); // Check on scroll
});
