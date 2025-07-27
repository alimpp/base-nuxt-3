<template>
    <BaseCard class="fade-animation" bgClass="bg-primary-white">
        <div class="w-100 flex flex-column">
            <div class="flex w-100">
            <div class="flex">
            <BaseSkeleton width="35px" height="35px" radius="50%" />
            <div class="flex flex-column justify-center px-5">
                <BaseSkeleton width="120px" height="15px" />
                <BaseSkeleton width="180px" height="15px" class="mt-5" />
            </div>
            </div>
            </div>
            <div class="w-98 flex px-5 py-5 mt-5 border-rounded">
            <BaseSkeleton width="365px" height="15px" class="mt-5" />
            </div>
        </div>
    </BaseCard>
</template>