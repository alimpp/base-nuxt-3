<template>
  <div class="w-370-px flex">
    <div class="w-335-px flex px-5 mt-5">
      <BaseCard class="fade-animation" bgClass="bg-primary-white" px="0" py="0">
        <div class="w-100 flex flex-column">
          <div class="flex w-100 py-10 px-5">
            <BaseSkeleton width="40px" height="40px" radius="50%" />
            <div class="flex flex-column justify-center w-100 px-8">
              <BaseSkeleton width="100px" height="15px" />
              <BaseSkeleton width="190px" height="15px" class="mt-5" />
            </div>
          </div>
          <BaseSkeleton width="100%" height="200px" />
          <div class="flex flex-column w-92 px-15 py-10">
            <BaseSkeleton width="100px" height="15px" />
            <BaseSkeleton width="190px" height="15px" class="mt-5" />
            <BaseSkeleton width="150px" height="15px" class="mt-5" />
            <BaseSkeleton width="160px" height="15px" class="mt-5" />
            <BaseSkeleton width="135px" height="15px" class="mt-5" />
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
