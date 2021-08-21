<template>
  <v-layout column justify-center align-center>
    <v-flex>
      <div>
        <BreadCrumbs />
      </div>
      <div>
        <p>{{ build.ID }}</p>
        <p>{{ build.build_name }}</p>
        <p>{{ build.git_repo }}</p>
        <p>{{ build.img_tag }}</p>
        <p>{{ build.UpdatedAt }}</p>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import BreadCrumbs from '~/components/BreadCrumbs.vue'

export default {
  components: {
    BreadCrumbs
  },
  data() {
    return {
      build: ''
    }
  },
  mounted() {
    this.fetchBuild()
  },
  methods: {
    async fetchBuild() {
      this.build = await fetch(
        `http://127.0.0.1:3009/api/v1/build/${this.$route.params.id}`,
        {
          mode: 'cors'
        }
      ).then((res) => res.json())
    }
  }
}
</script>
