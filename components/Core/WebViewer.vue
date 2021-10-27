<template>
  <div id="webviewer" ref="viewer"></div>
</template>

<script>

export default {
    name: 'WebViwer',
    props:{
        string: '',
        url: ''
    },
    mounted: function (){
        import('@pdftron/webviewer').then(()=>{
            WebViewer({
                path: '../webviewer',
                initialDoc: this.url,
            },this.$refs.viewer).then((instance) =>{
                //call api here
            })
        })
    }
}
</script>

<style>
    #webviewer{
        height: 74.5vh;
        width: auto;
    }
</style>