<template>
<div class="flex flex-column w-100" @click="openList">
    <span class="pb-5 f-s-13 f-w-600" :class="{ 'color-danger': errorMessage }">
      {{ label }}
    </span>
    <input
      :style="{
        height: `${height}`,
        width: `${width}`,
      }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :class="{
        error: errorMessage,
        disabled: disabled
      }"
      :disabled="disabled"
      :placeholder="placeholder"
      class="mt-2 cursor-pointer"
      readonly
    />
    <span v-if="errorMessage" class="color-danger f-s-12 f-w-500 pt-5">
      {{ errorMessage }}
    </span>
</div>

<div class="glass fade-animation-1s" v-if="listState">
    <div class="list-content px-15 py-15 base-card-dark">
       <div class="w-100 flex align-center">
            <div class="flex align-center w-50">
              <BaseIcon name="qlementine-icons:select-all-24" />
               <span class="f-s-14 f-w-600 px-5">
                {{ title ? title : label }}
               </span>
            </div> 
            <div class="flex align-center justify-end w-50">
                <BaseIcon class="cursor-pointer" @click="listState = !listState" name="line-md:menu-to-close-alt-transition" />
            </div>
       </div>
       <input class="search-input color-light" placeholder="Search" v-model="searchValue" />
       <BaseDivider />
       <div class="list">
        <div class="fade-animation-1s cursor-pointer flex align-center f-s-14 f-w-600 py-12 px-10 mt-5 border-rounded bg-dark" v-for="(item, index) in itemsDataSource" 
       :key="index" @click="handleSelect(item.name)" :class="{'bg-selected': item.name == modelValue}">
         <BaseIcon class="mx-2" name="ei:check" v-if="item.name == modelValue" /> {{ item.name }}
       </div>
       </div>
    </div>
</div>
</template>

<script setup>
const errorMessage = ref('')
const emit = defineEmits(["update:access"]);

const access = defineModel('access')

const listState = ref(false)
const searchValue = ref('')

const openList = () => {
  searchValue.value = ''
  listState.value = !listState.value
  
}

const props = defineProps({
  mutli: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false,
  },
  label: {
    type: String,
    default: "",
    required: false,
  },
  title: {
    type: String,
    default: "",
    required: false,
  },
  type: {
    type: String,
    default: "",
    required: false,
  },
  modelValue: {
    type: String,
    default: "",
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
  height: {
    type: String,
    default: "40px",
  },
  width: {
    type: String,
    default: "",
  },
  validate: {
    type: Boolean,
    default: false
  },
  rules: {
    type: String,
    default: "",
  },
  minLength: {
    type: Number,
    default: 0
  },
  maxLength: {
    type: Number,
    default: 0
  },
  items: {
    type: Array,
    default: [],
    required: true
  }
});

watch(() => props.modelValue, (nVal,oval) => {
  if(props.validate) {
    if(props.rules == 'required') {
      if(!props.modelValue) {
        access.value = false
        errorMessage.value = 'Field is required'
      } else {
        access.value = true
        errorMessage.value = ''
      }
    }
  }
}, {deep: true})

const handleSelect = (item) => {
    emit('update:modelValue', item);
    if (!props.mutli) listState.value = !listState.value
}

const itemsDataSource = computed(() => {
  const searchTerm = searchValue.value.toLowerCase();
  return props.items.filter((item) => {
    return item?.name?.toLowerCase().includes(searchTerm);
  });
})
</script>

<style scoped lang="scss">
.search-input{
  height: 35px;
  background: none;
  outline: none;
  border: none;
  margin-top: 10px;
}
input {
  padding: 0 7px;
  outline: none;
  border: 1px solid #8481812f;
  border-radius: 6px;
  color: black;
}

.disabled {
  cursor: not-allowed;
}

.error {
  border: 2px solid #f50000;
  color: #f50000;
}

.glass {
  width: 100%;
  height: 100dvh;
  position: fixed;
  z-index: 2000;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: #0000005d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list-content{
    width: 350px;
    max-height: 400px;
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}

.list{
    max-height: 350px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
}
.list::-webkit-scrollbar {
  display: none;
}

.bg-selected {
    background: #404040;
}
.color-light {
  color: #fff;
}
</style>