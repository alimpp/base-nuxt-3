<template>
    <div class="auth-layout">
      <div class="glass-content">
         <div class="content">
           <div class="w-100 flex justify-start">
                <span class="f-s-22 f-w-600">Login With Application</span>
           </div>
           <BaseInput class="mt-15" label="Email" placeholder="Please Enter Your Email" />
           <BaseInput class="mt-10" label="Password" placeholder="Please Enter Your Password" />
           <BaseButton class="mt-15" name="Login" width="100%" height="40px" />
           <div class="w-100 flex justify-center mt-15 cursor-pointer">
                <span class="f-s-14 f-w-500 color-primary">Don't have a user account?</span>
           </div>
         </div>
         <Loader />
      </div>
    </div>
</template>

<style scoped>
.auth-layout{
    width: 100%;
    height: 100dvh;
    background-image: url('/public/image/auth/auth-background.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.glass-content{
    width: 100%;
    height: 100dvh;
    background: #000000ad;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content {
    width: 380px;
    height: 500px;
    border-radius: 15px;
    background: #ffffffc2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
}
</style>