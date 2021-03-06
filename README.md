# SlickGrid - A lightning fast JavaScript grid/spreadsheet


## Welcome to SlickGrid

Find documentation and examples in [the original wiki](https://github.com/mleibman/SlickGrid/wiki) and [this clone's wiki](https://github.com/GerHobbelt/SlickGrid/wiki).
This is a fork of SlickGrid maintained by Ger Hobbelt / Visyond Inc. The new features that have been added / mixed in:

## This Fork's Features

* Cells spanning arbitrary numbers of rows and/or columns (colspan / rowspan)
* A footer row that mimics the behavior of the header row, with similar options and controls.
* Enhanced info feed to/from Formatters and Editors
* Formatters can now change/augment the cell's CSS classes (no more need for SPAN or DIV in cell plus fixup CSS to apply styling to *entire* cell)
* Indirect data addressing via DataView
* Formatters and Editors adapted for the above
* Internal and external Copy/Cut/Paste through the usual keyboard shortcuts
* Mouse & Touch support


## SlickGrid is an advanced JavaScript grid/spreadsheet component

Some highlights:

* Adaptive virtual scrolling (handle hundreds of thousands of rows with extreme responsiveness)
* Extremely fast rendering speed
* Supports jQuery UI Themes
* Background post-rendering for richer cells
* Configurable & customizable
* Full keyboard navigation
* Column resize/reorder/show/hide
* Column autosizing & force-fit
* Pluggable cell formatters & editors
* Support for editing and creating new rows.
* Grouping, filtering, custom aggregators, and more!
* Advanced detached & multi-field editors with undo/redo support.
* “GlobalEditorLock” to manage concurrent edits in cases where multiple Views on a page can edit the same data.
* Support for [millions of rows](http://stackoverflow.com/a/2569488/1269037)


## TODO

* extend the set of unit tests for DataView to help test grouping behaviour (which currently has bugs) and indirect access
* extend set of examples, including external keyboard driver (e.g. keymaster.js)
* enable Copy/Cut/Paste via externally triggered event or API call (so you can execute those commands from external controls)
* integrate the fixed-row/column work by JLynch7; that merge branch is currently botched
* unify Formatters and Editors' API in terms of info passed
* using jsperf and tests/*.html performance measurements to check current performance and possibly improve it
* update wiki with API changes re Formatters and Editors
* run script / tool to extract/update contributor/author list
