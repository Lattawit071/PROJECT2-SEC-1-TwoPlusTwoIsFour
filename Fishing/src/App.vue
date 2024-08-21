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
    <div class="bottom-image">
      <img
        src="./components/icons/RectangleBack.png"
        alt="Bottom Image"
        class="bottom-image-item"
      />
      <img
        src="./components/icons/RectangleFront.png"
        alt="Top Image"
        class="top-image-item"
      />
      <div class="bottom-container">
        <img src="./components/icons/Home.png" alt="Home" />
        <img src="./components/icons/Inventory.png" alt="Home" />
        <img src="./components/icons/Hook.png" alt="Home" />
        <img src="./components/icons/Shop.png" alt="Home" />
        <img src="./components/icons/Bookmark.png" alt="Home" />
      </div>
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
  background-image: url("./components/image/PlayBackground.png"); /* เปลี่ยน path ของรูปตามที่ต้องการ */
  background-size: cover; /* ปรับขนาดให้รูปภาพครอบคลุมทั้ง background */
  background-position: center; /* ปรับให้รูปอยู่ตรงกลาง */
  position: relative;
}

.bottom-image {
  position: relative; /* Relative positioning to allow for absolute positioning of children */
  width: 100%; /* Full width */
  height: auto; /* Maintain aspect ratio */
}

.bottom-image-item,
.top-image-item {
  position: fixed; /* Absolute positioning to stack images */
  left: 0;
  bottom: 0;
  width: 100%; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
  object-fit: contain; /* Ensure the image fits within the container */
}

.top-image-item {
  /* Adjust z-index if needed to control stacking order */
  z-index: 1; /* Make sure it is on top of the bottom image */
}

.bottom-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%; /* Full viewport width */
  display: flex;
  justify-content: space-between; /* Distribute space evenly */
  align-items: center; /* Center images vertically */
  padding: 0 2rem; /* Add horizontal padding to avoid images touching edges */
  box-sizing: border-box; /* Include padding in width calculations */
  z-index: 2;
}

.bottom-container img {
  max-width: 20%; /* Adjust based on the number of images */
  height: auto; /* Maintain aspect ratio */
}

@font-face {
  font-family: "YourHandwrittenFont";
  src: url("/path/to/your/font-file.woff2") format("woff2");
}
</style>
