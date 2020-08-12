class Wather{
    constructor(vm, key,cb){
        this.vm = vm
        this.key = key 
        this.cb = cb

        // 记录watcher
        Dep.target = this

        this.oldValue = vm[key]
        Dep.target = null
    }

    //当数据发生变化的时候更新视图
    update(){
        let newValue = this.vm[this.key]
        debugger
        if(this.oldValue === newValue){
            return 
        }
        this.cb(newValue)
    }

}