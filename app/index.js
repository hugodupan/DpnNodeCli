var Generator = require('yeoman-generator');
var yosay = require('yosay');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
      // Calling the super constructor is important so our generator is correctly set up
      super(args, opts);
    }

    prompting() {
        this.log(yosay('Bem-vindo ao gerador de arquivos de BackEnd Node.js do dupan!'));
        //this.log(this.templatePath());
    }

    writing() {
        this.fs.copyTpl(
          this.templatePath(''),
          this.destinationPath('./')
        );
      }

  };