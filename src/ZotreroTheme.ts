import AddonEvents from "./events";
import AddonViews from "./views";
import AddonPrefs from "./prefs";
import AddonConfig from "./config";

class ZoteroTheme {
  public events: AddonEvents;
  public views: AddonViews;
  public prefs: AddonPrefs;
  public config: AddonConfig;

  constructor() {
    this.events = new AddonEvents(this);
    this.views = new AddonViews(this);
    this.prefs = new AddonPrefs(this);
    this.config = new AddonConfig(this);
  }
}

export default ZoteroTheme;
