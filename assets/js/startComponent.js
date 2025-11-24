const component = `
  <div id="telaInicial" class="tela__inicial flexCustom">
    <div class="tela__inicial__conteudo">
      <img src="./assets/images/logo.svg" alt="">
      <h1 class="poppins-semibold">aliments</h1>
      <h4 class="poppins-regular">Food Delivery Services</h4>
    </div>
  </div>
  <div class="logoempresa animate__infinite animate__animated animate__fadeIn">
    <img src="./assets/images/infinite-logo.svg" alt="">
    <span class="poppins-bold" style="color: #fff;">LOOPR</span>
  </div>
`

const start = document.getElementById('start')
start.innerHTML = component