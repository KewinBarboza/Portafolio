
const contentRepos = document.querySelector("#contentRepos");

async function repos(){
  const res = await fetch("https://api.github.com/users/kewinbarboza/repos");
  const data = await res.json()
  cardRepos(data)
}

function cardRepos(data){
  contentRepos.innerHTML += ``;
  data.splice(5, 1);
  data.forEach((repos, nameImage) => {
    contentRepos.innerHTML += `
      <div class="col-3 mt-5">
        <div class="card shadow border-0 h-100">
          <img src="../imagenes/${nameImage++}.jpg" class="card-img-top" height="150" width="100" alt="${repos.name}">
          <div class="card-body px-2">
            <h6 class="card-title mb-1">${repos.name}</h5>
            <p class="card-text mb-1">${repos.description}</p>
            <p class="card-text"><small class="text-muted"><a href="${repos.homepage}" target="_blanck">Ver mas</a></small></p>
          </div>
        </div>
      </div>
    `;
  });

}

repos()