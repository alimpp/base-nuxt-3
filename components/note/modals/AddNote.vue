<template>
    <BaseModal 
     :isOpen="isOpen" 
     title="Add Note" 
     text="Make note for black cat timeline"
     @close="close"
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
        :loading="loading"
        @click="addNote"
      />
     </template>
    </BaseModal>
</template>

<script setup>
import { noteController } from '~/controllers/Note'

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['close'])

const note = ref('')
const access = ref(true)
const loading = ref(false)

const disabled = computed(() => {
    return !access.value || !note.value
})

const addNote = async () => {
  loading.value = true
  await noteController.addNote(note.value)
  loading.value = false
  close()
  navigateTo('/dashboard/notes')
}

const close = () => {
  note.value = ''
  emit('close')
}
</script>