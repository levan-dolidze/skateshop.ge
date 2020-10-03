
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
        product_Code:productCode.value,
        
    });
    window.location.replace('deliver.html');
});

addBtn.addEventListener('click',()=>{
    userId.value="",
    productCode.value="",
    userLastName.value="",
    userEmail.value="",  
userMob.value="",
userAddress.value="",
user.value=""


});


upDataBtn.addEventListener('click',(e)=>{
e.preventDefault();
const newData={
    product_Code:productCode.value,
    first_name:user.value,
    last_name:userLastName.value,
    user_Email:userEmail.value,
    user_Mob:userMob.value,
    user_Address:userAddress.value
}
const updates={};
updates["users" + userId.value]=newData;
updates['/super-users/' + userId.value]=newData;
database.ref().update(updates)

window.location.replace('update.html');
});

upDataBtn.addEventListener('click',()=>{
    userId.value="",
    productCode.value="",
    userLastName.value="",
    userEmail.value="",  
userMob.value="",
userAddress.value="",
user.value=""



});


removeBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    rootRef.child(userId.value).remove().then(()=>{
window.alert('თქვენი შეკვეთა გაუქმებულია');
    })
    .catch(error =>{
        console.error(error);
    });
    
});





