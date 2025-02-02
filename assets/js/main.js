function showModal(idModal){
    const modal = document.querySelector(idModal)
    modal.style.display = 'flex'
}

function hideModal(idModal, event){
    if(event.target.className === 'modal'){
        const modal = document.querySelector(idModal)
        modal.style.display = 'none'
    }
}


function closeAllModal(){
        const modais = document.querySelectorAll('.modal')
        modais.forEach(modal => {
            modal.style.display = 'none'
        })
        
    }

// modal.style.display = 'flex' muda o estilo css de um elemento via javascript

// query selector funciona da mesma forma que o get element by id, porém num escopo maior

async function insert(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('backend/insert.php', {
        method: 'POST',
        body: formData
    })

    const result = await response.json()
    if(result?.sucess){
        closeAllModal()
        alert('Seu filme '+result.data.title+' foi cadastrado com sucesso!')
        loadProductions()
    }

}

async function loadProductions(){
    const response = await fetch('backend/list.php');
    const result = await response.json();
    if(result?.success){
        const listProductions =  document.querySelector('#productions')
        listProductions.innerHTML= ''
        const filmes = result.data
        filmes.map((film) => {
            listProductions.innerHTML +=`
            <div class="card-movie">
                <a href="filme">
                    <img src="${film.capa}" alt="${film.titulo}" />
                </a>
                <div>
                    <a href="filme">
                        <h2>${film.titulo}</h2>
                    </a>
                    <div>
                        <p>${film.categoria}</p>
                        <img src="assets/img/trash-svgrepo-com.svg" alt="Apagar" onclick="deleteProduction(${film.id})"/>
                        <img src="assets/img/edit-svgrepo-com.svg" alt="Editar"  onclick="loadProductionData(${film.id})"/>
                    </div>
                </div>
            </div>
         `
        })
        
    }
    else{
        alert('erro ao carregar produções')
    }
}
async function deleteProduction(id){
    const response = await fetch('backend/delete.php?id='+id)
    const result = await response.json()
    if(result?.success){
        alert('Seu filme foi deletado com sucesso!')
        loadProductions()
    }

}

async function loadProductionData(id){
    const response = await fetch('backend/get-production-by-id.php?id='+id)
    const result = await response.json()
    if(result?.success){
        showModal('#modal-editar')
        const title = document.querySelector('#modal-editar input[name=title]')
        title.value = result.data.titulo

        const description = document.querySelector('#modal-editar input[name=description]')
        description.value = result.data.descricao

        const category = document.querySelector('#modal-editar input[name=category]')
        category.value = result.data.categoria

        const cover = document.querySelector('#modal-editar input[name=cover]')
        cover.value = result.data.capa

        const classification = document.querySelector('#modal-editar input[name=classification]')
        classification.value = result.data.classificacao

        const id = document.querySelector('#modal-editar input[name=id]')
        id.value = result.data.id
    }

}

async function edit(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    const response = await fetch('backend/edit.php', {
        method: 'POST',
        body: formData
    })

    const result = await response.json()
    if(result?.success){
        closeAllModal()
        alert('Seu filme '+result.data.title+' foi editado com sucesso!')
        loadProductions()
    }
}

function clearForm(idModal){
    const title = document.querySelector('${idModal} input[name=title]')
        title.value = ''

        const description = document.querySelector('${idModal} input[name=description]')
        description.value = ''

        const category = document.querySelector('${idModal} input[name=category]')
        category.value = ''

        const cover = document.querySelector('${idModal} input[name=cover]')
        cover.value = ''

        const classification = document.querySelector('#${idModal} input[name=classification]')
        classification.value = ''

        const id = document.querySelector('${idModal} input[name=id]')
        id.value = ''
}