<template>
  <div class="w-370-px flex">
    <div class="w-35-px flex align-end justify-center">
      <BaseSkeleton width="35px" height="35px" radius="50%" />
    </div>
    <div class="w-335-px flex px-5 mt-5">
      <BaseCard class="fade-animation" bgClass="bg-primary-white">
        <div class="w-100 flex flex-column">
          <div class="flex w-100">
            <div class="flex flex-column justify-center px-5">
              <BaseSkeleton width="100px" height="15px" />
              <BaseSkeleton width="115px" height="15px" class="mt-5" />
            </div>
          </div>
          <div class="w-98 flex px-5 py-5 mt-5 border-rounded">
            <BaseSkeleton width="155px" height="15px" />
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
