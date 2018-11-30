// const { loginAccount } = require('../components/userFunctions');

// class Auth {

//     constructor() {
//         this.isAuthenticated = false;
//         this.errorLogginIn = false;
//         this.user = {
//           id: '',
//           firstName: '',
//           lastName: '',
//           email: '',
//         };
//     }

//     authenticate(email,password,cb) {
//         //login request 
//         const User = {
//             email: email,
//             password: password,
//         }

//         loginAccount(User)
//         .then((res)=>{
//             //login was successful
//             if(res.status===200){
                                
//                 const loggedUser  = { 
//                     id: res.data.id,
//                     firstName: res.data.firstName,
//                     lastName: res.data.lastName,
//                     email: res.data.email,
//                 }
                
//                 this.user = loggedUser;
//                 this.isAuthenticated =true;

//                 cb();
//                 return;
//             }

//         }).catch((err)=>{
//             this.errorLogginIn = true;
//             console.log(err)
//             cb();
//         });

//         this.isAuthenticated = true;

//     // setTimeout(cb, 100); // fake async
//   }

//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }

//   isAuthenticated() {
//       return this.isAuthenticated;
//   }

//   getUserInfo() {
//       return this.user;
//   }
//    hasErrors() {
//        return this.errorLogginIn;
//    }

// }

// export default new Auth();


// Auth.authenticate(this.state.User.email, this.state.User.password, () => {
//     console.log('in cb')

//     if(!Auth.hasErrors()) {
//         this.setState({ callBackResponce : !this.state.callBackResponce });
//         console.log(Auth.getUserInfo())
//     } 
    
//     this.setState({ error: 'Incorrect password or email'})
// }); 