function Menu(config){
    this.menu = document.querySelector(config.menu);
    this.btn_menu = document.querySelector(config.btn_menu);

    _this = this;

    _this.btn_menu.addEventListener('click', function(){
        if(_this.btn_menu.classList.contains('btn-menu-aberto')){
            fecharMenu();
        }else{
            abrirMenu();
        }
    });

    function abrirMenu(){
        _this.btn_menu.classList.add('btn-menu-aberto');
        _this.btn_menu.classList.remove('fa-bars');
        _this.btn_menu.classList.add('fa-times');

        _this.menu.style.transform = 'translateX(0px)';
    }

    function fecharMenu(){
        _this.btn_menu.classList.remove('btn-menu-aberto');
        _this.btn_menu.classList.add('fa-bars');
        _this.btn_menu.classList.remove('fa-times');

        _this.menu.style.transform = 'translateX(200px)';
    }
}