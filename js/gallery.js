fetch("data/artworks.json")
.then(res=>res.json())
.then(data=>{

const gallery = document.querySelector(".gallery-grid")

data.forEach(art=>{

const item = document.createElement("div")

item.classList.add("artwork")
item.dataset.category = art.category

item.innerHTML = `
<img src="${art.image}" alt="${art.title}">
<div class="art-info">
<h3>${art.title}</h3>
<p>${art.year} • ${art.medium} • ${art.size}</p>
</div>
`

gallery.appendChild(item)

})

})
