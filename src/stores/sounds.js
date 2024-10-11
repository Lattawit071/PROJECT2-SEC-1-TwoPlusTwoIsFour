// stores/soundStore.js
import { defineStore } from "pinia";
import { ref } from "vue";
import bubbleSound from "/sound/EffectsBubble.mp3";
import successBuySound from "/sound/cash-register-purchase-87313.mp3";
import failBuySound from "/sound/error-126627.mp3";
import backgroundMusic from "/sound/game-music-loop-7-145285.mp3";
import getFishSound from "/sound/cute-level-up-2-189851.mp3";
import failGetFishSound from "/sound/fail-234710.mp3";
import hookFishSound from "/sound/Fishing Rod Cast (Fortnite Sound) - Sound Effect for editing.mp3";
import sellFishSound from "/sound/short-success-sound-glockenspiel-treasure-video-game-6346.mp3";
import useRodSound from "/sound/Game Menu Select Sound Effect.mp3";
import usePotionSound from "/sound/Mini Shield Use (Fortnite Sound) - Sound Effect for editing.mp3";

export const useSoundStore = defineStore("soundStore", () => {
  const isSoundOn = ref(true);
  const isMusicOn = ref(true);
  const isSfxOn = ref(true);

  const sounds = {
    hover: new Audio(bubbleSound),
    backgroundMusic: new Audio(backgroundMusic),
    successBuy: new Audio(successBuySound),
    failBuy: new Audio(failBuySound),
    getFish: new Audio(getFishSound),
    failGetFish: new Audio(failGetFishSound),
    hookFish: new Audio(hookFishSound),
    sellFish: new Audio(sellFishSound),
    useRod: new Audio(useRodSound),
    usePotionSound: new Audio(usePotionSound),
  };

  // ตั้งค่า volume
  sounds.hover.volume = 0.09;
  sounds.successBuy.volume = 0.4;
  sounds.useRod.volume = 0.4;
  sounds.sellFish.volume = 0.4;
  sounds.usePotionSound.volume = 0.4;

  function toggleSound() {
    isSoundOn.value = !isSoundOn.value;
  }

  function toggleMusic() {
    isMusicOn.value = !isMusicOn.value;
    if (isMusicOn.value) {
      sounds.backgroundMusic.play();
    } else {
      sounds.backgroundMusic.pause();
    }
  }

  function toggleSfx() {
    isSfxOn.value = !isSfxOn.value;
  }

  function playHoverSound() {
    if (isSfxOn.value) {
      sounds.hover.currentTime = 0;
      sounds.hover.play();
    }
  }

  function playSuccessBuySound() {
    if (isSfxOn.value) {
      sounds.successBuy.currentTime = 0;
      sounds.successBuy.play();
    }
  }

  function playFailBuySound() {
    if (isSfxOn.value) {
      sounds.failBuy.playbackRate = 1.5;
      sounds.failBuy.play();
    }
  }

  function playSellSuccessSound() {
    if (isSoundOn.value) {
      sounds.sellFish.currentTime = 0;
      sounds.sellFish.play();
    }
  }

  function playUseRodSound() {
    if (isSoundOn.value) {
      sounds.useRod.currentTime = 0;
      sounds.useRod.play();
    }
  }

  function playUsePotionSound() {
    if (isSoundOn.value) {
      sounds.usePotionSound.currentTime = 0;
      sounds.usePotionSound.play();
    }
  }

  return {
    isSoundOn,
    isMusicOn,
    isSfxOn,
    toggleSound,
    toggleMusic,
    toggleSfx,
    playHoverSound,
    playSuccessBuySound,
    playFailBuySound,
    playSellSuccessSound,
    playUseRodSound,
    playUsePotionSound,
  };
});
