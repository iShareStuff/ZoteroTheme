/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: ShareStuff
 * @Date: 2022-04-26 11:31:41
 * @LastEditors: isharestuff
 * @LastEditTime: 2022-06-05 19:04:57
 */
import { AddonBase } from "./base";

class AddonEvents extends AddonBase {
  constructor(parent: ZoteroTheme) {
    super(parent);
  }

  public async onInit() {
    Zotero.debug("ZoteroTheme: init called");
    this.resetState();
  }

  private resetState(force: boolean = false): void {
    // Reset preferrence state.
    let currentTheme = Zotero.Prefs.get("ZoteroTheme.currentTheme");
    if (typeof currentTheme === "undefined" || force) {
      currentTheme = this._ZoteroTheme.config.defaultThemes[0].name;
      Zotero.Prefs.set("ZoteroTheme.currentTheme", currentTheme);
    }

    let themes = Zotero.Prefs.get("ZoteroTheme.themes");
    if (typeof themes === "undefined" || force) {
      themes = {};
      Zotero.Prefs.set("ZoteroTheme.themes", JSON.stringify(themes));
      for (let theme of this._ZoteroTheme.config.defaultThemes) {
        theme.save();
      }
    }
  }
}

export default AddonEvents;
