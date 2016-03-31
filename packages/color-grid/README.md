### Usage:
```less
@import '{color-grid}/color-grid.import.less';
.clr-grid {
  width: 300px; // must size the component yourself
  height: 300px;
  .color-grid(@size, @top-left, @top-right, @bottom-right, @bottom-left);
}
```
`@size`: an integer number of cells per side in the grid, and the rest of the arguments are colors for every corner.
