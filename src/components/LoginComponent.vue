<script>
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { isAuthenticated } from '../dataholder';


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