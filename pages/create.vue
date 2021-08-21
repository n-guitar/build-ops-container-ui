<template>
  <v-layout column justify-center align-center>
    <v-flex>
      <BreadCrumbs />
      <div class="fetchForm">
        <v-form>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="buildname" label="Name"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="gitrepo"
                label="Git Repository"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="branch" label="Brunch"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="imgtag" label="Image Tag"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select :items="git_auth" label="Git Auth"></v-select>
            </v-col>
          </v-row>
          <v-btn @click="fetchNewBuildSettings">
            submit
          </v-btn>
        </v-form>
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
      buildname: '',
      gitrepo: '',
      branch: '',
      imgtag: '',
      git_auth: ['aaaa', 'bbbb']
    }
  },
  methods: {
    async fetchNewBuildSettings() {
      // eslint-disable-next-line prefer-const
      let formData = new FormData()
      formData.append('buildname', this.buildname)
      formData.append('gitrepo', this.gitrepo)
      formData.append('branch', this.branch)
      formData.append('imgtag', this.imgtag)
      console.log(this.imgtag)

      await fetch('http://127.0.0.1:3009/api/v1/build', {
        method: 'POST',
        mode: 'cors',
        body: formData
      })
        .then((response) => response.json())
        .then((result) => console.log(result))
    }
  }
}
</script>
