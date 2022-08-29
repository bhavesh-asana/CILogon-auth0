<template>
     <button class="btn btn-lg btn-iu-crimson" v-on:click="loadAuthURL">Get Started</button>
</template>

<script>
import custosStore from "airavata-custos-portal/src/lib/store";
export default {
  name: "HomePage",
  components: {Errors, ButtonOverlay},
  store: custosStore,
  data() {
    return {
      processingLogin: false,
      errors: []
    }
  },
  methods: {
    async loadAuthURL() {
      this.errors = [];

      this.processingLogin = true;
      try {
        await this.$store.dispatch("auth/fetchAuthorizationEndpoint");
      } catch (e) {
        this.errors.push({
          variant: "danger",
          title: "Network Error",
          description: "Please contact the system administrator",
          source: e
        });
      }
      this.processingLogin = false;
    },
  }
}
</script>