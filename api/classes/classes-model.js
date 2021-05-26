const db = require("../data/db-config");

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db("classes")
}

 function findById(class_id) {
     return db("classes").where("class_id", class_id).first();
 }

 async function add(newClass) {
     const[class_id]= await db("classes").insert(newClass,"class_id")
     return db("classes").where({class_id}).first()
 }

 function update(class_id,classes) {
     return db("classes").where("class_id",class_id).update(classes, "class_id")
     
 }
 function remove(class_id) {
     return db("classes").where("class_id",class_id).del()
     
 }