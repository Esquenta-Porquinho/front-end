<template>
	<v-app
	>
		<v-main
			:style="{'background-image': 'url(' + require('../../assets/background.png') + ')'}"
		>
			<ToolBar/>
			<v-container
				fluid
				fill-height
			>
				<v-layout
					align-center 
					justify-center
				>
					<v-flex
						xs12
						sm8
						md4
					>
						<v-card>
							<v-toolbar 
								color="#8C2B2B" 
								class="white--text"
								height="60px" 
								width="100%"
								flat
							>
								<v-toolbar-title display-3> Login </v-toolbar-title>
								<v-spacer></v-spacer>
								<v-icon dark right>mdi-login</v-icon>
							</v-toolbar>
							<v-card-text>
								<v-form 
									ref="form"
								>
									<v-alert
										outlined
										text
										type="error"
										v-show="errorShow"
									>
										Login or password are wrong !
									</v-alert>
									<v-text-field
										label="E-mail"
										name="email"
										type="text"
										prepend-icon="mdi-account-circle"
										v-model="credentials.email"										
										:rules="rules.email"
										required
									>
									</v-text-field>
									<v-text-field
										label="Password"
										name="password"
										type="password"
										prepend-icon="mdi-lock"
										v-model="credentials.password"
										:rules="rules.password"
										required
									>
									</v-text-field>
								</v-form>
							</v-card-text>
							<v-divider></v-divider>
							<v-card-actions>
								<v-btn 
									class="white--text"
									color="#BF757B"
									type="text"
									block
									elevation="2"
									@click="send()"
								>Login
								</v-btn>
							</v-card-actions>
							<v-card-actions>
								<v-btn
									class="white--text"
									color="#BF757B"
									block
									elevation="2"
									@click="register()"
								>Create account
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
			<FooterBar/>
		</v-main>
	</v-app>
</template>

<script>
	import FooterBar from '@/modules/auth/FooterBar';
	import ToolBar from '@/modules/auth/ToolBar';
	import {login} from '../api/todos/auth-service';
	import router from "@/router/";

	export default {  
		components:{ FooterBar, ToolBar },
		name: "Login",
		data: () => ({
			credentials:{},
			errorShow: false,
			rules: {
				email: [
					v => !!v || "Usuário é obrigatório.",
					v => (/@/.test(v))|| "O e-mail precisa ser válido",
				],
				password: [
					v => !!v || "Senha é obrigatória.",
					v => (v && v.length >= 5) || "A senha deve ser maior que 5 caracteres."
				]
			}
		}),
		methods:{
			async send(){
				if(this.$refs.form.validate() && await login(this.credentials)){
					router.push("/home");
				}
				this.errorShow = true;
			},	
			register(){
				router.push('/register')
			}
		}
	};
</script>

<style>
  html {
    overflow-y: hidden!important;
  }
</style>