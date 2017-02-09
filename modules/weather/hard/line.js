
/**
 * Created by rs on 2016/8/28.
 */



$.fn.Matching=function(option) {
    var ops={
        direction:"horizontal"//   可取值   "vertical" or "horizontal"
    };
    var setting = $.extend(ops,option,{});
    return new matching($(this),setting);
}

function matching(dom,ops) {
    this.dom = dom;
    this.setting = ops;
    this.init();
    return this;
}
//获取一个元素的位置信息
matching.prototype.pos = function(elm){
    var ths =  elm;
    var scale= this.setting.scale ? 1 : 1;
    var relate =this.dom.find(".matching-box").get(0).getBoundingClientRect();
    console.log(relate.left +"=="+ relate.right +"=="+ relate.top +"=="+ relate.bottom +"=="+ relate.width +"=="+ relate.height);
    var rect =ths.getBoundingClientRect();
    console.log(rect.left +"=="+ rect.right +"=="+ rect.top +"=="+ rect.bottom +"=="+ rect.width +"=="+ rect.height);
    var pos = {
        left:(ths.getBoundingClientRect().left  - relate.left)/scale,
        right:(ths.getBoundingClientRect().right  - relate.left)/scale,
        top:(ths.getBoundingClientRect().top  - relate.top)/scale,
        bottom:(ths.getBoundingClientRect().bottom  - relate.top)/scale,
        width:ths.getBoundingClientRect().width/scale,
        height:ths.getBoundingClientRect().height/scale
    };
    console.log(pos.left +"=="+ pos.right +"=="+ pos.top +"=="+ pos.bottom +"=="+ pos.width +"=="+ pos.height);
    return {
        base:pos,
        match:{//初始化四个（left,right,top,bottom）可连接点的坐标[left,top]
            left:[pos.left.toFixed(2),(pos.top+pos.height/2).toFixed(2)],
            right:[pos.right.toFixed(2),(pos.top+pos.height/2).toFixed(2)],
            top:[pos.top.toFixed(2),(pos.left+pos.width/2).toFixed(2)],
            bottom:[pos.bottom.toFixed(2),(pos.left+pos.width/2).toFixed(2)]
        }
    }
};
var startCell=null,storeStartCell=null,
    endCell  =null;

//初始化cell元素位置信息
matching.prototype.init=function(){
    var instance=this;
    //获取元素的后的起始点位置
    this.dom.find(".col").each(function() {
        var $col =$(this),lines={};
        var direction = $col.data("matching");//获取当前列需要连接的方向

        $col.find(".cell").each(function (idx,elm) {
            var $cell = $(this);
            var position=instance.pos(elm);
            position["direction"]=direction;
            $cell.data("position",position);
            $cell.attr({
                direction:direction,
                sel:"0",
                check:"0"});

            $cell.on("click",function(e){
                var $this=$(this);
                var rule = $(this).parents(".col").data("matchingRule").split(" ");
                var has =false;

                var startPoint ,endPoint, line =instance.setting.direction;
                $(this).parents(".col").find(".cell").removeClass("active");
                $(this).addClass("active");
                console.log($cell.data("position").base);
                if(startCell){
                    rule.forEach(function(elm){
                        if(startCell.parents(".col").hasClass(elm)){
                            has = true;
                            return false;
                        }
                    });
                    if(!has){
                        startCell.removeClass("active");
                        startCell = $cell;
                        return;
                    }
                    endCell = $cell;
                    var startPosition = startCell.data("position");
                    var startDirection= startPosition.direction.split(" ");
                    var endPosition  = endCell.data("position");
                    var endDirection  = endPosition.direction.split(" ");
                    if(startDirection.length===1)
                    {
                        startPoint = startPosition.match[startDirection[0]];
                        if(endDirection.length===1){
                            endPoint = endPosition.match[endDirection[0]];
                        }else if(endDirection.length === 2 ){
                            if(endDirection[0] === startDirection[0]){//是不是同方向
                                endPoint = endPosition.match[endDirection[1]];//取异方向点
                            }else{
                                endPoint = endPosition.match[endDirection[0]];//取异方向点
                            }
                        }else{
                            console.warn("暂不支持配置俩个以上参数")
                        }
                    }
                    else{
                        if(endDirection.length===1){//开始多方向 结束单方响
                            endPoint = endPosition.match[endDirection[0]];
                            if(endDirection[0] === startDirection[0]){//是不是同方向
                                startPoint = startPosition.match[startDirection[1]];//取异方向点
                            }else{
                                startPoint = startPosition.match[startDirection[0]];//取异方向点
                            }
                        }else if(endDirection.length === 2 ){
                            var disA,disB;
                            if(line==="horizontal"){//检测是水平方向还是垂直方向的连线
                                disA =endPosition.match["left"][1] - startPosition.match["right"][1];
                                disB =endPosition.match["right"][1] - startPosition.match["left"][1];
                                if(Math.abs(disA)<Math.abs(disB)){
                                    startPoint = startPosition.match["left"];
                                    endPoint =endPosition.match["right"];
                                }else{
                                    startPoint = startPosition.match["right"];
                                    endPoint =endPosition.match["left"];
                                }
                            }else{
                                disA =endPosition.match["top"][0] - startPosition.match["bottom"][0];
                                disB =endPosition.match["bottom"][0] - startPosition.match["top"][0];
                                if(Math.abs(disA)<Math.abs(disB)){
                                    startPoint = startPosition.match["top"];
                                    endPoint =endPosition.match["bottom"];
                                }else{
                                    startPoint = startPosition.match["bottom"];
                                    endPoint =endPosition.match["top"];
                                }
                            }

                            if(endDirection[0] === startDirection[0]){//是不是同方向
                                endPoint = endPosition.match[endDirection[1]];//取异方向点
                            }
                        }else{
                            console.warn("暂不支持配置俩个以上参数")
                        }
                    }

                    instance.createLine(startPoint,endPoint,{},function () {
                        var _this=this;
                        var temp = lines[startCell.data("id")+"<-->"+endCell.data("id")]={
                            matching:[startCell.data("id"),endCell.data("id")],
                            point:[startPoint,endPoint],
                            option:{},
                            line:this
                        };
                        $(this).data("match",startCell.data("id")+"<-->"+endCell.data("id"));
                        console.log(lines);
                        this.find("i").get(0).onclick=function(){
                            delete lines[$(this).parent().data("match")];
                            this.parentNode.remove();
                            console.log(lines);
                        };


                    });
                    $(".cell").removeClass("active");
                    storeStartCell = startCell;
                    startCell = null;
                }else{
                    startCell  = $cell;
                }

                instance.lines = lines;
                e.preventDefault();
            });
        });
    });
    this.dom.find(".col").attr('first',0);//这是做啥
};
matching.prototype.createLine = function (start,end,style,fn) {
    $(".matching-box").line(parseFloat(start[0]),parseFloat(start[1]),parseFloat(end[0]),parseFloat(end[1]),{},fn);
};