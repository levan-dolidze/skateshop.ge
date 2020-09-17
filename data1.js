
const userId=document.getElementById('userId');
const user=document.getElementById('userName')
const userLastName=document.getElementById('userLastName');
const userEmail=document.getElementById("userEmail")
const userMob=document.getElementById("userMob")
const userAddress=document.getElementById("userAddress")
const productCode =document.getElementById("productCode")

const addBtn=document.getElementById("addBtn");
const upDataBtn=document.getElementById('upDataBtn');
const removeBtn = document.getElementById("removeBtn");

const database = firebase.database();
const rootRef = database.ref("users");



addBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    // const autoId = rootRef.push().key
    rootRef.child(userId.value).set({
        first_name:user.value,
        last_name:userLastName.value,
        user_Email:userEmail.value,
        user_Mob:userMob.value,
        user_Address:userAddress.value,
        product_Code:productCode.value

    });
});

addBtn.addEventListener('click',()=>{
userEmail.value="",
userId.value="",
userLastName.value="",
userMob.value="",
userAddress.value="",
user.value="",
productCode.value=""

});


// upDataBtn.addEventListener('click',(e)=>{
// e.preventDefault();
// const newData={
//     user_age:userAge.value,
//     first_name:user.value,
//     last_name:userLastName.value,
// }
// const updates={};
// updates["users" + userId.value]=newData;
// updates['/super-users/' + userId.value]=newData;
// database.ref().update(updates)

// });

removeBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    rootRef.child(userId.value).remove().then(()=>{
window.alert('user removed from database');
    })
    .catch(error =>{
        console.error(error);
    });
    
})

rootRef.on('child_added', snapshot=>{
    console.log('child(s) added !');
})




