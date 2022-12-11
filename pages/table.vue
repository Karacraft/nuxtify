<script setup>

const name = ref('')
const email = ref('')
const bio = ref('')

const users = ref([])
const getUsers = async () => {
  // const u = await $fetch('/api/users')
  // console.info(u)
  // users.value = u
  console.info('Xata : ' , useRuntimeConfig().public.xataApiKey)
  const options = {
    method: 'POST',
    headers: {Authorization: `Bearer ${useRuntimeConfig().public.xataApiKey}`, 'Content-Type': 'application/json'},
    body: '{"page":{"size":15}}'
  };

fetch('https://karacraft-s-workspace-6ushdu.us-east-1.xata.sh/db/test:main/tables/Users/query', options)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    users.value = response.records
  })
  .catch(err => console.error(err));

}
//  How to convert formData to JSON
// const formData = new FormData()
// formData.append('one','isworking')
// formData.append('two','isworking2')
// var obj = {}
// formData.forEach((value,key)=>{ obj[key] = value})
// console.info(JSON.stringify(obj))

// console.info(JSON.stringify(formData))
const addUser = async () => {
  // const d = await useFetch('/api/user',{
  //   method:'POST',
  //   headers:{
  //     'Content-Type': 'application/json'
  //   },
  //   body:{name:name.value,email:email.value,bio:bio.value}
  // })

  const options = {
  method: 'POST',
  headers: {Authorization: `Bearer ${useRuntimeConfig().public.xataApiKey}`, 'Content-Type': 'application/json'},
  body: {"name": name.value,"email":email.value,"bio":bio.value}
};

fetch('https://karacraft-s-workspace-6ushdu.us-east-1.xata.sh/db/test:main/tables/Users/data?columns=id', options)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    getUsers()
  })
  .catch(err => console.error(err));

}

const deleteUser = async (delId) => {
  // const d = await useFetch('/api/user',{
  //   method:'DELETE',
  //   headers:{
  //     'Content-Type': 'application/json'
  //   },
  //   body:{id:delId}
  // })
  const options = {
  method: 'DELETE',
  headers: {Authorization: `Bearer ${useRuntimeConfig().public.xataApiKey}`, 'Content-Type': 'application/json'}
};

fetch(`https://karacraft-s-workspace-6ushdu.us-east-1.xata.sh/db/test:main/tables/Users/data/${delId}?columns=id`, options)
  .then(response => response.json())
  .then(response =>{ 
    console.log(response)
    getUsers()
  })
  .catch(err => console.error(err));

  getUsers()
}

onMounted(() => {
  getUsers()
})
</script>

<template>
  <v-container
    fluid
    class="bg-surface-variant fill-height"
  >
    <v-row
      align="center"
      class="fill-height justify-center"
    >
      <v-col cols="12">
        <v-table
        class="ma-5"
        density="compact"
        fixed-header
        height="400px"
      >
        <thead>
          <tr>
            <th class="text-left">
              Id
            </th>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Email
            </th>
            <th class="text-left">
              Bio
            </th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
          >
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.bio }}</td>
            <td>
              <v-btn @click="deleteUser(user.id)">del</v-btn>
            </td>
          </tr>
        </tbody>
        </v-table>
      
      </v-col>
      
      <v-col cols="3">
        <!-- Form -->
        <v-form>
          <v-text-field label="Name" v-model="name"/>
          <v-text-field label="Email" v-model="email"/>
          <v-text-field label="Bio" v-model="bio"/>
          <v-btn color="success"  @click="addUser">Add </v-btn>
        </v-form>

      </v-col>
    </v-row>


    
  </v-container>
</template>
