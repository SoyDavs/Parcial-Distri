function fetchAllPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      const container = document.getElementById('all-posts');
      container.innerHTML = '';
      posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.className = 'bg-gray-50 p-4 border rounded shadow-sm';
        postEl.innerHTML = `<h3 class="font-bold text-lg">${post.title}</h3><p class="text-gray-600">${post.body}</p>`;
        container.appendChild(postEl);
      });
    });
}

function fetchPostById() {
  const id = document.getElementById('postIdInput').value;
  if (!id) return alert('Por favor, ingresa un ID');

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {
      if (!response.ok) throw new Error('No encontrado');
      return response.json();
    })
    .then(post => {
      const container = document.getElementById('single-post');
      container.innerHTML = `
        <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded shadow">
          <h3 class="font-bold text-lg">${post.title}</h3>
          <p class="text-gray-700">${post.body}</p>
        </div>
      `;
    })
    .catch(() => {
      document.getElementById('single-post').innerHTML = `
        <div class="text-red-600 font-semibold">Post no encontrado</div>
      `;
    });
}
