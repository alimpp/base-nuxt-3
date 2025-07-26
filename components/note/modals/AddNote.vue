<template>
    <BaseModal 
     :isOpen="isOpen" 
     title="Add Note" 
     text="Make note for black cat timeline"
    >
     <template #content>
       <BaseTextarea 
        label="Note Content" 
        placeholder="Enter text content" 
        validate="true" 
        rules="length" 
        max-length="300" 
        min-length="5"  
        v-model="note"
        v-model:access="access"
       />
     </template>
     <template #footer>
      <BaseButton 
        name="Add New Note" 
        icon="line-md:plus" 
        width="100%" 
        :disabled="disabled"
      />
     </template>
    </BaseModal>
</template>

<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const note = ref('')
const access = ref(true)

const disabled = computed(() => {
    return !access.value || !note.value
})
</script>