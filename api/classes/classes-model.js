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

 function findById(id) {
     return db("classes").where("id", id).first();
 }

 function add(newClass) {
     return db("classes").insert(newClass, "id")
 }

 function update(id,classes) {
     const classId = id
     return db("classes").where("id",id).update(classes, "id")
     .then (() => {
         return("classes").where("id", classId).first()
     })
 }
 function remove(id) {
     return db("classes").where("id",id).del()
     .then(() =>{
         return db("classes")
     })
 }