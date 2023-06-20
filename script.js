const painels =  document.querySelectorAll('.painel')

painels.forEach(painel => {
    painel.addEventListener('click', () =>{ 
    removeActiveClasses() 
    painel.classList.add('ativo') })
    })

    function removeActiveClasses(){
        painels.forEach(painel =>{
            painel.classList.remove('ativo')})
            
    }