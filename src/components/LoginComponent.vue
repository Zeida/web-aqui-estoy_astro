<script>
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { isAuthenticated } from '../dataholder';
import { useStore } from '@nanostores/vue';
import { addDoc, collection } from 'firebase/firestore';

export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async login() {
            try {
                console.log(this.email, this.password)
                const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password)
                console.log(userCredential);

                isAuthenticated.set(true);

            } catch (Error) {
                console.log(Error);
            }
        }
        ,
        addInstructions() {
            const instructions = [
                {
                    "title": "Crea un anuncio en minutos",
                    "description": "Cuéntanos sobre tu mascota, agrega fotos y detalles. ¡Así todos pueden ayudarte!"
                },
                {
                    "title": "Hazte parte de la búsqueda:",
                    "description": "Echa un vistazo a los anuncios de otros usuarios. Si ves a una mascota que te suena familiar, ¡avísales!"
                },
                {
                    "title": "Recibe alertas y actualizaciónes instantáneas",
                    "description": "Mantente informado sobre cualquier nueva pista o avistamiento, ¡sin perder ningún segundo!"
                }
            ]

            instructions.forEach(instruction => {
                addDoc(collection(db, 'instructions'), instruction).then(docRef => {
                    console.log("Document written with ID: ", docRef.id);
                }).catch((error) => {
                    console.error("Error adding document: ", error);
                });
            })
        }
    },
    mounted() {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                console.log("Usuario autenticado", user.uid)
            } else {
                console.log("Usuario no autenticado")
            }



            isAuthenticated.set(true);
        })
    }

}
</script>

<template>
    <div>
        <label class="form-label">Nombre de usuario o dirección de correo electrónico</label>
        <input v-model="email" type="email" required class="input-field" />
        <label class="form-label password-label">
            Contraseña
            <button type="button" class="password-toggle">
            </button>
        </label>
        <input v-model="password" type="password" required class="input-field" />
        <div class="form-links password">
            <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
        <button @click="login" type="button" class="login-button">Acceder</button>

        <button @click="addInstructions">Add instructions</button>

    </div>


</template>