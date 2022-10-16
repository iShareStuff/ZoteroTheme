import { AddonBase, Theme } from "./base";
import { remove } from "../../../mathjax-src/ts/util/Entities";

class AddonPrefs extends AddonBase {
  private _window: Window;
  constructor(parent: ZoteroTheme) {
    super(parent);
  }

  initPreferences(_window: Window) {
    this._window = _window;
    Zotero.debug("ZoteroTheme: Initialize preferences.");
    this.buildThemesMenulist();
    this.updateThemeEditor();
  }

  createTheme() {
    let name = prompt("Enter new theme name", "");
    this._window.focus();
    let currentNames = this._ZoteroTheme.config.getThemeNames();
    if (!name || name in currentNames) {
      return;
    }
    let theme: Theme = this._ZoteroTheme.config.defaultThemes[0].copy(name);
    theme.save();
    Zotero.Prefs.set("ZoteroTheme.currentTheme", name);
    this.buildThemesMenulist();
    this.updateThemeEditor();
  }

  deleteTheme() {
    if (!confirm("Will delete this theme. Confirm?")) {
      return;
    }
    let currentThemeName: string = Zotero.Prefs.get("ZoteroTheme.currentTheme");
    this._ZoteroTheme.config.deleteTheme(currentThemeName);
    let currentNames = this._ZoteroTheme.config.getThemeNames();
    Zotero.Prefs.set("ZoteroTheme.currentTheme", currentNames[0]);
    this.buildThemesMenulist();
    this.updateThemeEditor();
  }

  resetTheme() {
    if (!confirm("Will reset this theme. Confirm?")) {
      return;
    }
    let currentTheme = this._ZoteroTheme.config.getCurrentTheme();

    for (let _theme of this._ZoteroTheme.config.defaultThemes) {
      if (_theme.name == currentTheme.name) {
        _theme.save();
        return;
      }
    }
    currentTheme.settings = JSON.parse(
      JSON.stringify(this._ZoteroTheme.config.defaultThemes[0].settings)
    );
    currentTheme.save();
    this.updateThemeEditor();
  }

  applyTheme() {
    if (!confirm("Will apply this theme. Confirm?")) {
      return;
    }
    let currentTheme = this._ZoteroTheme.config.getCurrentTheme();
    currentTheme.compile();
    //reset
    /*let currentThemeName: string = Zotero.Prefs.get("ZoteroTheme.currentTheme");
    if (currentThemeName == "default") {
      var profile = Zotero.Profile.dir;
      var chromePath = OS.Path.join(profile, "chrome");
      var csspath = chromePath + "/userChrome.css";
      var data_css = "";
      await Zotero.File.putContentsAsync(csspath, data_css);
    }*/
    let currentThemeName: string = Zotero.Prefs.get("ZoteroTheme.currentTheme");
    if (currentThemeName == "default") {
      var profile = Zotero.Profile.dir;
      var chromePath = OS.Path.join(profile, "chrome");
      OS.File.removeDir(chromePath);
    }
  }

  private buildThemesMenulist() {
    let currentThemeName: string = Zotero.Prefs.get("ZoteroTheme.currentTheme");
    let themeNames: string[] = this._ZoteroTheme.config.getThemeNames();

    let menulist: XUL.Menulist = this._window.document.getElementById(
      "zotero-prefpane-ZoteroTheme-themeeditor-themesmenulist"
    );
    menulist.innerHTML = "";
    let menupopup = this._window.document.createElement("menupopup");
    let selectedIndex = 0;

    let i = 0;
    for (let name of themeNames) {
      let menuitem = this._window.document.createElement("menuitem");
      menuitem.setAttribute("label", name);
      menuitem.setAttribute("value", name);
      menuitem.addEventListener("command", (e: XULEvent) => {
        let newThemeName = e.target.value;
        Zotero.Prefs.set("ZoteroTheme.currentTheme", newThemeName);
        this.updateThemeEditor();
      });
      if (name == currentThemeName) {
        selectedIndex = i;
      }
      menupopup.appendChild(menuitem);
      i += 1;
    }
    menulist.appendChild(menupopup);
    menulist.selectedIndex = selectedIndex;
  }

  private updateThemeEditor() {
    let currentTheme: Theme = this._ZoteroTheme.config.getCurrentTheme();
    let rows = this._window.document.getElementById(
      "zotero-prefpane-ZoteroTheme-themeeditor-rows"
    );
    if (!rows) {
      return;
    }
    // Clean rows
    rows.innerHTML = "";
    for (let settingName in currentTheme.settings) {
      let isColor = this._ZoteroTheme.config.isColor(
        currentTheme.get(settingName)
      );
      let row = this._window.document.createElement("row");
      let settingElement = this._window.document.createElement("textbox");
      settingElement.setAttribute(
        "id",
        `zotero-prefpane-ZoteroTheme-themeeditor-${settingName}`
      );
      settingElement.setAttribute("value", currentTheme.get(settingName));
      settingElement.addEventListener("input", (e: XULEvent) => {
        // Keep in sync
        e.target.setAttribute("value", e.target.value);
        currentTheme.set(settingName, e.target.value);
        currentTheme.save();
      });
      if (isColor) {
        settingElement.addEventListener("click", (inputEvent: XULEvent) => {
          let colorpicker: XUL.Element = this._window.document.getElementById(
            "zotero-prefpane-ZoteroTheme-themeeditor-colorpicker"
          );
          colorpicker.value = inputEvent.target.value;
          colorpicker.oninput = (colorEvent: XULEvent) => {
            inputEvent.target.setAttribute("value", colorEvent.target.value);
            currentTheme.set(settingName, colorEvent.target.value);
            currentTheme.save();
          };
          colorpicker.click();
        });
      }

      let label = this._window.document.createElement("label");
      label.setAttribute(
        "value",
        this._ZoteroTheme.config.getThemeSettingLocale(settingName)
      );
      row.append(settingElement, label);
      rows.append(row);
    }
  }
}

export default AddonPrefs;
