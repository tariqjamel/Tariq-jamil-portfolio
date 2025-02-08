
(function(){
    Array.from(document.querySelectorAll('.control')).forEach(btn => {
        btn.addEventListener('click',function(){
            document.querySelector('.active-btn').classList.remove('active-btn');
            this.classList.add('active-btn');
            document.querySelector('.active').classList.remove('active');
            document.getElementById(this.dataset.id).classList.add('active');
        })
    })
})();

document.querySelector('.theme-btn').addEventListener('click',()=>{
    console.log('hello...');
    document.body.classList.toggle('theme-change');
})