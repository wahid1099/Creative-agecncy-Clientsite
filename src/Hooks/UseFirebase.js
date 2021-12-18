import React,{useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,
    GithubAuthProvider,createUserWithEmailAndPassword ,sendEmailVerification,signInWithEmailAndPassword
    ,updateProfile,getIdToken} from "firebase/auth";
import initializeFirebase from "../Firebase/Firebase.init";
initializeFirebase();

const UseFirebase = () => {
    const [user,setUser]=useState({});
    const[isLoading,setIsLoading]=useState(true);
    const [autherror,SetAuthError]=useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser=(email,password,name,navigate)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                SetAuthError('');
                const newUser={email,displayName:name};
                //seving data to state
                setUser(newUser);
                //save user to databse
                saveUser(email,name,'POST');
                ///sending data firebase after creation
                updateProfile(auth.currentUser,{
                    displayName:name
                }).then(()=>{

                }).catch((error)=>{
                    SetAuthError(error);
                });
                navigate('/');

            }).catch((error)=>{
            SetAuthError(error.message);
        }).finally(()=>setIsLoading(false))
    }
    const loginUser=(email,password,location,history,navigate)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{

                const destination = location?.state?.from || '/';
                navigate(destination);
                //setAuthError('');


            }).catch((error)=>{
            SetAuthError(error.message);
        }).finally(()=>setIsLoading(false))
    }

    const signInwithGoogle=(location,navigate)=>{
        setIsLoading(true);
        signInWithPopup(auth,googleProvider)
            .then((result)=>{
                const user=result.user;
                saveUser(user.email,user.displayName,'PUT');
                setUser(result.user)
                const destination = location?.state?.from || '/';
                navigate(destination);

                SetAuthError('');
            }).catch((error)=>{
            SetAuthError(error.message);
        }).finally(()=>{
            setIsLoading(false);
        })
    }
//observer use state
    useEffect(()=>{
        const unsubcribed=onAuthStateChanged(auth,(user)=>{
            if (user){
                setUser(user);
                getIdToken(user)
                    .then(idToken=>{
                        setToken(idToken);
                    })
            }else {
                setUser({});
            }
            setIsLoading(false)
        });

    },[])
    //getting admin data

    useEffect(() => {
        fetch(`https://murmuring-tor-75574.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email]);


    const logout=()=>{
        setIsLoading(true);
        signOut(auth).then(()=>{

        }).catch((error)=>{

        })
            .finally(()=>{
                setIsLoading(false);
             
            })
    }

    const saveUser=(email,displayName,method)=>{
        const user={email,displayName};
        console.log(user);
        fetch('https://murmuring-tor-75574.herokuapp.com/users',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
            .then()


    }


    return  {
        user,
        isLoading,
        autherror,
        registerUser,
        loginUser,
        signInwithGoogle,
        logout,
        token,admin
    }

};

export default UseFirebase;