module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    copy: {
      main: {
        files: [{ expand: true, flatten: true, src: ["src/*"], dest: "dist/" }],
      },
    },
    watch: {
      scripts: {
        files: ["src/*"],
        tasks: ["copy"],

        // https://www.npmjs.com/package/grunt-contrib-watch#optionsspawn
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default task(s).
  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["copy"]);
};
