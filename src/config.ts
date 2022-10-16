import { AddonBase, Theme } from "./base";

class AddonConfig extends AddonBase {
  defaultThemes: Theme[];
  templates: object;
  themeLocale: object;
  constructor(parent: ZoteroTheme) {
    super(parent);
    this.templates = {
      win: '/*背景为工具栏背景色，颜色为文件菜单的字体颜色*/\
        #zotero-tb, #zotero-toolbar, #navigator-toolbox { background: bgBlank !important;\
        color: bgContainer !important; }/*文件菜单颜色（一级菜单）*/\
        /*为工具栏和下方栏的边界色*/\
        #zotero-toolbar {border-bottom: 1px solid bgBorder !important;}\
        /*工具栏除文件菜单以为的颜色（一级菜单）*/\
        #navigator-toolbox menu { color: bgContainer !important }\
        /*自带的多级菜单字体颜色*/\
        #manage-attachments-menu label, #developer-menu label, #layout-menu label, #note-font-size-menu label, #font-size-menu label, #debug-output-menu label, #new-item label \
        { color: bgContainer !important; }\
        /*修复第一个文件的bug,即文件菜单颜色*/\
        #navigator-toolbox menu:first-child { color: unset !important; }\
        /*下方搜索标签颜色*/\
        #zotero-tag-selector-container input { -moz-appearance: none !important;\
          background: bgItemDefault !important;\
          border: 1px solid bgBorder !important;\
          color: bgContainer !important; }\
        /*标签栏背景颜色及无标签时的颜色*/\
        .tag-selector-list-container {-moz-appearance: none !important;\
          background: bgItemDefault !important;\
          color: bgContainer !important; }\
        /*鼠标放在标签上时高亮的颜色和背景*/\
        .tag-selector-item:hover { background: bgItemHover !important;\
            color: bgContainer !important; }\
        /*标签默认的颜色和背景*/\
        .tag-selector-item {\
          background: bgItemDefault !important;\
        color: bgContainer ; }\
        /*标签选择的颜色和背景*/\
        .tag-selector-item.selected{ background: bgItemSelected !important;            color: bgContainer !important; } \
        /*搜索框的背景和字体颜色以及边界颜色*/\
        #zotero-tb-search { -moz-appearance: none !important;\
          background-color: bgItemDefault !important;\
          color: bgContainer !important;\
          border: 1px solid bgBorder !important; }\
        /*标签搜索字体颜色和外框颜色*/\
        #zotero-pane { background: bgItemDefault !important;\
        color: bgContainer  !important; }\
        /*change background and color of collections and items panes*/\
        treechildren { background: bgItemDefault !important;\
        color: bgContainer !important; }\
        /*目录树和条目的背景色*/\
        .virtualized-table .row{background: bgItemDefault !important; color: bgContainer !important;}\
        /*选中目录树和条目的背景色，和移动其他条目背景*/\
        .virtualized-table .row.selected {background: bgItemSelected !important; border: 0 !important;/*选择*/\
        border-bottom: 1px solid bgBorder !important;}\
        .virtualized-table:not(:focus) .row.selected {background: bgItemSelected !important; border: 0 !important;/*选择条目，分类显示颜色*/\
        border-bottom: 1px solid bgBorder !important;}\
        .row:hover { background: bgItemHover !important;\
        color: bgContainer !important; border: 0 !important; }/*移动*/\
        }\
        #zotero-item-pane-content {background: bgItemDefault !important; color: bgContainer !important;}\
        /*条目和阅读器选择时的背景色和字体颜色以及悬停的颜色*/\
        .tabs {-moz-appearance: none !important;\
        background: bgBlank !important;\
        color: bgContainer !important;\
        border: 0px solid bgBorder !important;}\
        .tab:hover { background: bgItemHover !important;\
        color: bgContainer !important; border: 0 !important; }\
        }\
        /*边界颜色*/\
        .tab:not(:focus){ -moz-appearance: none !important;\
        color: bgContainer !important;\
        background: bgItemDefault !important;\
        border-top: 0px solid bgBorder !important;\
        border-left: 0px solid bgBorder !important;\
        border-right: 1px solid bgBorder !important;\
        border-radius: 0px !important;\
        border-bottom-left-radius: 0px !important;\
        border-bottom-right-radius: 0px !important; }\
        /*选中后颜色*/\
        .tab.selected:not(.highlighted){ color: bgContainer !important;\
        background: bgItemSelected !important;\
        border-top: 3px solid bgBorder !important;\
        border-left: 0px solid bgBorder !important;\
        border-right: 1px solid bgBorder !important;\
        border-radius: 0px !important;\
        border-bottom-left-radius: 0px !important;\
        border-bottom-right-radius: 0px !important; }\
        /*目录树背景色*/\
        #zotero-collections-tree { color: bgContainer ; background: bgItemDefault !important; }\
        /*悬停时条目的颜色*/\
        #zotero-collections-tree treechildren::-moz-tree-row(hover) { background: bgItemHover !important;\
        color: bgContainer !important; border: 0 !important; }\
        /*条目的背景颜色*/\
        #zotero-items-tree { border-right: 1px solid bgBorder !important;\
        border-bottom: 1px solid bgBorder !important; \
        color: bgContainer ; background: bgItemDefault !important; }\
        /*change background and color of items when hovering*/\
        #zotero-items-tree treechildren::-moz-tree-row(hover) { background: bgItemHover !important;\
        color: bgContainer !important; border: 0 !important; }\
        /*change background and color of items when selecting*/\
        #zotero-items-tree treechildren::-moz-tree-row(selected) { background: bgItemSelected !important;\
        color: bgContainer !important; border: 0 !important;\
        border-bottom: 1px solid bgBorder !important; }\
        #zotero-items-tree treechildren::-moz-tree-cell-text(selected) { color: bgContainer !important; border: 0 !important; }\
        /*文献信息悬停的颜色*/\
        #zotero-item-pane-content .zotero-clicky:hover\
        {	color: bgItemHover  !important;\
          border-radius: 0px !important; }\
        /*显示条目信息的颜色*/\
        #zotero-item-pane-content .zotero-clicky-minus:hover { color: bgItemHover !important;}\
        #zotero-item-pane-content .zotero-clicky-plus:hover { color:  bgItemHover !important;}\
        /*首选项中背景和字体颜色*/\
        tabpanel { color: bgContainer  !important;\
        background: bgItemDefault !important; }\
        /*首选项中所选择工具下的背景和字体颜色*/\
        tab[selected="true"]{ color: bgContainer  !important;\
        background: bgItemSelected !important; }\
        /*首选项中未选择工具下的背景和字体颜色*/\
        tab{ -moz-appearance: none !important;\
        color: bgContainer !important;\
        background: bgItemDefault !important;\
        border-top: 0px solid bgBorder !important;\
        border-left: 0px solid bgBorder !important;\
        border-right: 1px solid bgBorder !important;\
        border-radius: 0px !important;\
        border-bottom-left-radius: 0px !important;\
        border-bottom-right-radius: 0px !important; }\
        /*首选项中悬停至未选择工具下的背景和字体颜色*/\
        tab:hover{ color: bgContainer !important;\
        background: bgItemHover !important;\
        box-shadow: inset 0px 0px 0px !important;\
        border-radius: 0px 0px 0 0 !important; }\
        /*change items in item pane besides tabs*/\
        #zotero-duplicates-merge-pane > groupbox > .groupbox-body { background: bgItemDefault !important;\
          color: bgContainer !important;\
          border: 0 !important; }\
        #zotero-item-pane-content > groupbox { border: 0 !important; background: bgItemDefault !important;\
        color: bgContainer !important; }\
        /*选择条目信息栏背景色*/\
        #zotero-item-pane-content > groupbox > .groupbox-body { border: 0 !important; background: bgItemSelected !important;\
        color: bgContainer !important; }\
        /*change color of retraction details background*/\
        #retraction-details { background: bgItemDefault  !important; }\
        /*信息栏菜单背景色*/\
        #zotero-item-pane-content { background: bgItemDefault !important; }\
        /*信息栏期刊等信息背景色*/\
        #zotero-item-pane-content tabpanel { background: bgItemDefault !important;\
          color: bgContainer !important; }\
        /*右侧信息栏选中标签的背景和颜色*/\
        #tags-box-container ul li ul { background: bgItemSelected !important; color: bgContainer !important; }\
        /*右侧信息栏添加标签的背景和颜色*/\
        #tags-box-container input { -moz-appearance: none !important;\
          background-color: bgItemSelected !important;\
          color: bgContainer !important;\
          border: 1px solid bgBorder !important;}\
        /*信息栏菜单选中背景色*/\
        #zotero-item-pane-content tab[selected="true"]{ background: bgItemSelected  !important;\
        border-top: 3px solid bgBorder !important;}\
        /*信息栏菜单背景色*/\
        #zotero-item-pane-content tab { -moz-appearance: none !important;\
        color: bgContainer !important;\
        background: bgItemDefault !important;\
        border-top: 0px solid bgBorder !important;\
        border-left: 0px solid bgBorder !important;\
        border-right: 1px solid bgBorder !important;\
        border-radius: 0px !important;\
        border-bottom-left-radius: 0px !important;\
        border-bottom-right-radius: 0px !important; }\
        /*信息栏菜单悬停背景色*/\
        #zotero-item-pane-content tab:hover{ color: bgContainer !important;\
        background: bgItemHover !important;\
        box-shadow: inset 0px 0px 0px !important;\
        border-radius: 0px 0px 0 0 !important; }\
        /*条目类型的颜色*/\
        #item-type-menu\
        {\
          -moz-appearance: none;\
          color: bgItemSelected !important;\
          height: 1.5em !important;\
          min-height: 1.5em !important;\
          padding: 0 0 0 2px !important;\
          margin: 1px 5px 0 1px !important;\
          max-height: 1.5em !important;\
          border: 1px solid transparent;\
          background-color: transparent;\
        }\
        /*条目日期颜色*/\
        #zotero-date-field-status\
        {\
          color: bgItemSelected !important;\
          padding: 0 10px 0 1px !important;\
        }\
        /*首选项背景色和字体色*/\
        #zotero-prefpane-general, #zotero-prefpane-sync, #zotero-prefpane-export, #zotero-prefpane-advanced-keys-tab, #wordProcessors, #zotero-quickCopy-format, #sync-reset-form \
        { color: bgContainer !important;\
        background: bgBlank !important; }\
        #zotero-prefpane-general title { background: bgItemDefault !important;\
        color: bgContainer !important; }\
        /*首选项下面窗口背景色和字体色*/\
        prefwindow { color: bgContainer !important;\
        background: bgItemDefault !important; }\
        /*插件工具栏背景和字体颜色*/\
        prefwindow .chromeclass-toolbar { color: bgContainer !important;\
        background: bgBlank  !important; }\
        /*关于对话框的背景和字体颜色*/\
        #aboutcontent\
        {	background: bgItemDefault !important;\
          color: bgContainer !important;\
          padding: 10px; }\
        #version\
        {	color: bgContainer !important; }\
        /*高级工具*/\
        #zotero-advanced-search-dialog #zotero-search-box-controls {	color: bgContainer !important;\
        background: bgItemDefault !important; }\
        /*笔记下方背景和颜色*/\
        #zotero-note-editor linksbox {\
        background-color: bgItemDefault !important;\
        color: bgContainer !important; }\
        #zotero-note-window h1 {\
        color: bgContainer ;\
        font-size: 1.6em;\
        padding-bottom: none;\
        }\
        #zotero-note-window h2 {\
        color: bgContainer ;\
        font-size: 1.4em;\
        font-weight: bold;\
        padding-bottom: none;\
        border-bottom: none;\
        }\
        #zotero-note-window h3 {\
        color: bgContainer ;\
        font-size: 1.2em;\
        }\
        #zotero-note-window p {\
        text-indent: 1.75em;\
        }\
        #zotero-note-window ul,\
        ol {\
        padding-left: 1.75em;\
        }\
        #zotero-note-window blockquote {\
        margin-top: 0;\
        margin-bottom: 0;\
        margin-left: 0;\
        padding-left: 1.55em;\
        border-left: 3px solid bgBorder;\
        color: bgContainer ;\
        }\
        #zotero-note-window blockquote p {\
        text-indent: 0;\
        }',
      mac: '* {border: 0 !important; }\
      /*change background color and text color of zotero toolbar and menubar*/\
      #zotero-tb, #zotero-toolbar, #navigator-toolbox { background: bgBlank !important;\
      color: bgContainer !important; }\
      /* ----- Zotero 6 Patch-------- */\
      /*for Zotero 6*/\
      .virtualized-table {background: bgItemDefault !important; color: bgContainer !important;}\
      .virtualized-table .row{background: bgItemSelected !important; color: bgContainer !important;}\
      .virtualized-table-header { -moz-appearance: none !important;\
        background: bgItemDefault !important;\
      color: bgContainer !important;\
      border-bottom: 1px solid bgBorder !important;\
      border-right: 1px solid bgBorder !important; }\
      .virtualized-table-header .cell:hover { background: bgItemHover !important;\
      color: bgContainer !important;}\
      .virtualized-table .row.selected {background: bgItemSelected !important; border: 0 !important;\
      border-bottom: 1px solid bgBorder  !important;}\
      .virtualized-table:not(:focus) .row.selected {background: bgItemSelected  !important; border: 0 !important;\
      border-bottom: 1px solid bgBorder !important;}\
      .row:hover { background: bgItemHover !important;\
      color: bgContainer !important; border: 0 !important; }\
      }\
      /*for Zotero 6 items tree*/\
      #zotero-items-tree .virtualized-table  { background: bgItemHover !important;\
      color: bgContainer !important; border: 0 !important; }\
      #zotero-items-tree .virtualized-table .row  { background: bgItemHover !important;\
      color: bgContainer !important; border: 0 !important; }\
      #zotero-items-tree .virtualized-table .row.selected  { background: bgItemSelected !important;\
      color: bgContainer !important; border: 0 !important; }\
      #zotero-items-tree .virtualized-table .row:hover  { background: bgItemHover !important;\
      color: bgContainer !important; border: 0 !important; }\
      /* for Zotero 6*/\
      .tag-selector-item:hover { background: bgItemHover !important;\
          color:  bgContainer !important; }\
      .tag-selector-item {\
        background: bgItemDefault !important;\
      color: bgContainer ; }\
      /*标签选择的颜色和背景*/\
      .tag-selector-item.selected{ background: bgItemSelected !important;            color: bgContainer !important; } \
      /*fix columns field selector for Zotero 6*/\
      #zotero-items-tree .virtualized-table-header { -moz-appearance: none !important;\
        background: bgItemDefault !important;\
      color: bgContainer !important;\
      border-bottom: 1px solid bgBorder !important;\
      border-right: 1px solid bgBorder !important; }\
      #zotero-items-tree .virtualized-table-header .cell:hover { background: bgItemHover !important;\
      color: bgContainer !important;}\
      .treecol-image { -moz-appearance: none !important;\
        background: bgItemDefault !important;\
      color:  bgContainer !important;\
      border-bottom: 1px solid bgBorder !important; }\
      /*background of item-pane-content (Zotero 6)*/\
      #zotero-item-pane-content { background: bgItemDefault !important; }\
      .tabs {-moz-appearance: none !important;\
        background: bgBlank !important;\
        color: bgContainer !important;\
      border: 0px solid bgBorder !important;}\
      .tab {-moz-appearance: none !important;\
      color: bgContainer !important;\
      background: bgBlank  !important;\
      }\
      .tab:hover { background: bgItemHover !important;\
      color: bgContainer !important; border: 0 !important; }\
      }\
      .tab:not(:focus){ -moz-appearance: none !important;\
      color: bgContainer !important;\
      background: bgItemDefault !important;\
      border-top: 0px solid bgBorder !important;\
      border-left: 0px solid bgBorder !important;\
      border-right: 1px solid bgBorder !important;\
      border-radius: 0px !important;\
      border-bottom-left-radius: 0px !important;\
      border-bottom-right-radius: 0px !important; }\
      .tab.selected:not(.highlighted){ color: bgContainer !important;\
        background: bgItemSelected !important;\
        border-top: 3px solid bgBorder !important;\
        border-left: 0px solid bgBorder !important;\
        border-right: 1px solid bgBorder !important;\
        border-radius: 0px !important;\
        border-bottom-left-radius: 0px !important;\
        border-bottom-right-radius: 0px !important;  }\
      /* ------start of mac additions------ */\
      /*mac additions, top toolbar*/\
      #zotero-items-toolbar, #zotero-collections-toolbar, #zotero-item-toolbar { background: bgItemDefault !important;\
      color: bgContainer !important; }\
      /*mac additions, duplicate items pane*/\
      #zotero-duplicates-merge-pane, #zotero-duplicates-merge-item-box { background: bgItemDefault !important;\
      color: bgContainer !important; }\
      /*mac additions, view pane tabs bar*/\
      #zotero-view-tabbox > tabs * { background: bgItemDefault !important;\
      color: bgContainer !important; }\
      #zotero-view-tabbox > tabs { background: bgItemDefault !important;\
      color: bgContainer !important; }\
      /*mac additions, fix white spaces in top toolbar by shifting elements*/\
      #zotero-items-toolbar {\
        margin-left: -10px;\
      }\
      #zotero-item-toolbar {\
        margin-left: -10px;\
        padding-left: 10px;\
      }\
      /*mac additions, view pane tabs bar*/\
      #zotero-tag-selector { background: bgItemDefault !important; }\
      #zotero-tags-splitter { background: bgItemDefault !important; }\
      #zotero-items-splitter { background: bgItemDefault ; }\
      #zotero-collections-splitter { background: bgItemDefault ; }\
      /*mac additions, textbox darken*/\
      textarea, textbox, input, select { \
      background-color: bgItemDefault !important;\
      color: bgContainer !important;\
         /* -moz-appearance: none !important; */\
      } \
      /*mac additions, turn rightclick/expand menus dark*/\
      menuitem, menu { \
         /* background-color: bgBlank !important; */\
      color: bgContainer !important;\
      -moz-appearance: none !important;\
      } \
      menupopup {\
      background-color: bgBlank !important;\
      border-radius: 4px !important;\
      -moz-appearance: none !important;\
      }\
      /*mac additions, preferences lists*/\
      treechildren::-moz-tree-row {\
      background-color: bgBlank !important;\
      } \
      treechildren::-moz-tree-row(selected) {\
      background-color: bgItemSelected !important;\
      } \
      treecol {\
      background-color: bgItemDefault !important;\
      -moz-appearance: none !important;\
      } \
      /*mac additions, item pane tag text input, sacrifice styling of tag search box*/\
      input { \
      background-color: bgItemDefault !important;\
      -moz-appearance: none !important;\
      } \
      #tags-box-container ul li ul { background: bgItemDefault !important; color: bgContainer !important; }\
      /*mac additions, list selections eg. merge and export bib*/\
      listbox {\
      background-color: bgItemDefault !important;\
      color: bgContainer !important;\
      -moz-appearance: none !important;\
      } \
      /*those drop down dialogs and notifications on the bottom right*/\
      dialog, window {\
      background-color: bgItemDefault !important;\
      -moz-appearance: none !important;\
      }\
      /*mac additions, haven\'t figured out global tooltips*/\
      #zotero-tb-sync-tooltip { \
      background: bgItemDefault !important;\
      color: bgContainer !important; \
      -moz-appearance: none !important;\
      }\
      /* ------end of mac additions------ */\
      #zotero-toolbar {border-bottom: 1px solid bgBorder !important;}\
      /*change color of menu items to white*/\
      #navigator-toolbox menu { color: bgContainer !important }\
      /*change color of menu items in drop down menus back to black*/\
      #manage-attachments-menu label, #developer-menu label, #layout-menu label, #note-font-size-menu label, #font-size-menu label, #debug-output-menu label, #new-item label \
      { color: bgContainer !important; }\
        /* #zotero-pane toolbarseparator { background: bgItemDefault !important; */\
      /* color: bgContainer !important; } */\
      #zotero-splitter{ background: bgItemDefault !important; }\
      #zotero-pane{ background: bgItemDefault !important;\
      color: bgContainer !important; }\
      grippy{ opacity: .5 !important; }\
      #heading_wrapper {\
        color: bgContainer ;\
        background-color: bgItemDefault !important;\
      }\
      /*change background and color of collections and items panes*/\
      treechildren{ background: bgItemDefault !important;\
      color: bgContainer !important; }\
      /*increase spacing between rows in collections and items and add a border to separate panes*/\
      /*#zotero-collections-tree { border-right: 1px solid bgBorder !important; } */\
      #zotero-collections-tree treechildren::-moz-tree-row { height: 20px !important; }\
      /*change background and color of collections when hovering*/\
      #zotero-collections-tree treechildren::-moz-tree-row(hover) { background: bgItemHover !important;\
      color: bgContainer !important; border: 0 !important; }\
      /*change color of selected item in Collections pane (My library or folders) */\
      #zotero-collections-tree treechildren::-moz-tree-cell(selected) { background: bgItemSelected !important; border: 0 !important;\
      border-bottom: 1px solid bgBorder !important; }\
      #zotero-collections-tree treechildren::-moz-tree-cell-text(selected) { color: bgContainer !important; }\
      /*increase spacing between rows in collections and items*/\
      #zotero-items-tree treechildren::-moz-tree-row { height: 20px !important; }\
      /*#zotero-items-tree { background-color: bgItemDefault !important; border-right: 0px solid bgBorder !important; }*/\
      /*change background colour of odd rows*/\
      #zotero-items-tree treechildren::-moz-tree-row(odd) { background: bgItemDefault !important;\
      color: bgContainer !important; border: 0 !important; }\
      /*change background colour of even rows*/\
      #zotero-items-tree treechildren::-moz-tree-row(even) { background: bgItemDefault !important;\
      color: bgContainer !important; border: 0 !important; }\
      /*change background and color of items when hovering*/\
      #zotero-items-tree treechildren::-moz-tree-row(hover) { background: bgItemHover !important;\
      color: bgContainer !important; border: 0 !important; }\
      /*change background and color of items when selecting*/\
      #zotero-items-tree treechildren::-moz-tree-row(selected) { background: bgItemSelected !important;\
      color: bgContainer !important; border: 0 !important;\
      border-bottom: 0px solid bgBorder !important; }\
      #zotero-items-tree treechildren::-moz-tree-cell-text(selected) { color: bgContainer !important; border: 0 !important; }\
      /*change background and color of columns field selector*/\
      #zotero-items-tree treecol { -moz-appearance: none !important;\
        background: bgItemDefault !important;\
      color: bgContainer !important;\
      border-bottom: 1px solid bgBorder !important;\
      border-right: 1px solid bgBorder !important; }\
      .treecol-image { -moz-appearance: none !important;\
        background: bgItemDefault !important;\
      color: bgContainer !important;\
      border-bottom: 1px solid bgBorder !important; }\
      /*tabs in Preferences dialog - well more like all the tabs except the ones I\'ll specify later*/\
      tabpanel { color: bgContainer !important;\
      background: bgItemDefault !important; }\
      tab[selected="true"]{ color: bgContainer !important;\
      background: bgItemSelected !important; }\
      tab{ -moz-appearance: none !important;\
      color: bgContainer !important;\
      background: bgItemDefault !important;\
      border-top: 0px solid bgBorder !important;\
      border-left: 0px solid bgBorder !important;\
      border-right: 1px solid bgBorder !important;\
      border-radius: 0px !important;\
      border-bottom-left-radius: 0px !important;\
      border-bottom-right-radius: 0px !important; }\
      tab:hover{ color: bgContainer !important;\
      background: bgItemHover !important;\
      box-shadow: inset 0px 0px 0px !important;\
      border-radius: 0px 0px 0 0 !important; }\
      /*change items in item pane besides tabs*/\
      #zotero-duplicates-merge-pane > groupbox > .groupbox-body { background: bgItemDefault !important;\
        color: bgContainer !important;\
        border: 0 !important; }\
      /*#zotero-item-pane-content > groupbox { border: 0 !important; background: bgItemDefault !important;\
      color: bgContainer !important; }*/\
      #zotero-item-pane-content > groupbox > .groupbox-body { border: 0 !important; background: bgItemDefault !important;\
      color: bgContainer !important; }\
      /*change color of retraction details background*/\
      #retraction-details { background: bgItemDefault !important; }\
      /*tabs in Item pane*/\
      #zotero-item-pane-content tabpanel { background: bgItemDefault !important;\
      color: bgContainer !important; }\
      #zotero-item-pane-content tab[selected="true"]{ background: bgItemSelected !important;\
      border-top: 3px solid bgBorder !important;}\
      #zotero-item-pane-content tab{ -moz-appearance: none !important;\
      color: bgContainer !important;\
      background: bgItemDefault !important;\
      border-top: 0px solid bgBorder !important;\
      border-left: 0px solid bgBorder !important;\
      border-right: 1px solid bgBorder !important;\
      border-radius: 0px !important;\
      border-bottom-left-radius: 0px !important;\
      border-bottom-right-radius: 0px !important; }\
      #zotero-item-pane-content tab:hover{ color: bgContainer !important;\
      background: bgItemHover !important;\
      box-shadow: inset 0px 0px 0px !important;\
      border-radius: 0px 0px 0 0 !important; }\
      /*define color of item type field*/\
      #item-type-menu\
      {\
        -moz-appearance: none;\
        color: bgItemSelected !important;\
        height: 1.5em !important;\
        min-height: 1.5em !important;\
        padding: 0 0 0 2px !important;\
        margin: 1px 5px 0 1px !important;\
        max-height: 1.5em !important;\
        border: 1px solid transparent;\
        background-color: transparent;\
      }\
      /*define color of date-field-status*/\
      #zotero-date-field-status\
      {\
        color: bgItemSelected !important;\
        padding: 0 10px 0 1px !important;\
      }\
      /*preferences dialog*/\
      #zotero-prefpane-general, #zotero-prefpane-sync, #zotero-prefpane-export, #zotero-prefpane-advanced-keys-tab, #wordProcessors, #zotero-quickCopy-format, #sync-reset-form \
      { color: bgContainer !important;\
      background: bgBlank !important; }\
      #zotero-prefpane-general title { background: bgItemDefault !important;\
      color: bgContainer !important; }\
      prefwindow { color: bgContainer !important;\
      background: bgItemDefault !important; }\
      prefwindow .chromeclass-toolbar { color: bgContainer !important;\
      background: bgBlank !important; }\
      /*about dialog*/\
      #aboutcontent\
      {	background: bgItemDefault !important;\
        color: bgContainer !important;\
        padding: 10px; }\
      #version\
      {	color: bgContainer !important; }\
      /*advanced search dialog*/\
      #zotero-advanced-search-dialog #zotero-search-box-controls {	color: bgContainer !important;\
      background: bgItemDefault !important; }',
    };
    this.defaultThemes = [
      new Theme(
        "dark",
        {
          bgBlank: "#323234",
          bgContainer: "#FFFFFF",
          bgBorder: "#1d1d1d",
          bgItemDefault: "#474749",
          bgItemHover: "#BBCEF1",
          bgItemSelected: "#474749",
          bgPdf: "#9bbd85",
        },
        "win"
      ),
      new Theme(
        "default",
        {
          bgBlank: "",
          bgContainer: "",
          bgBorder: "",
          bgItemDefault: "",
          bgItemHover: "",
          bgItemSelected: "",
          bgPdf: "",
        },
        ""
      ),
    ];
    this.themeLocale = {
      en: {
        bgBlank: "Blank Background",
        bgContainer: "Container Background",
        bgBorder: "Border",
        bgItemDefault: "Item Default",
        bgItemHover: "Item Hover",
        bgItemSelected: "Item Selected",
        bgPdf: "PDF Background",
      },
      zh: {
        bgBlank: "空背景",
        bgContainer: "容器背景",
        bgBorder: "描边",
        bgItemDefault: "默认元素",
        bgItemHover: "聚焦元素",
        bgItemSelected: "选择元素",
        bgPdf: "PDF 背景颜色",
      },
    };
  }

