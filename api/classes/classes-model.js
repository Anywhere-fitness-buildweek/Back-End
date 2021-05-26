const db = require("../data/db-config");

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    count,
    addClient,
    deleteClient,
}

async function find() {
    return db("classes")
}

 async function findById(class_id) {
     const class_info= await db("classes").where("class_id", class_id).first();
     const attendees = await count(class_id)
     return {
        ...class_info,
        attendees
        }
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
 function count(class_id) {
    return db("class_students").where("class_id", class_id).count("user_id").first()
 }
 async function addClient(user_id) {
    return db("class_students").insert(user_id).where("user_id", user_id)
 }
 async function deleteClient(user_id) {
     return db("class_students").where(user_id).del()
     .then(() => {
         return db("class_students")
     })
 }