const app = {
  telas: ['start', 'step01', 'desc01', 'desc02', 'desc03'],

  hide(tela) {
    document.getElementById(tela).style.display = 'none'
  },

  show(tela, telaAnterior) {
    setTimeout(() => {
      document.getElementById(tela).style.display = 'block'
      document.getElementById(telaAnterior).style.display = 'none'
    }, 3000);
  },

  hideItens(item, idDot) {
    document.querySelectorAll('.step01__content').forEach(element => {
      element.style.display = 'none'
    });

    document.querySelectorAll('.dot').forEach((element) => {
      element.classList.remove('active')
    });
    document.getElementById(idDot).classList.add('active')
    document.getElementById(item).style.display = 'block'
  },
}

app.hide('step01')
app.hide('desc03')
app.hide('desc02')
app.show('step01', 'start')