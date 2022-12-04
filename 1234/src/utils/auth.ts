import {getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from 'firebase/auth'
import {getDatabase, ref, push, set, get, query, remove} from 'firebase/database'

export async function register(email:string, password:string) {
    try{
        const oUC = await createUserWithEmailAndPassword(
            getAuth(),
            email, password 
        );
        return oUC.user;
    }
    catch(e){
        let errorElem = document.getElementById('error-block-id')!;
        errorElem.innerHTML = "Пользователь с такими данными уже зарегистрирован";
    }
}

export async function login (email:string, password:string) {
    try{
        const oUC = await signInWithEmailAndPassword(getAuth(), email, password);
        return oUC.user;
    }
    catch(e){
        let errorElem = document.getElementById('error-block-id')!;
        errorElem.innerHTML = "Пользователь с такими данными не зарегистрирован";
    }
}

export async function addParams(user: any,params: any){
    const paramsList = {
        name: params.name,
        sex: params.sex,
        height: params.height,
        weight: params.weight,
        activity: params.activity,
        birthDate: params.birthDate,
        point: params.point,
    }
    const oRef = await push(
        ref(
            getDatabase(),
            `users/${user.uid}/params`
        )
    );
    await set(oRef, paramsList);
}

export async function getParams(user:any){
    const oSnapshot = await get(query(ref(getDatabase(),`users/${user.uid}/params`)));
    const oArr: any[] = []
    let oParam;
    oSnapshot.forEach((oDoc) => {
        oParam = oDoc.val();
        oParam.key = oDoc.key;
        oArr.push(oParam);
    });
    return oArr
}

export async function logout(){
    await signOut(getAuth())
}