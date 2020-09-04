<template>
  <div class="header">
    <div class="title">
      <span class="iconTitle"></span>
      <span class="text">Dashboard</span>
    </div>

    <div class="card">
      <div class="userIcon">
        <img
          src="@/assets/img/user-icon.png"
          alt="user icon"
          class="autosize"
        />
      </div>

      <span class="name">Marlene Sasoeur</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  position: absolute;
  width: 835px;
  height: 74px;
  left: 277px;
  top: 0px;
  background: #ffffff;
}

.title {
  position: absolute;
  left: 31px;
  top: 28px;
  color: #74798c;
  display: flex;
  align-items: center;
}

.title .iconTitle,
.title .iconTitle::before,
.title .iconTitle::after {
  position: absolute;
  width: 15px;
  height: 1px;
  top: 3px;
  background-color: #a0a5ba;
  border-radius: 0 50px 50px 0;
}

.title .iconTitle::before,
.title .iconTitle::after {
  content: "";
  top: 4px;
}

.title .iconTitle::after {
  width: 9px;
  right: 0px;
  top: 8px;
  border-radius: 50px;
}

.title .text {
  padding-left: 32px;
}

.card {
  position: absolute;
  width: 200px;
  left: 630px;
  top: 30px;
  display: flex;
  align-items: center;
}

.card .userIcon {
  width: 32px;
  height: 32px;
  background-color: #f4e6ad;
  border-radius: 50px;
  overflow: hidden;
}

.card .userIcon img {
  padding-top: 2px;
  width: 29px;
}

.card .name {
  color: #74798c;
  padding-left: 10px;
}
</style>
