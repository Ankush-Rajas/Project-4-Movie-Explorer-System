// Example movie data
const movies = [
    {
        title: "The Matrix",
        releaseDate: "1999",
        genre: "Sci-Fi",
        cast: "Keanu Reeves, Laurence Fishburne",
        description: "A computer hacker learns about the true nature of reality.",
        imageUrl: "https://via.placeholder.com/200x300"
    },
    {
        title: "Inception",
        releaseDate: "2010",
        genre: "Sci-Fi",
        cast: "Leonardo DiCaprio, Joseph Gordon-Levitt",
        description: "A thief enters the dreams of others to steal secrets.",
        imageUrl: "https://via.placeholder.com/200x300"
    },
    {
        title: "The Dark Knight",
        releaseDate: "2008",
        genre: "Action",
        cast: "Christian Bale, Heath Ledger",
        description: "Batman faces off against the Joker in Gotham City.",
        imageUrl: "https://via.placeholder.com/200x300"
    },
    // Add more movies as needed
];

// Initialize Movie List
document.addEventListener('DOMContentLoaded', () => {
    displayMovies(movies);
});

function displayMovies(movieList) {
    const movieListDiv = document.getElementById('movie-list');
    movieListDiv.innerHTML = ''; // Clear previous content
    movieList.forEach(movie => {
        const movieCard = `
            <div class="movie-card" onclick="openModal('${movie.title}')">
                <img src="${movie.imageUrl}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            </div>
        `;
        movieListDiv.innerHTML += movieCard;
    });
}

function searchMovies() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
}

function filterByGenre(genre) {
    const filteredMovies = genre === 'all' ? movies : movies.filter(movie => movie.genre === genre);
    displayMovies(filteredMovies);
}

// Modal handling
function openModal(title) {
    const movie = movies.find(m => m.title === title);
    document.getElementById('movieTitle').innerText = movie.title;
    document.getElementById('movieReleaseDate').innerText = movie.releaseDate;
    document.getElementById('movieGenre').innerText = movie.genre;
    document.getElementById('movieCast').innerText = movie.cast;
    document.getElementById('movieDescription').innerText = movie.description;
    document.getElementById('movieModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('movieModal').style.display = 'none';
}
fetch('movies.json')
    .then(response => response.json())
    .then(data => {
        displayMovies(data);
    })
    .catch(err => console.error(err));
