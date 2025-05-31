import './style.css'

const root = document.getElementById('app')!
root.innerHTML = `
  <div class="text-center space-y-6">
    <h1 class="text-3xl font-bold">Scegli la versione dell'app</h1>
    <div class="space-x-4">
      <a href="http://localhost:5174" class="text-blue-500 underline text-xl">Versione React</a>
      <a href="http://localhost:5175" class="text-green-500 underline text-xl">Versione Vue</a>
    </div>
  </div>
`
