class Judg{
    constructor(){
      this.url='http://localhost/1905/bestcake/car/json/goods1.json';
      this.goods=JSON.parse(localStorage.getItem('goods'));
      this.count=0
      this.init()
      this.addEvent()
  
    };
    addEvent(){
      let that=this;
      $('.low').on('click','.del',function(event){
        that.id= $(event.target).parent().parent().attr('index')
        // console.log(that.id)
        $(event.target).parent().parent().remove();
        that.setDate()
        that.setPrice()
      });
      $('.check1').change(function(){
        if($('.check1').is(":checked")){
          for(let i=0;i<$('.judg').length;i++){
            $('.judg').eq(i).prop('checked',true)
          }
          that.setPrice()
       
        }
      })
      $('.low').on('change','.judg',function(event){
        if($(this).is(":checked")){
       
          that.setPrice()
        }
        if($(this).is(":checked")==false){
        
          $('.check1').prop('checked',false)
    
  
          that.setPrice()
        
        }
      });
      $('.low').on('click','.reduce',function(){
        console.log(1)
        if(Number($(this).next().val())==1){
          $(this).next().val(1)
        }else{
          $(this).next().val(parseFloat($(this).next().val())-1)

        }
        // console.log(parseFloat($(this).next().val())-1)
        that.num=parseFloat($(this).next().val())
        that.id=$(this).parent().parent().parent().attr('index')
        // console.log(that.id)
        $(this).parent().next().html((parseFloat($(this).parent().prev().html().substr(1))*that.num).toFixed(2)) 
 
          that.setPrice()
        
        that.changeLocal()
      });
  
  
  
      $('.low').on('click','.up',function(){
        $(this).prev().val(parseFloat($(this).prev().val())+1)
        that.num=parseFloat($(this).prev().val())
        that.id=$(this).parent().parent().parent().attr('index')
        $(this).parent().next().html((parseFloat($(this).parent().prev().html().substr(1))*that.num).toFixed(2)) ;
//   g(that.count)
        that.setPrice()
        
        that.changeLocal()
  
  
  
  
  
      });
      $('.low').on('click','.cont1',function(){
        $(this).focus()
        $(this).keydown(function(event){
          if(event.keyCode>57 ||event.keyCode<48){
            if(event.keyCode!=37&&event.keyCode!=39 && event.keyCode!=8&& event.keyCode!=116){
              event.preventDefault()
            }
          }
      
    })
  
        $(this).blur(function(){
          // if(parseFloat($(this).val())==0 || $(this).val()==''){
          //   $(this).val(1)
          // }
          if(parseFloat($(this).val())==0 ||$(this).val()==''){
            // console.log(1)
            $(this).val(1)
          }
          that.id=$(this).parent().parent().parent().attr('index')
          that.num=parseInt($(this).val()) ;
          $(this).parent().next().html((parseFloat($(this).parent().prev().html().substr(1))*that.num).toFixed(2)) 
        // ount=parseFloat($(this).parent().next().html())
            that.setPrice()
         
          that.changeLocal()
          
        })
      })
  
      
    };
    changeLocal(){
  
      for(let i=0;i<this.goods.length;i++){
        if(this.goods[i].id==this.id){
          this.goods[i].num=this.num
       
        }
      }
  
    localStorage.setItem('goods',JSON.stringify(this.goods))
    }
    setPrice(){
      this.count=0
      for(let i=0;i<$('.judg').length;i++){
        if($('.judg').eq(i).is(":checked")){
          this.count+=parseFloat($('.judg').eq(i).parent().parent().children().eq(5).html())
        }
      }
      $('.total1').html((this.count).toFixed(2))
     
    }
    setDate(){
      for(var i=0;i<this.goods.length;i++){
        if(this.goods[i].id==this.id){
            this.goods.splice(i,1)
        }
    }
    localStorage.setItem('goods',JSON.stringify(this.goods))
    };
    init(){
        // console.log(this.goods)
      let that=this;
      $.ajax({
        url:this.url,
        success:function(res){
          that.res=res;
          that.display()
        }
      })
    };
    display(){
        // console.log(2)
      let str=''
      for(let i=0;i<this.res.length;i++){
          for(let k=0;k<this.goods.length;k++){
            if(this.goods[k].id==this.res[i].goodsId){
            str+=`
              <div class="load${k} load" index=${this.goods[k].id}>
              <ul>
              <li> <input type="checkbox" class="judg"></li>
              <li><img src="${this.res[i].src}" alt=""></li>
              <li> <p> ${this.res[i].name}</p></li>
              <li>${this.res[i].price}</li>
              <li> <button class="reduce">-</button> <input type="text" class="cont1" value=${this.goods[k].num}><button class="up">+</button></li>
              <li class="jisuan jisuan${k}">${parseFloat(this.res[i].price.substr(1)*1*this.goods[k].num).toFixed(2)}</li>
              <li class='del'>删除</li>
              </ul>
              </div>
            `
          }
        }
      }
      $('.low').html(str)
    };
  }
  new Judg()
