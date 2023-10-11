<script setup>
const items = [
  {id: 'muktae', image:'https://image.nongshim.com/non/pro/434_muktae.jpg', name:'muktae kkang'},
  {id: 'banana', name: 'xxx1', image: 'https://image.nongshim.com/non/pro/1675041866987.jpg'},
  {name: 'xxx2', image: 'https://image.nongshim.com/non/pro/1675041866987.jpg'},
  {name: 'xxx3', image: 'https://image.nongshim.com/non/pro/1675041866987.jpg'},
  {name: 'xxx4', image: 'https://image.nongshim.com/non/pro/1675041866987.jpg'},
]
import { ref,reactive,onMounted  } from 'vue'

const counter = reactive({ count: 0 })
const voted = ref(false)
onMounted(() => {
  readCount();
});
async function readCount(){
  try {
    for (const item of items) {
      const response = await fetch(`https://api.counterapi.dev/v1/what-do-you-eat/${item.id}/`
          /*,{mode: 'no-cors'} */);
      const resp = await response.json();8
      item.count = resp.count;
    }
  } catch (error) {
    console.error(error);
  }
}
async function upVote(id){
  try {
    const response = await fetch(`https://api.counterapi.dev/v1/what-do-you-eat/${id}/up`);
    const resp = await response.json();
    items.find((item)=>item.name === id).count = resp.count;
  } catch (error) {
    console.error(error);
  }
}
</script>
<template>
  <div class="what-do-you-eat">
    <h1>This is an what-do-you-eat page</h1>
    <div class="carousel rounded-box grid grid-cols-4 gap-4">
      <div class="carousel-item"  v-for="item in items">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body items-center justify-between">
            <h2 class="card-title">{{item.name}}</h2>
            <figure><img :src="item.image" alt="Shoes" /></figure>
            <div class="card-actions">
              <button class="btn" @click="upVote(item.id)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                {{ item.count || 0}}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .what-do-you-eat {
  }
}
</style>
