class GoodsList{
    constructor(){
        this.cont = document.getElementById("cont");
        this.url = "http://localhost/demo/data/goods4.json";
        this.init();
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.box4.onclick = function(eve){
            // var e = eve || window.event;
            // var t = e.target || e.srcElement;
            // if(t.className == "addCar"){
            //     that.id = t.parentNode.getAttribute("index");
                that.setData();
            }
        }
    // }
    setData(){
        this.goods = localStorage.getItem("goods");

    //     if(this.goods){
    //         this.goods = JSON.parse(this.goods)

    //         var onoff = true;
    //         for(var i=0;i<this.goods.length;i++){
    //             if(this.goods[i].id == this.id){
    //                 this.goods[i].num++;
    //                 onoff = false;
    //             }
    //         }
    //         if(onoff){
    //             this.goods.push({
    //                 id:this.id,
    //                 num:1
    //             })
    //         }
    //     }else{
    //         this.goods = [{
    //             id:this.id,
    //             num:1
    //         }];
    //     }
    //     localStorage.setItem("goods",JSON.stringify(this.goods))
    // }
    init(){
        var that = this;
        ajaxPost(this.url,function(res){
            that.res = JSON.parse(res);
            that.display()
        })
    }
    display(){
        var str = "";
        for(var i=0;i<this.res.length;i++){
            str += `<div class="xq-r">
            <!-- <h2>${this.res[i].name}</h2>
            <div class="pri">
                <p>本店价<i>${this.res[i].price}</i></p>
                <p>市场价<em>￥588</em></p>
            </div> -->
            <div class="pj">
                <ul>
                    <li>
                        <p><a href="">208</a></p>
                        <p>销量</p>
                    </li>
                    <li>
                        <p>37</p>
                        <p>累计评价</p>
                        <p class="p1">48</p>
                    </li>
                    <li>
                        <p>258</p>
                        <p>送积分</p>
                    </li>
                </ul>
            </div>
            <div class="sl">
                数量：<input type="number" value="1">件
            </div>
            <div class="gw">
                <a class="a1"></a>
                <a class="a2"></a>
            </div>
            <div class="fh">
                <ul>
                    <li><span>01</span>按时发货</li>
                    <li><span>02</span>保证正品</li>
                    <li><span>03</span>一年保修</li>
                    <li><span>03</span>一年保修</li>
                    <li><span>04</span>终身售后</li>
                    <li><span>04</span>终身售后</li>
                    <li><span>05</span>线上价格一直</li>
                </ul>
            </div>
        </div>
        
    </div>`;
        }
        this.cont.innerHTML = str;
    }
}
new GoodsList;