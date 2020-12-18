<template>
    <div id="Partners">
        <h2><span> {{username}} </span> 's partners list!</h2>
        <ul>
            <li>Ubication {{ubication}}</li>
            <li>Email {{email}}</li>
            <li>Price {{price}}</li>
        </ul>
    </div>
</template>



<script>
    export default {
        name: "Partners",
        data:function(){
            return {
                email: "none"
            }
        },

        created: function(){
            this.email = this.$route.params.email
            this.ubication = this.$route.params.ubication
            this.username = this.$route.params.username
            this.price = this.$route.params.price
        }
    }
</script>

    


<style>
    #Partners{
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;    
        align-items: center;
    }

    #Partners h2{
        font-size: 50px;
        color: #283747;
    }

    #Partners span{
        color: crimson;
        font-weight: bold;
    }
</style>