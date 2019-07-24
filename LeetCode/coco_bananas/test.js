// Math.max()
const IMath = {}  //namespace
/**
 * @params:number NaN
 * @return:Number 返回最大值
 *  
 */
IMath.max = function(...args){
    // console.log(arguments, arguments.length);
    for ( var i = 0; i < args.length; i++){
        // 类型检测
        //  console.log(arguments[i])
        if(typeof args[i] !== 'number'){
            return NaN;
        }
    }
}

console.log(IMath.max(...[2, 4, 3, 9]));