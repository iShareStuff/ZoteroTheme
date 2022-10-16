class AddonBase {
  protected _ZoteroTheme: ZoteroTheme;
  constructor(parent: ZoteroTheme) {
    this._ZoteroTheme = parent;
  }
}

class Theme {
  name: string;
  settings: object;
  // Construct a theme from template
  template: string;

  constructor(name: string, settings: object, template: string) {
    this.name = name;
    // Deep copy object
    this.settings = JSON.parse(JSON.stringify(settings));
    this.template = template;
  }

  /*
  Get Template setting
    ----
  Example:
  let temp = Template.load("myName");
  temp.get("bgBorder");
  > "#FFFFFF"
  */
  get(settingKey: string): string {
    if (settingKey in this.settings) {
      return this.settings[settingKey];
    }
    return "";
  }

  set(settingKey: string, settingValue: string): void {
    this.settings[settingKey] = settingValue;
  }

  copy(newName: string) {
    return new Theme(newName, this.settings, this.template);
  }

  async compile() {
    var profile = Zotero.Profile.dir;
    var chromePath = OS.Path.join(profile, "chrome");
    async function make_dir(path) {
      if (!(await OS.File.exists(path))) {
        OS.File.makeDir(path, {
          ignoreExisting: true,
          // @ts-ignore
          unixMode: 0o755,
        });
      }
    }
    await make_dir(chromePath);
    var csspath = chromePath + "/userChrome.css";
    var data_css = "";
    if (Zotero.isWin) {
      var data_css = Zotero.ZoteroTheme.config.templates["win"];
    } else if (Zotero.isMac) {
      var data_css = Zotero.ZoteroTheme.config.templates["mac"];
    }
    let currentTheme = Zotero.ZoteroTheme.config.getCurrentTheme();
    var numDefault = 0;
    var numLength = Object.keys(currentTheme.settings).length;
    for (let settingName in currentTheme.settings) {
      var data_css = data_css
        .split(settingName)
        .join(currentTheme.settings[settingName]);
      if (currentTheme.settings[settingName] == "") {
        numDefault = numDefault + 1;
      }
    }
    if (numDefault == numLength) {
      var data_css = "";
    }
    await Zotero.File.putContentsAsync(csspath, data_css);
    //pdf
    let currentThemeName: string = Zotero.Prefs.get("ZoteroTheme.currentTheme");
    if (currentThemeName == "default") {
      OS.File.removeDir(chromePath);
    }
    //pdf
    let doRestart = confirm("Restart Zotero to apply. Restart now?");
    if (doRestart) {
      Zotero.Utilities.Internal.quitZotero(true);
    }
  }

  /*
  Load Template from prefs
    ----
  Example:
  let temp = Template.load("myName");

  Example of reusing themes:
  let themes = JSON.parse(Zotero.Prefs.get("ZoteroTheme.themes"));
  let temp1 = Template.load("myName1", themes);
  let temp2 = Template.load("myName2", themes);
  */
  static load(
    name: string,
    themes: object = undefined,
    prefKey: string = "ZoteroTheme.themes"
  ): Theme {
    if (typeof themes === "undefined") {
      themes = JSON.parse(Zotero.Prefs.get(prefKey));
    }

    if (!(name in themes)) {
      return new Theme(name, {}, "");
    }
    return new Theme(name, themes[name], "");
  }

  /*
  Save Template to prefs
  ----
  Example:
  let temp = new Template("myName", {}, "");
  temp.save();
  */
  save(prefKey: string = "ZoteroTheme.themes"): void {
    let themes = JSON.parse(Zotero.Prefs.get(prefKey));
    themes[this.name] = this.settings;
    Zotero.Prefs.set(prefKey, JSON.stringify(themes));
  }
}

export { AddonBase, Theme };
