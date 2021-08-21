<template>
  <v-layout column justify-center align-center>
    <v-flex>
      <div>
        <v-row>
          <BreadCrumbs />
          <v-btn small outlined class="ml-auto align-self-center" to="/create">
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-row>
      </div>
      <div>
        <v-simple-table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>GIT REPO</th>
              <th>IMAGE TAG</th>
              <th>BRUNCH</th>
              <th>BUILD STATUS</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="build in buildsets" :key="build.id">
              <td>{{ build.ID }}</td>
              <td>{{ build.build_name }}</td>
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
              <td>{{ build.branch }}</td>
              <!-- statusによってchipを分ける -->
              <td>
                <div v-if="build.build_status === 'success'">
                  <v-chip small color="green" outlined>
                    {{ build.build_status }}
                  </v-chip>
                </div>
                <div v-else-if="build.build_status === 'error'">
                  <v-chip small color="red" outlined>
                    {{ build.build_status }}
                  </v-chip>
                </div>
                <div v-else>
                  &nbsp;
                </div>
              </td>
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
import BreadCrumbs from '~/components/BreadCrumbs.vue'

export default {
  components: {
    BreadCrumbs
  },
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