  getCurrentTheme(): Theme {
    let currentTheme = Zotero.Prefs.get("ZoteroTheme.currentTheme");
    return Theme.load(currentTheme);
  }

  deleteTheme(name: string) {
    let themes: object = JSON.parse(Zotero.Prefs.get("ZoteroTheme.themes"));
    delete themes[name];
    Zotero.Prefs.set("ZoteroTheme.themes", JSON.stringify(themes));
    // Avoid empty
    if (Object.keys(themes).length == 0) {
      this.defaultThemes[0].save();
    }
  }

  getAllThemes(): Theme[] {
    let themes: object = JSON.parse(Zotero.Prefs.get("ZoteroTheme.themes"));
    let _themes: Theme[];
    for (let name in themes) {
      _themes.push(Theme.load(name, themes));
    }
    return _themes;
  }

  getThemeNames(): string[] {
    let themes: object = JSON.parse(Zotero.Prefs.get("ZoteroTheme.themes"));
    return Object.keys(themes);
  }

  getThemeSettingLocale(settingName: string): string {
    let language = Services.locale.getRequestedLocale().split("-")[0];
    if (!(language in this.themeLocale)) {
      language = "en";
    }
    let localeName = this.themeLocale[language][settingName];
    if (!localeName) {
      localeName = settingName;
    }
    return localeName;
  }

  isColor(settingValue: string): boolean {
    // 3 or 6 digits from 0-F, start with "#"
    return /^#([0-9a-f]{6}|[0-9a-f]{3})$/i.test(settingValue);
  }
}

export default AddonConfig;
