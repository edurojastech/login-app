const steps = [
  {
    stepId: 1,
    img: "./assets/images/img-step01.svg",
    title: "Best Prices & Deals",
    description: "Find your favorite Meals at the best prices with exclusive deals only on aliments app."
  },

  {
    stepId: 2,
    img: "./assets/images/step02.svg",
    title: "Track your Orders",
    description: "Track your orders in realtime from the app"
  },

  {
    stepId: 3,
    img: "./assets/images/step03.svg",
    title: "Free and Fast Delivery",
    description: "Free and fast delivery for all meals above ₹100."
  }
]

const templateSteps = (id, imagem, title, description) => {
  return `
    <div class="step__content flexCustom gap-4" id="blocoStep${id}">
      <img src="${imagem}" alt="" width="200">
      <h1 style="color: #FF800B">${title}</h1>
      <p class="poppins-regular" style="color: #595959">${description}</p>
    </div>`
}

const stepsBlock = document.getElementById("blocoSteps")

stepsBlock.innerHTML = steps.map((step) => {
  const { stepId, img, title, description } = step
  return templateSteps(stepId, img, title, description)
}).join('')