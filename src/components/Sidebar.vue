<template>
  <div class="sidebar">
    <div class="title">
      <span>System</span>
    </div>

    <div class="unknow">
      <img src="@/assets/img/user-logo.png" alt="user logo" class="userLogo" />
      <span>Users</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
.sidebar {
  position: absolute;
  width: 245px;
  height: 716px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  color: #000;
}

.title {
  position: absolute;
  width: 194px;
  height: 77px;
  left: 30px;
  top: 30px;
  color: #000;
  font-size: 24px;
}

.unknow {
  position: absolute;
  width: 200px;
  left: 31px;
  top: 98px;
  display: flex;
  align-items: center;
}

.unknow .userLogo {
  width: 16px;
  padding-right: 25px;
}
</style>
