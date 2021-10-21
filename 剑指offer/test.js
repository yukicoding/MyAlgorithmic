function test() {
    let that = this
    console.log("------------------")
    function test2() {
        console.log(that)
    }
    test2()
}
class Hello{
    fn(){
        console.log(this)
    }
}

test()
const hello = new Hello()
console.log(hello.fn())
console.log(111)