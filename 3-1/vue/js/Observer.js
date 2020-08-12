class Observer{
    constructor(data){
        this.walk(data)
    }
    walk(data){
        //判断是否为对象
        if(!data ||  typeof data !== 'object'){
            return
        }

        
        Object.keys(data).forEach(key =>{
            this.defineReacive(data, key,data[key])
        })
    }
    defineReacive(obj,key,val){
        let that = this
        let dep = new Dep()
        //val 是对象的时候 
        this.walk(val)
        Object.defineProperty(obj, key,{
            enumerable: true,
            configurable: true,
            get(){
                Dep.target && dep.addSub(Dep.target)
                return val
            },
            set(newValue){
                if(newValue === val){
                    return
                }
                val = newValue
                that.walk(newValue)

                //发送通知
                dep.notify()
            }
        })
    }
}