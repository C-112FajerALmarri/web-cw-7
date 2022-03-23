// project أنشئ كائن
const project = {
    type :"tech",
    users : 10000,
    biography(){

        return"This is my project"
    }
}
// randomProperty أنشئ دالة
function randomProperty(obj){
const keys = Object.keys(obj);
const random = math.floor(Math.random()* keys.length);
console.log(keys[random]);
console.log(obj[`${keys[random]}`]);
}
randomProperty(project);