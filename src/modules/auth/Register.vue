<template>
  <v-app>
    <v-main
      :style="{'background-image': 'url(' + require('../../assets/background1.png') + ')'}"
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
            md4
            sm8
          >
            <v-card>
              <v-toolbar 
                color="#8C2B2B"
                class="white--text" 
                height="60px" 
                width="100%" 
                flat
              >
                <v-toolbar-title> Register </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon dark right>mdi-account-plus</v-icon>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form">
                  <v-alert
										outlined
										text
										type="error"
										v-show="errorShow"
									>
										Failed to register 
									</v-alert>
                  <v-text-field
                    label="Name"
                    prepend-icon="mdi-account"
                    v-model="information.name"
                    :counter="30"
                    :rules="rules.nameRules"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    label="E-mail"
                    prepend-icon="mdi-email"
                    v-model="information.email"
                    :counter="45"
                    :rules="rules.emailRules"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    label="Password"
                    name="password"
                    type="password"
                    prepend-icon="mdi-lock"
                    v-model="information.password"
                    :counter="16"
                    :rules="rules.passwordRules"
                    required
                  >
                  </v-text-field>
                </v-form>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn
                    class="white--text"
                    color="#BF757B"
                    block
                    elevation="2"
                    
                    type="text"
                    @click="send()"
                  >Register
                  </v-btn>
                </v-card-actions>
                <v-card-actions>
                  <v-btn
									class="white--text"
									color="#BF757B"
									block
									elevation="2"
									@click="reset()"
								>Reset
								</v-btn>
                </v-card-actions>
              </v-card-text>
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
  import {create} from '../api/todos/auth-service';
  import router from "@/router/";

  export default {
    components:{FooterBar, ToolBar},
    data: () => ({
        information: {},
        errorShow:false,
        rules:{
            nameRules: [
                v => !!v || 'Name is required !',
                v => (v && v.length >= 3) || 'Name must be more than 3 characters !',
            ],
            emailRules: [
                v => !!v || 'E-mail is required !',
                v => /@/.test(v) || 'E-mail must be valid !',
            ],
            passwordRules:[
                v => !!v || "Password is required !",
                v => (v && v.length >= 8) || "The password must be more than 8 characters.",
                v => (v && v.length <= 16) || "The password must be less than 8 characters."
            ]
        },
    }),
    methods:{
			async send(){
				if(this.$refs.form.validate() && await create(this.information)){
					router.push("/login");
				}
				this.errorShow = true;
			},	
			reset(){
				this.$refs.form.reset();
			}
		}
  }
</script>

<style>
  html {
    overflow-y: hidden!important;
  }
</style>