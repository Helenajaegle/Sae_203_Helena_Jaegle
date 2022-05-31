module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "src/App.vue",
  ],


  theme: {
    extend: {

      "fontFamily": {
        "aclonica": ["'Aclonica'", "sansserif"],
        "raleway": ["'Raleway', sans-serif;"],
        "mulish": ["'Mulish', sans-serif;"]
      },
    },
    plugins: [],
  }
}