const buttonsContainer = document.querySelector('.buttons-container');

const tabButtons = document.querySelectorAll('.tab-button');

const tabContents = document.querySelectorAll('.tab-content');

buttonsContainer.addEventListener('click',(event)=>{
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target.tagName);

    if(event.target.tagName != 'BUTTON'){
        return;
    }

    if(!event.target.classList.contains('tab-button')){
        return;
    }

    tabButtons.forEach(tabButton=>{
        if(tabButton.classList.contains('active-button')){
            tabButton.classList.remove('active-button');
        }
    });

    event.target.classList.add('active-button');

    tabContents.forEach(tabContent=>{
        if(tabContent.classList.contains('active-tab-content')){
            tabContent.classList.remove('active-tab-content');
        }
    });

    
    tabContents.forEach(tabContent=>{
        if(tabContent.id == event.target.dataset.id){
            tabContent.classList.add('active-tab-content');
        }
    })
    
});
