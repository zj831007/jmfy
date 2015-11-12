function openInstallURL() {
  var url = 'itms-services://?action=download-manifest&url=https://zj831007.github.io/jmfy/res/install.plist';
// var url = 'itms-services://?action=download-manifest&url=https://qzs21.github.io/iComic/res/install.plist';

  window.self.location = url;
}