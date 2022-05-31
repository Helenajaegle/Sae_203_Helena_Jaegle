module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "src/App.vue",
  ],


  theme: {
    extend: {
      "colors": {
        "orange": "#FF961B",
        "indigo": "#7879F1",
        "purple": "#BE9FFE",
      },

      "fontFamily": {
        "aclonica": ["'Aclonica'", "sansserif"],
        "raleway": ["'Raleway', sans-serif;"],
        "mulish": ["'Mulish', sans-serif;"]
      },
    },
    plugins: [],
  }
}