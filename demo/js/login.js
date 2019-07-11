class Login{
    constructor(){
        this.user = document.querySelector("#user");
        this.pass = document.querySelector("#pass");
        this.btn = document.querySelector(".sub");
        console.log(1)
        this.init();
    }
    init(){
        var that = this;
        this.btn.onclick = function(){
            that.getUserMsg();
        }
    }
    getUserMsg(){
        this.usermsg = localStorage.getItem("usermsg") ? JSON.parse(localStorage.getItem("usermsg")) : [];
        
        this.check();
    }
    check(){
        for(var i=0;i<this.usermsg.length;i++){
            if(this.usermsg[i].user == this.user.value && this.usermsg[i].pass == this.pass.value){
                this.usermsg[i].onoff = 1;
                localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
                setTimeout(() => {
                    location.href = "index.html";
                }, 1000);
                return;
            }
        }
        alert ("账号密码不符，清重新登录，或去注册");
    }
}


new Login();