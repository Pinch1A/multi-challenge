import './style.css'

const root = document.getElementById('app')!
root.innerHTML = `
  <div class=" mx-auto from-gray-100 to-gray-200 p-4">
    <div class="flex rounded-xl flex-col bg-white shadow-xl max-w-md text-center px-8 py-10 border border-gray-300">
      <h1 class="text-3xl font-bold text-gray-800">Multi Framework Challenge</h1>
      <p class="text-gray-600">Choose your preferred UI to explore the project.</p>

      <div class="flex sm:flex-row justify-center gap-6 mt-4 ">
        <a href="http://localhost:5174" class="flex items-center justify-center gap-3 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:border-blue-700 transition text-lg font-medium shadow-sm">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" class="h-6 w-6" />
          React App
        </a>
        <a href="http://localhost:5175" class="flex items-center justify-center gap-3 px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:border-green-700 transition text-lg font-medium shadow-sm">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue" class="h-6 w-6" />
          Vue App
        </a>
      </div>
    </div>
  </div>
`
