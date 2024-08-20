<template>
  <!-- <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; background-color: #f7fafc; position: relative;"> -->
  <div class="main-container" v-if="play">
    <!-- Top Left Button -->
    <div style="position: absolute; top: 1rem; left: 1rem">
      <img
        src="./components/icons/Setting.png"
        alt="Settings"
        style="
          width: 15rem;
          height: 15rem;
          cursor: pointer;
          object-fit: contain;
        "
      />
    </div>
    <!-- Top Right Button -->
    <div style="position: absolute; top: 1rem; right: 1rem">
      <img
        src="./components/icons/Question.png"
        alt="Help"
        style="
          width: 15rem;
          height: 15rem;
          cursor: pointer;
          object-fit: contain;
        "
      />
    </div>
    <!-- Center Content -->
    <div style="text-align: center">
      <div
        style="
          font-size: 10rem;
          font-family: 'YourHandwrittenFont', sans-serif;
          margin-bottom: 10rem;
        "
      >
        fish for life
      </div>
      <div style="position: relative; display: inline-block">
        <img
          src="./components/icons/Button.png"
          alt="Play"
          style="
            width: 40rem;
            height: 15rem;
            margin: 0 auto;
            cursor: pointer;
            object-fit: contain;
          "
        />
        <span
          style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 6rem;
            color: white;
            font-family: 'YourHandwrittenFont', sans-serif;
          "
          @click="playPage"
        >
          PLAY
        </span>
      </div>
    </div>
  </div>

  <div class="play-container" v-if="!play">
    <div style="position: fixed; bottom: 0; display: inline-block;">
      <img src="./components/icons/Rectangle 1.png"/>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const play = ref(true);
    const playPage = () => {
      play.value = false;
    };

    return {
      play,
      playPage,
    };
  },
};

// const play = ref(false);
// const playPage = () => {
//   play.value = true
// }
</script>

<style scoped>
.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("./components/image/Background.png"); /* เปลี่ยน path ของรูปตามที่ต้องการ */
  background-size: cover; /* ปรับขนาดให้รูปภาพครอบคลุมทั้ง background */
  background-position: center; /* ปรับให้รูปอยู่ตรงกลาง */
  position: relative;
}
.play-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("./components/image/PlayBackground.png"); /*เปลี่ยน path ของรูปตามที่ต้องการ*/
  background-size: cover; /* ปรับขนาดให้รูปภาพครอบคลุมทั้ง background */
  background-position: center; /* ปรับให้รูปอยู่ตรงกลาง */
  position: relative;
}

@font-face {
  font-family: "YourHandwrittenFont";
  src: url("/path/to/your/font-file.woff2") format("woff2");
}
</style>