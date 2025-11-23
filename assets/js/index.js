const app = {
  telas: ['start', 'step01'],
  hide(tela) {
    document.getElementById(tela).style.display = 'none'
  },
  show(tela, telaAnterior) {
    setTimeout(() => {
      document.getElementById(tela).style.display = 'block'
      document.getElementById(telaAnterior).style.display = 'none'
    }, 4000);
  }
}

app.hide('step01')
app.show('step01', 'start')