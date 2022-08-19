=== Steps for creating adding icons to the font

1. clone https://github.com/percolatestudio/percolate-icons
2. visit https://icomoon.io/app
3. choose “import icons” and then select
   `percolate-icons/VERSION/selection.json` to import
4. add new svg icons!
5. choose “generate font” bottom right
6. place output in /VERSION/
7. replace edited-style.less with /VERSION/style.css and update the font urls to
   be prefixed with /packages/percolate-icons/VERSION/
8. update `Version` in `package.js` with the new version
