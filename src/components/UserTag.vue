<template>
  <div :class="`px-3 py-1 rounded-pill ${color} text-light text-sm fw-bold`" style="width: max-content;">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'UserTag',
  props: {
    title: String,
    color: String,
  }
}
</script>