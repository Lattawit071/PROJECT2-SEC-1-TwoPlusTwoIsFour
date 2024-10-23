import { defineStore } from 'pinia';
import mapData from "../../data/map.json";

export const useMapStore = defineStore('mapStore', {
  state: () => ({
    defaultMap: mapData.find((map) => map.name === 'world 1') || mapData[0],
    currentMap: mapData.find((map) => map.name === 'world 1') || mapData[0],
  }),
  actions: {
    setCurrentMap(map) {
      this.currentMap = map;
    },
    resetMap() {
      this.currentMap = this.defaultMap;
    },
  },
});
