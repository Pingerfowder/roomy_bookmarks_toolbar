var roomybookmarkstoolbarOptions = {
	branch: null,
	showName: function() {
		if (document.getElementById('hideBookmarksNamePerf').checked) {
			document.getElementById('hideBookmarksIconsPerf').disabled = true;
		} else {
			document.getElementById('hideBookmarksIconsPerf').disabled = false;
		};
		if (document.getElementById('hideNoFaviconNamesPerf').checked ) {
			document.getElementById('hideDefaultIconsPerf').disabled = true;
		} else {
			document.getElementById('hideDefaultIconsPerf').disabled = false;
		};
		if (document.getElementById('hideFoldersNamesPerf').checked) {
			document.getElementById('hideFolderIconsPerf').disabled = true;
		} else {
			document.getElementById('hideFolderIconsPerf').disabled = false;
		};
	},

	location: function() {
		//If multirow is On, location don't work so:
		if (document.getElementById('multirowBarPerf').checked || document.getElementById('overPagePerf').checked) {
			document.getElementById('locationPerf').disabled = true;
			this.branch.setIntPref('location', 0);
		} else {
			document.getElementById('locationPerf').disabled = false;
		}
		document.getElementById('rowsPerf').disabled = !document.getElementById('multirowBarPerf').checked;
		document.getElementById('fixedHeightPerf').disabled = document.getElementById('rowsPerf').disabled;
		document.getElementById('heightFixPerf').disabled = !document.getElementById('multirowBarPerf').checked;
		//Set fixedHeight on 'false'
		if (document.getElementById('fixedHeightPerf').disabled) {document.getElementById('fixedHeightPerf').checked = false; }
	},

	autoHideBar: function() {
		if (document.getElementById('autoHideBarPerf').checked || document.getElementById('BBonNewTabPerf').checked) {
			document.getElementById('hideByDefaultPerf').checked = false;
			document.getElementById('hideByDefaultPerf').disabled = true;
			this.branch.setBoolPref('hideByDefaultPerf', false)
		} else {
			document.getElementById('hideByDefaultPerf').disabled = false;
		}
		
		if (document.getElementById('autoHideBarPerf').checked || document.getElementById('hideByDefaultPerf').checked) {
			document.getElementById('BBonNewTabPerf').checked = false;
			document.getElementById('BBonNewTabPerf').disabled = true;
			this.branch.setBoolPref('BBonNewTabPerf', false)
		} else {
			document.getElementById('BBonNewTabPerf').disabled = false;
		}
		
		if (document.getElementById('hideByDefaultPerf').checked || document.getElementById('BBonNewTabPerf').checked) {
			document.getElementById('autoHideBarPerf').checked = false;
			document.getElementById('autoHideBarPerf').disabled = true;
			this.branch.setBoolPref('autoHideBarPerf', false)
		} else {
			document.getElementById('autoHideBarPerf').disabled = false;
		}

		//If auto hade is Off, autoHideBarTime don't work so:
		document.getElementById('autoHideBarTimePerf').disabled = !document.getElementById('autoHideBarPerf').checked;
		document.getElementById('opacityTimePerf').disabled = !document.getElementById('opacityPerf').checked;
		document.getElementById('opacityTimeLongPerf').disabled = !document.getElementById('opacityPerf').checked;
		document.getElementById('autoHideZoneAllPerf').disabled = !document.getElementById('autoHideBarPerf').checked;
			if(this.branch.getBoolPref('bookmarksBarHided')) {
				document.getElementById('autoHideBarPerf').disabled = true;
				document.getElementById('autoHideBarDisabled').label = "Enable bookmarks bar in context menu(right-click on some browser element(like menu or menu button)) and restart browser";
			}
	},

	topOnPage: function() {
		document.getElementById('overPagePerf').disabled = document.getElementById('bookmarksAboveTabPerf').checked;
		document.getElementById('bookmarksAboveTabPerf').disabled = document.getElementById('overPagePerf').checked;
		if (document.getElementById('multirowBarPerf').checked || document.getElementById('overPagePerf').checked) {
			document.getElementById('locationPerf').disabled = true;
			this.branch.setIntPref('location', 0);
		} else {
			document.getElementById('locationPerf').disabled = false;
		}
	},

	userWidth: function() {
		document.getElementById('userWidthPerf').disabled = !document.getElementById('userWidthEnabledPerf').checked;
	},

	autoHideZone: function() {
		document.getElementById('autoHideZoneTabPerf').disabled = document.getElementById('autoHideZoneAllPerf').disabled;
		document.getElementById('autoHideZoneNavPerf').disabled = document.getElementById('autoHideZoneAllPerf').disabled;
		document.getElementById('autoHideZoneMenuPerf').disabled = document.getElementById('autoHideZoneAllPerf').disabled;
		document.getElementById('autoHideZoneButtonPerf').disabled = document.getElementById('autoHideZoneAllPerf').disabled;
		document.getElementById('autoHideZoneBackButtonPerf').disabled = document.getElementById('autoHideZoneAllPerf').disabled;
		document.getElementById('autoHideZoneMenuButtonPerf').disabled = document.getElementById('autoHideZoneAllPerf').disabled;
		if(document.getElementById('autoHideZoneAllPerf').checked) {
			document.getElementById('autoHideZoneTabPerf').disabled = document.getElementById('autoHideZoneAllPerf').checked;
			document.getElementById('autoHideZoneNavPerf').disabled = document.getElementById('autoHideZoneAllPerf').checked;
			document.getElementById('autoHideZoneMenuPerf').disabled = document.getElementById('autoHideZoneAllPerf').checked;
			document.getElementById('autoHideZoneButtonPerf').disabled = document.getElementById('autoHideZoneAllPerf').checked;
			document.getElementById('autoHideZoneBackButtonPerf').disabled = document.getElementById('autoHideZoneAllPerf').checked;
			document.getElementById('autoHideZoneMenuButtonPerf').disabled = document.getElementById('autoHideZoneAllPerf').checked;
		}
	},

	OSFix: function() {
		if (Components.classes['@mozilla.org/xre/app-info;1'].getService(Components.interfaces.nsIXULRuntime).OS == 'Linux') {
			document.getElementById('disableLinuxFixPerf').disabled = false;
			document.getElementById('folderArrowPerf').disabled = false;
		};
		if (Components.classes['@mozilla.org/xre/app-info;1'].getService(Components.interfaces.nsIXULRuntime).OS == 'Darwin') {
			document.getElementById('disableLinuxFixPerf').disabled = false;
			document.getElementById('folderArrowPerf').disabled = false;
		};
	},

	support: function() {
		openDialog("chrome://roomybookmarkstoolbar/content/supportDialog.xul","","chrome,centerscreen");
	},

	data: function() {
		var thisPrefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefService);
		this.branch = thisPrefs.getBranch('extensions.roomybookmarkstoolbar.');
		var userVersion = navigator.userAgent;
		var mousehover = this.branch.getBoolPref('mousehover');
		var hideFoldersNames = this.branch.getBoolPref('hideFoldersNames');
		var hideNoFaviconNames = this.branch.getBoolPref('hideNoFaviconNames');
		var hideFolderIcons = this.branch.getBoolPref('hideFolderIcons');
		var hideDefaultIcons = this.branch.getBoolPref('hideDefaultIcons');
		var hideBookmarksName = this.branch.getBoolPref('hideBookmarksName');
		var hideBookmarksIcons = this.branch.getBoolPref('hideBookmarksIcons');
		var disableLinuxFix = this.branch.getBoolPref('disableLinuxFix');
		var overPage = this.branch.getBoolPref('overPage');
		var bookmarksAboveTab = this.branch.getBoolPref('bookmarksAboveTab');
		var spacing = this.branch.getIntPref('spacing');
		var location = this.branch.getIntPref('location');
		var rows = this.branch.getIntPref('rows');
		var iconSize = this.branch.getIntPref('iconSize');
		var autoHideBarTime = this.branch.getIntPref('autoHideBarTime');
		var opacityTime = this.branch.getIntPref('opacityTime');
		var autoHideBar = this.branch.getBoolPref('autoHideBar');
		var opacity = this.branch.getBoolPref('opacity');
		var multirowBar = this.branch.getBoolPref('multirowBar');
		var fixedHeight = this.branch.getBoolPref('fixedHeight');
		var DBcreatedSt = this.branch.getBoolPref('DBcreated');
		var opacityTimeLong = this.branch.getIntPref('opacityTimeLong');
		var height = this.branch.getIntPref('height');
		var hideByDefault = this.branch.getBoolPref('hideByDefault');
		var BBonNewTab = this.branch.getBoolPref('BBonNewTab');
		var autoHideZoneTab = this.branch.getBoolPref('autoHideZoneTab');
		var autoHideZoneNav = this.branch.getBoolPref('autoHideZoneNav');
		var autoHideZoneMenu = this.branch.getBoolPref('autoHideZoneMenu');
		var autoHideZoneAll = this.branch.getBoolPref('autoHideZoneAll');
		var folderMargin = this.branch.getIntPref('folderMargin');
		var userWidthEnabled = this.branch.getBoolPref('userWidthEnabled');
		var userWidth = this.branch.getIntPref('userWidth');
		var autoHideZoneButton = this.branch.getBoolPref('autoHideZoneButton');
		var hideByDefault = this.branch.getBoolPref('hideByDefault');
		var textSize = this.branch.getIntPref('textSize');
		var showBookmarksNames = this.branch.getBoolPref('showBookmarksNames');
		var folderArrow = this.branch.getBoolPref('folderArrow');
		var bookmarksBarHided = this.branch.getBoolPref('bookmarksBarHided');

		var datatext = document.getElementById('info');

		datatext.value = 'Ver: '+userVersion+' \r';
		datatext.value += 'mousehover: '+mousehover+' \r';
		datatext.value += 'hideBookmarksName: '+hideBookmarksName+' \r';
		datatext.value += 'hideFoldersNames: '+hideFoldersNames+' \r';
		datatext.value += 'hideNoFaviconNames: '+hideNoFaviconNames+' \r';
		datatext.value += 'hideFolderIcons: '+hideFolderIcons+' \r';
		datatext.value += 'hideDefaultIcons: '+hideDefaultIcons+' \r';
		datatext.value += 'hideBookmarksIcons: '+hideBookmarksIcons+' \r';
		datatext.value += 'showBookmarksNames: '+showBookmarksNames+' \r';
		datatext.value += 'folderArrow: '+folderArrow+' \r';
		datatext.value += 'hideByDefault: '+hideByDefault+' \r'+' \r';
		datatext.value += 'folderMargin: '+folderMargin+' \r';
		datatext.value += 'overPage: '+overPage+' \r';
		datatext.value += 'bookmarksAboveTab: '+bookmarksAboveTab+' \r';
		datatext.value += 'spacing: '+spacing+' \r';
		datatext.value += 'location: '+location+' \r';
		datatext.value += 'rows: '+rows+' \r';
		datatext.value += 'iconSize: '+iconSize+' \r'+' \r';
		datatext.value += 'BBonNewTab: '+BBonNewTab+' \r';
		datatext.value += 'hideByDefault: '+hideByDefault+' \r';
		datatext.value += 'autoHideBar: '+autoHideBar+' \r';
		datatext.value += 'autoHideBarTime: '+autoHideBarTime+' \r';
		datatext.value += 'autoHideZoneAll: '+autoHideZoneAll+' \r';
		datatext.value += 'autoHideZoneTab: '+autoHideZoneTab+' \r';
		datatext.value += 'autoHideZoneNav: '+autoHideZoneNav+' \r';
		datatext.value += 'autoHideZoneMenu: '+autoHideZoneMenu+' \r';
		datatext.value += 'autoHideZoneButton: '+autoHideZoneButton+' \r';
		datatext.value += 'opacity: '+opacity+' \r';
		datatext.value += 'opacityTime: '+opacityTime+' \r';
		datatext.value += 'opacityTimeLong: '+opacityTimeLong+' \r'+' \r';
		datatext.value += 'textSize: '+textSize+' \r';
		datatext.value += 'userWidthEnabled: '+userWidthEnabled+' \r';
		datatext.value += 'userWidth: '+userWidth+' \r';
		datatext.value += 'multirowBar: '+multirowBar+' \r';
		datatext.value += 'fixedHeight: '+fixedHeight+' \r';
		datatext.value += 'height: '+height+' \r'+' \r';

		datatext.value += 'disableLinuxFix: '+disableLinuxFix+' \r';
		datatext.value += 'bookmarksBarHided: '+bookmarksBarHided+' \r';
		datatext.value += 'DBcreated: '+DBcreatedSt+' \r';
	},

	onLoad: function() {
		var thisPrefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefService);
		this.branch = thisPrefs.getBranch('extensions.roomybookmarkstoolbar.');
		this.showName();
		this.location();
		this.autoHideBar();
		this.topOnPage();
		this.userWidth();
		this.autoHideZone();
		this.OSFix();
		this.location();
	},
};