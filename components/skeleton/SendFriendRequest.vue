<template>
  <BaseCard class="mt-10 fade-animation py-10" bgClass="bg-primary-white">
    <div class="flex flex-column align-center justify-center w-100">
      <BaseSkeleton width="120px" height="120px" radius="50%" />
    </div>
    <div class="w-100 flex align-center justify-center mt-8">
      <BaseSkeleton width="110px" height="20px" />
    </div>
    <div class="w-100 flex align-center justify-center mt-8">
      <BaseSkeleton width="140px" height="20px" />
    </div>
    <div class="w-100 flex align-center justify-center mt-8">
      <BaseSkeleton width="100px" height="30px" class="mx-3"/>
      <BaseSkeleton width="50px" height="30px" class="mx-3" />
    </div>
  </BaseCard>
</template>
