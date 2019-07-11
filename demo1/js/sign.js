

    class Register{
        constructor(){
            this.user = document.querySelector("#user");
            this.pass = document.querySelector("#pass");
            this.btn = document.querySelector(".sub");
            this.msg = document.querySelector(".msg");

            this.init()
        }
        init(){
            var that = this;
            this.btn.onclick = function(){
                that.getUserMsg()
            }
        }
        getUserMsg(){
            this.usermsg = localStorage.getItem("usermsg");
            this.setUserMsg()
        }
        setUserMsg(){
            if(this.usermsg == null){
                this.usermsg = [{
                    user:this.user.value,
                    pass:this.pass.value,
                    onoff:0
                }]
                this.msg.innerHTML = "";
            }else{
                this.usermsg = JSON.parse(localStorage.getItem("usermsg"));
                for(var i=0;i<this.usermsg.length;i++){
                    if(this.usermsg[i].user == this.user.value){
                        alert("该用户名已被注册")
                        return;
                    }
                }
                this.msg.innerHTML = "";
                this.usermsg.push({
                    user:this.user.value,
                    pass:this.pass.value,
                    onoff:0
                })
            }

            localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
           alert("注册成功，请前往登录")
        }
    }

    new Register;
