<template>
  <v-layout column justify-center align-center>
    <v-flex>
      <div class="text-center">
        <div>あああ</div>
      </div>
      <div>
        <v-simple-table>
          <thead>
            <tr>
              <th>ID</th>
              <th>GIT REPO</th>
              <th>IMAGE TAG</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="build in buildsets" :key="build.id">
              <td>{{ build.ID }}</td>
              <td>
                <a
                  :href="build.git_repo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ build.git_repo }}
                </a>
              </td>
              <td>{{ build.img_tag }}</td>
              <td>
                <NuxtLink
                  :to="`/buildsets/${build.ID}`"
                  class="nuxt-link-override"
                >
                  <v-icon>mdi-cog-outline</v-icon>
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      buildsets: []
    }
  },
  mounted() {
    this.fetchBuildSets()
  },
  methods: {
    async fetchBuildSets() {
      this.buildsets = await fetch('http://127.0.0.1:3009/api/v1/build', {
        mode: 'cors'
      }).then((res) => res.json())
    }
  }
}
</script>

<style scoped>
.nuxt-link-override {
  text-decoration: none; /* リンクのアンダーラインを消す*/
}
</style>
