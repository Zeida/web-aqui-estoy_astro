<script>
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export default {
    data () {
        return {
            email : "",
            password : ""
        }
    }, 
    methods : {
        async login() {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
                console.log(userCredential.user);

            } catch (Error) {
                console.log(Error);
            }
        }
    }
}
</script>

<template>
    <div>
        <label class="form-label"
          >Nombre de usuario o dirección de correo electrónico</label
        >
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
        <button type="submit" class="login-button">Acceder</button>

    </div>


</template>