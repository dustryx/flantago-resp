document.addEventListener('DOMContentLoaded', () => {
    const baseURL = 'http://localhost:3000';
  
    const fetchMovieDetails = async (id) => {
      try {
        const response = await fetch(`${baseURL}/films/${id}`);
        const movieData = await response.json();
        renderMovieDetails(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
  
    const fetchAllMovies = async () => {
      try {
        const response = await fetch(`${baseURL}/films`);
        const movies = await response.json();
        renderMovieMenu(movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
  
    const renderMovieDetails = (movieData) => {
      const title = document.getElementById('title');
      const runtime = document.getElementById('runtime');
      const filmInfo = document.getElementById('film-info');
      const showtime = document.getElementById('showtime');
      const ticketNum = document.getElementById('ticket-num');
      const poster = document.getElementById('poster');
  
      title.textContent = movieData.title;
      runtime.textContent = `${movieData.runtime} minutes`;
      filmInfo.textContent = movieData.description;
      showtime.textContent = movieData.showtime;
      ticketNum.textContent = `${movieData.capacity - movieData.tickets_sold}`;
      poster.src = movieData.poster;
    };
  
    const renderMovieMenu = (movies) => {
      const filmsList = document.getElementById('films');
      filmsList.innerHTML = '';
      movies.forEach(movie => {
        const li = document.createElement('li');
        li.classList.add('film', 'item');
        li.textContent = movie.title;
        li.addEventListener('click', () => fetchMovieDetails(movie.id));
        filmsList.appendChild(li);
      });
    };
  
    fetchAllMovies(); 
  });
  