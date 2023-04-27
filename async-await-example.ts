// async-await-example.ts
/** @type {import("typescript/lib/lib.es2015.promise.d.ts")} */

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("data"), 2000)
  })
}

async function printData() {
  const data = await fetchData()
  console.log(data)
}

printData()

// run: tsc async-await-example.ts && node async-await-example.js
