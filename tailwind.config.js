module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "src/App.vue",
  ],


  theme: {
    extend: {
      backgroundImage: {
        'imb': "url('/Medias/Fond_montagne.png')",
      },
      "fontFamily": {
        "aclonica": ["'Aclonica'", "sansserif"],
        "raleway": ["Raleway", "sansserif"],
        "mulish": ["Mulish", "sansserif"]
      },
    },
    plugins: [],
  }
}