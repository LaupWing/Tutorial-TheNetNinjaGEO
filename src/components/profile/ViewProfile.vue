<template>
    <div class="view-profile container">
        <div class="card">
            <h2 class="deep-purple-text center">User's Wall</h2>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
    name: 'ViewProfiel',
    data(){
        return{
            profile:null
        }
    },
    created(){
        let ref = db.collection('users')
    }
}
</script>
<style>
    
</style>