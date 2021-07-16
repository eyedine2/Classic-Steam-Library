# Classic-Steam-Library
Returns the Steam library to it's 2010-era look with CSS tweaks instead of reverting it

This is intended to be used alongside the [Steam 2013](https://gamebanana.com/mods/23804) skin on gamebanana. This skin covers the library, that mod covers the remaining VGUI elements in Steam. You should probably also use my very own [2010 inspired Steam Friends](https://gamebanana.com/mods/291147) mod for the full experience, but that's kinda crap and I need to update it!

Like all mods for the new library, this requires [SteamFriendsPatcher](https://github.com/PhantomGamers/SteamFriendsPatcher) to work, get it here! But wait, that's not it!

You also need to install [steamoldglory](https://github.com/Jonius7/SteamUI-OldGlory) and follow these specific steps to make some of the most important features of this skin work.

Included with my libraryroot.custom.css file (that goes in steamui) is a custom fixes.txt file for steamoldglory that includes only the necessary javascript tweaks, one of which has been modified.

place the fixes.txt file in steamoldglory's root folder. It should replace the already existing fixes.txt file. Start steamoldglory, head to the javascript tweaks section, and make sure there are only two tweaks and they are both checked. Then click the settings icon (which looks like a cog) and click remake JS. 

If all goes well, the skin should be successfully installed with hopefully few issues!
