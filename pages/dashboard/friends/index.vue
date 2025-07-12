<template>
    <div class="flex flex-column">
      <BaseBreadCrumbs />
      <BaseTab class="mt-15" :tabs="tabs" initial-tab="1" duration="400">
        <template #1>
          <div>Content for Tab 1</div>
        </template>
        
        <template #2>
          <div>Content for Tab 2</div>
        </template>
        
        <template #3>
          <div>Content for Tab 3</div>
        </template>
    </BaseTab>
    </div>
</template>

<script setup>
const tabs = [
  { id: '1', label: 'Friends List', icon: 'line-md:list' },
  { id: '2', label: 'All Friend Requests', icon: 'line-md:account-add' },
  { id: '3', label: 'Send Friend Request', icon: 'line-md:person-add-filled' }
];
</script>