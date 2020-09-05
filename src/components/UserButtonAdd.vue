<template>
  <div ref="button" :class="['btnAdd', { disabled }]" @click="addHandler">
    <span class="symbol"></span>
    <span class="text">Add new user</span>
  </div>
</template>

<script>
export default {
  name: "UserButtonAdd",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    addHandler() {
      this.$emit("click", this);
    }
  }
};
</script>

<style scoped>
.btnAdd {
  position: absolute;
  width: 195px;
  height: 48px;
  left: 281px;
  top: 99px;
  background: #0054fe;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.btnAdd:hover {
  background: #0648cc;
}

.btnAdd.disabled,
.btnAdd.disabled:hover {
  background: #6c757d;
  cursor: default;
}

.btnAdd span.symbol {
  width: 11.2px;
  height: 2px;
  margin: 0 23px;
}

.symbol::before,
.symbol::after {
  content: "";
  position: absolute;
  background-color: #fff;
  width: 12px;
  height: 2px;
}

.symbol::after {
  transform: rotate(90deg);
}
</style>
