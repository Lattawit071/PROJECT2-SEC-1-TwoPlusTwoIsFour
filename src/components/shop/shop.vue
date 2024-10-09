<script setup>

const showToast = ref(false);
const selectedItem = ref({});
let timeoutId = null;
const showToastError = ref(false);
let errorTimeoutId = null;

function showToastMessage(item) {
  selectedItem.value = item;
  showToast.value = true;

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    showToast.value = false;
  }, 4000);
}

function showToastErrorMessage() {
  showToastError.value = true;

  if (errorTimeoutId) {
    clearTimeout(errorTimeoutId);
  }

  errorTimeoutId = setTimeout(() => {
    showToastError.value = false;
  }, 4000);
}

function deductCoins(amount) {
  if (playerStore.value.coins >= amount) {
    playerStore.value.coins -= amount;
  } else {
  }
}

function addRod(rodId) {
  const rod = fishingRods.find((rod) => rod.id === rodId);

  if (rod) {
    const existingRod = playerStore.value.ownedRods.find(
      (ownedRod) => ownedRod.id === rodId
    );

    if (!existingRod) {
      playerStore.value.ownedRods.push({
        ...rod,
        quantity: 1,
      });
      showToastMessage(rod);
    } else {
    }
  } else {
  }
}

function addPotion(potionId) {
  const selectedPotion = potion.find((p) => p.id === potionId);
  if (selectedPotion) {
    const existingPotion = playerStore.value.potions.find(
      (p) => p.id === potionId
    );
    if (existingPotion) {
      existingPotion.quantity += 1;
      showToastMessage(selectedPotion);
    } else {
      playerStore.value.potions.push({ ...selectedPotion, quantity: 1 });
      quantity = 1;
      showToastMessage(selectedPotion);
    }
  }
}

function purchaseRods(item) {
  if (playerStore.value.coins >= item.price) {
    const existingRod = playerStore.value.ownedRods.find(
      (rod) => rod.id === item.id
    );

    if (!existingRod) {
      deductCoins(item.price);
      addRod(item.id);
      playSuccessBuySound();
    } else {
    }
  } else {
    playFailBuySound();
    showToastErrorMessage();
  }
}

function purchasePotion(item) {
  if (playerStore.value.coins >= item.price) {
    playSuccessBuySound();
    showToastMessage(item);
    deductCoins(item.price);
    const existingPotion = playerStore.value.potions.find(
      (p) => p.id === item.id
    );
    if (existingPotion) {
      existingPotion.quantity += 1;
      showToastMessage(item);
    } else {
      addPotion(item.id);
    }
  } else {
    playFailBuySound();
    showToastErrorMessage();
  }
}

const playerCoins = computed(() => playerStore.value.coins);
</script>