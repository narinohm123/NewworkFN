<template>
  <div>
      <div class="pagination-row">
          <v-btn class="pagination-button">&lt;-</v-btn>
          <span v-for="(item,index) in new Array(10)" :key="index">
              <v-btn class="pagination-button"
              @click="pageNumber = index + 1">{{index + 1}}</v-btn>
          </span>
          <v-btn class="pagination-button">-&gt;</v-btn>
      </div>
      <slot name="data" :pageNumber="pageNumber" />
  </div>
</template>

<script>
export default {
    data(){
        return{
            pageNumber:1
        }
    }
}
</script>

<style>

</style>