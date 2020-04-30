const returnNewFileContent = (fileContent, filename) => {
  const pluginPrefixMin = '/* eslint-disable */(function(win) {function CooshuScope() {window.cooshuHelper.cloneWindow(win, this);}CooshuScope.prototype.init = function() {var window = this;var module;';
  const pluginSuffix1Min = 'window.cooshuHelper.libraryRegisterFromJsFile(window.library, module';
  const pluginSuffix2Min = ');};new CooshuScope().init();})(window);';
  const configSuffixMin = '/* eslint-disable */(function(window) {var module;';
  const configPrefix1Min = 'window.cooshuHelper.libraryRegisterFromJsFile(window.config, module';
  const configPrefix2Min = ');})(window);';

  const pluginName = filename.split('/')[0];
  let formatFileContent = pluginPrefixMin + fileContent + pluginSuffix1Min + `,'${pluginName}','index'` + pluginSuffix2Min;
  if (/[C|c]onfig/.test(filename)) {
    formatFileContent = configSuffixMin + fileContent + configPrefix1Min + `,'${pluginName}','config'` + configPrefix2Min;
  }
  return formatFileContent;
};

class AddScopePlugin {
  apply(compiler) {
    compiler.plugin('emit', function (compilation, callback) {
      for (let filename in compilation.assets) {
        if (filename === 'appViewer.js') {
          callback();
        } else {
          const fileContent = compilation.assets[filename].source();
          const formatFileContent = returnNewFileContent(fileContent, filename);

          compilation.assets[filename] = {
            source() {
              return formatFileContent;
            },
            size() {
              return formatFileContent.length;
            }
          };
        }
      }
      callback();
    });
  }
}

module.exports = AddScopePlugin;
